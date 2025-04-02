import stylistic from '@stylistic/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginImportCurly from 'eslint-plugin-import-curly';
import pluginVue from 'eslint-plugin-vue';

export default [
    {
        ignores: ['*.d.ts', '**/coverage', '**/dist',],
    },
    {
        files: ['**/*.{ts,mjs}',],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        linterOptions: {
            noInlineConfig: true,
        },
        plugins: {
            '@stylistic': stylistic,
            import: eslintPluginImport,
            'import-curly': eslintPluginImportCurly,
            vue: pluginVue,

        },
        rules: {
            '@stylistic/brace-style': ['error', '1tbs',],
            '@stylistic/comma-dangle': [
                'error',
                {
                    arrays: 'always',
                    dynamicImports: 'always',
                    exports: 'always',
                    functions: 'never',
                    importAttributes: 'always',
                    imports: 'always',
                    objects: 'always',
                },
            ],
            '@stylistic/curly-newline': [
                'error', {
                    consistent: true,
                    minElements: 2,
                    multiline: true,
                },
            ],
            '@stylistic/indent': ['error', 4, {
                ImportDeclaration: 1,
            },],
            '@stylistic/jsx-quotes': ['error', 'prefer-single',],
            '@stylistic/max-len': [
                'error', {
                    code: 120,
                },
            ],
            '@stylistic/no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 0,
                },
            ],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/object-curly-newline': [
                'error',
                {
                    // multiline: true,
                    // minProperties: 1,
                    ExportDeclaration: {
                        minProperties: 4,
                        multiline: true,
                    }, // 多行对象时，属性必须在新的一行
                    ImportDeclaration: {
                        minProperties: 4,
                        multiline: true,
                    },
                    ObjectExpression: {
                        minProperties: 1,
                        multiline: true,
                    },
                    ObjectPattern: {
                        minProperties: 1,
                        multiline: true,
                    },

                },
            ],
            '@stylistic/object-property-newline': [
                'error',
                {
                    allowAllPropertiesOnSameLine: false,
                },
            ],
            '@stylistic/quotes': ['error', 'single',],
            '@stylistic/semi': ['error', 'always',],
            '@stylistic/space-unary-ops': 'error',
            '@stylistic/switch-colon-spacing': 'error',
            'consistent-return': [
                'error',
                {
                    treatUndefinedAsUnspecified: false,
                },
            ],
            curly: 'error',
            eqeqeq: 'error',
            'import-curly/newline': [
                'error', {
                    count: 2,
                },
            ],
            'import/export': 'error',
            'import/newline-after-import': [
                'error',
                {
                    count: 1,
                },
            ],
            'import/no-duplicates': 'error',
            // 'import/order': [
            //     'error',
            //     {
            //         alphabetize: {
            //             caseInsensitive: true,
            //             order: 'asc',
            //         },
            //         groups: [
            //             ['builtin', 'external',],
            //             'internal',
            //             ['parent', 'sibling', 'index',],
            //         ],
            //         'newlines-between': 'always',
            //     },
            // ],
            'no-debugger': 'warn',
            'no-else-return': 'warn',
            'no-empty': [
                'error',
                {
                    allowEmptyCatch: false,
                },
            ],
            'vue/html-indent': [
                'error',
                4,
                {
                    alignAttributesVertically: true,
                    baseIndent: 1,
                },
            ],

        },
    },
];
