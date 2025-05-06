import { generateColor } from './generateColor'; // 假设文件名为 generateColor.ts

describe('generateColor', () => {
  it('should generate correct RGB color string', () => {
    const result = generateColor(255, 0, 0);
    expect(result).toBe('38;5;196');
  });

  it('should generate correct string RGB color string', () => {
    const result = generateColor('rgb(255, 0, 0)');
    expect(result).toBe('38;5;196');
  });

  it('should generate correct hex color string', () => {
    const result = generateColor('#FF0000');
    expect(result).toBe('38;5;196');
  });

  it('should generate correct single value hex color string', () => {
    const result = generateColor(0xff0000, undefined, undefined);
    expect(result).toBe('38;5;196');
  });
  it('should generate correct single value hex color string', () => {
    const result = generateColor(0xff0000, undefined, undefined, false);
    expect(result).toBe('48;5;196');
  });

  // 这里其实走的是 31 行的 错误抛出
  it('应当抛出 TypeError 当参数通不过验证', () => {
    expect(() => generateColor('invalid')).toThrow(TypeError);
  });

  it('应当抛出 TypeError for invalid input', () => {
    expect(() => generateColor('invalid', '123')).toThrow(TypeError);
  });
});
