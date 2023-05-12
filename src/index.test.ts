import { expect, test } from 'vitest';
import { returnTest } from './index.js';

test('The "test" function', () => {
  expect(returnTest()).toBe('test');
});
