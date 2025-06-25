"use strict";

// eslint-disable-next-line n/no-unsupported-features/node-builtins -- Tests, not in distributed code
const { after, before, describe, it } = require("node:test");
const Fastify = require("fastify");
const plugin = require(".");

describe("Floc-Off plugin", () => {
	describe("Response headers", () => {
		/** @type {Fastify.FastifyInstance} */
		let server;

		before(async () => {
			server = Fastify({ pluginTimeout: 0 });
			server
				.register(async (existingHeaderContext) => {
					existingHeaderContext
						.addHook("onRequest", async (_req, res) => {
							res.header("Permissions-Policy", "camera=()");
						})
						.register(plugin)
						.get("/exist", (_req, res) => {
							res.send("ok");
						});
				})
				.register(async (existingHeaderArrayContext) => {
					existingHeaderArrayContext
						.addHook("onRequest", async (_req, res) => {
							res.header("Permissions-Policy", [
								"camera=()",
								"microphone=()",
							]);
						})
						.register(plugin)
						.get("/existarray", (_req, res) => {
							res.send("ok");
						});
				})
				.register(async (noExistingHeaderContext) => {
					noExistingHeaderContext
						.register(plugin)
						.get("/noexist", (_req, res) => {
							res.send("ok");
						});
				});

			await server.ready();
		});

		after(async () => server.close());

		it("Adds to an existing Permissions-Policy header", async (t) => {
			const response = await server.inject({
				method: "GET",
				url: "/exist",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.strictEqual(
				response.headers["permissions-policy"],
				"camera=(), interest-cohort=()"
			);
			t.assert.strictEqual(response.statusCode, 200);
		});

		it("Adds a new Permissions-Policy header to existing array", async (t) => {
			const response = await server.inject({
				method: "GET",
				url: "/existarray",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.deepStrictEqual(response.headers["permissions-policy"], [
				"camera=()",
				"microphone=()",
				"interest-cohort=()",
			]);
			t.assert.strictEqual(response.statusCode, 200);
		});

		it("Sets Permissions-Policy header if not found", async (t) => {
			const response = await server.inject({
				method: "GET",
				url: "/noexist",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.strictEqual(
				response.headers["permissions-policy"],
				"interest-cohort=()"
			);
			t.assert.strictEqual(response.statusCode, 200);
		});
	});
});
