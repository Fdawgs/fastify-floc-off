# fastify-floc-off

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/fastify-floc-off.svg)](https://github.com/Fdawgs/fastify-floc-off/releases/latest/)
[![npm version](https://img.shields.io/npm/v/fastify-floc-off)](https://npmjs.com/package/fastify-floc-off)
![Build Status](https://github.com/Fdawgs/fastify-floc-off/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/fastify-floc-off/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/fastify-floc-off?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Fastify plugin to opt-out of Google's FLoC advertising-surveillance network

## Overview

The `fastify-floc-off` plugin adds the "interest-cohort=()" directive to the `Permissions-Policy` response header to opt-out of Google's FLoC advertising-surveillance network. It will create a new header if one does not already exist.

You can read more about the issues surrounding Google's FLoC [on EFF](https://eff.org/deeplinks/2021/03/googles-floc-terrible-idea) and [Plausible Analytics](https://plausible.io/blog/google-floc).

[Helmet](https://github.com/helmetjs/helmet) and [fastify-helmet](https://github.com/fastify/fastify-helmet) do not support the `Permissions-Policy` response header setting yet, so this plugin was created out of a need for an easy way to disable/opt-out of Google's FLoC network for. This ensures users accessing web applications are not subject to Google's unsolicited tracking.

## Installation

Install using `npm`:

```bash
npm i fastify-floc-off
```

For Fastify v3.x support, use `fastify-floc-off@1.0.7`.

## Example Usage

```js
const Fastify = require("fastify");
const flocOff = require("fastify-floc-off");

const server = Fastify();
server.register(flocOff);

server.get("/", (req, res) => {
	res.send("ok");
});

await server.listen({ port: 3000 });
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](./CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing.

## License

`fastify-floc-off` is licensed under the [MIT](./LICENSE) license.
