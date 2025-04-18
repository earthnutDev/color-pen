import { generateColor } from './generateColor';
import { generateRgb } from './generateRgb';

// Mock generateColor function
jest.mock('./generateColor', () => {
  return {
    generateColor: jest.fn(),
  };
});

describe('generateRgb', () => {
  beforeAll(() => {
    // Mock console.error to capture logs
    global.console.error = jest.fn();
  });

  afterAll(() => {
    // Restore original console.error
    global.console.error = console.error;
  });

  beforeEach(() => {
    // Reset mocks before each test
    generateColor.mockClear();
    global.console.error.mockClear();
  });

  it('should return valid color string for valid hex string', () => {
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

  it('should return valid color string for valid hex number', () => {
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
