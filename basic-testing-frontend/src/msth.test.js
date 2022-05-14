import { expect, it } from 'vitest';
import { add } from './math';

it('Should sum array members', () => {
  const result = add([1, 2, 3]);

  expect(result).toBe(6);
});

it('Should throw error if no args added', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});
