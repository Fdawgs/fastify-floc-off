"use strict";

const Fastify = require("fastify");
const plugin = require(".");

describe("Floc-Off plugin", () => {
	describe("Response headers", () => {
		let server;

		beforeAll(async () => {
			server = Fastify({ pluginTimeout: 0 });
			server
				.register(async (existingHeaderContext) => {
					existingHeaderContext
						.addHook("onRequest", async (req, res) => {
							res.header("Permissions-Policy", "camera=()");
						})
						.register(plugin)
						.get("/exist", (req, res) => {
							res.send("ok");
						});
				})
				.register(async (existingHeaderArrayContext) => {
					existingHeaderArrayContext
						.addHook("onRequest", async (req, res) => {
							res.header("Permissions-Policy", [
								"camera=()",
								"microphone=()",
							]);
						})
						.register(plugin)
						.get("/existarray", (req, res) => {
							res.send("ok");
						});
				})
				.register(async (noExistingHeaderContext) => {
					noExistingHeaderContext
						.register(plugin)
						.get("/noexist", (req, res) => {
							res.send("ok");
						});
				});

			await server.ready();
		});

		afterAll(async () => {
			await server.close();
		});

		it("Adds to an existing Permissions-Policy header", async () => {
			const response = await server.inject({
				method: "GET",
				url: "/exist",
			});

			expect(response.body).toBe("ok");
			expect(response.headers).toMatchObject({
				"permissions-policy": "camera=(), interest-cohort=()",
			});
			expect(response.statusCode).toBe(200);
		});

		it("Adds a new Permissions-Policy header to existing array", async () => {
			const response = await server.inject({
				method: "GET",
				url: "/existarray",
			});

			expect(response.body).toBe("ok");
			expect(response.headers).toMatchObject({
				"permissions-policy": [
					"camera=()",
					"microphone=()",
					"interest-cohort=()",
				],
			});
			expect(response.statusCode).toBe(200);
		});

		it("Sets Permissions-Policy header if not found", async () => {
			const response = await server.inject({
				method: "GET",
				url: "/noexist",
			});

			expect(response.body).toBe("ok");
			expect(response.headers).toMatchObject({
				"permissions-policy": "interest-cohort=()",
			});
			expect(response.statusCode).toBe(200);
		});
	});
});
