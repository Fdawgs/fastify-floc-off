"use strict";

const fp = require("fastify-plugin");

const DIRECTIVE = "interest-cohort=()";

/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to opt out of Google's FLoC
 * advertising-surveillance network by setting/adding the "interest-cohort=()" directive
 * to the Permissions-Policy response header.
 * @type {import("fastify").FastifyPluginCallback}
 */
function fastifyFlocOff(server, _opts, done) {
	server.addHook(
		"onRequest",
		function setFlocPermissionsHeader(_req, res, next) {
			const header = res.getHeader("Permissions-Policy");

			if (Array.isArray(header)) {
				if (!header.some((item) => item.includes(DIRECTIVE))) {
					header.push(DIRECTIVE);
					res.header("Permissions-Policy", header);
				}
			} else if (typeof header === "string") {
				if (!header.includes(DIRECTIVE)) {
					res.header("Permissions-Policy", `${header}, ${DIRECTIVE}`);
				}
			} else {
				// No header exists yet
				res.header("Permissions-Policy", DIRECTIVE);
			}
			next();
		}
	);
	done();
}

module.exports = fp(fastifyFlocOff, {
	fastify: "5.x",
	name: "fastify-floc-off",
}); // CommonJS export
module.exports.default = fastifyFlocOff; // ESM default export
module.exports.fastifyFlocOff = fastifyFlocOff; // TypeScript and named export
