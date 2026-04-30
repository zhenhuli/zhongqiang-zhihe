import { describe, it, expect } from 'vitest';
import { formatDate, isToday, getDaysInMonth } from './date';

describe('date utils', () => {
  describe('formatDate', () => {
    it('should format date with default format', () => {
      const date = new Date(2024, 0, 15);
      expect(formatDate(date)).toBe('2024-01-15');
    });

    it('should format date with custom format', () => {
      const date = new Date(2024, 0, 15, 10, 30, 45);
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-01-15 10:30:45');
    });
  });

  describe('isToday', () => {
    it('should return true for today', () => {
      expect(isToday(new Date())).toBe(true);
    });

    it('should return false for past dates', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(isToday(yesterday)).toBe(false);
    });
  });

  describe('getDaysInMonth', () => {
    it('should return 31 for January', () => {
      expect(getDaysInMonth(2024, 1)).toBe(31);
    });

    it('should return 29 for February in leap year', () => {
      expect(getDaysInMonth(2024, 2)).toBe(29);
    });

    it('should return 28 for February in non-leap year', () => {
      expect(getDaysInMonth(2023, 2)).toBe(28);
    });
  });
});
