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

			expect(response.payload).toBe("ok");
			expect(response.headers).toMatchObject({
				"permissions-policy": "interest-cohort=()",
			});
			expect(response.statusCode).toBe(200);
		});
	});
});
