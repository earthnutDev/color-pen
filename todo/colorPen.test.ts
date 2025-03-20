import { ColorPen } from './colorPen';
describe('测试 ColorPen', () => {
  describe('valueOf', () => {
    it('should return the value of the value property', () => {
      const myClassInstance = new ColorPen('testValue');

      expect(myClassInstance.valueOf()).toBe('testValue');
    });

    it('should return an empty string if value is not set', () => {
      const myClassInstance = new ColorPen('');
      expect(myClassInstance.valueOf()).toBe('');
    });
  });

  describe('constructor', () => {
    describe('ColorPen constructor', () => {
      it('should initialize with a string', () => {
        const instance = new ColorPen('test');
        expect(instance.valueOf()).toBe('test');
      });

      it('should initialize with a number', () => {
        const instance = new ColorPen(123);
        expect(instance.valueOf()).toBe('123');
      });

      it('should initialize with undefined', () => {
        const instance = new ColorPen(undefined);
        expect(instance.valueOf()).toBe('undefined');
      });

      it('should initialize with null', () => {
        const instance = new ColorPen(null);
        expect(instance.valueOf()).toBe('null');
      });

      it('should initialize with a bigint', () => {
        const instance = new ColorPen(BigInt(123));
        expect(instance.valueOf()).toBe('123');
      });

      it('should initialize with a boolean', () => {
        const instance = new ColorPen(true);
        expect(instance.valueOf()).toBe('true');
      });
    });
  });

  describe('concat', () => {
    it('should return an empty string when the input array is empty', () => {
      const str = new ColorPen('test');
      const spy = jest.spyOn(Math, 'random').mockReturnValue(32); // 模拟 Math.random 返回 0
      const result = str.concat();
      expect(result).toBe(getRandomColor('test'));
      spy.mockRestore(); // 恢复 Math.random 的原始实现
    });

    it('should concatenate strings and return a random color', () => {
      const str = new ColorPen('hello');
      const spy = jest.spyOn(Math, 'random').mockReturnValue(56);
      const result = str.concat(' world', '!');
      expect(result).toBe(getRandomColor('hello world!'));
      spy.mockRestore();
    });

    it('should handle multiple strings correctly', () => {
      const str = new ColorPen('start');
      const spy = jest.spyOn(Math, 'random').mockReturnValue(56);
      const result = str.concat('1', '2', '3');
      expect(result).toBe(getRandomColor('start123'));
      spy.mockRestore();
    });

    it('should handle a single string correctly', () => {
      const str = new ColorPen('only');
      const spy = jest.spyOn(Math, 'random').mockReturnValue(56);
      const result = str.concat('one');
      expect(result).toBe(getRandomColor('onlyone'));
      spy.mockRestore();
    });
  });

  describe('toString', () => {
    it('should return the value of the value property', () => {
      const myClassInstance = new ColorPen('testValue');
      expect(myClassInstance.toString()).not.toBe('testValue');
    });
  });
});
