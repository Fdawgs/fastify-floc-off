# Changelog

## [2.1.12](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.11...v2.1.12) (2024-02-22)


### Dependencies

* **deps-dev:** bump dev dependencies ([dd41126](https://github.com/Fdawgs/fastify-floc-off/commit/dd4112672ae65a3642e981a77f74c2fd81d5835a))
* **deps-dev:** bump husky from 8.0.3 to 9.0.6 ([#223](https://github.com/Fdawgs/fastify-floc-off/issues/223)) ([caf4eb3](https://github.com/Fdawgs/fastify-floc-off/commit/caf4eb391d0b6bbfe4d614202766fb64493f1f86))


### Miscellaneous

* **.husky:** migrate hooks to v9 style ([06a1816](https://github.com/Fdawgs/fastify-floc-off/commit/06a1816e3afa43846d7eff534b19476fc4a3c786))
* **.vscode:** fix `prettier.prettierPath` setting ([89ed836](https://github.com/Fdawgs/fastify-floc-off/commit/89ed836ca085710d197231d95ab66b3cb6a2ae72))


### Continuous integration

* **deps:** bump actions/dependency-review-action from 3 to 4 ([#222](https://github.com/Fdawgs/fastify-floc-off/issues/222)) ([a782893](https://github.com/Fdawgs/fastify-floc-off/commit/a78289342d0caee2e89af0afd21604ab06abedb3))


### Improvements

* **index:** swap negated condition ([327480e](https://github.com/Fdawgs/fastify-floc-off/commit/327480ef4db1942e1090c4e409cb97c3ba06fd78))

## [2.1.11](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.10...v2.1.11) (2024-01-24)


### Dependencies

* **deps-dev:** bump dev dependencies ([1c7e53d](https://github.com/Fdawgs/fastify-floc-off/commit/1c7e53dc99e9b48493490ca5e1e068efffd801f9))


### Miscellaneous

* **.vscode:** use local prettier version ([105035c](https://github.com/Fdawgs/fastify-floc-off/commit/105035c5099b5cc9e058fc302a766679eab341d4))
* **jsconfig:** remove `lib`; `target` will be used in absence ([9d7608a](https://github.com/Fdawgs/fastify-floc-off/commit/9d7608a9c9bec8f4f7b3e3b36882c2900c3ec18c))
* **package:** fix `repository` structure ([c6673f0](https://github.com/Fdawgs/fastify-floc-off/commit/c6673f0cfef867816416e8f2b743ff4aa72902bc))
* **scripts/license-checker:** handle old license arrays or missing ([00b52f5](https://github.com/Fdawgs/fastify-floc-off/commit/00b52f56e3738f29e1146e24c1fcb46959e463f2))


### Continuous integration

* **automerge:** optimise inline js scripts ([9099ff6](https://github.com/Fdawgs/fastify-floc-off/commit/9099ff66b94dfbdb3f83b1e9374e7cfe91f84c64))
* **cd:** param order ([2852a50](https://github.com/Fdawgs/fastify-floc-off/commit/2852a507050358ed8cb629b6e348ea156b9c0f71))
* **cd:** publish to github packages with provenance ([db56d80](https://github.com/Fdawgs/fastify-floc-off/commit/db56d808e523c0b746db6fd077842f69740cdf90))
* **cd:** use `main` environment for publish-npm job ([2ea9d76](https://github.com/Fdawgs/fastify-floc-off/commit/2ea9d767fb3adc7eda32665b51ecd129dcb1d0cc))


### Documentation

* **readme:** grammar fixes ([535691e](https://github.com/Fdawgs/fastify-floc-off/commit/535691ebf5bd4d5cd0c45db3b79d0cd6fa476e93))

## [2.1.10](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.9...v2.1.10) (2024-01-08)


### Continuous integration

* **cd:** remove redundant `npm publish args` ([820db1d](https://github.com/Fdawgs/fastify-floc-off/commit/820db1d45f781f01077765dcf84a7bceeb7191a6))
* **cd:** use granular job permissions over top-level ([e33f437](https://github.com/Fdawgs/fastify-floc-off/commit/e33f437051870c3ae24f51a29127f40b3c0d39ec))

## [2.1.9](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.8...v2.1.9) (2024-01-07)


### Miscellaneous

* **.github:** use shared files from `fdawgs/.github` ([6091b36](https://github.com/Fdawgs/fastify-floc-off/commit/6091b36b650c0938f545d638b7c07f48a9de0714))


### Continuous integration

* **cd:** grant write permissions to packages ([b8e4335](https://github.com/Fdawgs/fastify-floc-off/commit/b8e433533bd3e91d36ca58ff38ca6f5449233324))

## [2.1.8](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.7...v2.1.8) (2024-01-07)


### Dependencies

* **deps-dev:** bump dev dependencies ([ccc0e58](https://github.com/Fdawgs/fastify-floc-off/commit/ccc0e58a7d090f26eebcd019f8c68cac57acc3bd))


### Miscellaneous

* jsdoc comments must be complete sentences ([4803a67](https://github.com/Fdawgs/fastify-floc-off/commit/4803a6705f87d3d5f4ae81fbd37b9c4ceb659b14))
* **license:** update license year ([cc74fc8](https://github.com/Fdawgs/fastify-floc-off/commit/cc74fc8130242edbb2c385ac49f2b879cd3edf1b))
* **package:** add `lint:fix` script ([27773f0](https://github.com/Fdawgs/fastify-floc-off/commit/27773f01ea6cdab1a85f896a3de277279d19e8c3))
* **package:** run `lint:prettier` in `test` script ([29ca973](https://github.com/Fdawgs/fastify-floc-off/commit/29ca973be031ce0b94979c91b2f2a0d490ae3152))


### Continuous integration

* **cd:** publish to github packages as well as npm ([ac794e9](https://github.com/Fdawgs/fastify-floc-off/commit/ac794e99b87682d74fc719db0132b7fe6214dd85))
* **dependabot:** ignore release-please-action major updates ([d1b1998](https://github.com/Fdawgs/fastify-floc-off/commit/d1b1998dc7b42b21593a789c81da93191275a8c9))
* **deps:** bump actions/upload-artifact from 3 to 4 ([#210](https://github.com/Fdawgs/fastify-floc-off/issues/210)) ([7661586](https://github.com/Fdawgs/fastify-floc-off/commit/766158690a97f6147a606a6667c111e00b397f60))
* **deps:** bump github/codeql-action from 2 to 3 ([#209](https://github.com/Fdawgs/fastify-floc-off/issues/209)) ([9819999](https://github.com/Fdawgs/fastify-floc-off/commit/9819999a590fdd4f8d053e1c0f7701a6389b9c2c))


### Documentation

* **readme:** update links ([f9ebbc6](https://github.com/Fdawgs/fastify-floc-off/commit/f9ebbc68637c4bfa68c9e2e9c7ac2dfc1344aea4))
* use shared files from `fdawgs/.github` ([e8d5b63](https://github.com/Fdawgs/fastify-floc-off/commit/e8d5b63fdb2c4bdc715710a31c3950aedfd342f5))

## [2.1.7](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.6...v2.1.7) (2023-11-29)


### Dependencies

* **deps-dev:** add eslint-community/eslint-plugin-eslint-comments ([7f6ccfb](https://github.com/Fdawgs/fastify-floc-off/commit/7f6ccfb14c0f7c046ac9a79791935e7150827a1c))
* **deps-dev:** bump dev dependencies ([2edfd34](https://github.com/Fdawgs/fastify-floc-off/commit/2edfd34c31db463579ee1cd99706643b8f6d3057))
* **deps-dev:** bump the commitlint group with 2 updates ([#202](https://github.com/Fdawgs/fastify-floc-off/issues/202)) ([e420770](https://github.com/Fdawgs/fastify-floc-off/commit/e420770284252539b47bab9a616a5340ba1c90d4))
* **deps-dev:** bump the eslint group with 1 update ([#203](https://github.com/Fdawgs/fastify-floc-off/issues/203)) ([7f795f2](https://github.com/Fdawgs/fastify-floc-off/commit/7f795f280d0f3e395b0fb81bc2601555a79fe41f))
* **deps-dev:** remove broken eslint-plugin-security-node ([6c605fe](https://github.com/Fdawgs/fastify-floc-off/commit/6c605fe4eb5cacb812a6be7c268c3cd10666c407))


### Miscellaneous

* **.vscode:** add github-markdown-preview to recommended extension ([45d1af1](https://github.com/Fdawgs/fastify-floc-off/commit/45d1af140c0ff9c51bf7eb292cfebef0600c1449))
* **.vscode:** add gitlens to recommended extensions ([d26b303](https://github.com/Fdawgs/fastify-floc-off/commit/d26b303caf3b82f62d36a0eefe754dfad1b1260f))
* **jsconfig:** use es2022 lib ([81b0d89](https://github.com/Fdawgs/fastify-floc-off/commit/81b0d89a564d502579011349cf11c2493134d4a7))
* **scripts/license-checker:** update link to deprecated list ([8e6d41d](https://github.com/Fdawgs/fastify-floc-off/commit/8e6d41d90b23c06c4da9e3413ded801b4f4f02dc))


### Continuous integration

* **deps:** bump actions/github-script from 6 to 7 ([#204](https://github.com/Fdawgs/fastify-floc-off/issues/204)) ([acf7aea](https://github.com/Fdawgs/fastify-floc-off/commit/acf7aea65bf1e9a0c5642f81336c68b3642d8447))
* **deps:** bump actions/setup-node from 3 to 4 ([#201](https://github.com/Fdawgs/fastify-floc-off/issues/201)) ([d71ccd8](https://github.com/Fdawgs/fastify-floc-off/commit/d71ccd8f8f61615b83917c3e9c6fe6f9b3a34c10))


### Documentation

* **readme:** fix broken ci badge link ([46433d8](https://github.com/Fdawgs/fastify-floc-off/commit/46433d8b69505f742ea892487675ebd06f4abb81))
* **readme:** use full cjs for example ([9f4eb87](https://github.com/Fdawgs/fastify-floc-off/commit/9f4eb87452efc6f3647dc25dfac584221fa2a1df))

## [2.1.6](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.5...v2.1.6) (2023-09-23)


### Miscellaneous

* **.gitattributes:** auto lf eol all files ([1934a44](https://github.com/Fdawgs/fastify-floc-off/commit/1934a44916f2a3914dc7d51880a04f15b8fab73d))
* add missing `.gitattributes` file ([80198d7](https://github.com/Fdawgs/fastify-floc-off/commit/80198d7759d378a2d93d880a9e083bbc96ec8aff))
* change comment blocks with one line into single block ([7f062d5](https://github.com/Fdawgs/fastify-floc-off/commit/7f062d5d18fdf40c5981d7027c75066f011206d5))
* **eslintrc:** bump ecma version to 2023 ([8c9e76d](https://github.com/Fdawgs/fastify-floc-off/commit/8c9e76d1cf5eb543c0a27c5c62970ca31b1477bf))
* **jsconfig:** set module to nodenext ([d7bf975](https://github.com/Fdawgs/fastify-floc-off/commit/d7bf97553628c93096bb5f5f99dc6c4ea1f4f3a8))
* **jsconfig:** target es2022 ([395c27f](https://github.com/Fdawgs/fastify-floc-off/commit/395c27f64408d6515a466bb757ba8fbbb7cfdf4e))
* **package:** explicitly declare js module type ([d84dceb](https://github.com/Fdawgs/fastify-floc-off/commit/d84dcebf5ae8ab33d98cffc1661cd525ec8ca3c2))
* **scripts/license-checker:** declare `copyLeftLicenses` type ([4c16e57](https://github.com/Fdawgs/fastify-floc-off/commit/4c16e57ee5b3c290ca78280b4f7dcc01aa854da9))
* **scripts/license-checker:** destruct upath module import ([#194](https://github.com/Fdawgs/fastify-floc-off/issues/194)) ([7e7746c](https://github.com/Fdawgs/fastify-floc-off/commit/7e7746c04c56c94b861fb00628396d20a01fe9a5))
* **scripts/license-checker:** ignore invalid ts error ([dc53501](https://github.com/Fdawgs/fastify-floc-off/commit/dc5350105624a9c39b81e7527e99912f76fd7c2b))
* use `[@see](https://github.com/see)` jsdoc tag for inline comment links ([538f3a1](https://github.com/Fdawgs/fastify-floc-off/commit/538f3a10c13c94d644fc7fed1fa69aaef57b4305))


### Continuous integration

* **dependabot:** group dependabot updates ([7dc8559](https://github.com/Fdawgs/fastify-floc-off/commit/7dc8559e650dd25d3ca578c671591f6b94f16199))
* **deps:** bump actions/checkout from 3 to 4 ([#197](https://github.com/Fdawgs/fastify-floc-off/issues/197)) ([86ca5db](https://github.com/Fdawgs/fastify-floc-off/commit/86ca5db2a6cf1a28816c0de9d2cf7c73348d57da))
* **deps:** bump coverallsapp/github-action from 2.2.1 to 2.2.3 ([#196](https://github.com/Fdawgs/fastify-floc-off/issues/196)) ([64a2079](https://github.com/Fdawgs/fastify-floc-off/commit/64a2079d7df50834ec8bd30efee3a8480a2fb53a))


### Improvements

* use `node:` prefix to bypass require.cache call for builtins ([1d3f738](https://github.com/Fdawgs/fastify-floc-off/commit/1d3f73805117559b494ffe72f44d738c91adfaa2))


### Documentation

* **readme:** update acknowledgements ([6a3a91f](https://github.com/Fdawgs/fastify-floc-off/commit/6a3a91fb1af129d7e3dd1282144158916fbcbad6))

## [2.1.5](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.4...v2.1.5) (2023-08-16)


### Dependencies

* **deps-dev:** bump dev dependencies ([cbf371b](https://github.com/Fdawgs/fastify-floc-off/commit/cbf371b2ee235f8d0ce7b8e0298aec6c65b888c8))
* **deps-dev:** bump eslint-config-prettier from 8.10.0 to 9.0.0 ([#187](https://github.com/Fdawgs/fastify-floc-off/issues/187)) ([7072c0c](https://github.com/Fdawgs/fastify-floc-off/commit/7072c0c4bd168ae7210311fc058fbd6c4aa99c23))
* **deps:** bump fastify-plugin from 4.5.0 to 4.5.1 ([cf5ea41](https://github.com/Fdawgs/fastify-floc-off/commit/cf5ea41661da768d2501a544fb8e8958db8ed66a))


### Miscellaneous

* **.eslintrc:** error on google closure jsdoc syntax ([24e4486](https://github.com/Fdawgs/fastify-floc-off/commit/24e44868357e339ef87ff5e54bbc491a9aca4d7e))
* add jsconfig; type check js ([#189](https://github.com/Fdawgs/fastify-floc-off/issues/189)) ([7e7d164](https://github.com/Fdawgs/fastify-floc-off/commit/7e7d164d0293c152c9946b91a804fdaa514e2287))
* **index:** add whitespace between import and comment ([0a53983](https://github.com/Fdawgs/fastify-floc-off/commit/0a53983d8a8feb636deec36d1d7da2db91302e60))
* **jsconfig:** add target ([cd68ea5](https://github.com/Fdawgs/fastify-floc-off/commit/cd68ea5b46389e0699f903e75861c61aea83f239))
* **package:** add google's topics api to keywords ([3b9b742](https://github.com/Fdawgs/fastify-floc-off/commit/3b9b742cdd9649d376ac743284e056eb3a7fd2ac))
* rename `lint:prettier` scripts to reflect their function ([#183](https://github.com/Fdawgs/fastify-floc-off/issues/183)) ([e54a5e7](https://github.com/Fdawgs/fastify-floc-off/commit/e54a5e76426fb9b54554b4632b5d5f68195069ba))
* **scripts/license-checker:** use `console.error()` to log failures ([0e02ff4](https://github.com/Fdawgs/fastify-floc-off/commit/0e02ff48e6e37c417dd17ae9ed46b910759a7137))


### Continuous integration

* **ci:** error on new jest snapshot ([2466487](https://github.com/Fdawgs/fastify-floc-off/commit/24664875de80d117158e8178a5b27b5279c4349f))
* **deps:** bump coverallsapp/github-action from 2.2.0 to 2.2.1 ([#185](https://github.com/Fdawgs/fastify-floc-off/issues/185)) ([f7acf13](https://github.com/Fdawgs/fastify-floc-off/commit/f7acf1385e06b9b14fdb2c240e3ab637d3b89b23))


### Improvements

* **scripts/license-checker:** deconstruct imports ([d23b1a7](https://github.com/Fdawgs/fastify-floc-off/commit/d23b1a7e4f5e6c9d82ced58032bf970de236bbfd))


### Documentation

* **readme:** add mention of google's topics api ([2f27618](https://github.com/Fdawgs/fastify-floc-off/commit/2f27618ae29517ce1d5edd8ba704309e9adaee54))

## [2.1.4](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.3...v2.1.4) (2023-07-08)


### Miscellaneous

* **.eslintrc:** sort `extends` array ([ca12e6b](https://github.com/Fdawgs/fastify-floc-off/commit/ca12e6b8c657465746c79945adf35cfb7222a1eb))


### Dependencies

* **deps-dev:** add eslint-plugin-regexp ([fe91de2](https://github.com/Fdawgs/fastify-floc-off/commit/fe91de2f3806c5309558e2cbd55f319e3e634fcd))
* **deps-dev:** bump dev dependencies ([936db39](https://github.com/Fdawgs/fastify-floc-off/commit/936db39574a0bc3e621013d4007dbb315e0d31d2))


### Bug fixes

* add missing strict mode directives ([#180](https://github.com/Fdawgs/fastify-floc-off/issues/180)) ([c91d11b](https://github.com/Fdawgs/fastify-floc-off/commit/c91d11bc85fd1a6a91b74d9f4432dadff944c32f))

## [2.1.3](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.2...v2.1.3) (2023-06-24)


### Continuous integration

* **deps:** bump coverallsapp/github-action from 2.1.2 to 2.2.0 ([#175](https://github.com/Fdawgs/fastify-floc-off/issues/175)) ([b29327c](https://github.com/Fdawgs/fastify-floc-off/commit/b29327cb411ced9d9d5c47ca88e16852977cab80))


### Miscellaneous

* **.eslintrc:** enable additional jest plugin rules ([886a714](https://github.com/Fdawgs/fastify-floc-off/commit/886a714dc8ea7f284b1ad448754f4e967134eec7))
* **.eslintrc:** enable additional jsdoc plugin rules ([15ac3cd](https://github.com/Fdawgs/fastify-floc-off/commit/15ac3cdd10d27af5d56fd6d4f3881a272bd31dad))
* **.eslintrc:** only use jest plugin to lint test-related files ([280f8f9](https://github.com/Fdawgs/fastify-floc-off/commit/280f8f96617cf139456777ba7a9779d1f12c28d2))
* **.eslintrc:** update ecmascript version ([f5f7aa4](https://github.com/Fdawgs/fastify-floc-off/commit/f5f7aa4c6f5a3763792ee468d7fc110b1304e64b))
* import fastify type for server jsdoc param ([c8d3d1d](https://github.com/Fdawgs/fastify-floc-off/commit/c8d3d1dc05828ac9e031bb63e39276fc5d01656e))
* **package:** remove global jest mock config values ([aa9c6fa](https://github.com/Fdawgs/fastify-floc-off/commit/aa9c6faf015695f6a8a0e63585a1be79f7888802))
* **package:** set jest coverage threshold ([728eefd](https://github.com/Fdawgs/fastify-floc-off/commit/728eefdeb400962b9e22a45329cf542a50a55518))
* **scripts/license-checker:** resolve eslint jsdoc warning ([#167](https://github.com/Fdawgs/fastify-floc-off/issues/167)) ([952236a](https://github.com/Fdawgs/fastify-floc-off/commit/952236a6e58623531ccac2769ecd64e2edbad765))
* **scripts:** fix inline comment style ([0b69a96](https://github.com/Fdawgs/fastify-floc-off/commit/0b69a96bc3767620ed0a66da8d5761c2a4e5a3a4))
* use nouns for leading word in function description tags ([#169](https://github.com/Fdawgs/fastify-floc-off/issues/169)) ([20b642f](https://github.com/Fdawgs/fastify-floc-off/commit/20b642fec4bd3ac9a231d703f633962599a507c7))


### Dependencies

* **deps-dev:** bump dev dependencies ([#171](https://github.com/Fdawgs/fastify-floc-off/issues/171)) ([6b667f7](https://github.com/Fdawgs/fastify-floc-off/commit/6b667f7accbe992ec43e1782e22751571b3c1c42))
* **deps-dev:** bump dev dependencies ([#176](https://github.com/Fdawgs/fastify-floc-off/issues/176)) ([c1ea98e](https://github.com/Fdawgs/fastify-floc-off/commit/c1ea98e24f324c5898dbde62216bf16bb4470db0))
* **deps-dev:** bump eslint-plugin-jsdoc from 44.2.7 to 46.1.0 ([#172](https://github.com/Fdawgs/fastify-floc-off/issues/172)) ([5c7418a](https://github.com/Fdawgs/fastify-floc-off/commit/5c7418a4fdc15823b5820a82f6b0f913500d6e30))

## [2.1.2](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.1...v2.1.2) (2023-04-24)


### Miscellaneous

* **.prettierrc:** enable `arrowParens` option ([#161](https://github.com/Fdawgs/fastify-floc-off/issues/161)) ([897ceea](https://github.com/Fdawgs/fastify-floc-off/commit/897ceea367263a8b6b2347c526dd9d93c831f854))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 40.3.0 to 43.0.7 ([#164](https://github.com/Fdawgs/fastify-floc-off/issues/164)) ([de98fb9](https://github.com/Fdawgs/fastify-floc-off/commit/de98fb90c4268a4ad73786ba44642ff7ac6d220f))


### Continuous integration

* **cd:** publish to npm with provenance ([#166](https://github.com/Fdawgs/fastify-floc-off/issues/166)) ([d3d8756](https://github.com/Fdawgs/fastify-floc-off/commit/d3d87567091a9c58bb31d423aaa992ecddf8988a))
* **ci:** add node 20 to test matrix ([#165](https://github.com/Fdawgs/fastify-floc-off/issues/165)) ([7a59aeb](https://github.com/Fdawgs/fastify-floc-off/commit/7a59aebb8f761bb6ea8956a513b1ef8acbc7df03))
* **deps:** bump coverallsapp/github-action from 2.0.0 to 2.1.2 ([#163](https://github.com/Fdawgs/fastify-floc-off/issues/163)) ([b00ed0c](https://github.com/Fdawgs/fastify-floc-off/commit/b00ed0c86e210b5e9c18d6c7b959541eda8677eb))

## [2.1.1](https://github.com/Fdawgs/fastify-floc-off/compare/v2.1.0...v2.1.1) (2023-03-31)


### Miscellaneous

* ignore bun lockfile ([#155](https://github.com/Fdawgs/fastify-floc-off/issues/155)) ([d8b8ecc](https://github.com/Fdawgs/fastify-floc-off/commit/d8b8eccefb5d52213f6bf5b1e45391019c6058d2))
* **package:** add funding url ([2c3a500](https://github.com/Fdawgs/fastify-floc-off/commit/2c3a500fde49defe14e4d8f021f56dfc2bf885b6))
* **scripts:** add eslint rule file ([408b031](https://github.com/Fdawgs/fastify-floc-off/commit/408b0310bc90ac12e4ee08dafe96f00efa66a6fd))
* **scripts:** remove redundant export ([03d8415](https://github.com/Fdawgs/fastify-floc-off/commit/03d8415cd407b2e5d6cc05a23bf47fbaa2bf3489))
* **scripts:** sort eslint comments alphabetically ([f9a0a93](https://github.com/Fdawgs/fastify-floc-off/commit/f9a0a93d16a550c051347598ec8d0dd3a9d72330))
* **scripts:** use js script to check licenses ([#156](https://github.com/Fdawgs/fastify-floc-off/issues/156)) ([f3a63f2](https://github.com/Fdawgs/fastify-floc-off/commit/f3a63f2e0c6ee6026c34d28b5571269358937be1))


### Documentation

* **changelog:** spelling mistake ([189a192](https://github.com/Fdawgs/fastify-floc-off/commit/189a1924b96ffdec8155c3c9e4ee9b4144a3e09d))
* **contributing:** add link to conventional config ([#158](https://github.com/Fdawgs/fastify-floc-off/issues/158)) ([56bd5bc](https://github.com/Fdawgs/fastify-floc-off/commit/56bd5bc780d6f65ae93f5428a30492f223205bf0))


### Continuous integration

* **dependabot:** change commit message prefix for gh actions to `ci` ([#157](https://github.com/Fdawgs/fastify-floc-off/issues/157)) ([676b01a](https://github.com/Fdawgs/fastify-floc-off/commit/676b01ad28b7d933b7a3f149a3f82e9bf8a64e4c))
* **deps:** bump coverallsapp/github-action from 1.2.4 to 2.0.0 ([#159](https://github.com/Fdawgs/fastify-floc-off/issues/159)) ([faff339](https://github.com/Fdawgs/fastify-floc-off/commit/faff33971bc5484dfe8d7a90d283c64f7b63e85e))


### Dependencies

* **deps-dev:** bump dev dependencies ([2e011e6](https://github.com/Fdawgs/fastify-floc-off/commit/2e011e60a108fc4324e8da06766e6784bfb458ad))
* **deps:** bump coverallsapp/github-action from 1.1.3 to 1.2.3 ([#153](https://github.com/Fdawgs/fastify-floc-off/issues/153)) ([e1496f1](https://github.com/Fdawgs/fastify-floc-off/commit/e1496f14b4ae196320b1f85004aa68839e95830f))
* **deps:** bump coverallsapp/github-action from 1.2.3 to 1.2.4 ([#154](https://github.com/Fdawgs/fastify-floc-off/issues/154)) ([b0c0417](https://github.com/Fdawgs/fastify-floc-off/commit/b0c041740a8ca1749dbd901070dc3bb9cd2286ad))

## [2.1.0](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.6...v2.1.0) (2023-02-15)

### Features

-   add nodenext compatibility ([0480910](https://github.com/Fdawgs/fastify-floc-off/commit/0480910a632a5865d6b4f63ecbef63f04c999369))

### Documentation

-   **readme:** add acknowledgements section ([ab27d82](https://github.com/Fdawgs/fastify-floc-off/commit/ab27d827c0e01708a9a6cc1c8ca9dc7562d887e3))

## [2.0.6](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.5...v2.0.6) (2023-02-13)

### Continuous integration

-   **cd:** use sentence case for changelog headings ([721b31f](https://github.com/Fdawgs/fastify-floc-off/commit/721b31fbcf3005b7bc9c8271580cc66c6342f7ea))

### Dependencies

-   **deps-dev:** bump dev dependencies ([49baad0](https://github.com/Fdawgs/fastify-floc-off/commit/49baad07df232821333e5b0055ff99ae83c4d323))

### Documentation

-   **contributing:** update title style guidance ([9336051](https://github.com/Fdawgs/fastify-floc-off/commit/93360510d762486a39461fd282d625d3ba92b718))
-   **readme:** rename intro to overview ([35da4a0](https://github.com/Fdawgs/fastify-floc-off/commit/35da4a00bfeccb7f5e96e9047b84800f2090f5b6))

### Miscellaneous

-   rename master branch to main ([#148](https://github.com/Fdawgs/fastify-floc-off/issues/148)) ([880a2ce](https://github.com/Fdawgs/fastify-floc-off/commit/880a2ce53db3c26e2e1631343d55f195b656e621))
-   use sentence case over ap style for titles and headings ([c23fa0d](https://github.com/Fdawgs/fastify-floc-off/commit/c23fa0dc7b577681bf358ea5ce7d309c34fff90f))

## [2.0.5](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.4...v2.0.5) (2023-01-31)

### Bug fixes

-   **index:** add to permissions-policy header if one already exists ([#144](https://github.com/Fdawgs/fastify-floc-off/issues/144)) ([2b12ab4](https://github.com/Fdawgs/fastify-floc-off/commit/2b12ab448314a7f05b38eb8d6f951e26aaec55db))

### Miscellaneous

-   **license:** update license year ([b0556c0](https://github.com/Fdawgs/fastify-floc-off/commit/b0556c0073eb052226437ce66b998a53f6501297))

### Documentation

-   **contributing:** update min node version ([4744d1e](https://github.com/Fdawgs/fastify-floc-off/commit/4744d1e56a5be7d496ed72aae4ccd79c05a4d322))
-   grammar and clarity fixes ([b7273e9](https://github.com/Fdawgs/fastify-floc-off/commit/b7273e9a1398b5a9d5f1ea3335a602a504d5a4f8))
-   **readme:** remove fluff ([06ff83b](https://github.com/Fdawgs/fastify-floc-off/commit/06ff83b2ddb65dcf1e8b0140c244c64238be76df))

### Dependencies

-   **deps-dev:** bump dev dependencies ([bb5d908](https://github.com/Fdawgs/fastify-floc-off/commit/bb5d908840c85a9633f7005a4e8d00506a2cf3c9))
-   **deps:** bump actions/dependency-review-action from 2 to 3 ([#141](https://github.com/Fdawgs/fastify-floc-off/issues/141)) ([2f401a7](https://github.com/Fdawgs/fastify-floc-off/commit/2f401a7d2fd24e4e4b9e5b1ba9ee3097741c5a19))
-   **deps:** bump fastify-plugin from 4.3.0 to 4.5.0 ([752bde3](https://github.com/Fdawgs/fastify-floc-off/commit/752bde3cf38cf102f992aa2103b3859d24ac4ac9))

## [2.0.4](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.3...v2.0.4) (2022-10-25)

### Continuous integration

-   **cd:** remove dev values from `package.json` ([#138](https://github.com/Fdawgs/fastify-floc-off/issues/138)) ([2c7f75c](https://github.com/Fdawgs/fastify-floc-off/commit/2c7f75c854fe6f40e804c91b8904eed1b39fd66d))

### Dependencies

-   **deps-dev:** bump dev dependencies ([54ce990](https://github.com/Fdawgs/fastify-floc-off/commit/54ce990429fb41146dc89845956f6bc936ec84a5))
-   **deps:** bump fastify-plugin from 4.2.1 to 4.3.0 ([a7ea7a8](https://github.com/Fdawgs/fastify-floc-off/commit/a7ea7a83f384ca9f3e61d5520fe9af49900a19b9))

## [2.0.3](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.2...v2.0.3) (2022-10-03)

### Documentation

-   **readme:** convert sync async example to sync only ([4737968](https://github.com/Fdawgs/fastify-floc-off/commit/473796819c2cea6d6ee8cde037106f3d0c394770))
-   **readme:** remove redundant statement ([218b43c](https://github.com/Fdawgs/fastify-floc-off/commit/218b43c0f6b79f7f480ae1772458afda99cd5ddf))
-   use shorter urls; remove yarn install guidance ([fe7690d](https://github.com/Fdawgs/fastify-floc-off/commit/fe7690db0097037fad65f4be3ea3f57fdc8029ca))

### Miscellaneous

-   **.husky:** shell path and arg updates ([#132](https://github.com/Fdawgs/fastify-floc-off/issues/132)) ([c98fb33](https://github.com/Fdawgs/fastify-floc-off/commit/c98fb33b5d72d3e498a2e97a610a5ed747f45da2))
-   **.npmignore:** reduce entries ([9d60422](https://github.com/Fdawgs/fastify-floc-off/commit/9d60422d0eb67762707da1e2b6ec7572ddb21815))
-   **.vscode/extensions:** remove unmaintained extension ([f3ff5f8](https://github.com/Fdawgs/fastify-floc-off/commit/f3ff5f83e130eb186c2d2aca9b73c6ef0e3a47db))
-   **\*.ignore:** add clinicjs directory ([d227d4d](https://github.com/Fdawgs/fastify-floc-off/commit/d227d4de9a3472d4db6aa464fb438dede54bff5a))
-   **LICENSE:** remove trailing whitespace ([5dbd665](https://github.com/Fdawgs/fastify-floc-off/commit/5dbd66578ae468f044833f2fdd0f0a328e0c39b7))
-   prefer object destructuring ([#137](https://github.com/Fdawgs/fastify-floc-off/issues/137)) ([4d4f336](https://github.com/Fdawgs/fastify-floc-off/commit/4d4f3360cfbd51134857f85fb714aa1f0d4de2d0))

### Dependencies

-   **deps-dev:** bump eslint-plugin-jest from 26.9.0 to 27.0.1 ([#135](https://github.com/Fdawgs/fastify-floc-off/issues/135)) ([34b5458](https://github.com/Fdawgs/fastify-floc-off/commit/34b54587cd6597e66e91c549b8cff96218d3392d))
-   **deps-dev:** bump jest from 28.1.3 to 29.0.1 ([#134](https://github.com/Fdawgs/fastify-floc-off/issues/134)) ([26988f2](https://github.com/Fdawgs/fastify-floc-off/commit/26988f2f93557ba1e8473be29f156ab3eb608462))
-   **deps:** bump dependencies ([904e991](https://github.com/Fdawgs/fastify-floc-off/commit/904e991fc8076d85c61b49735789d58df3d3359a))

## [2.0.2](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.1...v2.0.2) (2022-08-09)

### Miscellaneous

-   **.npmrc:** disable package-lock generation ([#128](https://github.com/Fdawgs/fastify-floc-off/issues/128)) ([e722bad](https://github.com/Fdawgs/fastify-floc-off/commit/e722bada01654ad40de38f5ec2be6a19d378b419))

### Dependencies

-   **.npmignore:** add `CHANGELOG.md`; reduce package size by ~82% ([#130](https://github.com/Fdawgs/fastify-floc-off/issues/130)) ([18d45da](https://github.com/Fdawgs/fastify-floc-off/commit/18d45dafd80989b59f2b295faa1c77a743fe993c))
-   **deps:** bump dependencies ([#131](https://github.com/Fdawgs/fastify-floc-off/issues/131)) ([f34ab36](https://github.com/Fdawgs/fastify-floc-off/commit/f34ab36c60b72386e6f08c193b0a85c8e715c911))

## [2.0.1](https://github.com/Fdawgs/fastify-floc-off/compare/v2.0.0...v2.0.1) (2022-07-25)

### Miscellaneous

-   **.github/funding:** remove unused keys ([8d7365d](https://github.com/Fdawgs/fastify-floc-off/commit/8d7365ded07f9d05dd601ae491b05f010936054e))
-   **.github:** add `FUNDING.yml` ([f1653b5](https://github.com/Fdawgs/fastify-floc-off/commit/f1653b52d3798741b070691096856256896429b7))
-   **.gitignore:** use latest github ignore template ([0977ef6](https://github.com/Fdawgs/fastify-floc-off/commit/0977ef6c424137fe7c3939951583ead21ff9aa4d))
-   **.prettierignore:** add new paths from `.gitignore` ([4ff9118](https://github.com/Fdawgs/fastify-floc-off/commit/4ff9118d2bfc8d4031c4f2c304e5a557a659b482))
-   ignore pnpm lock file ([67fbd42](https://github.com/Fdawgs/fastify-floc-off/commit/67fbd42a6ddeb1ab799205b0c025b7c63f0beeee))

### Dependencies

-   **dependabot:** increase `open-pull-requests-limit` from 5 to 20 ([4a3fc2b](https://github.com/Fdawgs/fastify-floc-off/commit/4a3fc2bc323d352fee06f41df2d629cf1f680a8d))
-   **deps:** bump actions/dependency-review-action from 1 to 2 ([#125](https://github.com/Fdawgs/fastify-floc-off/issues/125)) ([944b827](https://github.com/Fdawgs/fastify-floc-off/commit/944b827f149055bd3ed53d1d3b044ff8097a2ff1))
-   **deps:** bump fastify-plugin from 3.0.1 to 4.0.0 ([#127](https://github.com/Fdawgs/fastify-floc-off/issues/127)) ([a437977](https://github.com/Fdawgs/fastify-floc-off/commit/a437977dacab00bdb355c2173f89984dd5afcd48))
-   **deps:** bump wagoid/commitlint-github-action from 4 to 5 ([#126](https://github.com/Fdawgs/fastify-floc-off/issues/126)) ([58a9ef2](https://github.com/Fdawgs/fastify-floc-off/commit/58a9ef2ef238e15bcdcea5c303a315cdd93ab1a2))

### Documentation

-   **readme:** update example for fastify v4 ([84161cf](https://github.com/Fdawgs/fastify-floc-off/commit/84161cf17a0882d59962d38a633c9c0962aabe73))

## [2.0.0](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.7...v2.0.0) (2022-05-26)

### ⚠ BREAKING CHANGES

-   -   Dropped support for Fastify v3.x and Node 10.x

### Features

-   support fastify v4.x ([#122](https://github.com/Fdawgs/fastify-floc-off/issues/122)) ([56247e9](https://github.com/Fdawgs/fastify-floc-off/commit/56247e9dd791102ab28cc574c9a1e7972e5cab9f))

### [1.0.7](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.6...v1.0.7) (2022-05-25)

### Documentation

-   **readme:** remove snyk badge ([af7eb11](https://github.com/Fdawgs/fastify-floc-off/commit/af7eb11b06d9fb9d9a1677bec1b19b16af691e12))

### Miscellaneous

-   **.eslintrc:** enable `plugin:jest/style` rules ([#113](https://github.com/Fdawgs/fastify-floc-off/issues/113)) ([b23ebcd](https://github.com/Fdawgs/fastify-floc-off/commit/b23ebcd3f5e58b4013871b08b4216e21e5488a3d))
-   **.github/codeql-config:** remove quotation marks ([53e81b2](https://github.com/Fdawgs/fastify-floc-off/commit/53e81b22fed59fbbe9f82161a3f50825d20ab21a))
-   **.github/workflows/link-check:** use `skip` input ([85f1b3d](https://github.com/Fdawgs/fastify-floc-off/commit/85f1b3dd0d824b1db0da935912cfaa46003f381e))
-   **bug_report:** use node 18 as placeholder for `node-version` ([ebedd18](https://github.com/Fdawgs/fastify-floc-off/commit/ebedd18951942d55b6481e523dff3737159b6763))
-   **ci:** remove quotation marks from step name ([9238948](https://github.com/Fdawgs/fastify-floc-off/commit/92389482e6397ed5d2d83ebb5795cca247a17716))
-   use npm install alias ([c52fc0a](https://github.com/Fdawgs/fastify-floc-off/commit/c52fc0ade2fd8db2a4c949f04d5d670abbe8b35c))

### Continuous integration

-   add dependency-review job ([14f81fd](https://github.com/Fdawgs/fastify-floc-off/commit/14f81fd52fd2e7cb9db794b167668f9074ba3d17))
-   **automerge:** fix context ([7c3cab1](https://github.com/Fdawgs/fastify-floc-off/commit/7c3cab1a244ca1c1d83b36829e2601f3aa0aa8e9))
-   **automerge:** squash automerge prs ([#102](https://github.com/Fdawgs/fastify-floc-off/issues/102)) ([51db005](https://github.com/Fdawgs/fastify-floc-off/commit/51db0051145380e7e4efc5eeb7e1cd17b5b66941))
-   **cd:** update org name for release-please-action ([26aa002](https://github.com/Fdawgs/fastify-floc-off/commit/26aa002bee03023b7671ce37f5febdb77c5a1f12))
-   **cd:** use `lts/*` for node setup in release job ([bcff76c](https://github.com/Fdawgs/fastify-floc-off/commit/bcff76c258cb1d3492b72ecead4998c188cd30f0))
-   check `user.login` is dependabot instead of `actor` ([#115](https://github.com/Fdawgs/fastify-floc-off/issues/115)) ([fc853c1](https://github.com/Fdawgs/fastify-floc-off/commit/fc853c1c0506128e18201205d8c39c0981d68dd5))
-   **ci:** add node 18 to test matrix ([#114](https://github.com/Fdawgs/fastify-floc-off/issues/114)) ([4941eb1](https://github.com/Fdawgs/fastify-floc-off/commit/4941eb1a5075968040572c35cbd1eac2574f5ed9))
-   **ci:** require `unit-tests` job to pass for `save-pr-number` job to run ([2550c32](https://github.com/Fdawgs/fastify-floc-off/commit/2550c32dc62861cf4e130f6425c963669bf790f2))
-   **ci:** use `lts/*` for node setup in lint job ([2c89dd6](https://github.com/Fdawgs/fastify-floc-off/commit/2c89dd63106450d6c94fdaa0f71bfc2761b64c21))
-   **ci:** use `node-version` for node matrix key ([51d4cef](https://github.com/Fdawgs/fastify-floc-off/commit/51d4cef489e481e4c2dc4641e389ade35d07ec5e))
-   **codeql:** only run on pr changes to `.html`, `.js`, and `.yml` files ([0a34500](https://github.com/Fdawgs/fastify-floc-off/commit/0a34500b5b2d61634d50c333326fdc78d09c286b))
-   **codeql:** resolve missing analyses ([9da0a10](https://github.com/Fdawgs/fastify-floc-off/commit/9da0a10c79447158e9e6ee0c845a6e48166d20ac))
-   **codeql:** specify which files to scan during analysis ([bd55ff5](https://github.com/Fdawgs/fastify-floc-off/commit/bd55ff579de9db266db4c27311cc46d57d6bb14e))
-   **link-check:** replace `npx linkinator` call with github action ([67ffdfe](https://github.com/Fdawgs/fastify-floc-off/commit/67ffdfe2bb3ac7bf939237bf5ecf17be10d02f55))
-   only trigger dependency-review on pr ([ce56e18](https://github.com/Fdawgs/fastify-floc-off/commit/ce56e18a6da283853176f3afd2c0ab0c127f317a))
-   reduce workflow permissions to minimum ([97558a7](https://github.com/Fdawgs/fastify-floc-off/commit/97558a7bacbb9bcc48f80f85c33142edc6765cf5))
-   remove git credentials after checkout ([#118](https://github.com/Fdawgs/fastify-floc-off/issues/118)) ([65dedb2](https://github.com/Fdawgs/fastify-floc-off/commit/65dedb22f1c2cfb740021abee5318024e14dd7bd))
-   replace workflow-run-cleanup-action with github concurrency ([3644841](https://github.com/Fdawgs/fastify-floc-off/commit/36448419dff5e451ef07a92e67eae47f0e04e72d))

### Dependencies

-   **deps-dev:** bump @commitlint/cli from 16.3.0 to 17.0.1 ([#120](https://github.com/Fdawgs/fastify-floc-off/issues/120)) ([0637d06](https://github.com/Fdawgs/fastify-floc-off/commit/0637d0653d0e7209176cc717046c48936bcbdb7f))
-   **deps-dev:** bump @commitlint/config-conventional ([#119](https://github.com/Fdawgs/fastify-floc-off/issues/119)) ([05a3e8b](https://github.com/Fdawgs/fastify-floc-off/commit/05a3e8b2e3a95c9c12557eeb4ab2a14cdfbed97d))
-   **deps-dev:** bump eslint-plugin-jsdoc from 38.1.6 to 39.2.9 ([#109](https://github.com/Fdawgs/fastify-floc-off/issues/109)) ([5c90649](https://github.com/Fdawgs/fastify-floc-off/commit/5c90649604d691fc9c5e1586ae66741515c99f96))
-   **deps-dev:** bump husky from 7.0.4 to 8.0.1 ([#121](https://github.com/Fdawgs/fastify-floc-off/issues/121)) ([04e5380](https://github.com/Fdawgs/fastify-floc-off/commit/04e5380ba6c2378d13b50f232e024586be9081e9))
-   **deps-dev:** bump jest from 27.5.1 to 28.0.3 ([#110](https://github.com/Fdawgs/fastify-floc-off/issues/110)) ([02c9166](https://github.com/Fdawgs/fastify-floc-off/commit/02c91661471bb7cfddcb0b522a18f2c13a2e428b))
-   **deps:** bump actions/upload-artifact from 2 to 3 ([#107](https://github.com/Fdawgs/fastify-floc-off/issues/107)) ([696d5e6](https://github.com/Fdawgs/fastify-floc-off/commit/696d5e63d7ba9f3605160aeb09d3edd8ab1e4e85))
-   **deps:** bump github/codeql-action from 1 to 2 ([#108](https://github.com/Fdawgs/fastify-floc-off/issues/108)) ([eafd106](https://github.com/Fdawgs/fastify-floc-off/commit/eafd106fa3abb0662093ddf6961471a873ca166b))

### [1.0.6](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.5...v1.0.6) (2022-03-28)

### Documentation

-   improve readability ([991f362](https://github.com/Fdawgs/fastify-floc-off/commit/991f3625a37691d46f3275419eee31dff958f685))

### Miscellaneous

-   **scripts:** remove redundant gitkraken fix from prepare script ([83943d6](https://github.com/Fdawgs/fastify-floc-off/commit/83943d6f40a4dbdf1443776c2576573c5d6539df))
-   **scripts:** use shorter arg aliases; remove debugging args from jest ([ac15f3b](https://github.com/Fdawgs/fastify-floc-off/commit/ac15f3bfe0151234aa3c209729e4b0e7b3451d00))

### Continuous integration

-   add job step names, workflow comments, and whitespace ([970f4db](https://github.com/Fdawgs/fastify-floc-off/commit/970f4db7202a8725c120ee8d0aeb9cd2338afff6))
-   **codeql-analysis:** remove unused autobuild step ([3648199](https://github.com/Fdawgs/fastify-floc-off/commit/3648199bc37942745cdda65c11e006c3efb04a96))
-   **codeql:** grant minimum permissions to run; rename file ([#98](https://github.com/Fdawgs/fastify-floc-off/issues/98)) ([6ba714f](https://github.com/Fdawgs/fastify-floc-off/commit/6ba714ffb09210672d1b2ed34a14a1dec8587c60))
-   only save pr number artifact for dependabot ([a7525d9](https://github.com/Fdawgs/fastify-floc-off/commit/a7525d930571e4657ebcf5aea68cb13ce544a52d))

### Dependencies

-   **deps-dev:** bump eslint-plugin-jsdoc from 37.9.7 to 38.0.6 ([e501410](https://github.com/Fdawgs/fastify-floc-off/commit/e501410b332d50b6b875bf5db6d9c1df7f6fb5bc))
-   **deps:** bump actions/checkout from 2 to 3 ([6df37d1](https://github.com/Fdawgs/fastify-floc-off/commit/6df37d1ff2556e4c07f99523f12e5ca60573911a))

### Improvements

-   **index:** use `header()` instead of `headers()` ([#101](https://github.com/Fdawgs/fastify-floc-off/issues/101)) ([35cc795](https://github.com/Fdawgs/fastify-floc-off/commit/35cc7957e02dcf735a378668832ea5476e23e773))

### [1.0.5](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.4...v1.0.5) (2022-02-25)

### Miscellaneous

-   **.github:** remove trailing whitespace ([7de0f06](https://github.com/Fdawgs/fastify-floc-off/commit/7de0f06bb71df76d9c7dc61a7cf90faab1c3ccb2))

### Dependencies

-   **dependabot:** ignore minor and patch commit-lint updates ([#87](https://github.com/Fdawgs/fastify-floc-off/issues/87)) ([f6f0c5f](https://github.com/Fdawgs/fastify-floc-off/commit/f6f0c5fe54468ac331d19c7d4019c6c037e32f03))
-   **dependabot:** major tags no longer need ignore support ([b0776cd](https://github.com/Fdawgs/fastify-floc-off/commit/b0776cdc316d89dc4f053be063a02c91738e3a63))
-   **dependabot:** use default open-pull-requests-limit value ([ccbbd8e](https://github.com/Fdawgs/fastify-floc-off/commit/ccbbd8e8fed1af26ae197a100b168646bd780ab6))
-   **deps-dev:** bump dev dependencies ([f73618e](https://github.com/Fdawgs/fastify-floc-off/commit/f73618ef553b14e524229c3d2e48621088a1da94))
-   **deps-dev:** bump eslint-plugin-jest from 25.7.0 to 26.0.0 ([69220ba](https://github.com/Fdawgs/fastify-floc-off/commit/69220ba60dfb59a86e0d5ebc468e60ed8b7c2546))
-   **deps-dev:** unpin prettier version ([9a86e04](https://github.com/Fdawgs/fastify-floc-off/commit/9a86e04e46677ee4c7c494546773353c6b604feb))
-   **deps:** bump actions/github-script from 5 to 6 ([051669a](https://github.com/Fdawgs/fastify-floc-off/commit/051669a80d395bffe4ce775edca991b0bfd4198a))
-   **deps:** bump actions/setup-node from 2 to 3 ([a3fdea0](https://github.com/Fdawgs/fastify-floc-off/commit/a3fdea05c4bb4ea4f00ebdb907ac5628e7a00e5a))

### [1.0.4](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.3...v1.0.4) (2022-01-07)

### Documentation

-   **coc:** reduce verbosity ([16a2def](https://github.com/Fdawgs/fastify-floc-off/commit/16a2defb0bb734768de00a7e6d565b3ee1b71dc7))
-   **contributing:** add mention of husky pre-commit hook ([ada22c8](https://github.com/Fdawgs/fastify-floc-off/commit/ada22c862035dc4d95bebda86f9bbb106093fdc4))
-   **contributing:** add step for `lint:licenses` script ([e0d78c8](https://github.com/Fdawgs/fastify-floc-off/commit/e0d78c8184ad8ab2cd5b3351914f65a075106279))

### Miscellaneous

-   **.prettierrc:** only enable `bracketSameLine` for html ([#63](https://github.com/Fdawgs/fastify-floc-off/issues/63)) ([797d9a3](https://github.com/Fdawgs/fastify-floc-off/commit/797d9a3acd6ed3909c0dc18c86dc9f3c83a0516e))
-   **husky/pre-commit:** add `lint:licenses` script ([#73](https://github.com/Fdawgs/fastify-floc-off/issues/73)) ([5093967](https://github.com/Fdawgs/fastify-floc-off/commit/509396799ed813f4ea112f679a7a366e6455db75))
-   ignore `.yarnclean` ([#74](https://github.com/Fdawgs/fastify-floc-off/issues/74)) ([263ed53](https://github.com/Fdawgs/fastify-floc-off/commit/263ed530488399353c80e6eb60f88c43bb816449))
-   **index:** fix `server` jsdoc tag param type ([4e73240](https://github.com/Fdawgs/fastify-floc-off/commit/4e73240dd1588c4e42e5f15c2e4f931cc91eb42a))

### Continuous integration

-   **cd:** stop `prepare` script running ([#65](https://github.com/Fdawgs/fastify-floc-off/issues/65)) ([7758b27](https://github.com/Fdawgs/fastify-floc-off/commit/7758b274760e6731bac5c005df1f2885c4014ef3))
-   **ci:** do not run clean-up on draft prs ([cc8d3a0](https://github.com/Fdawgs/fastify-floc-off/commit/cc8d3a00000a1bc2d9c22f70b1f945228d492df7))
-   remove spellcheck workflow ([#84](https://github.com/Fdawgs/fastify-floc-off/issues/84)) ([500b258](https://github.com/Fdawgs/fastify-floc-off/commit/500b25883987ae63c8a6c3a54a799e8595003307))
-   **spell-check:** do not run on draft prs ([7560aae](https://github.com/Fdawgs/fastify-floc-off/commit/7560aae9113d85830619701dbfd46e4870dcb7c8))
-   trigger workflows when drafts marked as "ready to review" ([#67](https://github.com/Fdawgs/fastify-floc-off/issues/67)) ([5266ebc](https://github.com/Fdawgs/fastify-floc-off/commit/5266ebce11cd1b60cc5577df2b39cce7680be343))

### Dependencies

-   **dependabot:** ignore minor and patch github-actions updates ([#68](https://github.com/Fdawgs/fastify-floc-off/issues/68)) ([c8cde67](https://github.com/Fdawgs/fastify-floc-off/commit/c8cde674726d2fa79487f07009951fd9efbba803))
-   **dependabot:** ignore minor and patch release-please-action updates ([#77](https://github.com/Fdawgs/fastify-floc-off/issues/77)) ([cdbbcf4](https://github.com/Fdawgs/fastify-floc-off/commit/cdbbcf4b3038561bd99ad799153721089ddd43ca))
-   **deps-dev:** bump @commitlint/cli from 13.2.1 to 14.1.0 ([fc255dc](https://github.com/Fdawgs/fastify-floc-off/commit/fc255dca1bd6c5b79e5072913ee665399729b9de))
-   **deps-dev:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([3511356](https://github.com/Fdawgs/fastify-floc-off/commit/3511356744bbf25c5206c575cf8a86413bc6b2f7))
-   **deps-dev:** bump @commitlint/cli from 15.0.0 to 16.0.1 ([93ea8df](https://github.com/Fdawgs/fastify-floc-off/commit/93ea8df30a0f8f016422a9c8f843f2d30efbfb5f))
-   **deps-dev:** bump @commitlint/config-conventional ([c865c75](https://github.com/Fdawgs/fastify-floc-off/commit/c865c75df7a8173cef0a2440bc5a12fd39738c0f))
-   **deps-dev:** bump @commitlint/config-conventional ([93e89ff](https://github.com/Fdawgs/fastify-floc-off/commit/93e89ff91a3d94f7872d690a3190c832643195a4))
-   **deps-dev:** bump @commitlint/config-conventional ([e220eb1](https://github.com/Fdawgs/fastify-floc-off/commit/e220eb19f26acfc5e0b9f1caa60e4c143897c05c))
-   **deps-dev:** bump eslint from 7.32.0 to 8.6.0 ([3a208f4](https://github.com/Fdawgs/fastify-floc-off/commit/3a208f4127f7fa3b723b520274345d288655540f))
-   **deps-dev:** bump eslint-config-airbnb-base from 14.2.1 to 15.0.0 ([49947ff](https://github.com/Fdawgs/fastify-floc-off/commit/49947ffc69d149f2bb27e33c282d3306e1ed05d9))
-   **deps-dev:** bump eslint-plugin-promise from 5.2.0 to 6.0.0 ([38182a2](https://github.com/Fdawgs/fastify-floc-off/commit/38182a224edf8ef7f311fbce778cb2b08fd5304f))
-   **deps-dev:** bump prettier from 2.4.1 to 2.5.0 ([a0df2bf](https://github.com/Fdawgs/fastify-floc-off/commit/a0df2bf6dfd932de325da1c8f15a62f2d48a84c2))
-   **deps-dev:** bump prettier from 2.5.0 to 2.5.1 ([4a8569c](https://github.com/Fdawgs/fastify-floc-off/commit/4a8569c15fd7f7671ba9c1f0d23b3db234d76841))
-   **deps:** bump GoogleCloudPlatform/release-please-action ([7c62c19](https://github.com/Fdawgs/fastify-floc-off/commit/7c62c19c8c0c921c5052d1cc2fd2b67bf4779967))
-   **deps:** bump GoogleCloudPlatform/release-please-action from 2 to 3 ([d917de8](https://github.com/Fdawgs/fastify-floc-off/commit/d917de89a90549c546170ad62f04ca6bedf20329))

### [1.0.3](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.2...v1.0.3) (2021-10-29)

### Continuous integration

-   **automerge:** update location of octokit rest methods ([0e82ead](https://github.com/Fdawgs/fastify-floc-off/commit/0e82ead92e0dd6f2f87e2ab545a4cd099fc14516))
-   **ci:** revert to workflow-run-clean-action from github concurrency ([2aa77ca](https://github.com/Fdawgs/fastify-floc-off/commit/2aa77ca05c4752b0010f77beb3a895aec5608d1e))

### Miscellaneous

-   **.eslintrc:** remove inaccurate sourcetype ([#50](https://github.com/Fdawgs/fastify-floc-off/issues/50)) ([d8ed606](https://github.com/Fdawgs/fastify-floc-off/commit/d8ed606d41e4a777e53e2695ccb25baeeb839c5e))
-   **.eslintrc:** remove redundant `impliedStrict` option ([#52](https://github.com/Fdawgs/fastify-floc-off/issues/52)) ([944ed87](https://github.com/Fdawgs/fastify-floc-off/commit/944ed875b4417fe04442e826f6c87c33d139da3c))
-   **.eslintrc:** set correct ecmascript version ([#39](https://github.com/Fdawgs/fastify-floc-off/issues/39)) ([bd46255](https://github.com/Fdawgs/fastify-floc-off/commit/bd46255f351285051881ac60183992bf512e6208))
-   **.husky/.gitignore:** remove now redundant file ([38199a8](https://github.com/Fdawgs/fastify-floc-off/commit/38199a8f107d94f40b895dfe5f7cf6e14c957695))
-   **.prettierrc:** enable `bracketsameline` option ([336b0ed](https://github.com/Fdawgs/fastify-floc-off/commit/336b0ed16982548526dd4ae152d7553eddca41f1))
-   **.prettierrc:** override defaults for html, css, and scss files ([#40](https://github.com/Fdawgs/fastify-floc-off/issues/40)) ([e9cd573](https://github.com/Fdawgs/fastify-floc-off/commit/e9cd57371c640ee7897cbfe29a69911465e0286c))
-   **.vscode:** add `mhutchie.git-graph` extension ([085479a](https://github.com/Fdawgs/fastify-floc-off/commit/085479a64a5f15e927b8cf8857094b68c2274cd6))
-   **.vscode:** remove deprecated settings ([#51](https://github.com/Fdawgs/fastify-floc-off/issues/51)) ([38d4b67](https://github.com/Fdawgs/fastify-floc-off/commit/38d4b673918a4f2fbb6e26af6ed9d09f2e1154d5))

### Documentation

-   bump coc from v2.0.0 to v2.1.0 ([#53](https://github.com/Fdawgs/fastify-floc-off/issues/53)) ([939cf51](https://github.com/Fdawgs/fastify-floc-off/commit/939cf510374fecd1c7bfc69ecba8a0f11799134b))

### Dependencies

-   **deps-dev:** add eslint-plugin-security-node ([#41](https://github.com/Fdawgs/fastify-floc-off/issues/41)) ([00db130](https://github.com/Fdawgs/fastify-floc-off/commit/00db13030ab45f727acf35cc34c1ee649752e541))
-   **deps-dev:** bump dev dependencies ([#60](https://github.com/Fdawgs/fastify-floc-off/issues/60)) ([e8f3b93](https://github.com/Fdawgs/fastify-floc-off/commit/e8f3b93f731e30a09ab8eba09850c56569991135))
-   **deps-dev:** bump eslint-plugin-jest from 24.7.0 to 25.2.2 ([e16c871](https://github.com/Fdawgs/fastify-floc-off/commit/e16c87160bec68d10566faef9588f79cdbde3633))
-   **deps-dev:** bump eslint-plugin-jsdoc from 36.1.1 to 37.0.3 ([106412f](https://github.com/Fdawgs/fastify-floc-off/commit/106412f8226c816c4428506cacc498467513e505))
-   **deps-dev:** bump prettier from 2.3.2 to 2.4.1 ([b8316d3](https://github.com/Fdawgs/fastify-floc-off/commit/b8316d32298ae25131180cdf62b8bf396e0ee425))
-   **deps:** bump actions/checkout from 2.3.4 to 2.3.5 ([42c7bdc](https://github.com/Fdawgs/fastify-floc-off/commit/42c7bdcf3df84ede028397165c98cd8db60cd111))
-   **deps:** bump actions/github-script from 4.1 to 5 ([08a9724](https://github.com/Fdawgs/fastify-floc-off/commit/08a9724ee02f5ee78ad00343f892ef361377b8ec))
-   **deps:** bump actions/setup-node from 2.4.0 to 2.4.1 ([3ad60a8](https://github.com/Fdawgs/fastify-floc-off/commit/3ad60a8c52ab700c65b2fd7289372b5fe8842796))
-   **deps:** bump GoogleCloudPlatform/release-please-action ([99e9e9f](https://github.com/Fdawgs/fastify-floc-off/commit/99e9e9f5ef43bd3039f3316759440c5b78284cc2))
-   **deps:** bump GoogleCloudPlatform/release-please-action ([d8bf0d5](https://github.com/Fdawgs/fastify-floc-off/commit/d8bf0d535855f7623e50f23be6768f9c2465a220))
-   **deps:** bump wagoid/commitlint-github-action from 4.1.1 to 4.1.4 ([77dd11e](https://github.com/Fdawgs/fastify-floc-off/commit/77dd11eaf037b15fac1521fd795cf67f52b7601c))
-   **deps:** bump wagoid/commitlint-github-action from 4.1.4 to 4.1.9 ([7bb7c56](https://github.com/Fdawgs/fastify-floc-off/commit/7bb7c5626cc2a2ee92a8f507f362b593402a371c))

### [1.0.2](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.1...v1.0.2) (2021-09-06)

### Documentation

-   **readme:** grammar and wordiness fixes ([bf30cbf](https://github.com/Fdawgs/fastify-floc-off/commit/bf30cbf90f94dd5ca340fee9b81bf8cb7fda9092))
-   **readme:** update contributing section ([83df0b3](https://github.com/Fdawgs/fastify-floc-off/commit/83df0b3567c6c377f5e0492b8f43c3ab3df41bae))

### Miscellaneous

-   **.github:** use new YAML configured GitHub issue forms ([#35](https://github.com/Fdawgs/fastify-floc-off/issues/35)) ([81aa63e](https://github.com/Fdawgs/fastify-floc-off/commit/81aa63eb923a07da1e741ad7ae1c7899ea84e663))
-   **ci:** replace `node-version` key with shorter `node` ([#14](https://github.com/Fdawgs/fastify-floc-off/issues/14)) ([099340c](https://github.com/Fdawgs/fastify-floc-off/commit/099340c5f27ddf573c50a30a987f73a6713bfd72))
-   **vscode:** disable red hat telemetry ([b57bcf7](https://github.com/Fdawgs/fastify-floc-off/commit/b57bcf734378e96a8e981f0e753361fff41d50ac))
-   **vscode:** remove user space config setting ([96a4f82](https://github.com/Fdawgs/fastify-floc-off/commit/96a4f82706a234f3c1c5d2134b2aa6567a65a702))
-   **workflows:** remove `stale.yml` ([5c66306](https://github.com/Fdawgs/fastify-floc-off/commit/5c66306151ce5d6b21ccccfd59f7efae4c073342))

### Continuous integration

-   **cd:** move perf optimizations and refactoring into same section ([256e987](https://github.com/Fdawgs/fastify-floc-off/commit/256e98760fa071f4919bb7458bf2bb6d79bd426b))
-   **ci:** replace workflow-run-cleanup-action with github concurrency ([#36](https://github.com/Fdawgs/fastify-floc-off/issues/36)) ([ae97274](https://github.com/Fdawgs/fastify-floc-off/commit/ae9727410e4f60bded6ffb2f413fb4fcae22d6fd))
-   fix key usage in `action/setup-node` ([67b257f](https://github.com/Fdawgs/fastify-floc-off/commit/67b257f2168e4e83e33084ceaa876733248537fd))
-   **link-check:** reduce frequency from daily to monthly ([#21](https://github.com/Fdawgs/fastify-floc-off/issues/21)) ([a544aff](https://github.com/Fdawgs/fastify-floc-off/commit/a544aff013f8debaa7d1cbc9d6602ca4accd07f1))

### Dependencies

-   add .npmignore; reduce package size from 12.8kB to 3.9kB ([#37](https://github.com/Fdawgs/fastify-floc-off/issues/37)) ([71e4be1](https://github.com/Fdawgs/fastify-floc-off/commit/71e4be102b26715fe0045c08c87388053dd05762))
-   **deps-dev:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([5ffa2ef](https://github.com/Fdawgs/fastify-floc-off/commit/5ffa2ef384875dc48bcb9f0a4a67ee0799e7f005))
-   **deps-dev:** bump @commitlint/config-conventional ([e005c28](https://github.com/Fdawgs/fastify-floc-off/commit/e005c28438f05ed125ca75a47bcca55ddb510658))
-   **deps-dev:** bump eslint-plugin-jsdoc from 33.3.0 to 35.1.2 ([afd7e92](https://github.com/Fdawgs/fastify-floc-off/commit/afd7e9225a1362a5f1002d2cd1ee71f18a35db95))
-   **deps-dev:** bump eslint-plugin-jsdoc from 35.5.1 to 36.0.6 ([87cb2a5](https://github.com/Fdawgs/fastify-floc-off/commit/87cb2a5049169c6f6836395c4340d971546499c5))
-   **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([dcb877b](https://github.com/Fdawgs/fastify-floc-off/commit/dcb877bd6cd39c8b95460484e15616e7406e63c2))
-   **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([c97caa5](https://github.com/Fdawgs/fastify-floc-off/commit/c97caa5c50cc4d4ce29945fb27ab2746c4f83bbe))
-   **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([83dad6e](https://github.com/Fdawgs/fastify-floc-off/commit/83dad6ea1684f69044689f69b37642a992e3d70d))
-   **deps-dev:** bump prettier from 2.3.0 to 2.3.2 ([a74fe91](https://github.com/Fdawgs/fastify-floc-off/commit/a74fe91c803be36a994662c33b5e1095d71c9a27))
-   **deps:** bump actions/github-script from 4.0.2 to 4.1 ([cb4ae30](https://github.com/Fdawgs/fastify-floc-off/commit/cb4ae30025209de549875739485bfb150a670bd9))
-   **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([b7609e8](https://github.com/Fdawgs/fastify-floc-off/commit/b7609e812c585df95b7ce11bad848b371a59b062))
-   **deps:** bump actions/setup-node from 2.2.0 to 2.3.0 ([d25cb30](https://github.com/Fdawgs/fastify-floc-off/commit/d25cb30d839a4213f48bcc386f8544d8b9a1385c))
-   **deps:** bump actions/setup-node from 2.3.0 to 2.4.0 ([53b492a](https://github.com/Fdawgs/fastify-floc-off/commit/53b492a086fb6074def585b19567d18c1e430feb))
-   **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([e0937e2](https://github.com/Fdawgs/fastify-floc-off/commit/e0937e2d0286ada1bb87e9793e6819d4454dbd53))
-   **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([4a2b86a](https://github.com/Fdawgs/fastify-floc-off/commit/4a2b86a75838a539d48e8566e4d6366344715e7a))
-   **deps:** bump GoogleCloudPlatform/release-please-action ([d1966e8](https://github.com/Fdawgs/fastify-floc-off/commit/d1966e86d5270eb81cb555c7c6510d87dc25f93c))
-   **deps:** bump wagoid/commitlint-github-action from 3.1.1 to 3.1.4 ([e0b9bdb](https://github.com/Fdawgs/fastify-floc-off/commit/e0b9bdbc6804cc8752b7661e46916f7d5b919184))
-   **deps:** bump wagoid/commitlint-github-action from 3.1.4 to 4.1.1 ([048d35c](https://github.com/Fdawgs/fastify-floc-off/commit/048d35cbc1b7aab0093f573e1090f895188de94c))

### [1.0.1](https://github.com/Fdawgs/fastify-floc-off/compare/v1.0.0...v1.0.1) (2021-05-06)

### Documentation

-   grammar and readability fixes ([912958f](https://github.com/Fdawgs/fastify-floc-off/commit/912958ffbc9f0cf38c41ac485b43971e738daa61))
-   **security:** add missing hyphen ([65b2715](https://github.com/Fdawgs/fastify-floc-off/commit/65b27155eb9ec92f4ec6795c5c194e14d5c76ebd))

### Dependencies

-   **deps-dev:** bump eslint-plugin-jsdoc from 32.3.4 to 33.0.0 ([dfafef3](https://github.com/Fdawgs/fastify-floc-off/commit/dfafef3f0bec52b87a511c895dbc5a6da1801fd8))
-   **deps:** bump GoogleCloudPlatform/release-please-action ([a8b1884](https://github.com/Fdawgs/fastify-floc-off/commit/a8b1884a8137a0a56a1192dfcfd76d61b93dd9b5))
-   **deps:** bump GoogleCloudPlatform/release-please-action ([4ecd92e](https://github.com/Fdawgs/fastify-floc-off/commit/4ecd92e54d8602e66cc915d9a5491f93d592efcc))
-   **deps:** bump typoci/spellcheck-action from v1.0.0 to v1.1.0 ([465f6ba](https://github.com/Fdawgs/fastify-floc-off/commit/465f6ba6dc2e7b99f10fa10d48e894a8bab7dc90))
-   **deps:** bump wagoid/commitlint-github-action from v3.1.0 to v3.1.1 ([f656012](https://github.com/Fdawgs/fastify-floc-off/commit/f656012e4fe6f50becd774080a637732a1128487))

## 1.0.0 (2021-04-28)

### Miscellaneous

-   initial code commit ([1be3232](https://github.com/Fdawgs/fastify-floc-off/commit/1be3232ef0ee6de95c68df49ee4d636b79fe93d1))

### Dependencies

-   **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([a5e8135](https://github.com/Fdawgs/fastify-floc-off/commit/a5e813581cb6e59d83daa8f1a597cf2afed23945))
-   **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([01fdfe2](https://github.com/Fdawgs/fastify-floc-off/commit/01fdfe2ebc3fceecac237633d70b80776d9b4781))
-   **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([dc05865](https://github.com/Fdawgs/fastify-floc-off/commit/dc05865e0098b046e5154feabd95769850c334c9))
-   **deps:** bump GoogleCloudPlatform/release-please-action ([c2d6d63](https://github.com/Fdawgs/fastify-floc-off/commit/c2d6d63eba5361d4f38d7317c8015cc179423ffc))
-   **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.0.0 ([a5a3141](https://github.com/Fdawgs/fastify-floc-off/commit/a5a31416aadd25196534cd48dac6159a3afef2eb))
-   **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([63d9774](https://github.com/Fdawgs/fastify-floc-off/commit/63d977416956242073221dd9928f3f761fafe6e9))
