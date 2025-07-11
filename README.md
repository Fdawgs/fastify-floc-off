# fastify-floc-off

[![GitHub release](https://img.shields.io/github/release/Fdawgs/fastify-floc-off.svg)](https://github.com/Fdawgs/fastify-floc-off/releases/latest/)
[![npm version](https://img.shields.io/npm/v/fastify-floc-off)](https://npmjs.com/package/fastify-floc-off)
[![CI](https://github.com/Fdawgs/fastify-floc-off/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/fastify-floc-off/actions/workflows/ci.yml)
[![Coverage status](https://coveralls.io/repos/github/Fdawgs/fastify-floc-off/badge.svg?branch=main)](https://coveralls.io/github/Fdawgs/fastify-floc-off?branch=main)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Fastify plugin to opt-out of Google's Topics advertising-surveillance API

## Overview

The `fastify-floc-off` plugin adds the "interest-cohort=()" directive to the `Permissions-Policy` response header to opt-out of Google's Topics advertising-surveillance API. It will create a new header if one does not already exist.

This was originally created to opt-out of Google's FLoC (Federated Learning of Cohorts), which has since been replaced with their [Topics API](https://github.com/patcg-individual-drafts/topics), though it has the same privacy issues.

More information about the issues surrounding Google's FLoC can be found on [EFF](https://eff.org/deeplinks/2021/03/googles-floc-terrible-idea) and [Plausible Analytics](https://plausible.io/blog/google-floc).

[Helmet](https://github.com/helmetjs/helmet) and [fastify-helmet](https://github.com/fastify/fastify-helmet) do not support the `Permissions-Policy` response header setting yet, so this plugin was created out of a need for an easy way to disable/opt-out of Google's Topics API. This ensures users accessing web applications are not subject to Google's unsolicited tracking.

## Installation

Install using `npm`:

```bash
npm i fastify-floc-off
```

### Compatibility

| Plugin version | Fastify version |
| -------------- | --------------- |
| `>=3.x`        | `^5.x`          |
| `>=2.x <3.x`   | `^4.x`          |
| `>=1.x <2.x`   | `^3.x`          |

Please note that if a Fastify version is out of support, then so are the corresponding versions of this plugin
in the table above.
See [Fastify's LTS policy](https://github.com/fastify/fastify/blob/main/docs/Reference/LTS.md) for more details.

## Example usage

```js
const Fastify = require("fastify");
const flocOff = require("fastify-floc-off");

const server = Fastify();
server.register(flocOff);

server.get("/", (_req, res) => {
	res.send("ok");
});

server.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on 3000");
});
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](https://github.com/Fdawgs/.github/blob/main/CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](https://github.com/Fdawgs/.github/blob/main/CODE_OF_CONDUCT.md) when contributing.

## Acknowledgements

- [**Aras Abbasi**](https://github.com/uzlopak) - TypeScript support

## License

`fastify-floc-off` is licensed under the [MIT](./LICENSE) license.
