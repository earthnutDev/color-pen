import { isTwoLen } from './isTwoLen';

describe('测试是否在终端返回占用两个字节长度', () => {
  it('中文应当返回两个长度', () => {
    expect(isTwoLen('中')).toBe(true);
  });

  it('测试不常用的中文', () => {
    expect(isTwoLen('𠜎')).toBe(true);
  });

  it('测试全角字符', () => {
    expect(isTwoLen('ﾣ')).toBe(true);
  });
  it('测试表情', () => {
    expect(isTwoLen('👥')).toBe(true);
  });
  it('测试返回空支付串', () => {
    expect(isTwoLen('')).toBe(false);
  });
});
