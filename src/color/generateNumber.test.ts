import { generateNumber } from './generateNumber';

describe('测试使用 ANSI 色值数值生成色值', () => {
  it('小于 0 的值应返回 38;5;0 ', () => {
    expect(generateNumber(-1)).toBe('48;5;0');
  });

  it('大于 255 的值应返回 38;4;255', () => {
    expect(generateNumber(Infinity)).toBe('48;5;255');
  });

  it('是 NaN 时应返回 38;5;xxx', () => {
    const xxx = Number(generateNumber(NaN).split(';')[2]);
    expect(xxx).toBeLessThanOrEqual(255);
    expect(xxx).toBeGreaterThanOrEqual(0);
  });

  it('小数应返回四舍五入的值', () => {
    expect(generateNumber(1.1)).toBe('48;5;1');
    expect(generateNumber(1.9)).toBe('48;5;2');
  });

  it('第二参数为 true 时的值应返回 38;4;255', () => {
    expect(generateNumber(Infinity, true)).toBe('38;5;255');
  });
});
