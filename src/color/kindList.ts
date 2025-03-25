import { getRandomInt } from 'a-js-tools';
import { StringKindList, FunctionKindList } from 'src/types';
import { computedTerminalColor } from './computedTerminalColor';

/**
 *
 * Available lists
 *
 */
export const kindList: StringKindList & FunctionKindList = {
  black: '38;5;0',
  red: '38;5;1',
  green: '38;5;2',
  yellow: '38;5;3',
  blue: '38;5;4',
  magenta: '38;5;5',
  cyan: '38;5;6',
  white: '38;5;7',
  brightBlack: '38;5;8',
  brightRed: '38;5;9',
  brightGreen: '38;5;10',
  brightYellow: '38;5;11',
  brightBlue: '38;5;12',
  brightMagenta: '38;5;13',
  brightCyan: '38;5;14',
  brightWhite: '38;5;15',
  bgBlack: '48;5;0',
  bgRed: '48;5;1',
  bgGreen: '48;5;2',
  bgYellow: '48;5;3',
  bgBlue: '48;5;4',
  bgMagenta: '48;5;5',
  bgCyan: '48;5;6',
  bgWhite: '48;5;7',
  bgBrightBlack: '48;5;8',
  bgBrightRed: '48;5;9',
  bgBrightGreen: '48;5;10',
  bgBrightYellow: '48;5;11',
  bgBrightBlue: '48;5;12',
  bgBrightMagenta: '48;5;13',
  bgBrightCyan: '48;5;14',
  bgBrightWhite: '48;5;15',
  bold: '1',
  dim: '2',
  italic: '3',
  underline: '4',
  blink: '5',
  reversed: '7',
  hide: '8',
  random: () => `38;5;${getRandomInt(255)}`,
  rgb: (rgb: string | number[]) => `38;5;${computedTerminalColor(rgb, false)}`,
  hex: (hex: string | number) => `38;5;${computedTerminalColor(hex)}`,
  bgRandom: () => `48;5;${getRandomInt(255)}`,
  bgRgb: (rgb: string | number[]) =>
    `48;5;${computedTerminalColor(rgb, false)}`,
  bgHex: (hex: string | number) => `48;5;${computedTerminalColor(hex)}`,
};
