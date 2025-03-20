/**
 * 这是一个颜色的定义区 \
 *
 */
export class ColorPen {
  #value: string;

  /**************************
   * 加粗的
   **************************/
  bolded: boolean = false;

  /**************************************
   *
   *
   *
   **************************************/
  valueOf(): string {
    return this.#value;
  }

  constructor(t: string | number | undefined | null | bigint | boolean) {
    this.#value = new String(t).valueOf();
  }

  concat(...strings: string[]): string {
    let str = this.valueOf();
    strings.forEach((currentString: string) => (str += currentString));
    return getRandomColor(str);
  }

  toString(): string {
    return getRandomColor(this.#value);
  }

  /**************************
   *
   * <span style="color:#565656;">黑</span>色
   *
   * 色值    <span style="color:#565656;">#565656</span>
   *
   * rgb    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   **************************/
  static black(str: string): string {
    return simpleColor(0, str);
  }
  /**************************
   * <span style="color:#b5281d;">红</span>色
   *
   * 色值    <span style="color:#b5281d;">#b5281d</span>
   *
   * rgb    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   *
   **************************/

  static red(str: string) {
    return simpleColor(1, str);
  }

  /**************************************
   *
   *
   * <span style="color:#32b520;">绿</span>色
   *
   * 色值    <span style="color:#32b520;">#32b520</span>
   *
   * rgb    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   *
   **************************************/
  static green(str: string): string {
    return simpleColor(2, str);
  }

  /**************************************
   *
   * <span style="color:#a0a01d;">黄</span>色
   *
   * 色值    <span style="color:#a0a01d;">#a0a01d</span>
   *
   * rgb    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   *
   *
   **************************************/
  static yellow(str: string): string {
    return simpleColor(3, str);
  }

  /**************************************
   *
   *
   * <span style="color:#400ad9;">蓝</span>色
   *
   * 色值    <span style="color:#400ad9;">#400ad9</span>
   *
   * rgb    <span style="color:#400ad9;">rgb(160 ,160 ,29)</span>
   *
   **************************************/
  static blue(str: string): string {
    return simpleColor(4, str);
  }

  /**************************************
   *
   * <span style="color:#c918c9;">杨红</span>色
   *
   * 色值  <span style="color:#c918c9;">#c918c9</span>
   *
   * rgb  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   *
   *
   **************************************/
  static magenta(str: string): string {
    return simpleColor(5, str);
  }

  /**************************************
   *
   *
   * <span style="color:#2daebb;">青</span>色
   *
   * 色值  <span style="color:#2daebb;">#2daebb</span>
   *
   * rgb  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   *
   **************************************/
  static cyan(str: string): string {
    return simpleColor(6, str);
  }

  /**************************************
   *
   *
   * <span style="color:#c1c1c1;">白</span>色
   *
   * 色值  <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * rgb  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   *
   **************************************/
  static white(str: string): string {
    return simpleColor(7, str);
  }

  /**************************************
   *
   *
   * <span style="color:#6f6f6f;">亮黑</span>色
   *
   * 色值  <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * rgb  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   *
   **************************************/
  static lightBlack(str: string): string {
    return simpleColor(8, str);
  }

  /**************************************
   *
   *
   * <span style="color:#fc2119;">亮红</span>色
   *
   * 色值  <span style="color:#fc2119;">#fc2119</span>
   *
   * rgb  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   *
   *
   **************************************/
  static lightRed(str: string): string {
    return simpleColor(9, str);
  }

  /**************************************
   *
   * <span style="color:#2fe81a;">亮绿</span>色
   *
   * 色值  <span style="color:#2fe81a;">#2fe81a</span>
   *
   * rgb  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   *
   *
   *
   **************************************/

  static lightGreen(str: string): string {
    return simpleColor(10, str);
  }

  /**************************************
   *
   *
   * <span style="color:#e8ec14;">亮黄</span>色
   *
   * 色值  <span style="color:#e8ec14;">#e8ec14</span>
   *
   * rgb  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   *
   **************************************/
  static lightYellow(str: string): string {
    return simpleColor(11, str);
  }

  /**************************************
   *
   *
   * <span style="color:#4a03fe;">亮蓝</span>色
   *
   * 色值  <span style="color:#4a03fe;">#4a03fe</span>
   *
   * rgb  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   *
   *
   **************************************/
  static lightBlue(str: string): string {
    return simpleColor(12, str);
  }

  /**************************************
   *
   *
   * <span style="color:#fb00fa;">亮杨红</span>色
   *
   * 色值  <span style="color:#fb00fa;">#fb00fa</span>
   *
   * rgb  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   *
   *
   **************************************/
  static lightMagenta(str: string): string {
    return simpleColor(13, str);
  }

  /**************************************
   *
   *
   * <span style="color:#2ceeec;">亮青</span>色
   *
   * 色值  <span style="color:#2ceeec;">#2ceeec</span>
   *
   * rgb  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   *
   **************************************/
  static lightCyan(str: string): string {
    return simpleColor(14, str);
  }

  /**************************************
   *
   *
   * <span style="color:#ffffff;">亮白</span>色
   *
   * 色值  <span style="color:#ffffff;">#ffffff</span>
   *
   * rgb  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   *
   **************************************/
  static lightWhite(str: string): string {
    return simpleColor(15, str);
  }

  /** 随机色 */
  static random(str: string) {
    return getRandomColor(str);
  }

  /** 从 rgb 获取颜色 */
  static rgb(str: string, rgb?: string): string {
    if (!rgb) return this.random(str);
    return simpleColor(computedTerminalColor(rgb), str);
  }

  /** 从十六进制获取颜色值 */
  static hex(str: string, hexadecimal: string) {
    return this.rgb(str, hexadecimal);
  }
}
