// @flow

import { peerDependencies } from '../package.json';
import { plugins } from '../src/eslintrc.json';


const normalizePluginName = (pluginName: string): string =>
  (pluginName.startsWith('@') ? pluginName : `eslint-plugin-${pluginName}`);

const normalizedPluginNames: $ReadOnlyArray<string> = plugins.map(
  (pluginName: string): string => normalizePluginName(pluginName),
);

const constantPeerDeps: $ReadOnlyArray<string> = ['eslint'];
const targetPeerDependencies: Set<string> = new Set([
  ...constantPeerDeps,
  ...normalizedPluginNames,
]);
const actualPeerDependencies: Set<string> = new Set(Object.keys(peerDependencies));

test('peerDependencies', () => {
  expect(actualPeerDependencies).toEqual(targetPeerDependencies);
});
