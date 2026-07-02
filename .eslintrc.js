const path = require("path");

module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"airbnb",
		"plugin:jsx-a11y/strict",
		"plugin:@typescript-eslint/recommended",
	],
	plugins: [
		"@babel",
		"import",
		"jest",
		"jest-formatting",
		"no-loops",
		"prefer-object-spread",
		"block-function-spacing",
		"react-hooks",
		"i18n-lingui",
		"simple-import-sort",
		"jsx-a11y",
	],
	env: {
		browser: true,
		es6: true,
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
		},
		"import/resolver": {
			node: {
				paths: [path.resolve(__dirname)],
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
		"import/ignore:": ["node_modules"],
	},
	rules: {
		// stuff that's ON
		"i18n-lingui/no-eval-in-placeholder": 1,
		"i18n-lingui/prefer-unicode-ellipsis": 2,
		"i18n-lingui/no-useless-string-wrapping": 1,
		"i18n-lingui/prefer-smartquote": 2,
		"new-cap": [
			2,
			{
				newIsCap: true,
				capIsNew: false,
			},
		],
		"react/react-in-jsx-scope": 2,
		"react-hooks/rules-of-hooks": "error",
		"react/no-string-refs": "error",
		"jsx-a11y/control-has-associated-label": 2,
		"array-callback-return": 2,
		camelcase: 2,
		"consistent-return": 2,
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["to"],
			},
		],
		"jsx-a11y/anchor-has-content": [
			2,
			{
				components: ["Link"],
			},
		],
		"jsx-a11y/alt-text": [2, { img: ["PreloadedImage"] }],
		"jsx-a11y/iframe-has-title": 2,
		"no-param-reassign": 2,
		"no-return-assign": 2,
		"prefer-template": 2,
		"react/no-array-index-key": 2,
		"react/no-find-dom-node": 2,
		"react/no-unused-state": 2,
		"react/prefer-es6-class": 2,
		"react/prefer-stateless-function": 2,
		"react-hooks/exhaustive-deps": "error",
		"no-console": 2,
		"no-lonely-if": 2,
		"no-loops/no-loops": 2,
		"no-restricted-properties": 2,
		"no-useless-escape": 2,
		"prefer-object-spread/prefer-object-spread": 2,
		"valid-jsdoc": [
			2,
			{
				requireReturn: false,
				requireReturnType: false,
				requireParamDescription: true,
				requireReturnDescription: false,
			},
		],
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					// Builtins
					[
						"^(assert|buffer|child_process|fs|http|https|module|net|os|path|querystring)(/.*|$)",
					],
					// External packages - react first, then alphabetical, then @ packages
					// External packages that use subpackages like lodash need to
					// explicitly be added here to be grouped with other externals
					["^react", "^[A-z]+", "^@?\\w", "^lodash/.+$"],
					// Internal packages.
					["^([A-z]+)(/.*|$)"],
					// Parent and sibling imports
					[
						"^\\.\\.(?!/?$)",
						"^\\.\\./?$",
						"^\\./(?=.*/)(?!/?$)",
						"^\\.(?!/?$)",
						"^\\./?$",
					],
					// Non-JS imports.
					["^.+\\.svg$", "^.+\\.s?css$"],
				],
			},
		],

		// stuff that's OFF

		"array-bracket-spacing": 0,
		"arrow-parens": 0,
		"block-spacing": 0,
		"block-function-spacing/space-before-function-props": 0,
		"block-function-spacing/space-around-blocks": 0,
		"brace-style": 0,
		"class-methods-use-this": 0,
		"comma-dangle": 0,
		"comma-spacing": 0,
		"comma-style": 0,
		"computed-property-spacing": 0,
		curly: 0,
		"dot-location": 0,
		"eol-last": 0,
		"func-call-spacing": 0,
		"function-paren-newline": 0,
		"global-require": 0,
		"id-length": 0,
		indent: 0,
		"key-spacing": 0,
		"keyword-spacing": 0,
		"linebreak-style": 0,
		"max-len": 0,
		"new-parens": 0,
		"newline-per-chained-call": 0,
		"no-confusing-arrow": 0,
		"no-else-return": 0,
		"no-irregular-whitespace": 0,
		"no-mixed-operators": 0,
		"no-mixed-spaces-and-tabs": 0,
		"no-multiple-empty-lines": 0,
		"no-new": 0,
		"no-restricted-imports": [
			"error",
			{
				name: "lodash",
				message:
					"Please import using the lodash/[module] syntax, to avoid increasing the bundle size.",
			},
		],
		"no-tabs": 0,
		"no-trailing-spaces": 0,
		"no-underscore-dangle": 0,
		"no-useless-return": 0,
		"no-whitespace-before-property": 0,
		"object-curly-newline": 0,
		"object-curly-spacing": 0,
		"object-property-newline": 0,
		"object-shorthand": 0,
		"one-var-declaration-per-line": 0,
		"padded-blocks": 0,
		"prefer-destructuring": 0,
		"prefer-promise-reject-errors": 0,
		quotes: 0,
		"quote-props": 0,
		"react/prop-types": 0,
		"semi-spacing": 0,
		"semi-style": 0,
		semi: 0,
		"space-before-blocks": 0,
		"space-before-function-paren": 0,
		"space-in-parens": 0,
		"space-infix-ops": 0,
		"space-unary-ops": 0,
		"switch-colon-spacing": 0,
		"template-tag-spacing": 0,
		"unicode-bom": 0,
		"import/first": 0,
		"import/no-extraneous-dependencies": 0,
		"import/no-named-as-default": 0,
		"import/no-named-as-default-member": 0,
		"import/prefer-default-export": 0,
		"react/forbid-prop-types": 0,
		"react/jsx-boolean-value": 0,
		"react/jsx-closing-bracket-location": 0,
		"react/jsx-closing-tag-location": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-indent": 0,
		"react/jsx-indent-props": 0,
		"react/jsx-no-bind": 0,
		"react/no-danger": 0,
		"@typescript-eslint/no-empty-function": "off",

		// Js/Ts conflict resolution
		"@typescript-eslint/no-var-requires": "off",
		"react/require-default-props": "off",
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": ["error"],
		"import/extensions": [
			// conflict with typescript and airbnb
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: ["./tsconfig.json"],
				ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
				sourceType: "module", // Allows for the use of imports
			},
		},
		{
			files: ["*.test.js", "*.test.jsx", "*.test.ts", "*.test.tsx"],
			env: {
				"jest/globals": true,
			},
			globals: {
				waitForExpect: true,
			},
			rules: {
				"no-shadow": 0,
				"react/jsx-closing-tag-location": 0,
				"react/no-array-index-key": 0,
				"react/prop-types": 0,
				"jest-formatting/padding-around-describe-blocks": 2,
				"jest-formatting/padding-around-test-blocks": 2,
				"jest/no-focused-tests": 2,
			},
		},
		{
			files: ["**/*.ts", "**/*.tsx"],
			rules: {
				"no-undef": "off",
				"no-unused-vars": "off",
				"no-spaced-func": "off",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": ["error"],
				"@typescript-eslint/no-unused-vars": "error",
			},
		},
	],
};
