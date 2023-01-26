const fp = require("fastify-plugin");
/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to opt out of Google's FLoC
 * advertising-surveillance network by setting/adding the "interest-cohort=()" directive
 * to the Permissions-Policy response header.
 * @param {object} server - Fastify instance.
 */
async function plugin(server) {
	server.addHook("onRequest", async (req, res) => {
		const header = res.getHeader("Permissions-Policy");

		// Header can be returned as array: https://nodejs.org/docs/latest/api/http.html#requestsetheadername-value
		if (Array.isArray(header)) {
			header.push("interest-cohort=()");
			res.header("Permissions-Policy", header);
			return;
		}

		if (!header) {
			res.header("Permissions-Policy", "interest-cohort=()");
		} else {
			res.header("Permissions-Policy", `${header}, interest-cohort=()`);
		}
	});
}

module.exports = fp(plugin, { fastify: "4.x", name: "fastify-floc-off" });
