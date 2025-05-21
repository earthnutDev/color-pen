import { terminalRegExp, terminalResetStyle } from '@color-pen/static';
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
  /**  转化为常量让引擎优化  */
  const _len = len,
    _str = str;
  if (_len === 0) {
    return '';
  }
  /**  是否需要空格  */
  let needSpace = false;
  /**  整个字符串在终端显示的长度  */
  const strLen = strInTerminalLength(_str);
  // 给出的字符串并没有设定的长度时直接返回该字符串
  if (strLen <= _len) {
    return _str.concat(' '.repeat(_len - strLen));
  }
  /**  是否为正值  */
  const isAPositive = _len > 0;
  /**  一个 ansi  的正则  */
  const ansiRegExp = terminalRegExp();
  ansiRegExp.lastIndex = 0;
  /**  不包含 ansi 的字符形式  */
  const cleanStr = _str.replaceAll(ansiRegExp, '');
  const _strArr = [...cleanStr];
  /** 纯净的字符数组  */
  const strArr = isAPositive ? _strArr : _strArr.reverse();
  /** 纯净数组的长度  */
  const strArrLen = strArr.length;
  /**  需要正的 _len  */
  const positiveLen = Math.abs(_len);
  /**  遍历的最小值  */
  let minLen = Math.floor(positiveLen / 2);
  /**  结果文本  */
  let result: string = strArr.slice(0, minLen).join(''),
    /**  结果字符串在终端展示的长度  */
    resultLen: number = strInTerminalLength(result);

  while (minLen < strArrLen) {
    /**  当前字符  */
    const currentChar = strArr[minLen];
    /**  当前字符在终端的长度  */
    const currentEleLen = strInTerminalLength(currentChar);
    resultLen += currentEleLen;
    if (resultLen === positiveLen) {
      result += strArr[minLen];
      break;
    }
    // 该字符为占两个位置
    else if (resultLen === positiveLen + 1) {
      needSpace = true;
      break;
    } else if (resultLen > positiveLen + 1) {
      break;
    } else {
      result += strArr[minLen];
    }
    minLen++;
  }
  // 若原截取长度不含 ANSI 转义部分
  if (
    (isAPositive && _str.startsWith(result)) ||
    (!isAPositive && _str.endsWith((result = [...result].reverse().join(''))))
  ) {
    return needSpace ? result + ' ' : result;
  }

  // 下面本来可以优化的
  if (isAPositive) {
    let match;
    ansiRegExp.lastIndex = 0;
    while ((match = ansiRegExp.exec(_str)) !== null) {
      const _s = result;
      result = _s
        .slice(0, match.index)
        .concat(match[0])
        .concat(_s.slice(match.index));
      if (_str.startsWith(result)) {
        break;
      }
    }
    result += terminalResetStyle;
  } else {
    const resultArr = [...result];
    /**  计数回标  */
    let indexOf = resultArr.length - 1;
    result = '';

    /**  反转的原字符串转化的数组  */
    const reserveStrArr = [..._str].reverse();
    for (let i = 0, j = reserveStrArr.length; i < j; i++) {
      const ele = reserveStrArr[i];
      if (ele === resultArr[indexOf]) {
        --indexOf;
      } else if (indexOf < 0) {
        break;
      }
      result = ele + result;
    }

    result = terminalResetStyle + result;
  }
  return needSpace ? result + ' ' : result;
}
