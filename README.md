# @acmecryptocorp/eslint-config

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Description

**Acme Crypto Corp's** extensible config for [ESlint](https://eslint.org/).

Meant to be used alongside with [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## Installation

Install the **config** and **peer dependencies**:

**npm**:

```
npm install -D @acmecryptocorp/eslint-config
npm install -D eslint eslint-plugin-filenames eslint-plugin-no-loops eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-unicorn eslint-plugin-eslint-comments eslint-plugin-flowtype eslint-plugin-sort-class-members eslint-plugin-import @acmecryptocorp/eslint-plugin
```

**yarn**:

```
yarn add --dev @acmecryptocorp/eslint-config
yarn add --dev eslint eslint-plugin-filenames eslint-plugin-no-loops eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-unicorn eslint-plugin-eslint-comments eslint-plugin-flowtype eslint-plugin-sort-class-members eslint-plugin-import @acmecryptocorp/eslint-plugin
```

## Usage

Add `@acmecryptocorp` to your `.eslintrc`:

**.eslintrc.json**

```json
"extends": [
  "@acmecryptocorp"
]
```

**.eslintrc.yml**

```yaml
extends:
  - '@acmecryptocorp'
```

## Notes

This config is recommended to use with **prettier** `printWidth` set to `100`.

`.prettierrc.yaml`:

```yaml
---
printWidth: 100
```

## Rules

You can find used rules configuration in:

[eslintrc.json](src/eslintrc.json)

or

[eslintrc.yml](src/eslintrc.yml)

## Links

- [@acmecryptocorp/eslint-plugin](https://github.com/acmecryptocorp/acme-eslint-plugin)
- [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)
- [eslint-plugin-no-loops](https://github.com/buildo/eslint-plugin-no-loops)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)
