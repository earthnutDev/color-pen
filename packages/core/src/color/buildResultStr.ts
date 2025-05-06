import { csi } from '../esc';

/**
 *
 * 构建最终文本
 *
 * @param str
 * @param kinds
 * @returns 返回一个字符串
 *
 */
export function buildResultStr(str: string, kinds: string[]): string {
  str = str.toString();
  if (str.length === 0) {
    return '';
  }
  if (kinds.length === 0) {
    return str;
  }
  const hasColorStart = str.indexOf(csi);
  const hasColorEnd = str.indexOf(`${csi}0m`);
  if (hasColorStart > -1 && hasColorEnd > -1) {
    return buildResultStr(str.substring(0, hasColorStart), kinds)
      .concat(str.substring(hasColorStart, hasColorEnd + 4))
      .concat(buildResultStr(str.substring(hasColorEnd + 4), kinds));
  }

  if (str.endsWith('\r\n')) {
    str = str.substring(0, str.length - 2);
    return `${csi}${kinds.join(';')}m${str}${csi}0m\r\n`;
  } else if (str.endsWith('\n')) {
    str = str.substring(0, str.length - 1);
    return `${csi}${kinds.join(';')}m${str}${csi}0m\n`;
  } else {
    return `${csi}${kinds.join(';')}m${str}${csi}0m`;
  }
}
