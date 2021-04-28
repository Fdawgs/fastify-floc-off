# fastify-floc-off

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/fastify-floc-off.svg)](https://github.com/Fdawgs/fastify-floc-off/releases/latest/)
[![npm version](https://img.shields.io/npm/v/fastify-floc-off)](https://www.npmjs.com/package/fastify-floc-off)
![Build Status](https://github.com/Fdawgs/fastify-floc-off/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/fastify-floc-off/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/fastify-floc-off?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/fastify-floc-off/badge.svg)](https://snyk.io/test/github/Fdawgs/fastify-floc-off)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Fastify plugin to opt out of Google's FLoC advertising-surveillance network

## Intro

The `fastify-floc-off` plugin sets the following response header and values to opt out of Google's FLoC advertising-surveillance network:

```
Permissions-Policy: interest-cohort=()
```

You can read more about the issues surrounding Google's FLoC [on EFF](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea) and [Plausible Analytics](https://plausible.io/blog/google-floc).

[Helmet](https://github.com/helmetjs/helmet) (and in turn [fastify-helmet](https://github.com/fastify/fastify-helmet)) does not currently support `Permissions-Policy` response header setting yet, so this plugin was created out of a need for an easy way to disable/opt out of Google's FLoC network for systems at [Yeovil District Hospital NHS Foundation Trust](https://yeovilhospital.co.uk/). This ensures both patients and staff accessing web applications at the hospital are not subject to Google's unsolicited tracking.

## Installation

Install using [`npm`](https://www.npmjs.com/package/fastify-floc-off):

```bash
npm install fastify-floc-off
```

Or [`yarn`](https://yarnpkg.com/en/package/fastify-floc-off):

```bash
yarn add fastify-floc-off
```

fastify-floc-off's test scripts use npm commands.

## Example Usage

```js
const Fastify = require("fastify");
const flocOff = require("fastify-floc-off");

const server = Fastify();
server.register(flocOff);

server.get("/", (req, res) => {
	res.send("ok");
});

server.listen(3000);
```

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details regarding contributing to this project.

## License

`fastify-floc-off` is licensed under the [MIT](./LICENSE) license.
