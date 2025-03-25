import { generatePen } from './src/pen';

export { t } from './src/t';

/**
 *
 * Use a colored 🖌️ to write colored words to the terminal
 *
 *
 *
 */
const pen = generatePen([]);

export { pen, pen as colorPen };
export default pen;

export type {
  Pen,
  KindListKey,
  StringKindList,
  FunctionKindList,
} from './src/types';
