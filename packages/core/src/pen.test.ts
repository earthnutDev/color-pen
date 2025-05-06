import { generatePen } from './pen';

describe('generatePen', () => {
  describe('测试 pen 的创建', () => {
    const pen = new generatePen([]);
    it('应当返回一个粗色笔', () => {
      const boldPen = pen.bold;

      expect(boldPen('hello')).toBe('\x1b[1mhello\x1b[0m');
    });

    it('应当返回一个红色的粗笔', () => {
      const redBoldPen = pen.red.bold;

      expect(redBoldPen('hello')).toBe('\x1b[38;5;1;1mhello\x1b[0m');
    });

    it('应当返回一个粗的红色笔', () => {
      const redBoldPen = pen.bold.red;

      expect(redBoldPen('hello')).toBe('\x1b[1;38;5;1mhello\x1b[0m');
    });
  });

  describe('测试笔盒', () => {
    const pen = new generatePen([]);
    it('先创建出绿色后被红色覆盖应时当返回一个红色的粗笔盒', () => {
      const redBoldPen = pen.blue.red.bold;

      expect(redBoldPen('hello')).toBe('\x1b[38;5;1;1mhello\x1b[0m');
    });
  });

  describe('嵌套的彩色笔盒', () => {
    const pen = new generatePen([]);
    it('先创建出绿色后被红色覆盖应时当返回一个红色的粗笔盒', () => {
      const redBoldPen = pen.blue.red.bold;
      const yellowItalic = pen.yellow.italic;

      expect(redBoldPen(`hello ${yellowItalic('world')}!`)).toBe(
        '\x1b[38;5;1;1mhello \x1b[0m\x1b[38;5;3;3mworld\x1b[0m\x1b[38;5;1;1m!\x1b[0m',
      );
    });
  });
});
