import { isNumber, isString, isType, isUndefined } from 'a-type-of-js';
import { KindListKey, Pen, StringKindList } from './types';
import { kindList } from './color/kindList';
import { mergeValueIsString } from './color/mergeValue';
import { CreateConstructor } from 'a-js-tools';

/**  笔盒的属性的 getter   */
export function penCaseGetter(
  kind: KindListKey,
  kinds: string[],
  generatePen: CreateConstructor<Pen, [kinds: string[]]>,
) {
  let newKinds = [];
  if (isType<keyof StringKindList>(kind, isString(kindList[kind]))) {
    /**  样式合并（非函数性）  */
    newKinds = mergeValueIsString(kinds, kindList[kind]);
    return new generatePen(newKinds);
  } else {
    if ('hex' === kind || 'bgHex' === kind) {
      return (hex: string) => {
        newKinds = mergeValueIsString(kinds, kindList[kind](hex));
        return new generatePen(newKinds);
      };
    } else if ('rgb' === kind || 'bgRgb' === kind) {
      return (r: string | number, g?: number, b?: number) => {
        if (isString(r) && isUndefined(g) && isUndefined(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r));
        } else if (isNumber(r) && isNumber(g) && isNumber(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r, g, b));
        } else {
          throw new Error(
            `${kind} 的参数类型不正确，请使用 'rgb' 或 'hex' 函数`,
          );
        }
        return new generatePen(newKinds);
      };
    } else if ('color' === kind || 'bgColor' === kind) {
      /**
       * 456
       */
      return (r: string | number, g?: number, b?: number) => {
        if (isString(r) && isUndefined(g) && isUndefined(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r));
        } else if (isNumber(r) && isNumber(g) && isNumber(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r, g, b));
        } else {
          throw new Error(
            `${kind} 的参数类型不正确，请使用 'rgb' 或 'hex' 函数`,
          );
        }
        return new generatePen(newKinds);
      };
    } else if ('number' === kind || 'bgNumber' === kind) {
      return (n: number) => {
        if (isNumber(n)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](n));
          return new generatePen(newKinds);
        } else {
          throw new TypeError(`${kind} 的参数应为有效正整数数值，范围 0 - 255`);
        }
      };
    } else {
      throw new Error(`${kind} 函数不存在`);
    }
  }
}
