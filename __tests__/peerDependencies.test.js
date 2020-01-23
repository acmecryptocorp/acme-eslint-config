// @flow

import { peerDependencies } from '../package.json';
import { plugins as flowPlugins, extends as flowConfigs } from '../flow';
import {
  plugins as typescriptPlugins,
  extends as typescriptsConfis,
} from '../typescript-beta';

import { plugins as generalPlugins, extends as generalConfigs } from '..';

const isScoped = (name: string): boolean => name.startsWith('@');

const normalizeName = (name: string, type: 'config' | 'plugin'): string =>
  isScoped(name) ? name : `eslint-${type}-${name}`;

const normalizePluginName = (name: string): string =>
  normalizeName(name, 'plugin');
const normalizeConfigName = (name: string): string =>
  normalizeName(name, 'config');

const merge = (
  arrays: $ReadOnlyArray<?$ReadOnlyArray<string>>,
): $ReadOnlyArray<string> =>
  arrays.reduce(
    (
      acc: $ReadOnlyArray<string>,
      items: ?$ReadOnlyArray<string>,
    ): $ReadOnlyArray<string> => (items == null ? acc : [...acc, ...items]),
    [],
  );

const mergeAndNormalize = (
  arrays: $ReadOnlyArray<?$ReadOnlyArray<string>>,
  normalizeFunction: (string) => string,
): $ReadOnlyArray<string> => merge(arrays).map(normalizeFunction);

test('peerDependencies', () => {
  const plugins: $ReadOnlyArray<string> = mergeAndNormalize(
    [generalPlugins, flowPlugins, typescriptPlugins],
    normalizePluginName,
  );

  const configs: $ReadOnlyArray<string> = mergeAndNormalize(
    [generalConfigs, flowConfigs, typescriptsConfis],
    normalizeConfigName,
  );

  const constantPeerDeps: $ReadOnlyArray<string> = [
    'eslint',
    'typescript',
    'eslint-import-resolver-ts',
  ];
  const targetPeerDependencies: Set<string> = new Set([
    ...constantPeerDeps,
    ...plugins,
    ...configs,
  ]);

  const actualPeerDependencies: Set<string> = new Set(
    Object.keys(peerDependencies),
  );

  expect(actualPeerDependencies).toEqual(targetPeerDependencies);
});
