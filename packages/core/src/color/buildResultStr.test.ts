import { buildResultStr } from './buildResultStr'; // 根据实际路径调整

describe('buildResultStr', () => {
  it('should return an empty string for an empty input string', () => {
    expect(buildResultStr('', [])).toBe('');
  });

  it('should return the original string if no ANSI sequences and kinds is empty', () => {
    expect(buildResultStr('Hello', [])).toBe('Hello');
  });

  it('should wrap the string with ANSI sequences if kinds is not empty', () => {
    expect(buildResultStr('Hello', ['31'])).toBe('\x1b[31mHello\x1b[0m');
  });

  it('should wrap the string with ANSI sequences if kinds is not empty', () => {
    expect(buildResultStr('Hello\n', ['31'])).toBe('\x1b[31mHello\x1b[0m\n');
  });
  it('should wrap the string with ANSI sequences if kinds is not empty', () => {
    expect(buildResultStr('Hello\n', ['31'])).not.toBe(
      '\x1b[31mHello\n\x1b[0m',
    );
  });

  it('should wrap the string with ANSI sequences if kinds is not empty', () => {
    expect(buildResultStr('Hello\r\n', ['31'])).toBe(
      '\x1b[31mHello\x1b[0m\r\n',
    );
  });
  it('should wrap the string with ANSI sequences if kinds is not empty', () => {
    expect(buildResultStr('Hello\r\n', ['31'])).not.toBe(
      '\x1b[31mHello\r\n\x1b[0m',
    );
  });

  it('should handle strings with existing ANSI sequences', () => {
    expect(buildResultStr('\x1b[32mGreen\x1b[0m', ['31'])).toBe(
      '\x1b[32mGreen\x1b[0m',
    );
  });

  it('should return the original string if kinds is empty and ANSI sequences are present', () => {
    expect(buildResultStr('\x1b[32mGreen\x1b[0m', [])).toBe(
      '\x1b[32mGreen\x1b[0m',
    );
  });

  /// 嵌套的内存若为直接的 ANSI 包裹的字符串时，不再处理
  it('should handle nested ANSI sequences correctly', () => {
    expect(buildResultStr('\x1b[32mGreen\x1b[31mRed\x1b[0m', ['33'])).toBe(
      '\x1b[32mGreen\x1b[31mRed\x1b[0m',
    );
  });
});
