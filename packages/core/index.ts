import { generatePen } from './src/pen';
import { Pen } from './src/types';

export { esc, csi, terminalResetStyle, terminalRegExp } from './src/esc';

/**
 *
 * 使用彩色 🖌️ 在终端上 ✍️ 彩色字
 *
 *
 */
const pen: Pen = new generatePen([]);

export { pen, pen as colorPen, generatePen };
export default pen;

export type {
  Pen,
  KindListKey,
  StringKindList,
  FunctionKindList,
} from './src/types';

export { strInTerminalLength } from './src/strInTerminalLength';

export { truncateStringWithChar } from './src/truncateStringWithChar';

export { strInOneLineOnTerminal } from './src/strInOneLineOnTerminal';

export { colorText } from './src/colorText/index';
