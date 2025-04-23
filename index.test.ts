import { isString, isPlainObject } from 'a-type-of-js';

/**  测试 pen  */
class Pen extends String {
  /**    */
  constructor(t: string) {
    super(t);
  }
  /**    */
  toString(): string {
    return this.valueOf();
  }
}

const pen = new Pen('pen');

describe('测试 Pen', () => {
  it('should be a string', () => {
    expect(typeof pen).toBe('object');
    expect(isString(pen)).toBe(true);
    expect(isPlainObject(pen)).toBe(false);
    expect(isPlainObject(new (class A {})())).toBe(true);
  });
});
