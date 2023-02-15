import type { FastifyPluginAsync } from "fastify";

declare namespace fastifyFlocOff {
	export const fastifyFlocOff: FastifyPluginAsync;
	export { fastifyFlocOff as default };
}

declare function fastifyFlocOff(
	...params: Parameters<FastifyPluginAsync>
): ReturnType<FastifyPluginAsync>;
export = fastifyFlocOff;
