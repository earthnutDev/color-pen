import { computedTerminalColor, getColor } from './computedTerminalColor';

describe('computedTerminalColor', () => {
  it('将抛出错误 an array when isHex is true', () => {
    expect(() => computedTerminalColor([255, 255, 255], true)).toThrow(
      TypeError,
    );
  });

  it('需要返回一个有效的  color 值由 rgb array', () => {
    expect(computedTerminalColor([255, 255, 255], false)).toBe(231);
  });
  it('非法值需返回一个 TypeError', () => {
    expect(() => computedTerminalColor([NaN, Infinity, 255], false)).toThrow(
      TypeError,
    );
  });

  it('参数为数组时长度不足，需要返回一个 error', () => {
    expect(() => computedTerminalColor([255, 255], false)).toThrow(TypeError);
  });

  it('参数为数组时长度超长，需要返回一个 error', () => {
    expect(() => computedTerminalColor([255, 255, 255, 0], false)).toThrow(
      TypeError,
    );
  });

  it('should throw an error for a number when isHex is false', () => {
    expect(() => computedTerminalColor(0xffffff, false)).toThrow(TypeError);
  });
  it('需要返回一个有效的  color 值，参数为 string', () => {
    expect(computedTerminalColor('0xFFFFFF', true)).toBe(231);
    expect(computedTerminalColor('#FFFFFF', true)).toBe(231);
  });
  it('需要返回一个有效的  color 值，参数为 string', () => {
    expect(computedTerminalColor('0xFFF', true)).toBe(231);
    expect(computedTerminalColor('#FFF', true)).toBe(231);
  });

  it('需要返回一个有效的  color 值，参数为 number', () => {
    expect(computedTerminalColor(0xffffff, true)).toBe(231);
  });
  it('需要返回一个有效的  color 值，参数为 number', () => {
    expect(computedTerminalColor(0xfff, true)).toBe(231);
  });
  it('参数为 string 类型，第二个参数为 true ：需要返回一个有效的  color', () => {
    expect(computedTerminalColor('rgb(255, 255, 255)', false)).toBe(231);
  });

  it('非 `rgb(`  开头需要返回一个 error', () => {
    expect(() => computedTerminalColor('no value)', false)).toThrow(TypeError);
  });
  it('非 `)` 结尾需要返回一个 error', () => {
    expect(() => computedTerminalColor('rgb(no value', false)).toThrow(
      TypeError,
    );
  });

  it('rgb 字符串内参数不为 3 将抛出错误', () => {
    expect(() => computedTerminalColor('rgb(255, 255)', false)).toThrow(
      TypeError,
    );
  });
  it(' rgb 内部的含非法字符将抛出错误', () => {
    expect(() => computedTerminalColor('rgb(255, hello, 0)', false)).toThrow(
      TypeError,
    );
  });
  it('将抛出错误 an invalid rgb string', () => {
    expect(() => computedTerminalColor('rgb(255, -10, 0)', false)).toThrow(
      TypeError,
    );
  });
  it('将抛出错误 an invalid rgb string', () => {
    expect(() => computedTerminalColor('rgb(255,320,0)', false)).toThrow(
      TypeError,
    );
  });

  it('第二参数非 `boolean` 将抛出 TypeError', () => {
    expect(() => computedTerminalColor('invalid', undefined)).toThrow(
      TypeError,
    );
  });

  it('将抛出 TypeError', () => {
    expect(() => computedTerminalColor('invalid', false)).toThrow(TypeError);
  });

  it('非法值将返回一个 TypeError', () => {
    expect(() => computedTerminalColor('invalid', true)).toThrow(TypeError);
  });

  it('将返回一个给定值', () => {
    expect(computedTerminalColor('#fff', true)).toBe(231);
  });

  it('将返回一个任意色值', () => {
    expect(computedTerminalColor('#fffd', true)).toBeGreaterThanOrEqual(0);
  });

  it('将返回一个任意色值', () => {
    expect(computedTerminalColor('#f', true)).toBeGreaterThanOrEqual(0);
  });

  it('超长值将返回一个任意值', () => {
    expect(
      computedTerminalColor('0x999966955578', true),
    ).toBeGreaterThanOrEqual(0);
  });
});

describe('getColor', () => {
  it('should return a value between 0 and 5 for a finite value within range', () => {
    expect(getColor(128)).toBeGreaterThanOrEqual(0);
    expect(getColor(128)).toBeLessThanOrEqual(5);
  });

  it('should return 0 for a finite value below 0', () => {
    expect(getColor(-1)).toBe(0);
  });

  it('should return 5 for a finite value above 255', () => {
    expect(getColor(256)).toBe(5);
  });

  it('should return a value between 0 and 5 for Infinity', () => {
    expect(getColor(Infinity)).toBeGreaterThanOrEqual(0);
    expect(getColor(Infinity)).toBeLessThanOrEqual(5);
  });

  it('should return a value between 0 and 5 for -Infinity', () => {
    expect(getColor(-Infinity)).toBeGreaterThanOrEqual(0);
    expect(getColor(-Infinity)).toBeLessThanOrEqual(5);
  });

  it('should return a value between 0 and 5 for NaN', () => {
    expect(getColor(NaN)).toBeGreaterThanOrEqual(0);
    expect(getColor(NaN)).toBeLessThanOrEqual(5);
  });
});
