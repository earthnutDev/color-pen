import { getRandomInt } from 'a-js-tools';
import { colorList } from './colorList';

/**
 *
 * 反向解析色值
 *
 */
export function reverseParse(str: string): string {
  /**  取出色值  */
  let ansiColor = Number(str);

  if (!isFinite(ansiColor)) {
    throw new TypeError('色值反向解析出错');
  }

  if (ansiColor < 16) {
    const result = colorList[ansiColor];
    return result;
  }

  /**  转化为色值  */
  const getColor = (v: number): string =>
    Math.floor((v * 256) / 6 + getRandomInt(42))
      .toString(16)
      .padStart(2, '0');

  ansiColor -= 16;

  const r = getColor(Math.floor(ansiColor / 36));
  const gb = ansiColor % 36;
  const g = getColor(Math.floor(gb / 6));
  const b = getColor(gb % 6);

  return `#${r}${g}${b}`;
}
