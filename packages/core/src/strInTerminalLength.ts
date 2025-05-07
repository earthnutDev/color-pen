import { terminalRegExp } from '@color-pen/static';
import { isTwoLen } from './isTwoLen';

/**
 * ## 计算字符串在终端显示的长度
 *  经测试，大数组（百万级别）在 mac 下 reduce 的耗时是 for  的 2 - 5 倍
 *  在百万与万之间测试，reduce 耗时约为 1 毫秒，for 接近 0
 *  在万以下级别，reduce 与 for 耗时都接近为 0
 *
 * ```ts
 * {
 *    const a = '1'
 *      .repeat(1000000)
 *      .split('')
 *      .map(e => Number(e));
 *    const now = Date.now();
 *    a.reduce((acc, x) => acc + x, 0);
 *    const afterReduce = Date.now(); // mac 耗时  5 毫秒 windows 耗时 19 毫秒
 *    console.log(afterReduce - now);
 *    let sum = 0;
 *    for (let i = 0; i < a.length; i++) sum += a[i];
 *    console.log(Date.now() - afterReduce); // mac 耗时 1 / 2 毫秒 windows 耗时 7 毫秒
 *  }
 * ```
 * 所有，本函数使用 reduce 计算
 */
export function strInTerminalLength(str: string): number {
  const _t = terminalRegExp();
  // 去除终端控制字符
  return str
    .replace(_t, '')
    .split('')
    .reduce((len, code) => len + 1 + Number(isTwoLen(code)), 0);
}
