/**
 *
 * 🖌️
 *
 */

export type Pen = {
  [key in keyof StringKindList]: Pen;
} & {
  [key in keyof FunctionKindList]: key extends 'rgb' | 'bgRgb'
    ? ((r: number, g: number, b: number) => Pen) & ((rgb: string) => Pen)
    : key extends 'hex' | 'bgHex'
      ? (hex: number | string) => Pen
      : Pen;
} & { (text: string): string };
/**
 *
 * 属性列表
 *
 */
export type StringKindList = {
  /**
   *
   * <span style="color:#565656;">黑前景色</span>
   *
   * 16 进制色值：   <span style="color:#565656;">#565656</span>
   *
   * RGB 色值：    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   */
  black: string;
  /**
   * <span style="color:#b5281d;">红前景色</span>
   *
   * 16 进制色值：   <span style="color:#b5281d;">#b5281d</span>
   *
   * RGB 色值：    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   *
   */
  red: string;
  /**
   *
   *
   * <span style="color:#32b520;">绿前景色</span>
   *
   * 16 进制色值：   <span style="color:#32b520;">#32b520</span>
   *
   * RGB 色值：    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   *
   */
  green: string;
  /**
   *
   * <span style="color:#a0a01d;">黄前景色</span>
   *
   * 16 进制色值：   <span style="color:#a0a01d;">#a0a01d</span>
   *
   * RGB 色值：    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   *
   *
   */
  yellow: string;
  /**
   *
   *
   * <span style="color:#400ad9;">蓝前景色</span>
   *
   * 16 进制色值：   <span style="color:#400ad9;">#400ad9</span>
   *
   * RGB 色值：    <span style="color:#400ad9;">rgb(160 ,160 ,29)</span>
   *
   */
  blue: string;
  /**
   *
   * <span style="color:#c918c9;">杨红前景色</span>
   *
   * 16 进制色值： <span style="color:#c918c9;">#c918c9</span>
   *
   * RGB 色值：  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   *
   *
   */
  magenta: string;
  /**
   *
   *
   * <span style="color:#2daebb;">青前景色</span>
   *
   * 16 进制色值： <span style="color:#2daebb;">#2daebb</span>
   *
   * RGB 色值：  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   *
   */
  cyan: string;
  /**
   *
   *
   * <span style="color:#c1c1c1;">白前景色</span>
   *
   * 16 进制色值： <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * RGB 色值：  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   *
   */
  white: string;
  /**
   *
   *
   * <span style="color:#6f6f6f;">高亮黑前景色</span>
   *
   * 16 进制色值： <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * RGB 色值：  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   *
   */
  brightBlack: string;
  /**
   *
   *
   * <span style="color:#fc2119;">高亮红前景色</span>
   *
   * 16 进制色值： <span style="color:#fc2119;">#fc2119</span>
   *
   * RGB 色值：  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   *
   *
   */
  brightRed: string;
  /**
   *
   * <span style="color:#2fe81a;">高亮绿前景色</span>
   *
   * 16 进制色值： <span style="color:#2fe81a;">#2fe81a</span>
   *
   * RGB 色值：  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   *
   *
   *
   */
  brightGreen: string;
  /**
   *
   *
   * <span style="color:#e8ec14;">高亮黄前景色</span>
   *
   * 16 进制色值： <span style="color:#e8ec14;">#e8ec14</span>
   *
   * RGB 色值：  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   *
   */
  brightYellow: string;
  /**
   *
   *
   * <span style="color:#4a03fe;">高亮蓝前景色</span>
   *
   * 16 进制色值： <span style="color:#4a03fe;">#4a03fe</span>
   *
   * RGB 色值：  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   *
   *
   */
  brightBlue: string;
  /**
   *
   *
   * <span style="color:#fb00fa;">高亮杨红前景色</span>
   *
   * 16 进制色值： <span style="color:#fb00fa;">#fb00fa</span>
   *
   * RGB 色值：  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   *
   *
   */
  brightMagenta: string;
  /**
   *
   *
   * <span style="color:#2ceeec;">高亮青前景色</span>
   *
   * 16 进制色值： <span style="color:#2ceeec;">#2ceeec</span>
   *
   * RGB 色值：  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   *
   */
  brightCyan: string;
  /**
   *
   *
   * <span style="color:#ffffff;">高亮白前景色</span>
   *
   * 16 进制色值： <span style="color:#ffffff;">#ffffff</span>
   *
   * RGB 色值：  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   *
   */
  brightWhite: string;
  /**
   *
   * <span style="color:#565656;">黑背景色</span>
   *
   * 16 进制色值：   <span style="color:#565656;">#565656</span>
   *
   * RGB 色值：    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   */
  bgBlack: string;
  /**
   * <span style="color:#b5281d;">红背景色</span>
   *
   * 16 进制色值：   <span style="color:#b5281d;">#b5281d</span>
   *
   * RGB 色值：    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   *
   */
  bgRed: string;
  /**
   *
   *
   * <span style="color:#32b520;">绿背景色</span>
   *
   * 16 进制色值：   <span style="color:#32b520;">#32b520</span>
   *
   * RGB 色值：    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   *
   */
  bgGreen: string;
  /**
   *
   * <span style="color:#a0a01d;">黄背景色</span>
   *
   * 16 进制色值：   <span style="color:#a0a01d;">#a0a01d</span>
   *
   * RGB 色值：    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   *
   *
   */
  bgYellow: string;
  /**
   *
   *
   * <span style="color:#400ad9;">蓝背景色</span>
   *
   * 16 进制色值：   <span style="color:#400ad9;">#400ad9</span>
   *
   * RGB 色值：    <span style="color:#400ad9;">rgb(160 ,160 ,29)</span>
   *
   */
  bgBlue: string;
  /**
   *
   * <span style="color:#c918c9;">杨红背景色</span>
   *
   * 16 进制色值： <span style="color:#c918c9;">#c918c9</span>
   *
   * RGB 色值：  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   *
   *
   */
  bgMagenta: string;
  /**
   *
   *
   * <span style="color:#2daebb;">高亮青背景色</span>
   *
   * 16 进制色值： <span style="color:#2daebb;">#2daebb</span>
   *
   * RGB 色值：  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   *
   */
  bgCyan: string;
  /**
   *
   *
   * <span style="color:#c1c1c1;">白背景色</span>
   *
   * 16 进制色值： <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * RGB 色值：  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   *
   */
  bgWhite: string;
  /**
   *
   *
   * <span style="color:#6f6f6f;">高亮黑背景色</span>
   *
   * 16 进制色值： <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * RGB 色值：  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   *
   */
  bgBrightBlack: string;
  /**
   *
   *
   * <span style="color:#fc2119;">高亮红背景色</span>
   *
   * 16 进制色值： <span style="color:#fc2119;">#fc2119</span>
   *
   * RGB 色值：  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   *
   *
   */
  bgBrightRed: string;
  /**
   *
   * <span style="color:#2fe81a;">高亮绿背景色</span>
   *
   * 16 进制色值： <span style="color:#2fe81a;">#2fe81a</span>
   *
   * RGB 色值：  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   *
   *
   *
   */
  bgBrightGreen: string;
  /**
   *
   *
   * <span style="color:#e8ec14;">高亮黄背景色</span>
   *
   * 16 进制色值： <span style="color:#e8ec14;">#e8ec14</span>
   *
   * RGB 色值：  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   *
   */
  bgBrightYellow: string;
  /**
   *
   *
   * <span style="color:#4a03fe;">高亮蓝背景色</span>
   *
   * 16 进制色值： <span style="color:#4a03fe;">#4a03fe</span>
   *
   * RGB 色值：  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   *
   *
   */
  bgBrightBlue: string;
  /**
   *
   *
   * <span style="color:#fb00fa;">高亮杨红背景色</span>
   *
   * 16 进制色值： <span style="color:#fb00fa;">#fb00fa</span>
   *
   * RGB 色值：  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   *
   *
   */
  bgBrightMagenta: string;
  /**
   *
   *
   * <span style="color:#2ceeec;">高亮青背景色</span>
   *
   * 16 进制色值： <span style="color:#2ceeec;">#2ceeec</span>
   *
   * RGB 色值：  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   *
   */
  bgBrightCyan: string;
  /**
   *
   *
   * <span style="color:#ffffff;">高亮白背景色</span>
   *
   * 16 进制色值： <span style="color:#ffffff;">#ffffff</span>
   *
   * RGB 色值：  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   *
   */
  bgBrightWhite: string;
  /**  粗文本 */
  bold: string;
  /**   细文本 */
  dim: string;
  /**  斜体文本  */
  italic: string;
  /** 带下划线的文本 */
  underline: string;
  /**
   *
   * 一闪一闪亮晶晶的文本
   *
   * 但是在某些终端上可能无效，譬如 vsCode 内嵌的终端
   *
   * */
  blink: string;
  /**  反转前景色和背景色  */
  reversed: string;
  /**  隐藏文本，用于创建等宽文本很爽  */
  hide: string;
};
/**
 *
 * 函数式调用
 *
 *
 * - `random`、`bgRandom` 既不是严格属性掉用也不是严格的函数式调用
 */
export type FunctionKindList = {
  /**  使用 RGB 设置前景色 */
  rgb(rgb: string | [number, number, number]): string;
  /**  使用 16 进制设置前景色   */
  hex(hex: string | number): string;
  /**  使用 RGB 设置背景色    */
  bgRgb(rgb: string | [number, number, number]): string;
  /**   使用 16 进制设置背景色  */
  bgHex(hex: string | number): string;
  /**  随机前景色  */
  random(): string;
  /**  随机背景色  */
  bgRandom(): string;
};

/**  所有可配置项  */
export type KindListKey = keyof FunctionKindList | keyof StringKindList;
