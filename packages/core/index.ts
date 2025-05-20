import { generatePen } from './src/pen';

export { generatePen };

export {
  pen,
  redPen,
  bluePen,
  greenPen,
  yellowPen,
  magentaPen,
  cyanPen,
  whitePen,
  brightBlackPen,
  brightRedPen,
  brightGreenPen,
  brightYellowPen,
  brightBluePen,
  brightMagentaPen,
  brightCyanPen,
  brightWhitePen,
  bgBlackPen,
  bgRedPen,
  bgGreenPen,
  bgYellowPen,
  bgBluePen,
  bgMagentaPen,
  bgCyanPen,
  bgWhitePen,
  bgBrightBlackPen,
  bgBrightRedPen,
  bgBrightGreenPen,
  bgBrightYellowPen,
  bgBrightBluePen,
  bgBrightMagentaPen,
  bgBrightCyanPen,
  bgBrightWhitePen,
  boldPen,
  italicPen,
  underlinePen,
  hidePen,
  rgbPen,
  hexPen,
  colorPen,
  bgRgbPen,
  bgHexPen,
  bgColorPen,
  randomPen,
  bgRandomPen,
  numberPen,
  bgNumberPen,
  dimPen,
  blinkPen,
  reversedPen,
} from './src/penList';

export type {
  Pen,
  KindListKey,
  StringKindList,
  FunctionKindList,
} from './src/types';

export { strInTerminalLength } from './src/strInTerminalLength';

export {
  truncateStringWithChar,
  truncateStringWithChar as cutoffStringWithChar,
} from './src/truncateStringWithChar';

export { strInOneLineOnTerminal } from './src/strInOneLineOnTerminal';

export { colorText } from './src/colorText/index';
