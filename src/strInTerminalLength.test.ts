import { strInTerminalLength } from './strInTerminalLength';

describe('测试 strInTerminalLength 函数', () => {
  it('测试 ASCII 字符串返回值', () => {
    expect(strInTerminalLength('123')).toBe(3);
  });
  it('测试返回值', () => {
    expect(strInTerminalLength('123')).toBe(3);
  });
});
