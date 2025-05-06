import { csi } from './esc';
/**
 * 让文本在终端保持在一行
 *
 * 不会影响文本中的换行符的默认行为，文本中的 '\n' 会正常的换行
 *
 * @param str  - 要保持在一行打印的文本字符串
 * @returns - 返回打印在一行的文本字符串
 *
 * @example
 *
 * ```ts
 * import { strInOneLineOnTerminal } from 'color-pen';
 *
 * // 假设当前终端打印的列数为 10
 * const log = console.log;
 *
 * // 将打印 "大爱我华夏"
 * log(strInOneLineOnTerminal('大爱我华夏文化'));
 *
 * // 将打印 "自古以来自\n所以说华夏"
 * log(strInOneLineOnTerminal('自古以来自古以来这句话就是诡辩的的开头语\n所以说华夏的文化博大精深'));
 * ```
 */
export function strInOneLineOnTerminal(str: string): string {
  return `${csi}?7l${str.toString()}${csi}?7h`;
}
