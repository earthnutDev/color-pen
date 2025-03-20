import { generatePen } from './src/pen';

export { t } from './src/t';

/**************************************
 *
 * 绘制彩色的文本（应用于）
 *
 **************************************/
const pen = generatePen([]);

export { pen, pen as colorPen };
export default pen;

export type {
  Pen,
  KindListKey,
  StringKindList,
  FunctionKindList,
} from './src/types';
