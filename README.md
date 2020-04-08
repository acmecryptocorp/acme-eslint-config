# @acmecryptocorp/eslint-config

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Description

**Acme Crypto Corp's** extensible config for [ESlint](https://eslint.org/).

## Installation

Install the **config**

```shell
npm install -D @acmecryptocorp/eslint-config
```

```shell
yarn add --dev @acmecryptocorp/eslint-config
```

and **peer dependencies**:

```shell
npx install-peerdeps --dev @acmecryptocorp/eslint-config
```

or manually:

**npm**:

```shell
npm install -D \
  @acmecryptocorp/eslint-plugin@~1.1.1 \
  @typescript-eslint/eslint-plugin@~2.17.0 \
  eslint@^6.8.0 \
  eslint-config-airbnb-base@~14.0.0 \
  eslint-config-prettier@~6.9.0 \
  eslint-import-resolver-ts@~0.4.2 \
  eslint-plugin-eslint-comments@~3.1.1 \
  eslint-plugin-filenames@~1.3.2 \
  eslint-plugin-flowtype@~4.6.0 \
  eslint-plugin-import@2.18.2 \
  eslint-plugin-no-loops@~0.3.0 \
  eslint-plugin-optimize-regex@~1.1.7 \
  eslint-plugin-promise@~4.1.1 \
  eslint-plugin-sort-class-members@~1.6.0 \
  eslint-plugin-unicorn@~15.0.1 \
  typescript@^3.6.3
```

**yarn**:

```shell
yarn add --dev \
  @acmecryptocorp/eslint-plugin@~1.1.1 \
  @typescript-eslint/eslint-plugin@~2.17.0 \
  eslint@^6.8.0 \
  eslint-config-airbnb-base@~14.0.0 \
  eslint-config-prettier@~6.9.0 \
  eslint-import-resolver-ts@~0.4.2 \
  eslint-plugin-eslint-comments@~3.1.1 \
  eslint-plugin-filenames@~1.3.2 \
  eslint-plugin-flowtype@~4.6.0 \
  eslint-plugin-import@2.18.2 \
  eslint-plugin-no-loops@~0.3.0 \
  eslint-plugin-optimize-regex@~1.1.7 \
  eslint-plugin-promise@~4.1.1 \
  eslint-plugin-sort-class-members@~1.6.0 \
  eslint-plugin-unicorn@~15.0.1 \
  typescript@^3.6.3
```

## Usage

Add desired configuration to your `.eslintrc`:

#### Example:

**.eslintrc.json**

```json
"extends": [
  "@acmecryptocorp",
  "@acmecryptocorp/eslint-config/flow"
]
```

**.eslintrc.yml**

```yaml
extends:
  - '@acmecryptocorp'
  - '@acmecryptocorp/eslint-config/flow'
```

## Notes

This config is recommended to be used alongside [**Prettier**](https://prettier.io/).

See: [@acmecryptocorp/prettier-config](https://github.com/acmecryptocorp/prettier-config)

## Configurations

#### @acmecryptocorp

General configuration.

Configuration files: [`json`](general/eslintrc.json), [`yaml`](general/eslintrc.yaml).

#### @acmecryptocorp/eslint-config/flow

[Flow](https://flow.org/) related configuration.

Configuration files: [`json`](flow/eslintrc.json), [`yaml`](flow/eslintrc.yaml).

#### @acmecryptocorp/eslint-config/typescript

Configuration for [Typescript](https://www.typescriptlang.org/)

**Important**: You must specify path to your **typescript configuration file** in parser options in your `.eslintrc`.

Example:

```yaml
parserOptions:
  project: 'tsconfig.json'
```

Configuration files: [`json`](typescript/eslintrc.json), [`yaml`](typescript/eslintrc.yaml).

#### @acmecryptocorp/eslint-config/typescript-beta

**DEPRECTATED**

**Beta** configuration for [Typescript](https://www.typescriptlang.org/)

Configuration files: [`json`](typescript-beta/eslintrc.json), [`yaml`](typescript-beta/eslintrc.yaml).

## Links

- [@acmecryptocorp/eslint-plugin](https://github.com/acmecryptocorp/acme-eslint-plugin)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-no-loops](https://github.com/buildo/eslint-plugin-no-loops)
- [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
