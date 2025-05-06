import { isUndefined } from 'a-type-of-js';
import { kindList } from '../color/kindList';
import { reverseParse } from './reverseParse';

/**  构建结果子项  */
export class ResultItem {
  /**  构建方式  */
  constructor(str: string) {
    this.parse(str); // 解析数据
    this.build();
  }
  /**
   * 构建样式
   */
  build() {
    if (this.hide) {
      /**  构建文本色  */
      this.color = 'transparent';
    }

    if (this.reversed) {
      [this.color, this.bgColor] = [this.bgColor, this.color];
    }

    if (!isUndefined(this.color)) {
      this.str += `color: ${this.color};`;
    }
    if (!isUndefined(this.bgColor)) {
      this.str += `background:  ${this.bgColor};`;
    }
    if (this.bold !== 0) {
      this.str += `font-weight: ${this.bold === 1 ? 800 : 200};`;
    }
    if (this.italic) {
      this.str += `font-style: italic;`;
    }
    if (this.underline) {
      this.str += `border-bottom: 1px #666 solid;`;
    }
  }

  /**  文本色  */
  color: string | undefined = undefined;
  /**  背景色  */
  bgColor: string | undefined = undefined;
  /**  文本是否为粗体  */
  bold: -1 | 0 | 1 = 0;
  /**  斜体  */
  italic: boolean = false;
  /**  下划线  */
  underline: boolean = false;
  /**  反转  */
  reversed: boolean = false;
  /**  隐藏文本  */
  hide: boolean = false;
  /**  文本自身  */
  str: string = '';

  /**  解析数据  */
  parse(str: string) {
    str
      // 替换掉色值
      .replace(/38;5;(\d+)/g, 'c-$1')
      // 替换掉背景色值
      .replace(/48;5;(\d+)/g, 'b-$1')
      // 以 ; 分割色值
      .split(';')
      //
      .reverse()
      .forEach(e => {
        // 文本加粗
        if (this.bold === 0 && e === kindList.bold) {
          this.bold = 1;
        }
        // 细文本
        else if (this.bold === 0 && e === kindList.dim) {
          this.bold = -1;
        }
        // 斜体
        else if (e === kindList.italic) {
          this.italic = true;
        }
        // 下划线
        else if (e === kindList.underline) {
          this.underline = true;
        }
        // 色值反转
        else if (e === kindList.reversed) {
          this.reversed = true;
        }
        // 隐藏文本
        else if (e === kindList.hide) {
          this.hide = true;
        }
        // 前景色
        else if (isUndefined(this.color) && e.startsWith('c')) {
          this.color = reverseParse(e.split('-')[1]);
        } else if (isUndefined(this.bgColor) && e.startsWith('b')) {
          this.bgColor = reverseParse(e.split('-')[1]);
        }
      });
  }
}
