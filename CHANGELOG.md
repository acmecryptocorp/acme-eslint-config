# [1.1.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v1.0.0...v1.1.0) (2019-07-11)


### Features

* **rules:eslint:** remove length restriction for comments ([b1e67e1](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/b1e67e1))
* **rules:eslint:** turn off arrow-parens rule ([ffdef8b](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/ffdef8b))
* **rules:unicorn:** add unicorn/no-zero-fractions rule ([6940987](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/6940987)), closes [#47](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/47)
* **rules:unicorn:** add unicorn/prefer-flat-map rule ([fcdb04b](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/fcdb04b)), closes [#47](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/47)
* **rules:unicorn:** add unicorn/prefer-includes rule ([358ef39](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/358ef39)), closes [#47](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/47)

# [1.0.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.8.0...v1.0.0) (2019-05-15)


### Features

* add @acme/eslint-plugin ([623b9b2](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/623b9b2))


### BREAKING CHANGES

* v1.0.0

# [0.8.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.7.1...v0.8.0) (2019-03-21)


### Features

* **rules:eslint:** set max length of a line to 160. ([12c2f97](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/12c2f97)), closes [#43](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/43)

## [0.7.1](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.7.0...v0.7.1) (2019-03-20)


### Bug Fixes

* **rules:import:** turn off import/group-exports for files with '.flow.js' or '.types.js' extensions ([a113a3d](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/a113a3d))

# [0.7.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.6.0...v0.7.0) (2019-03-20)


### Features

* **rules:eslint:** turn off no-use-before-define for file with '.flow.js' extension ([e075c04](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/e075c04)), closes [#40](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/40)
* **rules:eslint:** turn off prefer-destructuring ([21f34ab](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/21f34ab)), closes [#42](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/42)
* **rules:flowtype:** turn off flowtype/generic-spacing ([28d2a04](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/28d2a04)), closes [#41](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/41)
* **rules:import:** add eslint-plugin-import rules ([508984d](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/508984d)), closes [#12](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/12)

# [0.6.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.5.1...v0.6.0) (2019-03-14)


### Features

* **rules:eslint:** allow not to separate single-line class members with an empty line ([fc0bc0f](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/fc0bc0f)), closes [#36](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/36)
* **rules:filenames:** allow to use digits in filename if followed by a dot ([53e569f](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/53e569f)), closes [#39](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/39)
* **rules:flowtype:** allow to use flow-like utility type names ([d7d25ed](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/d7d25ed)), closes [#38](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/38)
* **rules:flowtype:** turn off flowtype/require-types-at-top rule ([4b81247](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/4b81247)), closes [#37](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/issues/37)

## [0.5.1](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.5.0...v0.5.1) (2019-03-11)


### Bug Fixes

* **package.json:** fix wrong app main file ([ccb3988](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/ccb3988))

# [0.5.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.4.1...v0.5.0) (2019-03-11)


### Features

* **rules:** add eslint-plugin-sort-class-members ([dc83ae9](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/dc83ae9))
* **rules:** turn off implicit-arrow-linebreak ([f258b63](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/f258b63))

## [0.4.1](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.4.0...v0.4.1) (2019-03-05)


### Bug Fixes

* **flowtype:** fix regexp for flowtype/type-id-match ([27d7514](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/27d7514))

# [0.4.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.3.0...v0.4.0) (2019-03-04)


### Features

* **rules:filenames:** add regex to filenames/match-regex rule ([34f2639](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/34f2639))
* **rules:flowtype:** Allow to use Sig or Signature in place of Type in type aliases names ([4281334](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/4281334))

# [0.3.0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/compare/v0.2.0...v0.3.0) (2019-03-01)


### Features

* **rules:** add elsint-plugin-flowtype rules ([21620c6](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/21620c6))
* **rules:** change some rules ([22149c0](https://gitlab.acmecryptocorp.io/andrew.yaushev/eslint-config/commit/22149c0))
