# [2.0.0](https://github.com/acmecryptocorp/acme-eslint-config/compare/v1.0.0...v2.0.0) (2019-10-07)


### chore

* **peer-dependencies:** update peer dependencies ([e06a48e](https://github.com/acmecryptocorp/acme-eslint-config/commit/e06a48e))


### Features

* **rules:unicorn:** turn off `unicorn/no-fn-reference-in-iterator` rule ([6061bba](https://github.com/acmecryptocorp/acme-eslint-config/commit/6061bba))
* add `airbnb-base` config ([2cdbfa7](https://github.com/acmecryptocorp/acme-eslint-config/commit/2cdbfa7))
* **configs:airbnb:** add `eslint-config-airbnb-base` to configuration ([7ee5b97](https://github.com/acmecryptocorp/acme-eslint-config/commit/7ee5b97))
* **configs:flow:** turn off all rules that might conflict with Prettier ([0da581e](https://github.com/acmecryptocorp/acme-eslint-config/commit/0da581e))
* **configs:prettier:** add `eslint-config-prettier` config ([0fe725c](https://github.com/acmecryptocorp/acme-eslint-config/commit/0fe725c))
* separate `flow` related rules from general config ([ffe8cb5](https://github.com/acmecryptocorp/acme-eslint-config/commit/ffe8cb5))
* **rules:** replace `filenames/match-regex` with `unicorn/filename-case` ([a772bba](https://github.com/acmecryptocorp/acme-eslint-config/commit/a772bba))
* **rules:** turn `@acmecryptocorp/require-variable-type` off ([00a2f9e](https://github.com/acmecryptocorp/acme-eslint-config/commit/00a2f9e))
* **rules:eslint:** add `quote` rule ([ee4fcc5](https://github.com/acmecryptocorp/acme-eslint-config/commit/ee4fcc5))
* **rules:flowtype:** allow not to annotate return type in concise arrow functions ([4152478](https://github.com/acmecryptocorp/acme-eslint-config/commit/4152478))
* **rules:flowtype:** change regexp to `^([A-Z][a-z0-9]*)+Type|(\$[A-Z][A-Za-z0-9]*)$` ([dd3ddb2](https://github.com/acmecryptocorp/acme-eslint-config/commit/dd3ddb2))
* **rules:unicorn:** add `unicorn/prefer-reflect-apply` warning ([54e2d91](https://github.com/acmecryptocorp/acme-eslint-config/commit/54e2d91))
* **rules:unicorn:** add `unicorn/prefer-reflect-apply` warning ([c36b813](https://github.com/acmecryptocorp/acme-eslint-config/commit/c36b813))
* **rules:unicorn:** add `unicorn/prefer-reflect-apply` warning ([17b51b7](https://github.com/acmecryptocorp/acme-eslint-config/commit/17b51b7))
* **rules:unicorn:** add `unicorn/prefer-reflect-apply` warning ([eaaf51b](https://github.com/acmecryptocorp/acme-eslint-config/commit/eaaf51b))
* separate `flow` related rules from general config ([a07bb79](https://github.com/acmecryptocorp/acme-eslint-config/commit/a07bb79))
* **rules:unicorn:** add `unicorn/prefer-string-slice` error ([03e5f5e](https://github.com/acmecryptocorp/acme-eslint-config/commit/03e5f5e))
* **rules:unicorn:** add `unicorn/prefer-string-slice` error ([34e0f64](https://github.com/acmecryptocorp/acme-eslint-config/commit/34e0f64))
* **rules:unicorn:** add `unicorn/prefer-string-slice` error ([e80c803](https://github.com/acmecryptocorp/acme-eslint-config/commit/e80c803))
* **rules:unicorn:** add `unicorn/prefer-string-slice` error ([466e308](https://github.com/acmecryptocorp/acme-eslint-config/commit/466e308))
* **rules:unicorn:** turn off `unicorn/no-fn-reference-in-iterator` rule ([5d8b51d](https://github.com/acmecryptocorp/acme-eslint-config/commit/5d8b51d))
* **rules:unicorn:** turn off `unicorn/no-fn-reference-in-iterator` rule ([53cdf64](https://github.com/acmecryptocorp/acme-eslint-config/commit/53cdf64))
* **rules:unicorn:** turn off `unicorn/no-fn-reference-in-iterator` rule ([88f6205](https://github.com/acmecryptocorp/acme-eslint-config/commit/88f6205))


### BREAKING CHANGES

* **rules:** Filenames must be in camelCase or PascalCase
* **rules:flowtype:** Allowed type alias name regexp changed.
* All `flow` related rules aren't included in default configuration. You can access
`flow` configuration via `@acmecryptocorp/eslint-config/flow`.
* **configs:prettier:** This config turns off all rules that are unnecessary or might conflict with
Prettier.
* **configs:airbnb:** Now `eslint-config-airbnb-base` is included as a part of this configuration.
* All `flow` related rules aren't included in default configuration. You can access
`flow` configuration via `@acmecryptocorp/eslint-config/flow`.
* **peer-dependencies:** Requires ESLint 6
