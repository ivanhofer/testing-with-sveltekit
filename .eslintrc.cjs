module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier', 'plugin:vitest-globals/recommended'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
		'vitest-globals/env': true
	}
};
