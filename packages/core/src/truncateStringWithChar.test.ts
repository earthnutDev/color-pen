import { truncateStringWithChar } from './truncateStringWithChar'; // 假设文件名为 truncateStringWithChar.ts

describe('truncateStringWithChar', () => {
  it('should return the original string if its length is less than or equal to the specified length', () => {
    expect(truncateStringWithChar('hello', 10)).toBe('hello');
  });

  it('应截断字符串，如果其长度超过指定长度，则添加一个空格', () => {
    expect(truncateStringWithChar('你好世界', 5)).toBe('你好 ');
  });

  it('should return an empty string if the input is an empty string', () => {
    expect(truncateStringWithChar('', 5)).toBe('');
  });

  it('应正确处理单个字符', () => {
    expect(truncateStringWithChar('a', 1)).toBe('a');
    expect(truncateStringWithChar('a', 0)).toBe('');
  });

  it('应处理包含特殊字符和空格的字符串', () => {
    expect(truncateStringWithChar('hello@world', 5)).toBe('hello');
    expect(truncateStringWithChar('hello world!', 11)).toBe('hello world');
  });

  it('should handle strings with multi-byte characters correctly', () => {
    expect(truncateStringWithChar('你好，世界', 5)).toBe('你好 ');
  });
});
