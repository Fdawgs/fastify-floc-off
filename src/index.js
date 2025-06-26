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

			/**
			 * Headers can be returned as an array.
			 * @see {@link https://nodejs.org/docs/latest/api/http.html#requestsetheadername-value | Node.js HTTP API}
			 */
			if (Array.isArray(header)) {
				header.push("interest-cohort=()");
				res.header("Permissions-Policy", header);
				return;
			}

			if (header) {
				res.header(
					"Permissions-Policy",
					`${header}, interest-cohort=()`
				);
			} else {
				res.header("Permissions-Policy", "interest-cohort=()");
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
