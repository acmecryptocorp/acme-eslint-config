#! make

MAKEFLAGS += --silent
GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

build:
	yarn mergy general/configs/* --out general/eslintrc.json -f json
	yarn mergy general/configs/* --out general/eslintrc.yaml -f yaml

	yarn mergy flow/configs/* --out flow/eslintrc.json -f json
	yarn mergy flow/configs/* --out flow/eslintrc.yaml -f yaml

	make prettier
.PHONY: build

clean:
	rm -rf node_modules flow-typed \
	yarn.lock yarn-error.log \
	dist coverage reports
.PHONY: clean

test: build
	NODE_ENV=test \
	yarn test
.PHONY: test

install:
	yarn install && \
	yarn flow-typed install
	yarn outdated
	yarn audit
.PHONY: install

lint:
	yarn eslint .
.PHONY: lint

flow:
	yarn flow check
.PHONY: flow

full-test: lint flow test
.PHONY: full-test

prettier:
	yarn prettier --write "{general,flow}/**/*.{js,json,yaml}" "index.js"
.PHONY: prettier

test-publish: build full-test
	yarn semantic-release --dry-run --branch $(GIT_BRANCH)
.PHONY: test-publish

publish:
	yarn semantic-release
.PHONY: publish
