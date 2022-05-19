import { generateToken, generateTokenPromise } from './async-example';
import { describe, it, expect } from 'vitest';

describe('async-example.js', () => {
  it('Should return token', () => {
    const email = 'pooyadhgh@gmail.com';
    generateToken(email, (error, token) => {
      expect(token).toBeDefined();
    });
  });

  it('Should return token - promise', async () => {
    const email = 'pooyadhgh@gmail.com';
    const token = await generateTokenPromise(email);
    expect(token).toBeDefined();
  });
});
