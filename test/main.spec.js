import { expect, test } from 'bun:test';

import JS_PKG_TEMPLATE from '..';

test('TRUE equals TRUE after test run', () => {
  JS_PKG_TEMPLATE();

  expect(true).toBe(true);
});
