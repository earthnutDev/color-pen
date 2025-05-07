import { isNull, isUndefined } from 'a-type-of-js';
import { terminalRegExp } from '@color-pen/static';
import { ResultItem } from './resultItem';

/**
 *
 * 拆解字符串
 *
 */
export function tearDownStr(str: string): string[] {
  const endANSI = '\x1b[m';
  str = str.replace(new RegExp('\\\x1b\\[0m', 'g'), endANSI);

  /**  构建正则匹配字符串  */
  const regexpStr = terminalRegExp();
  /**  结果串  */
  const result: string[] = [''];
  /**  匹配到的字符串  */
  let arr: RegExpExecArray | null;
  /**  分隔符  */
  const separator = '%c';
  /**  上一次匹配到的下标，用于截断字符串  */
  let lastIndex = 0;

  /**  上一次匹配到的类型  */
  let lastStyle = '';
  const addItem = () => {
    // 截取到上一段的匹配段
    const newStr = str.substring(lastIndex, arr?.index ?? str.length);
    result[0] += separator.concat(newStr); // 追加文本
    result.push(lastStyle); // 追加样式
  };
  while (!isNull((arr = regexpStr.exec(str)))) {
    addItem();
    // 新样式设置
    lastStyle = isUndefined(arr[7])
      ? new ResultItem(arr[3].slice(0, -1)).str
      : '';
    // 从新给值，让其能够截取到上一段匹配
    lastIndex = regexpStr.lastIndex;
  }
  // 最后仍未匹配上的末尾字符串
  addItem();

  return result;
}
