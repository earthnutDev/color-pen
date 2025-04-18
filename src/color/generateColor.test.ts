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
    const result = generateColor(0xff0000);
    expect(result).toBe('38;5;196');
  });

  it('should throw TypeError for invalid input', () => {
    expect(() => generateColor('invalid')).toThrow(TypeError);
  });
});
