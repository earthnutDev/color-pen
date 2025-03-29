import { generatePen } from './src/pen';

export { t } from './src/t';

/**
 *
 * 使用彩色 🖌️ 在终端上 ✍️ 彩色字
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
