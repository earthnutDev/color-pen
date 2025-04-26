import { strInTerminalLength } from './strInTerminalLength';

/**
 *
 * 将传入的字符串以特定长度（在终端占用的长度）截断
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

  let result = '';

  for (const i of str) {
    result += i;
    const currentLen = strInTerminalLength(result);
    if (currentLen === len) {
      return result;
    } else if (currentLen > len) {
      return result.slice(0, -1).concat(' ');
    }
  }
}
