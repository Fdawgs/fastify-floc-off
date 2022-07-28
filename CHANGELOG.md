# Changelog

## [2.0.1](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.0...v2.0.1) (2022-07-25)


### Miscellaneous

* **.github/funding:** remove unused keys ([8d7365d](https://github.com/Fdawgs/fastify-floc-off/commit/8d7365ded07f9d05dd601ae491b05f010936054e))
* **.github:** add `FUNDING.yml` ([f1653b5](https://github.com/Fdawgs/fastify-floc-off/commit/f1653b52d3798741b070691096856256896429b7))
* **.gitignore:** use latest github ignore template ([0977ef6](https://github.com/Fdawgs/fastify-floc-off/commit/0977ef6c424137fe7c3939951583ead21ff9aa4d))
* **.prettierignore:** add new paths from `.gitignore` ([4ff9118](https://github.com/Fdawgs/fastify-floc-off/commit/4ff9118d2bfc8d4031c4f2c304e5a557a659b482))
* ignore pnpm lock file ([67fbd42](https://github.com/Fdawgs/fastify-floc-off/commit/67fbd42a6ddeb1ab799205b0c025b7c63f0beeee))


### Dependencies

* **dependabot:** increase `open-pull-requests-limit` from 5 to 20 ([4a3fc2b](https://github.com/Fdawgs/fastify-floc-off/commit/4a3fc2bc323d352fee06f41df2d629cf1f680a8d))
* **deps:** bump actions/dependency-review-action from 1 to 2 ([#125](https://github.com/Fdawgs/fastify-floc-off/issues/125)) ([944b827](https://github.com/Fdawgs/fastify-floc-off/commit/944b827f149055bd3ed53d1d3b044ff8097a2ff1))
* **deps:** bump fastify-plugin from 3.0.1 to 4.0.0 ([#127](https://github.com/Fdawgs/fastify-floc-off/issues/127)) ([a437977](https://github.com/Fdawgs/fastify-floc-off/commit/a437977dacab00bdb355c2173f89984dd5afcd48))
* **deps:** bump wagoid/commitlint-github-action from 4 to 5 ([#126](https://github.com/Fdawgs/fastify-floc-off/issues/126)) ([58a9ef2](https://github.com/Fdawgs/fastify-floc-off/commit/58a9ef2ef238e15bcdcea5c303a315cdd93ab1a2))


### Documentation

* **readme:** update example for fastify v4 ([84161cf](https://github.com/Fdawgs/fastify-floc-off/commit/84161cf17a0882d59962d38a633c9c0962aabe73))

## [2.0.0](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.7...v2.0.0) (2022-05-26)


### ⚠ BREAKING CHANGES

* * Dropped support for Fastify v3.x and Node 10.x

### Features

* support fastify v4.x ([#122](https://github.com/Fdawgs/fastify-floc-off/issues/122)) ([56247e9](https://github.com/Fdawgs/fastify-floc-off/commit/56247e9dd791102ab28cc574c9a1e7972e5cab9f))

### [1.0.7](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.6...v1.0.7) (2022-05-25)


### Documentation

* **readme:** remove snyk badge ([af7eb11](https://github.com/Fdawgs/fastify-floc-off/commit/af7eb11b06d9fb9d9a1677bec1b19b16af691e12))


### Miscellaneous

* **.eslintrc:** enable `plugin:jest/style` rules ([#113](https://github.com/Fdawgs/fastify-floc-off/issues/113)) ([b23ebcd](https://github.com/Fdawgs/fastify-floc-off/commit/b23ebcd3f5e58b4013871b08b4216e21e5488a3d))
* **.github/codeql-config:** remove quotation marks ([53e81b2](https://github.com/Fdawgs/fastify-floc-off/commit/53e81b22fed59fbbe9f82161a3f50825d20ab21a))
* **.github/workflows/link-check:** use `skip` input ([85f1b3d](https://github.com/Fdawgs/fastify-floc-off/commit/85f1b3dd0d824b1db0da935912cfaa46003f381e))
* **bug_report:** use node 18 as placeholder for `node-version` ([ebedd18](https://github.com/Fdawgs/fastify-floc-off/commit/ebedd18951942d55b6481e523dff3737159b6763))
* **ci:** remove quotation marks from step name ([9238948](https://github.com/Fdawgs/fastify-floc-off/commit/92389482e6397ed5d2d83ebb5795cca247a17716))
* use npm install alias ([c52fc0a](https://github.com/Fdawgs/fastify-floc-off/commit/c52fc0ade2fd8db2a4c949f04d5d670abbe8b35c))


### Continuous Integration

* add dependency-review job ([14f81fd](https://github.com/Fdawgs/fastify-floc-off/commit/14f81fd52fd2e7cb9db794b167668f9074ba3d17))
* **automerge:** fix context ([7c3cab1](https://github.com/Fdawgs/fastify-floc-off/commit/7c3cab1a244ca1c1d83b36829e2601f3aa0aa8e9))
* **automerge:** squash automerge prs ([#102](https://github.com/Fdawgs/fastify-floc-off/issues/102)) ([51db005](https://github.com/Fdawgs/fastify-floc-off/commit/51db0051145380e7e4efc5eeb7e1cd17b5b66941))
* **cd:** update org name for release-please-action ([26aa002](https://github.com/Fdawgs/fastify-floc-off/commit/26aa002bee03023b7671ce37f5febdb77c5a1f12))
* **cd:** use `lts/*` for node setup in release job ([bcff76c](https://github.com/Fdawgs/fastify-floc-off/commit/bcff76c258cb1d3492b72ecead4998c188cd30f0))
* check `user.login` is dependabot instead of `actor` ([#115](https://github.com/Fdawgs/fastify-floc-off/issues/115)) ([fc853c1](https://github.com/Fdawgs/fastify-floc-off/commit/fc853c1c0506128e18201205d8c39c0981d68dd5))
* **ci:** add node 18 to test matrix ([#114](https://github.com/Fdawgs/fastify-floc-off/issues/114)) ([4941eb1](https://github.com/Fdawgs/fastify-floc-off/commit/4941eb1a5075968040572c35cbd1eac2574f5ed9))
* **ci:** require `unit-tests` job to pass for `save-pr-number` job to run ([2550c32](https://github.com/Fdawgs/fastify-floc-off/commit/2550c32dc62861cf4e130f6425c963669bf790f2))
* **ci:** use `lts/*` for node setup in lint job ([2c89dd6](https://github.com/Fdawgs/fastify-floc-off/commit/2c89dd63106450d6c94fdaa0f71bfc2761b64c21))
* **ci:** use `node-version` for node matrix key ([51d4cef](https://github.com/Fdawgs/fastify-floc-off/commit/51d4cef489e481e4c2dc4641e389ade35d07ec5e))
* **codeql:** only run on pr changes to `.html`, `.js`, and `.yml` files ([0a34500](https://github.com/Fdawgs/fastify-floc-off/commit/0a34500b5b2d61634d50c333326fdc78d09c286b))
* **codeql:** resolve missing analyses ([9da0a10](https://github.com/Fdawgs/fastify-floc-off/commit/9da0a10c79447158e9e6ee0c845a6e48166d20ac))
* **codeql:** specify which files to scan during analysis ([bd55ff5](https://github.com/Fdawgs/fastify-floc-off/commit/bd55ff579de9db266db4c27311cc46d57d6bb14e))
* **link-check:** replace `npx linkinator` call with github action ([67ffdfe](https://github.com/Fdawgs/fastify-floc-off/commit/67ffdfe2bb3ac7bf939237bf5ecf17be10d02f55))
* only trigger dependency-review on pr ([ce56e18](https://github.com/Fdawgs/fastify-floc-off/commit/ce56e18a6da283853176f3afd2c0ab0c127f317a))
* reduce workflow permissions to minimum ([97558a7](https://github.com/Fdawgs/fastify-floc-off/commit/97558a7bacbb9bcc48f80f85c33142edc6765cf5))
* remove git credentials after checkout ([#118](https://github.com/Fdawgs/fastify-floc-off/issues/118)) ([65dedb2](https://github.com/Fdawgs/fastify-floc-off/commit/65dedb22f1c2cfb740021abee5318024e14dd7bd))
* replace workflow-run-cleanup-action with github concurrency ([3644841](https://github.com/Fdawgs/fastify-floc-off/commit/36448419dff5e451ef07a92e67eae47f0e04e72d))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 16.3.0 to 17.0.1 ([#120](https://github.com/Fdawgs/fastify-floc-off/issues/120)) ([0637d06](https://github.com/Fdawgs/fastify-floc-off/commit/0637d0653d0e7209176cc717046c48936bcbdb7f))
* **deps-dev:** bump @commitlint/config-conventional ([#119](https://github.com/Fdawgs/fastify-floc-off/issues/119)) ([05a3e8b](https://github.com/Fdawgs/fastify-floc-off/commit/05a3e8b2e3a95c9c12557eeb4ab2a14cdfbed97d))
* **deps-dev:** bump eslint-plugin-jsdoc from 38.1.6 to 39.2.9 ([#109](https://github.com/Fdawgs/fastify-floc-off/issues/109)) ([5c90649](https://github.com/Fdawgs/fastify-floc-off/commit/5c90649604d691fc9c5e1586ae66741515c99f96))
* **deps-dev:** bump husky from 7.0.4 to 8.0.1 ([#121](https://github.com/Fdawgs/fastify-floc-off/issues/121)) ([04e5380](https://github.com/Fdawgs/fastify-floc-off/commit/04e5380ba6c2378d13b50f232e024586be9081e9))
* **deps-dev:** bump jest from 27.5.1 to 28.0.3 ([#110](https://github.com/Fdawgs/fastify-floc-off/issues/110)) ([02c9166](https://github.com/Fdawgs/fastify-floc-off/commit/02c91661471bb7cfddcb0b522a18f2c13a2e428b))
* **deps:** bump actions/upload-artifact from 2 to 3 ([#107](https://github.com/Fdawgs/fastify-floc-off/issues/107)) ([696d5e6](https://github.com/Fdawgs/fastify-floc-off/commit/696d5e63d7ba9f3605160aeb09d3edd8ab1e4e85))
* **deps:** bump github/codeql-action from 1 to 2 ([#108](https://github.com/Fdawgs/fastify-floc-off/issues/108)) ([eafd106](https://github.com/Fdawgs/fastify-floc-off/commit/eafd106fa3abb0662093ddf6961471a873ca166b))

### [1.0.6](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.5...v1.0.6) (2022-03-28)


### Documentation

* improve readability ([991f362](https://github.com/Fdawgs/fastify-floc-off/commit/991f3625a37691d46f3275419eee31dff958f685))


### Miscellaneous

* **scripts:** remove redundant gitkraken fix from prepare script ([83943d6](https://github.com/Fdawgs/fastify-floc-off/commit/83943d6f40a4dbdf1443776c2576573c5d6539df))
* **scripts:** use shorter arg aliases; remove debugging args from jest ([ac15f3b](https://github.com/Fdawgs/fastify-floc-off/commit/ac15f3bfe0151234aa3c209729e4b0e7b3451d00))


### Continuous Integration

* add job step names, workflow comments, and whitespace ([970f4db](https://github.com/Fdawgs/fastify-floc-off/commit/970f4db7202a8725c120ee8d0aeb9cd2338afff6))
* **codeql-analysis:** remove unused autobuild step ([3648199](https://github.com/Fdawgs/fastify-floc-off/commit/3648199bc37942745cdda65c11e006c3efb04a96))
* **codeql:** grant minimum permissions to run; rename file ([#98](https://github.com/Fdawgs/fastify-floc-off/issues/98)) ([6ba714f](https://github.com/Fdawgs/fastify-floc-off/commit/6ba714ffb09210672d1b2ed34a14a1dec8587c60))
* only save pr number artifact for dependabot ([a7525d9](https://github.com/Fdawgs/fastify-floc-off/commit/a7525d930571e4657ebcf5aea68cb13ce544a52d))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 37.9.7 to 38.0.6 ([e501410](https://github.com/Fdawgs/fastify-floc-off/commit/e501410b332d50b6b875bf5db6d9c1df7f6fb5bc))
* **deps:** bump actions/checkout from 2 to 3 ([6df37d1](https://github.com/Fdawgs/fastify-floc-off/commit/6df37d1ff2556e4c07f99523f12e5ca60573911a))


### Improvements

* **index:** use `header()` instead of `headers()` ([#101](https://github.com/Fdawgs/fastify-floc-off/issues/101)) ([35cc795](https://github.com/Fdawgs/fastify-floc-off/commit/35cc7957e02dcf735a378668832ea5476e23e773))

### [1.0.5](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.4...v1.0.5) (2022-02-25)


### Miscellaneous

* **.github:** remove trailing whitespace ([7de0f06](https://github.com/Fdawgs/fastify-floc-off/commit/7de0f06bb71df76d9c7dc61a7cf90faab1c3ccb2))


### Dependencies

* **dependabot:** ignore minor and patch commit-lint updates ([#87](https://github.com/Fdawgs/fastify-floc-off/issues/87)) ([f6f0c5f](https://github.com/Fdawgs/fastify-floc-off/commit/f6f0c5fe54468ac331d19c7d4019c6c037e32f03))
* **dependabot:** major tags no longer need ignore support ([b0776cd](https://github.com/Fdawgs/fastify-floc-off/commit/b0776cdc316d89dc4f053be063a02c91738e3a63))
* **dependabot:** use default open-pull-requests-limit value ([ccbbd8e](https://github.com/Fdawgs/fastify-floc-off/commit/ccbbd8e8fed1af26ae197a100b168646bd780ab6))
* **deps-dev:** bump dev dependencies ([f73618e](https://github.com/Fdawgs/fastify-floc-off/commit/f73618ef553b14e524229c3d2e48621088a1da94))
* **deps-dev:** bump eslint-plugin-jest from 25.7.0 to 26.0.0 ([69220ba](https://github.com/Fdawgs/fastify-floc-off/commit/69220ba60dfb59a86e0d5ebc468e60ed8b7c2546))
* **deps-dev:** unpin prettier version ([9a86e04](https://github.com/Fdawgs/fastify-floc-off/commit/9a86e04e46677ee4c7c494546773353c6b604feb))
* **deps:** bump actions/github-script from 5 to 6 ([051669a](https://github.com/Fdawgs/fastify-floc-off/commit/051669a80d395bffe4ce775edca991b0bfd4198a))
* **deps:** bump actions/setup-node from 2 to 3 ([a3fdea0](https://github.com/Fdawgs/fastify-floc-off/commit/a3fdea05c4bb4ea4f00ebdb907ac5628e7a00e5a))

### [1.0.4](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.3...v1.0.4) (2022-01-07)


### Documentation

* **coc:** reduce verbosity ([16a2def](https://github.com/Fdawgs/fastify-floc-off/commit/16a2defb0bb734768de00a7e6d565b3ee1b71dc7))
* **contributing:** add mention of husky pre-commit hook ([ada22c8](https://github.com/Fdawgs/fastify-floc-off/commit/ada22c862035dc4d95bebda86f9bbb106093fdc4))
* **contributing:** add step for `lint:licenses` script ([e0d78c8](https://github.com/Fdawgs/fastify-floc-off/commit/e0d78c8184ad8ab2cd5b3351914f65a075106279))


### Miscellaneous

* **.prettierrc:** only enable `bracketSameLine` for html ([#63](https://github.com/Fdawgs/fastify-floc-off/issues/63)) ([797d9a3](https://github.com/Fdawgs/fastify-floc-off/commit/797d9a3acd6ed3909c0dc18c86dc9f3c83a0516e))
* **husky/pre-commit:** add `lint:licenses` script ([#73](https://github.com/Fdawgs/fastify-floc-off/issues/73)) ([5093967](https://github.com/Fdawgs/fastify-floc-off/commit/509396799ed813f4ea112f679a7a366e6455db75))
* ignore `.yarnclean` ([#74](https://github.com/Fdawgs/fastify-floc-off/issues/74)) ([263ed53](https://github.com/Fdawgs/fastify-floc-off/commit/263ed530488399353c80e6eb60f88c43bb816449))
* **index:** fix `server` jsdoc tag param type ([4e73240](https://github.com/Fdawgs/fastify-floc-off/commit/4e73240dd1588c4e42e5f15c2e4f931cc91eb42a))


### Continuous Integration

* **cd:** stop `prepare` script running ([#65](https://github.com/Fdawgs/fastify-floc-off/issues/65)) ([7758b27](https://github.com/Fdawgs/fastify-floc-off/commit/7758b274760e6731bac5c005df1f2885c4014ef3))
* **ci:** do not run clean-up on draft prs ([cc8d3a0](https://github.com/Fdawgs/fastify-floc-off/commit/cc8d3a00000a1bc2d9c22f70b1f945228d492df7))
* remove spellcheck workflow ([#84](https://github.com/Fdawgs/fastify-floc-off/issues/84)) ([500b258](https://github.com/Fdawgs/fastify-floc-off/commit/500b25883987ae63c8a6c3a54a799e8595003307))
* **spell-check:** do not run on draft prs ([7560aae](https://github.com/Fdawgs/fastify-floc-off/commit/7560aae9113d85830619701dbfd46e4870dcb7c8))
* trigger workflows when drafts marked as "ready to review" ([#67](https://github.com/Fdawgs/fastify-floc-off/issues/67)) ([5266ebc](https://github.com/Fdawgs/fastify-floc-off/commit/5266ebce11cd1b60cc5577df2b39cce7680be343))


### Dependencies

* **dependabot:** ignore minor and patch github-actions updates ([#68](https://github.com/Fdawgs/fastify-floc-off/issues/68)) ([c8cde67](https://github.com/Fdawgs/fastify-floc-off/commit/c8cde674726d2fa79487f07009951fd9efbba803))
* **dependabot:** ignore minor and patch release-please-action updates ([#77](https://github.com/Fdawgs/fastify-floc-off/issues/77)) ([cdbbcf4](https://github.com/Fdawgs/fastify-floc-off/commit/cdbbcf4b3038561bd99ad799153721089ddd43ca))
* **deps-dev:** bump @commitlint/cli from 13.2.1 to 14.1.0 ([fc255dc](https://github.com/Fdawgs/fastify-floc-off/commit/fc255dca1bd6c5b79e5072913ee665399729b9de))
* **deps-dev:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([3511356](https://github.com/Fdawgs/fastify-floc-off/commit/3511356744bbf25c5206c575cf8a86413bc6b2f7))
* **deps-dev:** bump @commitlint/cli from 15.0.0 to 16.0.1 ([93ea8df](https://github.com/Fdawgs/fastify-floc-off/commit/93ea8df30a0f8f016422a9c8f843f2d30efbfb5f))
* **deps-dev:** bump @commitlint/config-conventional ([c865c75](https://github.com/Fdawgs/fastify-floc-off/commit/c865c75df7a8173cef0a2440bc5a12fd39738c0f))
* **deps-dev:** bump @commitlint/config-conventional ([93e89ff](https://github.com/Fdawgs/fastify-floc-off/commit/93e89ff91a3d94f7872d690a3190c832643195a4))
* **deps-dev:** bump @commitlint/config-conventional ([e220eb1](https://github.com/Fdawgs/fastify-floc-off/commit/e220eb19f26acfc5e0b9f1caa60e4c143897c05c))
* **deps-dev:** bump eslint from 7.32.0 to 8.6.0 ([3a208f4](https://github.com/Fdawgs/fastify-floc-off/commit/3a208f4127f7fa3b723b520274345d288655540f))
* **deps-dev:** bump eslint-config-airbnb-base from 14.2.1 to 15.0.0 ([49947ff](https://github.com/Fdawgs/fastify-floc-off/commit/49947ffc69d149f2bb27e33c282d3306e1ed05d9))
* **deps-dev:** bump eslint-plugin-promise from 5.2.0 to 6.0.0 ([38182a2](https://github.com/Fdawgs/fastify-floc-off/commit/38182a224edf8ef7f311fbce778cb2b08fd5304f))
* **deps-dev:** bump prettier from 2.4.1 to 2.5.0 ([a0df2bf](https://github.com/Fdawgs/fastify-floc-off/commit/a0df2bf6dfd932de325da1c8f15a62f2d48a84c2))
* **deps-dev:** bump prettier from 2.5.0 to 2.5.1 ([4a8569c](https://github.com/Fdawgs/fastify-floc-off/commit/4a8569c15fd7f7671ba9c1f0d23b3db234d76841))
* **deps:** bump GoogleCloudPlatform/release-please-action ([7c62c19](https://github.com/Fdawgs/fastify-floc-off/commit/7c62c19c8c0c921c5052d1cc2fd2b67bf4779967))
* **deps:** bump GoogleCloudPlatform/release-please-action from 2 to 3 ([d917de8](https://github.com/Fdawgs/fastify-floc-off/commit/d917de89a90549c546170ad62f04ca6bedf20329))

### [1.0.3](https://www.github.com/Fdawgs/fastify-floc-off/compare/v1.0.2...v1.0.3) (2021-10-29)


### Continuous Integration

* **automerge:** update location of octokit rest methods ([0e82ead](https://www.github.com/Fdawgs/fastify-floc-off/commit/0e82ead92e0dd6f2f87e2ab545a4cd099fc14516))
* **ci:** revert to workflow-run-clean-action from github concurrency ([2aa77ca](https://www.github.com/Fdawgs/fastify-floc-off/commit/2aa77ca05c4752b0010f77beb3a895aec5608d1e))


### Miscellaneous

* **.eslintrc:** remove inaccurate sourcetype ([#50](https://www.github.com/Fdawgs/fastify-floc-off/issues/50)) ([d8ed606](https://www.github.com/Fdawgs/fastify-floc-off/commit/d8ed606d41e4a777e53e2695ccb25baeeb839c5e))
* **.eslintrc:** remove redundant `impliedStrict` option ([#52](https://www.github.com/Fdawgs/fastify-floc-off/issues/52)) ([944ed87](https://www.github.com/Fdawgs/fastify-floc-off/commit/944ed875b4417fe04442e826f6c87c33d139da3c))
* **.eslintrc:** set correct ecmascript version ([#39](https://www.github.com/Fdawgs/fastify-floc-off/issues/39)) ([bd46255](https://www.github.com/Fdawgs/fastify-floc-off/commit/bd46255f351285051881ac60183992bf512e6208))
* **.husky/.gitignore:** remove now redundant file ([38199a8](https://www.github.com/Fdawgs/fastify-floc-off/commit/38199a8f107d94f40b895dfe5f7cf6e14c957695))
* **.prettierrc:** enable `bracketsameline` option ([336b0ed](https://www.github.com/Fdawgs/fastify-floc-off/commit/336b0ed16982548526dd4ae152d7553eddca41f1))
* **.prettierrc:** override defaults for html, css, and scss files ([#40](https://www.github.com/Fdawgs/fastify-floc-off/issues/40)) ([e9cd573](https://www.github.com/Fdawgs/fastify-floc-off/commit/e9cd57371c640ee7897cbfe29a69911465e0286c))
* **.vscode:** add `mhutchie.git-graph` extension ([085479a](https://www.github.com/Fdawgs/fastify-floc-off/commit/085479a64a5f15e927b8cf8857094b68c2274cd6))
* **.vscode:** remove deprecated settings ([#51](https://www.github.com/Fdawgs/fastify-floc-off/issues/51)) ([38d4b67](https://www.github.com/Fdawgs/fastify-floc-off/commit/38d4b673918a4f2fbb6e26af6ed9d09f2e1154d5))


### Documentation

* bump coc from v2.0.0 to v2.1.0 ([#53](https://www.github.com/Fdawgs/fastify-floc-off/issues/53)) ([939cf51](https://www.github.com/Fdawgs/fastify-floc-off/commit/939cf510374fecd1c7bfc69ecba8a0f11799134b))


### Dependencies

* **deps-dev:** add eslint-plugin-security-node ([#41](https://www.github.com/Fdawgs/fastify-floc-off/issues/41)) ([00db130](https://www.github.com/Fdawgs/fastify-floc-off/commit/00db13030ab45f727acf35cc34c1ee649752e541))
* **deps-dev:** bump dev dependencies ([#60](https://www.github.com/Fdawgs/fastify-floc-off/issues/60)) ([e8f3b93](https://www.github.com/Fdawgs/fastify-floc-off/commit/e8f3b93f731e30a09ab8eba09850c56569991135))
* **deps-dev:** bump eslint-plugin-jest from 24.7.0 to 25.2.2 ([e16c871](https://www.github.com/Fdawgs/fastify-floc-off/commit/e16c87160bec68d10566faef9588f79cdbde3633))
* **deps-dev:** bump eslint-plugin-jsdoc from 36.1.1 to 37.0.3 ([106412f](https://www.github.com/Fdawgs/fastify-floc-off/commit/106412f8226c816c4428506cacc498467513e505))
* **deps-dev:** bump prettier from 2.3.2 to 2.4.1 ([b8316d3](https://www.github.com/Fdawgs/fastify-floc-off/commit/b8316d32298ae25131180cdf62b8bf396e0ee425))
* **deps:** bump actions/checkout from 2.3.4 to 2.3.5 ([42c7bdc](https://www.github.com/Fdawgs/fastify-floc-off/commit/42c7bdcf3df84ede028397165c98cd8db60cd111))
* **deps:** bump actions/github-script from 4.1 to 5 ([08a9724](https://www.github.com/Fdawgs/fastify-floc-off/commit/08a9724ee02f5ee78ad00343f892ef361377b8ec))
* **deps:** bump actions/setup-node from 2.4.0 to 2.4.1 ([3ad60a8](https://www.github.com/Fdawgs/fastify-floc-off/commit/3ad60a8c52ab700c65b2fd7289372b5fe8842796))
* **deps:** bump GoogleCloudPlatform/release-please-action ([99e9e9f](https://www.github.com/Fdawgs/fastify-floc-off/commit/99e9e9f5ef43bd3039f3316759440c5b78284cc2))
* **deps:** bump GoogleCloudPlatform/release-please-action ([d8bf0d5](https://www.github.com/Fdawgs/fastify-floc-off/commit/d8bf0d535855f7623e50f23be6768f9c2465a220))
* **deps:** bump wagoid/commitlint-github-action from 4.1.1 to 4.1.4 ([77dd11e](https://www.github.com/Fdawgs/fastify-floc-off/commit/77dd11eaf037b15fac1521fd795cf67f52b7601c))
* **deps:** bump wagoid/commitlint-github-action from 4.1.4 to 4.1.9 ([7bb7c56](https://www.github.com/Fdawgs/fastify-floc-off/commit/7bb7c5626cc2a2ee92a8f507f362b593402a371c))

### [1.0.2](https://www.github.com/Fdawgs/fastify-floc-off/compare/v1.0.1...v1.0.2) (2021-09-06)


### Documentation

* **readme:** grammar and wordiness fixes ([bf30cbf](https://www.github.com/Fdawgs/fastify-floc-off/commit/bf30cbf90f94dd5ca340fee9b81bf8cb7fda9092))
* **readme:** update contributing section ([83df0b3](https://www.github.com/Fdawgs/fastify-floc-off/commit/83df0b3567c6c377f5e0492b8f43c3ab3df41bae))


### Miscellaneous

* **.github:** use new YAML configured GitHub issue forms ([#35](https://www.github.com/Fdawgs/fastify-floc-off/issues/35)) ([81aa63e](https://www.github.com/Fdawgs/fastify-floc-off/commit/81aa63eb923a07da1e741ad7ae1c7899ea84e663))
* **ci:** replace `node-version` key with shorter `node` ([#14](https://www.github.com/Fdawgs/fastify-floc-off/issues/14)) ([099340c](https://www.github.com/Fdawgs/fastify-floc-off/commit/099340c5f27ddf573c50a30a987f73a6713bfd72))
* **vscode:** disable red hat telemetry ([b57bcf7](https://www.github.com/Fdawgs/fastify-floc-off/commit/b57bcf734378e96a8e981f0e753361fff41d50ac))
* **vscode:** remove user space config setting ([96a4f82](https://www.github.com/Fdawgs/fastify-floc-off/commit/96a4f82706a234f3c1c5d2134b2aa6567a65a702))
* **workflows:** remove `stale.yml` ([5c66306](https://www.github.com/Fdawgs/fastify-floc-off/commit/5c66306151ce5d6b21ccccfd59f7efae4c073342))


### Continuous Integration

* **cd:** move perf optimizations and refactoring into same section ([256e987](https://www.github.com/Fdawgs/fastify-floc-off/commit/256e98760fa071f4919bb7458bf2bb6d79bd426b))
* **ci:** replace workflow-run-cleanup-action with github concurrency ([#36](https://www.github.com/Fdawgs/fastify-floc-off/issues/36)) ([ae97274](https://www.github.com/Fdawgs/fastify-floc-off/commit/ae9727410e4f60bded6ffb2f413fb4fcae22d6fd))
* fix key usage in `action/setup-node` ([67b257f](https://www.github.com/Fdawgs/fastify-floc-off/commit/67b257f2168e4e83e33084ceaa876733248537fd))
* **link-check:** reduce frequency from daily to monthly ([#21](https://www.github.com/Fdawgs/fastify-floc-off/issues/21)) ([a544aff](https://www.github.com/Fdawgs/fastify-floc-off/commit/a544aff013f8debaa7d1cbc9d6602ca4accd07f1))


### Dependencies

* add .npmignore; reduce package size from 12.8kB to 3.9kB ([#37](https://www.github.com/Fdawgs/fastify-floc-off/issues/37)) ([71e4be1](https://www.github.com/Fdawgs/fastify-floc-off/commit/71e4be102b26715fe0045c08c87388053dd05762))
* **deps-dev:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([5ffa2ef](https://www.github.com/Fdawgs/fastify-floc-off/commit/5ffa2ef384875dc48bcb9f0a4a67ee0799e7f005))
* **deps-dev:** bump @commitlint/config-conventional ([e005c28](https://www.github.com/Fdawgs/fastify-floc-off/commit/e005c28438f05ed125ca75a47bcca55ddb510658))
* **deps-dev:** bump eslint-plugin-jsdoc from 33.3.0 to 35.1.2 ([afd7e92](https://www.github.com/Fdawgs/fastify-floc-off/commit/afd7e9225a1362a5f1002d2cd1ee71f18a35db95))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.5.1 to 36.0.6 ([87cb2a5](https://www.github.com/Fdawgs/fastify-floc-off/commit/87cb2a5049169c6f6836395c4340d971546499c5))
* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([dcb877b](https://www.github.com/Fdawgs/fastify-floc-off/commit/dcb877bd6cd39c8b95460484e15616e7406e63c2))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([c97caa5](https://www.github.com/Fdawgs/fastify-floc-off/commit/c97caa5c50cc4d4ce29945fb27ab2746c4f83bbe))
* **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([83dad6e](https://www.github.com/Fdawgs/fastify-floc-off/commit/83dad6ea1684f69044689f69b37642a992e3d70d))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.2 ([a74fe91](https://www.github.com/Fdawgs/fastify-floc-off/commit/a74fe91c803be36a994662c33b5e1095d71c9a27))
* **deps:** bump actions/github-script from 4.0.2 to 4.1 ([cb4ae30](https://www.github.com/Fdawgs/fastify-floc-off/commit/cb4ae30025209de549875739485bfb150a670bd9))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([b7609e8](https://www.github.com/Fdawgs/fastify-floc-off/commit/b7609e812c585df95b7ce11bad848b371a59b062))
* **deps:** bump actions/setup-node from 2.2.0 to 2.3.0 ([d25cb30](https://www.github.com/Fdawgs/fastify-floc-off/commit/d25cb30d839a4213f48bcc386f8544d8b9a1385c))
* **deps:** bump actions/setup-node from 2.3.0 to 2.4.0 ([53b492a](https://www.github.com/Fdawgs/fastify-floc-off/commit/53b492a086fb6074def585b19567d18c1e430feb))
* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([e0937e2](https://www.github.com/Fdawgs/fastify-floc-off/commit/e0937e2d0286ada1bb87e9793e6819d4454dbd53))
* **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([4a2b86a](https://www.github.com/Fdawgs/fastify-floc-off/commit/4a2b86a75838a539d48e8566e4d6366344715e7a))
* **deps:** bump GoogleCloudPlatform/release-please-action ([d1966e8](https://www.github.com/Fdawgs/fastify-floc-off/commit/d1966e86d5270eb81cb555c7c6510d87dc25f93c))
* **deps:** bump wagoid/commitlint-github-action from 3.1.1 to 3.1.4 ([e0b9bdb](https://www.github.com/Fdawgs/fastify-floc-off/commit/e0b9bdbc6804cc8752b7661e46916f7d5b919184))
* **deps:** bump wagoid/commitlint-github-action from 3.1.4 to 4.1.1 ([048d35c](https://www.github.com/Fdawgs/fastify-floc-off/commit/048d35cbc1b7aab0093f573e1090f895188de94c))

### [1.0.1](https://www.github.com/Fdawgs/fastify-floc-off/compare/v1.0.0...v1.0.1) (2021-05-06)


### Documentation

* grammar and readability fixes ([912958f](https://www.github.com/Fdawgs/fastify-floc-off/commit/912958ffbc9f0cf38c41ac485b43971e738daa61))
* **security:** add missing hyphen ([65b2715](https://www.github.com/Fdawgs/fastify-floc-off/commit/65b27155eb9ec92f4ec6795c5c194e14d5c76ebd))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 32.3.4 to 33.0.0 ([dfafef3](https://www.github.com/Fdawgs/fastify-floc-off/commit/dfafef3f0bec52b87a511c895dbc5a6da1801fd8))
* **deps:** bump GoogleCloudPlatform/release-please-action ([a8b1884](https://www.github.com/Fdawgs/fastify-floc-off/commit/a8b1884a8137a0a56a1192dfcfd76d61b93dd9b5))
* **deps:** bump GoogleCloudPlatform/release-please-action ([4ecd92e](https://www.github.com/Fdawgs/fastify-floc-off/commit/4ecd92e54d8602e66cc915d9a5491f93d592efcc))
* **deps:** bump typoci/spellcheck-action from v1.0.0 to v1.1.0 ([465f6ba](https://www.github.com/Fdawgs/fastify-floc-off/commit/465f6ba6dc2e7b99f10fa10d48e894a8bab7dc90))
* **deps:** bump wagoid/commitlint-github-action from v3.1.0 to v3.1.1 ([f656012](https://www.github.com/Fdawgs/fastify-floc-off/commit/f656012e4fe6f50becd774080a637732a1128487))

## 1.0.0 (2021-04-28)


### Miscellaneous

* initial code commit ([1be3232](https://www.github.com/Fdawgs/fastify-floc-off/commit/1be3232ef0ee6de95c68df49ee4d636b79fe93d1))


### Dependencies

* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([a5e8135](https://www.github.com/Fdawgs/fastify-floc-off/commit/a5e813581cb6e59d83daa8f1a597cf2afed23945))
* **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([01fdfe2](https://www.github.com/Fdawgs/fastify-floc-off/commit/01fdfe2ebc3fceecac237633d70b80776d9b4781))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([dc05865](https://www.github.com/Fdawgs/fastify-floc-off/commit/dc05865e0098b046e5154feabd95769850c334c9))
* **deps:** bump GoogleCloudPlatform/release-please-action ([c2d6d63](https://www.github.com/Fdawgs/fastify-floc-off/commit/c2d6d63eba5361d4f38d7317c8015cc179423ffc))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.0.0 ([a5a3141](https://www.github.com/Fdawgs/fastify-floc-off/commit/a5a31416aadd25196534cd48dac6159a3afef2eb))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([63d9774](https://www.github.com/Fdawgs/fastify-floc-off/commit/63d977416956242073221dd9928f3f761fafe6e9))
