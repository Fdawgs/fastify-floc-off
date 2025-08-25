import type { FastifyPluginCallback } from "fastify";

declare namespace fastifyFlocOff {
	export const fastifyFlocOff: FastifyPluginCallback;
	export { fastifyFlocOff as default };
}

declare function fastifyFlocOff(
	...params: Parameters<FastifyPluginCallback>
): ReturnType<FastifyPluginCallback>;
export = fastifyFlocOff;
