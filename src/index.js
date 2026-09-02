"use strict";

const fp = require("fastify-plugin");

const HEADER = "permissions-policy";
const DIRECTIVE = "interest-cohort=()";
// Cache immutable regex as they are expensive to create and garbage collect
// Use case-insensitive match without allocating new strings like `String.toLowerCase()` would do
const DIRECTIVE_REG = /(?:^|[, \t])interest-cohort=\([ \t]*\)(?:[;, \t]|$)/iu;
// Whitespace-only values are empty per HTTP OWS; appending to them makes the header unparsable
const BLANK_REG = /^[ \t]*$/u;

/**
 * @author Frazer Smith
 * @description Sets/adds the 'interest-cohort=()' directive to the
 * Permissions-Policy response header.
 * @type {import("fastify").onRequestHookHandler}
 */
function setFlocPermissionsHeader(_req, res, done) {
	const existing = res.getHeader(HEADER);

	if (typeof existing === "string" && !BLANK_REG.test(existing)) {
		if (!DIRECTIVE_REG.test(existing)) {
			res.header(HEADER, `${existing}, ${DIRECTIVE}`);
		}
	} else if (Array.isArray(existing)) {
		if (!existing.some((value) => DIRECTIVE_REG.test(value))) {
			const values = existing.filter((value) => !BLANK_REG.test(value));
			values.push(DIRECTIVE);
			res.header(HEADER, values);
		}
	} else {
		// Missing, blank, or unexpected header type, so set it to the directive
		res.header(HEADER, DIRECTIVE);
	}
	done();
}

/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to opt out of Google's FLoC
 * advertising-surveillance network by setting/adding the 'interest-cohort=()' directive
 * to the Permissions-Policy response header.
 * @type {import("fastify").FastifyPluginCallback}
 */
function fastifyFlocOff(server, _options, done) {
	server.addHook("onRequest", setFlocPermissionsHeader);
	done();
}

module.exports = fp(fastifyFlocOff, {
	fastify: "5.x",
	name: "fastify-floc-off",
}); // CommonJS export
module.exports.default = fastifyFlocOff; // ESM default export
module.exports.fastifyFlocOff = fastifyFlocOff; // TypeScript and named export
