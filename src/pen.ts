import { isString, isType } from 'a-type-of-js';
import { buildResultStr } from './color/buildResultStr';
import { kindList } from './color/kindList';
import { FunctionKindList, Pen, StringKindList } from './types';
import { mergeValueIsString } from './color/mergeValue';

/**************************************
 *
 * @description 创建颜色
 * @param styles 样式
 *
 **************************************/
export function generatePen(kinds: string[]): Pen {
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
        return penCaseGetter(kind, kinds);
      },
    },
  ]);

  /**  笔盒的属性集合  */
  const penCaseParam = Object.fromEntries(penCaseParamList);

  /// 笔盒的属性
  Object.defineProperties(penCase, penCaseParam);

  return penCase as Pen;
}
/**  笔盒的属性的 getter   */
function penCaseGetter(
  kind: keyof StringKindList | keyof FunctionKindList,
  kinds: string[],
) {
  let newKinds = [];
  if (isType<keyof StringKindList>(kind, isString(kindList[kind]))) {
    /**  样式合并（非函数性）  */
    newKinds = mergeValueIsString(kinds, kindList[kind]);
    return generatePen(newKinds);
  } else {
    if ('random' === kind || 'bgRandom' === kind) {
      /**  随机色  */
      const newColor = kindList[kind]();
      newKinds = mergeValueIsString(kinds, newColor); // 随机色
      return generatePen(newKinds);
    } else if ('hex' === kind) {
      return (hex: number | string) => {
        newKinds = mergeValueIsString(kinds, kindList['hex'](hex));
        return generatePen(newKinds);
      };
    }
  }
}
