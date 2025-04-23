import { csi, esc, terminalRegExp } from './esc';

describe('测试 esi 相关的内容 ', () => {
  beforeEach(() => {
    terminalRegExp.lastIndex = 0;
  });

  it('应当返回 true 为 csi', () => {
    expect(csi).toBe('\x1b[');
  });

  it('应当返回 true 为 esc ', () => {
    expect(esc).toBe('\x1b');
  });

  describe('测试与 ANSI 转义相关的正则', () => {
    it('验证光标显应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[?25h')).toBe(true);
    });
    it('验证光标隐应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[?25l')).toBe(true);
    });

    it('验证光标位置设置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[10;20H')).toBe(true);
    });
    it('验证获取光标位置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[6n')).toBe(true);
    });

    it('验证保存光标位置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b7')).toBe(true);
    });
    it('验证恢复保存光标位置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b8')).toBe(true);
    });

    it('验证向上移动光标位置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[12A')).toBe(true);
    });
    it('验证向下移动光标位置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[1B')).toBe(true);
    });
    it('验证向右移动光标位置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[122C')).toBe(true);
    });
    it('验证向左移动光标位置应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[22D')).toBe(true);
    });
    it('验证设置文本色应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[35mall')).toBe(true);
    });
    it('验证设置自定义文本色应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[38;5;125mall')).toBe(true);
    });
    it('验证设置自定义文本色及其他属性应当返回 true', () => {
      expect(terminalRegExp.test('\x1b[38;5;125;1;5;3mall')).toBe(true);
    });
  });
});
