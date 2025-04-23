import { generateColor } from './generateColor';
import { generateRgb } from './generateRgb';

// 模拟 generateColor 函数
jest.mock('./generateColor', () => {
  return {
    generateColor: jest.fn(),
  };
});

jest.mock('../dog');

describe('generateRgb', () => {
  beforeAll(() => {
    // 模拟 console.error 变成捕获的方法
    global.console.error = jest.fn();
  });

  afterAll(() => {
    //重置 console.error 为原始的方法
    global.console.error = console.error;
  });

  beforeEach(() => {
    // 每一次测试前重置模拟函数
    generateColor.mockClear();
    global.console.error.mockClear();
  });

  it('当使用有效的十六进制色值时应当返回有效的色值', () => {
    generateColor.mockImplementation(hex => `${hex.toString(16)}`);

    expect(generateRgb('#ff0000')).toBe('#ff0000');
    expect(generateColor).toHaveBeenCalledWith(
      '#ff0000',
      undefined,
      undefined,
      true,
    );
  });

  it('should throw TypeError for invalid hex string', () => {
    generateColor.mockImplementation(() => {
      throw new Error('Invalid hex string');
    });

    expect(() => generateRgb('invalid')).toThrow(
      '使用 rgb() 或 bgRgb() 时，参数可以为单字符串 `"rgb(r, g, b)"` 或三个数值  `r , g ,b`。不接受其他格式',
    );
  });

  it('应当返回有效的色值 for valid hex number', () => {
    generateColor.mockImplementation(hex => `#${hex.toString(16)}`);

    expect(generateRgb(0xff0000)).toBe('#ff0000');
    expect(generateColor).toHaveBeenCalledWith(
      0xff0000,
      undefined,
      undefined,
      true,
    );
  });

  it('should log error and throw TypeError when COLOR_PEN_DEV is true', () => {
    process.env.COLOR_PEN_DEV = 'true';

    generateColor.mockImplementation(() => {
      throw new Error('Invalid hex string');
    });

    expect(() => generateRgb('invalid')).toThrow(
      '使用 rgb() 或 bgRgb() 时，参数可以为单字符串 `"rgb(r, g, b)"` 或三个数值  `r , g ,b`。不接受其他格式',
    );
    expect(console.error).toHaveBeenCalled();
  });

  it('should not log error when COLOR_PEN_DEV is not true', () => {
    process.env.COLOR_PEN_DEV = 'false';

    generateColor.mockImplementation(() => {
      throw new Error('Invalid hex string');
    });

    expect(() => generateRgb('invalid')).toThrow(
      '使用 rgb() 或 bgRgb() 时，参数可以为单字符串 `"rgb(r, g, b)"` 或三个数值  `r , g ,b`。不接受其他格式',
    );
    expect(console.error).not.toHaveBeenCalled();
  });
});
