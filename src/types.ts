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
 * A list of attribute calls
 *
 */
export type StringKindList = {
  /**
   *
   * <span style="color:#565656;">black foreground</span>
   *
   * Hexadecimal color values    <span style="color:#565656;">#565656</span>
   *
   * RGB color values    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   */
  black: string;
  /**
   * <span style="color:#b5281d;">Red foreground</span>
   *
   * Hexadecimal color values    <span style="color:#b5281d;">#b5281d</span>
   *
   * RGB color values    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   *
   */
  red: string;
  /**
   *
   *
   * <span style="color:#32b520;">Green foreground</span>
   *
   * Hexadecimal color values    <span style="color:#32b520;">#32b520</span>
   *
   * RGB color values    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   *
   */
  green: string;
  /**
   *
   * <span style="color:#a0a01d;">Yellow foreground</span>
   *
   * Hexadecimal color values    <span style="color:#a0a01d;">#a0a01d</span>
   *
   * RGB color values    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   *
   *
   */
  yellow: string;
  /**
   *
   *
   * <span style="color:#400ad9;">Blue foreground</span>
   *
   * Hexadecimal color values    <span style="color:#400ad9;">#400ad9</span>
   *
   * RGB color values    <span style="color:#400ad9;">rgb(160 ,160 ,29)</span>
   *
   */
  blue: string;
  /**
   *
   * <span style="color:#c918c9;">Magenta foreground</span>
   *
   * Hexadecimal color values  <span style="color:#c918c9;">#c918c9</span>
   *
   * RGB color values  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   *
   *
   */
  magenta: string;
  /**
   *
   *
   * <span style="color:#2daebb;">Cyan foreground</span>
   *
   * Hexadecimal color values  <span style="color:#2daebb;">#2daebb</span>
   *
   * RGB color values  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   *
   */
  cyan: string;
  /**
   *
   *
   * <span style="color:#c1c1c1;">White foreground</span>
   *
   * Hexadecimal color values  <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * RGB color values  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   *
   */
  white: string;
  /**
   *
   *
   * <span style="color:#6f6f6f;">Bright black foreground</span>
   *
   * Hexadecimal color values  <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * RGB color values  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   *
   */
  brightBlack: string;
  /**
   *
   *
   * <span style="color:#fc2119;">Bright red foreground</span>
   *
   * Hexadecimal color values  <span style="color:#fc2119;">#fc2119</span>
   *
   * RGB color values  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   *
   *
   */
  brightRed: string;
  /**
   *
   * <span style="color:#2fe81a;">Bright green foreground</span>
   *
   * Hexadecimal color values  <span style="color:#2fe81a;">#2fe81a</span>
   *
   * RGB color values  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   *
   *
   *
   */
  brightGreen: string;
  /**
   *
   *
   * <span style="color:#e8ec14;">Bright yellow foreground</span>
   *
   * Hexadecimal color values  <span style="color:#e8ec14;">#e8ec14</span>
   *
   * RGB color values  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   *
   */
  brightYellow: string;
  /**
   *
   *
   * <span style="color:#4a03fe;">Bright blue foreground</span>
   *
   * Hexadecimal color values  <span style="color:#4a03fe;">#4a03fe</span>
   *
   * RGB color values  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   *
   *
   */
  brightBlue: string;
  /**
   *
   *
   * <span style="color:#fb00fa;">Bright magenta foreground</span>
   *
   * Hexadecimal color values  <span style="color:#fb00fa;">#fb00fa</span>
   *
   * RGB color values  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   *
   *
   */
  brightMagenta: string;
  /**
   *
   *
   * <span style="color:#2ceeec;">Bright cyan foreground</span>
   *
   * Hexadecimal color values  <span style="color:#2ceeec;">#2ceeec</span>
   *
   * RGB color values  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   *
   */
  brightCyan: string;
  /**
   *
   *
   * <span style="color:#ffffff;">Bright cyan foreground</span>
   *
   * Hexadecimal color values  <span style="color:#ffffff;">#ffffff</span>
   *
   * RGB color values  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   *
   */
  brightWhite: string;
  /**
   *
   * <span style="color:#565656;">Bright black background</span>
   *
   * Hexadecimal color values    <span style="color:#565656;">#565656</span>
   *
   * RGB color values    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   */
  bgBlack: string;
  /**
   * <span style="color:#b5281d;">Bright red background</span>
   *
   * Hexadecimal color values    <span style="color:#b5281d;">#b5281d</span>
   *
   * RGB color values    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   *
   */
  bgRed: string;
  /**
   *
   *
   * <span style="color:#32b520;">Bright green background</span>
   *
   * Hexadecimal color values    <span style="color:#32b520;">#32b520</span>
   *
   * RGB color values    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   *
   */
  bgGreen: string;
  /**
   *
   * <span style="color:#a0a01d;">Bright yellow background</span>
   *
   * Hexadecimal color values    <span style="color:#a0a01d;">#a0a01d</span>
   *
   * RGB color values    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   *
   *
   */
  bgYellow: string;
  /**
   *
   *
   * <span style="color:#400ad9;">Bright blue background</span>
   *
   * Hexadecimal color values    <span style="color:#400ad9;">#400ad9</span>
   *
   * RGB color values    <span style="color:#400ad9;">rgb(160 ,160 ,29)</span>
   *
   */
  bgBlue: string;
  /**
   *
   * <span style="color:#c918c9;">Bright magenta background</span>
   *
   * Hexadecimal color values  <span style="color:#c918c9;">#c918c9</span>
   *
   * RGB color values  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   *
   *
   */
  bgMagenta: string;
  /**
   *
   *
   * <span style="color:#2daebb;">Bright cyan background</span>
   *
   * Hexadecimal color values  <span style="color:#2daebb;">#2daebb</span>
   *
   * RGB color values  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   *
   */
  bgCyan: string;
  /**
   *
   *
   * <span style="color:#c1c1c1;">Bright white background</span>
   *
   * Hexadecimal color values  <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * RGB color values  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   *
   */
  bgWhite: string;
  /**
   *
   *
   * <span style="color:#6f6f6f;">Bright black background</span>
   *
   * Hexadecimal color values  <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * RGB color values  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   *
   */
  bgBrightBlack: string;
  /**
   *
   *
   * <span style="color:#fc2119;">Bright red background</span>
   *
   * Hexadecimal color values  <span style="color:#fc2119;">#fc2119</span>
   *
   * RGB color values  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   *
   *
   */
  bgBrightRed: string;
  /**
   *
   * <span style="color:#2fe81a;">Bright green background</span>
   *
   * Hexadecimal color values  <span style="color:#2fe81a;">#2fe81a</span>
   *
   * RGB color values  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   *
   *
   *
   */
  bgBrightGreen: string;
  /**
   *
   *
   * <span style="color:#e8ec14;">Bright yellow background</span>
   *
   * Hexadecimal color values  <span style="color:#e8ec14;">#e8ec14</span>
   *
   * RGB color values  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   *
   */
  bgBrightYellow: string;
  /**
   *
   *
   * <span style="color:#4a03fe;">Bright blue background</span>
   *
   * Hexadecimal color values  <span style="color:#4a03fe;">#4a03fe</span>
   *
   * RGB color values  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   *
   *
   */
  bgBrightBlue: string;
  /**
   *
   *
   * <span style="color:#fb00fa;">Bright magenta background</span>
   *
   * Hexadecimal color values  <span style="color:#fb00fa;">#fb00fa</span>
   *
   * RGB color values  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   *
   *
   */
  bgBrightMagenta: string;
  /**
   *
   *
   * <span style="color:#2ceeec;">Bright cyan background</span>
   *
   * Hexadecimal color values  <span style="color:#2ceeec;">#2ceeec</span>
   *
   * RGB color values  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   *
   */
  bgBrightCyan: string;
  /**
   *
   *
   * <span style="color:#ffffff;">Bright white background</span>
   *
   * Hexadecimal color values  <span style="color:#ffffff;">#ffffff</span>
   *
   * RGB color values  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   *
   */
  bgBrightWhite: string;
  /**  Bold text */
  bold: string;
  /**   Faint text */
  dim: string;
  /**  Italic text  */
  italic: string;
  /** Underlined text */
  underline: string;
  /**  Blink text */
  blink: string;
  /**  Reversed text and background  */
  reversed: string;
  /**  Hide text  */
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
  /**  Set the foreground with RGB color values */
  rgb(rgb: string | [number, number, number]): string;
  /**  Set the foreground color by passing in hexadecimal  */
  hex(hex: string | number): string;
  /**  Set the background with RGB color values  */
  bgRgb(rgb: string | [number, number, number]): string;
  /**   Set the background color via hexadecimal  */
  bgHex(hex: string | number): string;
  /**  Random foreground color  */
  random(): string;
  /**  Random background color  */
  bgRandom(): string;
};

/**  所有可配置项  */
/**  All configurables  */
export type KindListKey = keyof FunctionKindList | keyof StringKindList;
