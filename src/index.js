const fp = require("fastify-plugin");
/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to opt out of Google's FLoC
 * advertising-surveillance network by setting the relevant response headers.
 * @param {object} server - Fastify instance.
 */
async function plugin(server) {
	server.addHook("onRequest", async (req, res) => {
		res.header("Permissions-Policy", "interest-cohort=()");
	});
}

module.exports = fp(plugin, { fastify: "4.x", name: "fastify-floc-off" });
