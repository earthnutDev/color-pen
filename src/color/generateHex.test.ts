import { generateColor } from './generateColor';
import { generateHex } from './generateHex';

// Mock generateColor function
jest.mock('./generateColor', () => {
  return {
    generateColor: jest.fn(),
  };
});

describe('generateHex', () => {
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

    expect(generateHex('#ff0000')).toBe('#ff0000');
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

    expect(() => generateHex('invalid')).toThrow(
      '使用 hex() 或 bgHex() 时，参数可以为单字符串 `"0xnnnnnn"`、`"#rgb"` 、`"#rrggbb"` 或一个数值  `0xrrggbb`。不接受其他格式',
    );
  });

  it('should return valid color string for valid hex number', () => {
    generateColor.mockImplementation(hex => `#${hex.toString(16)}`);

    expect(generateHex(0xff0000)).toBe('#ff0000');
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

    expect(() => generateHex('invalid')).toThrow(
      '使用 hex() 或 bgHex() 时，参数可以为单字符串 `"0xnnnnnn"`、`"#rgb"` 、`"#rrggbb"` 或一个数值  `0xrrggbb`。不接受其他格式',
    );
    expect(console.error).toHaveBeenCalled();
  });

  it('should not log error when COLOR_PEN_DEV is not true', () => {
    process.env.COLOR_PEN_DEV = 'false';

    generateColor.mockImplementation(() => {
      throw new Error('Invalid hex string');
    });

    expect(() => generateHex('invalid')).toThrow(
      '使用 hex() 或 bgHex() 时，参数可以为单字符串 `"0xnnnnnn"`、`"#rgb"` 、`"#rrggbb"` 或一个数值  `0xrrggbb`。不接受其他格式',
    );
    expect(console.error).not.toHaveBeenCalled();
  });
});
