import { csi } from '@color-pen/static';
import { strInOneLineOnTerminal } from './strInOneLineOnTerminal';

describe('测试文本在一行显示', () => {
  it('只有单测', () => {
    const str = '你好';

    expect(strInOneLineOnTerminal(str)).toBe(`${csi}?7l${str}${csi}?7h`);
  });
});
