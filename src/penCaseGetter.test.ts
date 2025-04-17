import { kindList } from './color/kindList';
import { mergeValueIsString } from './color/mergeValue';
import { generatePen } from './pen';
import { penCaseGetter } from './penCaseGetter';

jest.mock('./color/kindList');
jest.mock('./color/mergeValue');
jest.mock('./pen');

describe('penCaseGetter', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should generate pen when kind is a key of StringKindList', () => {
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

  it('should generate pen when kind is "random"', () => {
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

  it('should generate pen when kind is "hex"', () => {
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

  it('should handle unknown kind gracefully', () => {
    const kind = 'unknown';
    const kinds = ['red', 'blue'];

    const result = penCaseGetter(kind, kinds, generatePen);

    expect(result).toBeUndefined();
  });
});
