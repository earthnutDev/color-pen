import { mergeValueIsString } from './mergeValue'; // 假设文件名为 mergeValueIsString.ts

describe('mergeValueIsString', () => {
  it('当不存在现有颜色值时，应附加新的 color 值', () => {
    const kinds = ['1', '2'];
    const kindValue = '38;5;15';
    const result = mergeValueIsString(kinds, kindValue);
    expect(result).toEqual(['1', '2', '38;5;15']);
  });

  it('应将现有 color 值替换为新 color 值', () => {
    const kinds = ['1', '2', '38;5;10'];
    const kindValue = '38;5;15';
    const result = mergeValueIsString(kinds, kindValue);
    expect(result).toEqual(['1', '2', '38;5;15']);
  });

  it('未设定后景色时设定后景色', () => {
    const kinds = ['1', '2', '38;5;10'];
    const kindValue = '48;5;15';
    const result = mergeValueIsString(kinds, kindValue);
    expect(result).toEqual(['1', '2', '38;5;10', '48;5;15']);
  });
  it('已设定后景色时设定后景色替换旧的数据', () => {
    const kinds = ['1', '2', '38;5;10', '48;5;150'];
    const kindValue = '48;5;15';
    const result = mergeValueIsString(kinds, kindValue);
    expect(result).toEqual(['1', '2', '38;5;10', '48;5;15']);
  });

  it('should append a new non-color value when it does not exist in kinds', () => {
    const kinds = ['3', '4'];
    const kindValue = '1';
    const result = mergeValueIsString(kinds, kindValue);
    expect(result).toEqual(['3', '4', '1']);
  });

  it('should not append a non-color value when it already exists in kinds', () => {
    const kinds = ['3', '4', '1'];
    const kindValue = '1';
    const result = mergeValueIsString(kinds, kindValue);
    expect(result).toEqual(['3', '4', '1']);
  });

  it('should handle a kindValue that is not a number gracefully', () => {
    const kinds = ['31', '42'];
    const kindValue = 'NaN';
    const result = mergeValueIsString(kinds, kindValue);
    expect(result).toEqual(['31', '42', 'NaN']);
  });
});
