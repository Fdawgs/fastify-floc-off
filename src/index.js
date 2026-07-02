"use strict";

const fp = require("fastify-plugin");

const HEADER = "permissions-policy";
const DIRECTIVE = "interest-cohort=()";
// Cache immutable regex as they are expensive to create and garbage collect
// Use case-insensitive match without allocating new strings like `String.toLowerCase()` would do
const DIRECTIVE_REG = /interest-cohort=\(\)/iu;

/**
 * @author Frazer Smith
 * @description Sets/adds the "interest-cohort=()" directive to the
 * Permissions-Policy response header.
 * @type {import("fastify").onRequestHookHandler}
 */
function setFlocPermissionsHeader(_req, res, done) {
	const existing = res.getHeader(HEADER);

	if (existing === undefined) {
		// No header exists yet (most common case, so check this first)
		res.header(HEADER, DIRECTIVE);
	} else if (typeof existing === "string") {
		if (!DIRECTIVE_REG.test(existing)) {
			res.header(HEADER, `${existing}, ${DIRECTIVE}`);
		}
	} else if (Array.isArray(existing)) {
		let found = false;
		const existingLength = existing.length;
		for (let i = 0; i < existingLength; i += 1) {
			if (DIRECTIVE_REG.test(existing[i])) {
				found = true;
				break;
			}
		}
		if (!found) {
			existing.push(DIRECTIVE);
			res.header(HEADER, existing);
		}
	} else {
		// Unexpected header type, so overwrite it with the directive
		res.header(HEADER, DIRECTIVE);
	}
	done();
}

/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to opt out of Google's FLoC
 * advertising-surveillance network by setting/adding the "interest-cohort=()" directive
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
