import {join, resolve} from 'path';
import {Container} from 'typescript-ioc';
import {Matchers, Pact} from '@pact-foundation/pact';

import {CargoItemsApi} from '../../src/services';

const npmPackage = require(join(process.cwd(), 'package.json'));
const consumerName = npmPackage.name;

describe('cargo-items.service', () => {
  test('canary verifies test infrastructure', () => {
    expect(true).toEqual(true);
  });
});