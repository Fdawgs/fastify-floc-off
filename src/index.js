"use strict";

const fp = require("fastify-plugin");

const HEADER = "permissions-policy";
const DIRECTIVE = "interest-cohort=()";

/**
 * @author Frazer Smith
 * @description Sets/adds the "interest-cohort=()" directive to the
 * Permissions-Policy response header.
 * @type {import("fastify").onRequestHookHandler}
 */
function setFlocPermissionsHeader(_req, res, done) {
	const existing = res.getHeader(HEADER);

	if (Array.isArray(existing)) {
		let found = false;
		for (let i = 0; i < existing.length; i += 1) {
			if (existing[i].includes(DIRECTIVE)) {
				found = true;
				break;
			}
		}
		if (!found) {
			existing.push(DIRECTIVE);
			res.header(HEADER, existing);
		}
	} else if (typeof existing === "string") {
		if (!existing.includes(DIRECTIVE)) {
			res.header(HEADER, `${existing}, ${DIRECTIVE}`);
		}
	} else {
		// No header exists yet
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
