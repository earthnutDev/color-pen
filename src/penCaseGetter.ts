import { isNumber, isString, isType, isUndefined } from 'a-type-of-js';
import { FunctionKindList, Pen, StringKindList } from './types';
import { kindList } from './color/kindList';
import { mergeValueIsString } from './color/mergeValue';

/**  笔盒的属性的 getter   */
export function penCaseGetter(
  kind: keyof StringKindList | keyof FunctionKindList,
  kinds: string[],
  generatePen: (kinds: string[]) => Pen,
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
    } else if ('hex' === kind || 'bgHex' === kind) {
      return (hex: number | string) => {
        newKinds = mergeValueIsString(kinds, kindList[kind](hex));
        return generatePen(newKinds);
      };
    } else if ('rgb' === kind || 'bgRgb' === kind) {
      return (r: string | number, g: number, b: number) => {
        if (isString(r) && isUndefined(g) && isUndefined(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r));
        } else if (isNumber(r) && isNumber(g) && isNumber(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r, g, b));
        } else {
          throw new Error(
            `${kind} 的参数类型不正确，请使用 'rgb' 或 'hex' 函数`,
          );
        }
        return generatePen(newKinds);
      };
    } else if ('color' === kind || 'bgColor' === kind) {
      return (r: string | number, g: number, b: number) => {
        if ((isString(r) || isNumber(r)) && isUndefined(g) && isUndefined(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r));
        } else if (isNumber(r) && isNumber(g) && isNumber(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r, g, b));
        } else {
          throw new Error(
            `${kind} 的参数类型不正确，请使用 'rgb' 或 'hex' 函数`,
          );
        }
        return generatePen(newKinds);
      };
    }
  }
}
