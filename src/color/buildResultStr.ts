import { t } from '../t';

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
  const hasColorStart = str.indexOf(t);
  const hasColorEnd = str.indexOf(`${t}0m`);
  if (hasColorStart > -1 && hasColorEnd > -1) {
    return buildResultStr(str.substring(0, hasColorStart), kinds)
      .concat(str.substring(hasColorStart, hasColorEnd + 4))
      .concat(buildResultStr(str.substring(hasColorEnd + 4), kinds));
  }

  return `${t}${kinds.join(';')}m${str}${t}0m`;
}
