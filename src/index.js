"use strict";

const fp = require("fastify-plugin");

/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to opt out of Google's FLoC
 * advertising-surveillance network by setting/adding the "interest-cohort=()" directive
 * to the Permissions-Policy response header.
 * @param {import("fastify").FastifyInstance} server - Fastify instance.
 */
async function fastifyFlocOff(server) {
	server.addHook(
		"onRequest",
		async function setFlocPermissionsHeader(_req, res) {
			const header = res.getHeader("Permissions-Policy");

			if (Array.isArray(header)) {
				header.push("interest-cohort=()");
				res.header("Permissions-Policy", header);
			} else {
				res.header(
					"Permissions-Policy",
					header
						? `${header}, interest-cohort=()`
						: "interest-cohort=()"
				);
			}
		}
	);
}

module.exports = fp(fastifyFlocOff, {
	fastify: "5.x",
	name: "fastify-floc-off",
}); // CommonJS export
module.exports.default = fastifyFlocOff; // ESM default export
module.exports.fastifyFlocOff = fastifyFlocOff; // TypeScript and named export
