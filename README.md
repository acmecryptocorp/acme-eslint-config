# @acmecryptocorp/eslint-config

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Description

**Acme Crypto Corp's** extensible config for [ESlint](https://eslint.org/).

## Installation

Install the **config**

```sh
npm install -D @acmecryptocorp/eslint-config
```

```sh
yarn add --dev @acmecryptocorp/eslint-config
```

and **peer dependencies**:

```sh
npx install-peerdeps @acmecryptocorp/eslint-config
```

or manually:

**npm**:

```sh
npm install -D eslint \
  @acmecryptocorp/eslint-plugin \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-plugin-eslint-comments \
  eslint-plugin-filenames \
  eslint-plugin-flowtype \
  eslint-plugin-import \
  eslint-plugin-no-loops \
  eslint-plugin-optimize-regex \
  eslint-plugin-promise \
  eslint-plugin-sort-class-members \
  eslint-plugin-unicorn
```

**yarn**:

```sh
yarn add --dev eslint \
  @acmecryptocorp/eslint-plugin \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-plugin-eslint-comments \
  eslint-plugin-filenames \
  eslint-plugin-flowtype \
  eslint-plugin-import \
  eslint-plugin-no-loops \
  eslint-plugin-optimize-regex \
  eslint-plugin-promise \
  eslint-plugin-sort-class-members \
  eslint-plugin-unicorn
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
  - "@acmecryptocorp"
  - "@acmecryptocorp/eslint-config/flow"
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

## Links

- [@acmecryptocorp/eslint-plugin](https://github.com/acmecryptocorp/acme-eslint-plugin)
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
