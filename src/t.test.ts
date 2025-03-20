import { t } from './t';

describe('t', () => {
  it('should be equal to the ANSI escape sequence start', () => {
    expect(t).toBe('\x1b[');
  });
});
