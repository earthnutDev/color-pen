import { terminalResetStyle } from '@color-pen/static';
import { strInTerminalLength } from './strInTerminalLength';

/**
 *
 * 将传入的字符串以特定长度（在终端占用的长度）截断
 *
 * (该方法将<span style="color:#ff0;">**破坏**</span>含 ANSI 转义文本的结构，若原文本包含 ANSI 转义属性，可能导致最终的字符串不是期待的样式)
 *
 * @param str 需要截断长度的字符串
 * @param len 截断的长度
 *
 * @returns 返回原字符串或截断后的字符串
 */
export function truncateStringWithChar(str: string, len: number) {
  if (len === 0) {
    return '';
  }

  const strLen = strInTerminalLength(str);
  // 给出的字符串并没有设定的长度时直接返回该字符串
  if (strLen <= len) {
    return str;
  }

  /**  结果文本  */
  let result = '';
  /**  是否有未闭合的 ANSI 转义  */

  for (let i = 0, j = str.length; i < j; i++) {
    result += str[i];
    const currentLen = strInTerminalLength(result);
    if (currentLen === len) {
      break;
    } else if (currentLen > len) {
      result = result.replace(/.$/, ' ');
      break;
    }
  }

  // eslint-disable-next-line no-control-regex
  result = result.replace(/\x1b\[0m/gi, '\x1b[m');

  if (
    // eslint-disable-next-line no-control-regex
    [...result.matchAll(/\x1b\[0?m/g)].length !=
    // eslint-disable-next-line no-control-regex
    [...result.matchAll(/\x1b\[([1-4]?[0-9])(;([1-4]?[0-9]+))*m/g)].length / 2
  ) {
    result += terminalResetStyle;
  }
  return result;
}
