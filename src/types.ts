/**************************************
 *
 * 🖌️
 *
 **************************************/

export type Pen = {
  [key in keyof StringKindList]: Pen;
} & {
  [key in keyof FunctionKindList]: key extends 'rgb' | 'bgRgb'
    ? ((r: number, g: number, b: number) => Pen) & ((rgb: string) => Pen)
    : key extends 'hex' | 'bgHex'
      ? (hex: number | string) => Pen
      : Pen;
} & { (text: string): string };
/**************************************
 *
 * 属性性调用列表
 *
 **************************************/
export type StringKindList = {
  /**************************
   *
   * <span style="color:#565656;">黑</span>色
   *
   * 色值    <span style="color:#565656;">#565656</span>
   *
   * rgb    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   **************************/
  blank: string;
  /**************************
   * <span style="color:#b5281d;">红</span>色
   *
   * 色值    <span style="color:#b5281d;">#b5281d</span>
   *
   * rgb    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   *
   **************************/
  red: string;
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
  green: string;
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
  yellow: string;
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
  blue: string;
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
  magenta: string;
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
  cyan: string;
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
  white: string;
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
  lightBlank: string;
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
  lightRed: string;
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
  lightGreen: string;
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
  lightYellow: string;
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
  lightBlue: string;
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
  lightMagenta: string;
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
  lightCyan: string;
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
  lightWhite: string;
  /**************************
   *
   * <span style="color:#565656;">暗黑</span>色背景
   *
   * 色值    <span style="color:#565656;">#565656</span>
   *
   * rgb    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   **************************/
  bgBlank: string;
  /**************************
   * <span style="color:#b5281d;">红</span>色背景
   *
   * 色值    <span style="color:#b5281d;">#b5281d</span>
   *
   * rgb    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   *
   **************************/
  bgRed: string;
  /**************************************
   *
   *
   * <span style="color:#32b520;">绿</span>色背景
   *
   * 色值    <span style="color:#32b520;">#32b520</span>
   *
   * rgb    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   *
   **************************************/
  bgGreen: string;
  /**************************************
   *
   * <span style="color:#a0a01d;">黄</span>色背景
   *
   * 色值    <span style="color:#a0a01d;">#a0a01d</span>
   *
   * rgb    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   *
   *
   **************************************/
  bgYellow: string;
  /**************************************
   *
   *
   * <span style="color:#400ad9;">蓝</span>色背景
   *
   * 色值    <span style="color:#400ad9;">#400ad9</span>
   *
   * rgb    <span style="color:#400ad9;">rgb(160 ,160 ,29)</span>
   *
   **************************************/
  bgBlue: string;
  /**************************************
   *
   * <span style="color:#c918c9;">杨红</span>色背景
   *
   * 色值  <span style="color:#c918c9;">#c918c9</span>
   *
   * rgb  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   *
   *
   **************************************/
  bgMagenta: string;
  /**************************************
   *
   *
   * <span style="color:#2daebb;">青</span>色背景
   *
   * 色值  <span style="color:#2daebb;">#2daebb</span>
   *
   * rgb  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   *
   **************************************/
  bgCyan: string;
  /**************************************
   *
   *
   * <span style="color:#c1c1c1;">白</span>色背景
   *
   * 色值  <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * rgb  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   *
   **************************************/
  bgWhite: string;
  /**************************************
   *
   *
   * <span style="color:#6f6f6f;">亮黑</span>色背景
   *
   * 色值  <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * rgb  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   *
   **************************************/
  bgLightBlank: string;
  /**************************************
   *
   *
   * <span style="color:#fc2119;">亮红</span>色背景
   *
   * 色值  <span style="color:#fc2119;">#fc2119</span>
   *
   * rgb  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   *
   *
   **************************************/
  bgLightRed: string;
  /**************************************
   *
   * <span style="color:#2fe81a;">亮绿</span>色背景
   *
   * 色值  <span style="color:#2fe81a;">#2fe81a</span>
   *
   * rgb  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   *
   *
   *
   **************************************/
  bgLightGreen: string;
  /**************************************
   *
   *
   * <span style="color:#e8ec14;">亮黄</span>色背景
   *
   * 色值  <span style="color:#e8ec14;">#e8ec14</span>
   *
   * rgb  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   *
   **************************************/
  bgLightYellow: string;
  /**************************************
   *
   *
   * <span style="color:#4a03fe;">亮蓝</span>色背景
   *
   * 色值  <span style="color:#4a03fe;">#4a03fe</span>
   *
   * rgb  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   *
   *
   **************************************/
  bgLightBlue: string;
  /**************************************
   *
   *
   * <span style="color:#fb00fa;">亮杨红</span>色背景
   *
   * 色值  <span style="color:#fb00fa;">#fb00fa</span>
   *
   * rgb  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   *
   *
   **************************************/
  bgLightMagenta: string;
  /**************************************
   *
   *
   * <span style="color:#2ceeec;">亮青</span>色背景
   *
   * 色值  <span style="color:#2ceeec;">#2ceeec</span>
   *
   * rgb  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   *
   **************************************/
  bgLightCyan: string;
  /**************************************
   *
   *
   * <span style="color:#ffffff;">亮白</span>色背景
   *
   * 色值  <span style="color:#ffffff;">#ffffff</span>
   *
   * rgb  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   *
   **************************************/
  bgLightWhite: string;
  /**  粗体  */
  bold: string;
  /**   faint  */
  dim: string;
  /**  斜体  */
  italic: string;
  /** 带下划线  */
  underline: string;
  /**  眨眼  */
  blink: string;
  /**  反转色  */
  reversed: string;
  /**  隐藏文本  */
  hide: string;
};
/**************************************
 *
 * 函数式调用
 *
 *
 * - `random`、`bgRandom` 既不是严格属性掉用也不是严格的函数式调用
 **************************************/
export type FunctionKindList = {
  /**  通过传入 rgb 设置文本色  */
  rgb(rgb: string | [number, number, number]): string;
  /**  通过传入十六进制设置文本色  */
  hex(hex: string | number): string;
  /**  通过 rgb 设置背景色  */
  bgRgb(rgb: string | [number, number, number]): string;
  /**   通过十六进制设置背景色  */
  bgHex(hex: string | number): string;
  /**  随机前景色  */
  random(): string;
  /**  随机背景色  */
  bgRandom(): string;
};

/**  所有可配置项  */
export type KindListKey = keyof FunctionKindList | keyof StringKindList;
