import { formatBooks } from '../../../lib/index';
import { USER_SELF_BOOKS } from '../../mocks/goodreads/userShelf';

describe('Lib Index Index', () => {
  describe('formatBooks', () => {
    it('should return empty array when empty array given', () => {
      expect(formatBooks([]).length).toBe(0);
    });

    it('should return formatted array when correct results given', () => {
      const expectedResult = [
        { author: 'Ayn Rand', name: 'The Fountainhead' },
        { author: 'Michel de Montaigne', name: 'Montaigne: Essays' }
      ];

      expect(formatBooks(USER_SELF_BOOKS)).toMatchObject(expectedResult);
    });
  });
});
