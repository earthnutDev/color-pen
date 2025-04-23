import { createConstructor } from 'a-js-tools';
import { buildResultStr } from './color/buildResultStr';
import { kindList } from './color/kindList';
import { penCaseGetter } from './penCaseGetter';
import { FunctionKindList, Pen, StringKindList } from './types';
import { isArray, isString, isType } from 'a-type-of-js';

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
  const penCase = (str: string | TemplateStringsArray, ...arg: string[]) => {
    if (isString(str) && arg.length === 0) {
      return buildResultStr(str, kinds);
    } else if (
      isType<TemplateStringsArray>(
        str,
        () => isArray(str) && str.every(e => isString(e)),
      )
    ) {
      let result = '';
      for (let i = 0; i < str.length; i++) {
        result += buildResultStr(str[i], kinds);
        if (i < arg.length) {
          result += buildResultStr(arg[i]!.toString(), kinds);
        }
      }
      return result;
    } else {
      throw new Error('pen: 缺少参数');
    }
  };

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
