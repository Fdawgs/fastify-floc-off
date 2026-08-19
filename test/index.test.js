"use strict";

// eslint-disable-next-line n/no-unsupported-features/node-builtins -- Tests, not in distributed code
const { after, before, describe, it } = require("node:test");
const Fastify = require("fastify");
const plugin = require("../src");

/** @typedef {import('node:test').TestContext} TestContext */

describe("Floc-Off plugin", () => {
	describe("Response headers", () => {
		/** @type {Fastify.FastifyInstance} */
		let server;

		before(async () => {
			server = Fastify();
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
				.register(async (existingDirectiveStringContext) => {
					existingDirectiveStringContext
						.addHook("onRequest", async (_req, res) => {
							res.header(
								"Permissions-Policy",
								"interest-cohort=()"
							);
						})
						.register(plugin)
						.get("/existdirective", (_req, res) => {
							res.send("ok");
						});
				})
				.register(async (existingDirectiveArrayContext) => {
					existingDirectiveArrayContext
						.addHook("onRequest", async (_req, res) => {
							res.header("Permissions-Policy", [
								"camera=()",
								"interest-cohort=()",
							]);
						})
						.register(plugin)
						.get("/existdirectivearray", (_req, res) => {
							res.send("ok");
						});
				})
				.register(async (existingHeaderNumberContext) => {
					existingHeaderNumberContext
						.addHook("onRequest", async (_req, res) => {
							res.header("Permissions-Policy", 123);
						})
						.register(plugin)
						.get("/existnumber", (_req, res) => {
							res.send("ok");
						});
				})
				.register(async (emptyHeaderContext) => {
					emptyHeaderContext
						.addHook("onRequest", async (_req, res) => {
							// Mirrors `res.header(key)`, which defaults value to ""
							res.header("Permissions-Policy", "");
						})
						.register(plugin)
						.get("/existempty", (_req, res) => {
							res.send("ok");
						});
				})
				.register(async (collidingDirectiveContext) => {
					collidingDirectiveContext
						.addHook("onRequest", async (_req, res) => {
							res.header(
								"Permissions-Policy",
								"my-interest-cohort=()"
							);
						})
						.register(plugin)
						.get("/existcollide", (_req, res) => {
							res.send("ok");
						});
				})
				.register(async (spacedDirectiveContext) => {
					spacedDirectiveContext
						.addHook("onRequest", async (_req, res) => {
							res.header(
								"Permissions-Policy",
								"interest-cohort=( )"
							);
						})
						.register(plugin)
						.get("/existspaced", (_req, res) => {
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

		it("Adds to an existing Permissions-Policy header (string)", async (/** @type {TestContext} */ t) => {
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

		it("Adds to an existing Permissions-Policy header (array)", async (/** @type {TestContext} */ t) => {
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

		it("Does not duplicate interest-cohort directive if already present (string)", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/existdirective",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.strictEqual(
				response.headers["permissions-policy"],
				"interest-cohort=()"
			);
			t.assert.strictEqual(response.statusCode, 200);
		});

		it("Does not duplicate interest-cohort directive if already present (array)", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/existdirectivearray",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.deepStrictEqual(response.headers["permissions-policy"], [
				"camera=()",
				"interest-cohort=()",
			]);
			t.assert.strictEqual(response.statusCode, 200);
		});

		it("Sets Permissions-Policy header if not found", async (/** @type {TestContext} */ t) => {
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

		it("Replaces an empty Permissions-Policy header value", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/existempty",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.strictEqual(
				response.headers["permissions-policy"],
				"interest-cohort=()"
			);
			t.assert.strictEqual(response.statusCode, 200);
		});

		it("Does not treat a directive with a matching suffix as the directive", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/existcollide",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.strictEqual(
				response.headers["permissions-policy"],
				"my-interest-cohort=(), interest-cohort=()"
			);
			t.assert.strictEqual(response.statusCode, 200);
		});

		it("Does not duplicate a spaced interest-cohort directive", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/existspaced",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.strictEqual(
				response.headers["permissions-policy"],
				"interest-cohort=( )"
			);
			t.assert.strictEqual(response.statusCode, 200);
		});

		it("Overwrites unexpected Permissions-Policy header type (number)", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/existnumber",
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
