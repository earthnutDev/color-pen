import { kindList } from './color/kindList';
import { mergeValueIsString } from './color/mergeValue';
import { generatePen } from './pen';
import { penCaseGetter } from './penCaseGetter';

jest.mock('./color/kindList');
jest.mock('./color/mergeValue');
jest.mock('./pen');

describe('验证 penCaseGetter 回调', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('应当调用 generate pen 当 kind 作为 StringKindList 的 key 值', () => {
    const kind = 'color';
    const kinds = ['red', 'blue'];
    const mockKindList = { color: 'blue' };
    kindList[kind] = mockKindList[kind];
    mergeValueIsString.mockReturnValue(['red', 'blue', 'blue']);

    generatePen.mockReturnValue({ color: 'blue' });

    const result = penCaseGetter(kind, kinds, generatePen);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockKindList[kind]);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'blue']);
    expect(result).toEqual({ color: 'blue' });
  });

  it('应当调用 generate pen 当 kind 值为 "random"', () => {
    const kind = 'random';
    const kinds = ['red', 'blue'];
    const mockRandomColor = 'green';
    kindList[kind] = () => mockRandomColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'green']);
    generatePen.mockReturnValue({ color: 'green' });

    const result = penCaseGetter(kind, kinds, generatePen);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockRandomColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'green']);
    expect(result).toEqual({ color: 'green' });
  });
  it('应当调用 generate pen 当 kind 值为 "bgRandom"', () => {
    const kind = 'bgRandom';
    const kinds = ['red', 'blue'];
    const mockRandomColor = 'green';
    kindList[kind] = () => mockRandomColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'green']);
    generatePen.mockReturnValue({ color: 'green' });

    const result = penCaseGetter(kind, kinds, generatePen);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockRandomColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'green']);
    expect(result).toEqual({ color: 'green' });
  });

  it('应当 generate pen 当 kind 值为 "hex"', () => {
    const kind = 'hex';
    const kinds = ['red', 'blue'];
    const hex = '#000000';
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'black']);
    generatePen.mockReturnValue({ color: 'black' });

    const result = penCaseGetter(kind, kinds, generatePen)(hex);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockHexColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'black']);
    expect(result).toEqual({ color: 'black' });
  });

  it('应当 generate pen 当 kind 值为 "hex"', () => {
    const kind = 'hex';
    const kinds = ['red', 'blue'];
    const hex = 0x000000;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'black']);
    generatePen.mockReturnValue({ color: 'black' });

    const result = penCaseGetter(kind, kinds, generatePen)(hex);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockHexColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'black']);
    expect(result).toEqual({ color: 'black' });
  });

  it('应当 generate pen 当 kind 值为 "rgb" ，且调用为单个参数字符串', () => {
    const kind = 'rgb';
    const kinds = ['red', 'blue'];
    const rgb = 'rgb(0 , 0, 0)';
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'black']);
    generatePen.mockReturnValue({ color: 'black' });

    const result = penCaseGetter(kind, kinds, generatePen)(rgb);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockHexColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'black']);
    expect(result).toEqual({ color: 'black' });
  });

  it('应当 generate pen 当 kind 值为 "rgb" ，且调用为三个参数都是字符串', () => {
    const kind = 'rgb';
    const kinds = ['red', 'blue'];
    const r = 0;
    const g = 0;
    const b = 0;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'black']);
    generatePen.mockReturnValue({ color: 'black' });

    const result = penCaseGetter(kind, kinds, generatePen)(r, g, b);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockHexColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'black']);
    expect(result).toEqual({ color: 'black' });
  });
  it('应当抛出 Error 当 kind 值为 "rgb" 当不满足要求', () => {
    const kind = 'rgb';
    const kinds = ['red', 'blue'];
    const r = 0;
    const g = 0;
    const b = undefined;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;

    expect(() => penCaseGetter(kind, kinds, generatePen)(r, g, b)).toThrow(
      new Error("rgb 的参数类型不正确，请使用 'rgb' 或 'hex' 函数"),
    );
  });

  it('应当 generate pen 当 kind 值为 "color" ，且调用为一个字符串', () => {
    const kind = 'color';
    const kinds = ['red', 'blue'];
    const r = 0x000000;
    const g = undefined;
    const b = undefined;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'black']);
    generatePen.mockReturnValue({ color: 'black' });

    const result = penCaseGetter(kind, kinds, generatePen)(r, g, b);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockHexColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'black']);
    expect(result).toEqual({ color: 'black' });
  });
  it('应当 generate pen 当 kind 值为 "color" ，且调用为三个参数都是数值', () => {
    const kind = 'color';
    const kinds = ['red', 'blue'];
    const r = 0;
    const g = 0;
    const b = 0;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'black']);
    generatePen.mockReturnValue({ color: 'black' });

    const result = penCaseGetter(kind, kinds, generatePen)(r, g, b);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockHexColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'black']);
    expect(result).toEqual({ color: 'black' });
  });

  it('应当 generate pen 当 kind 值为 "number" ，且调用数值为 number', () => {
    const kind = 'number';
    const kinds = ['red', 'blue'];
    const n = 1;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;
    mergeValueIsString.mockReturnValue(['red', 'blue', 'black']);
    generatePen.mockReturnValue({ color: 'black' });

    const result = penCaseGetter(kind, kinds, generatePen)(n);

    expect(mergeValueIsString).toHaveBeenCalledWith(kinds, mockHexColor);
    expect(generatePen).toHaveBeenCalledWith(['red', 'blue', 'black']);
    expect(result).toEqual({ color: 'black' });
  });

  it('应当 generate pen 当 kind 值为 "number" ，且调用数值为非 number，应抛出类型错误', () => {
    const kind = 'number';
    const kinds = ['red', 'blue'];
    const n = false;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;

    expect(() => penCaseGetter(kind, kinds, generatePen)(n)).toThrow(TypeError);
  });

  it('应当抛出 Error 当 kind 值为 "color" 当不满足要求', () => {
    const kind = 'color';
    const kinds = ['red', 'blue'];
    const r = 0;
    const g = 0;
    const b = undefined;
    const mockHexColor = 'black';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kindList[kind] = (hex: string) => mockHexColor;

    expect(() => penCaseGetter(kind, kinds, generatePen)(r, g, b)).toThrow(
      new Error(`${kind} 的参数类型不正确，请使用 'rgb' 或 'hex' 函数`),
    );
  });

  it('应当处理 unknown 的 kind 值 gracefully', () => {
    const kind = 'unknown';
    const kinds = ['red', 'blue'];

    expect(() => penCaseGetter(kind, kinds, generatePen)).toThrow(Error);
  });
});
