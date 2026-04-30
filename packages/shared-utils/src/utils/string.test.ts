import { describe, it, expect } from 'vitest';
import { capitalize, camelCase, kebabCase, truncate } from './string';

describe('string utils', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('WORLD')).toBe('WORLD');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('camelCase', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
    });

    it('should convert snake_case to camelCase', () => {
      expect(camelCase('hello_world')).toBe('helloWorld');
    });
  });

  describe('kebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
    });

    it('should handle consecutive uppercase letters', () => {
      expect(kebabCase('HelloWorld')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    it('should truncate string longer than length', () => {
      expect(truncate('Hello World', 8)).toBe('Hell...');
    });

    it('should not truncate string shorter than length', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });
  });
});
