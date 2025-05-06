import { isNode } from 'a-js-tools';
import { tearDownStr } from './tearDownStr';

/**
 *
 * 彩色文本，嗯。。。单独拿出来呢，是想着兼容下 browser
 *
 */
export function colorText(str: string): string[] {
  return isNode() ? [str] : tearDownStr(str);
}
