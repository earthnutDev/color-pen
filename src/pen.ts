import { createConstructor } from 'a-js-tools';
import { buildResultStr } from './color/buildResultStr';
import { kindList } from './color/kindList';
import { penCaseGetter } from './penCaseGetter';
import { FunctionKindList, Pen, StringKindList } from './types';

/**
 *
 * 生成 `pen`
 *
 * @param kinds 样式数组
 *
 */
function generatePen(kinds: string[] = []): Pen {
  /**************************
   * 笔盒
   *
   * 用来装置样式
   **************************/
  const penCase = (text: string) => buildResultStr(text, kinds);

  /**  笔盒的属性集合  */
  const penCaseParamList = (
    Object.keys(kindList) as (keyof StringKindList | keyof FunctionKindList)[]
  ).map(kind => [
    kind,
    {
      get() {
        return penCaseGetter(kind, kinds, generatePenConstructor);
      },
    },
  ]);

  /**  笔盒的属性集合  */
  const penCaseParam = Object.fromEntries(penCaseParamList);

  /// 笔盒的属性
  Object.defineProperties(penCase, penCaseParam);

  return penCase as Pen;
}

/**
 *
 * 构建 `pen` 的构造函数
 *
 * @param kinds 样式数组
 *
 * @example
 *
 */
const generatePenConstructor = createConstructor(generatePen);

export { generatePenConstructor as generatePen };
