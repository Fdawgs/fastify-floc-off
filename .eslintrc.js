"use strict";

module.exports = {
	env: {
		es2023: true,
		node: true,
	},
	extends: [
		"airbnb-base",
		"plugin:@eslint-community/eslint-comments/recommended",
		"plugin:jsdoc/recommended",
		"plugin:promise/recommended",
		"plugin:regexp/recommended",
		"plugin:security/recommended-legacy",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: 2023,
		// Explicitly tell ESLint to parse JavaScript as CommonJS, as airbnb-base sets this to "modules" for ECMAScript
		sourceType: "script",
	},
	plugins: ["import", "jsdoc", "promise", "regexp", "security"],
	root: true,
	rules: {
		"@eslint-community/eslint-comments/disable-enable-pair": "off",
		"@eslint-community/eslint-comments/no-unused-disable": "error",
		"@eslint-community/eslint-comments/require-description": "error",
		"import/no-extraneous-dependencies": "error",
		"jsdoc/check-syntax": "error",
		"jsdoc/require-description-complete-sentence": "error",
		"jsdoc/require-hyphen-before-param-description": "error",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"no-restricted-syntax": [
			"error",
			{
				selector: "LabeledStatement",
				message:
					"Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
			},
			{
				selector: "WithStatement",
				message:
					"`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
			},
		],
		"prefer-destructuring": ["error", { object: true, array: false }],
		"promise/prefer-await-to-callbacks": "warn",
		"promise/prefer-await-to-then": "warn",
		"security/detect-object-injection": "off",
		strict: ["error", "global"],
	},
};
