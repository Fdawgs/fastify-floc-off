const Fastify = require("fastify");
const plugin = require(".");

describe("Floc-Off Plugin", () => {
	describe("Response Headers", () => {
		let server;

		beforeAll(async () => {
			server = Fastify();
			server.register(plugin);

			server.get("/", (req, res) => {
				res.send("ok");
			});

			await server.ready();
		});

		afterAll(async () => {
			await server.close();
		});

		test("Should set relevant response headers", async () => {
			const response = await server.inject({
				method: "GET",
				url: "/",
			});

			expect(response.statusCode).toEqual(200);
			expect(response.headers).toEqual(
				expect.objectContaining({
					"permissions-policy": "interest-cohort=()",
				})
			);
			expect(response.payload).toEqual("ok");
		});
	});
});
