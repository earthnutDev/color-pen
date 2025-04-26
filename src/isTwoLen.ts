/**
 *
 * 是否在终端占用两个字符宽度
 *
 */
export function isTwoLen(code: string) {
  const codePoint = code.codePointAt(0) || 0;
  return (
    // 中日韩统一表意文字 (CJK Unified Ideographs)
    (codePoint >= 0x4e00 && codePoint <= 0x9fff) ||
    // 中日韩统一表意文字扩展A区 (Extension A)
    (codePoint >= 0x3400 && codePoint <= 0x4dbf) ||
    // 中日韩统一表意文字扩展B-F区 (Extensions B-F)
    (codePoint >= 0x20000 && codePoint <= 0x2ebef) ||
    // 中日韩兼容表意文字 (Compatibility Ideographs)
    (codePoint >= 0xf900 && codePoint <= 0xfaff) ||
    // 全角符号 (Fullwidth Symbols)
    (codePoint >= 0xff00 && codePoint <= 0xffef) ||
    // 半角片假名 (Halfwidth Katakana)
    (codePoint >= 0xff65 && codePoint <= 0xff9f) ||
    // Emoji 范围
    (codePoint >= 0x1f300 && codePoint <= 0x1fad6) ||
    // 更多Emoji范围
    (codePoint >= 0x1f600 && codePoint <= 0x1f64f) ||
    (codePoint >= 0x1f680 && codePoint <= 0x1f6ff) ||
    (codePoint >= 0x2600 && codePoint <= 0x26ff) ||
    (codePoint >= 0x2700 && codePoint <= 0x27bf) ||
    // 韩文字母 (Hangul Syllables)
    (codePoint >= 0xac00 && codePoint <= 0xd7af) ||
    // 其他全角字符
    (codePoint >= 0x3000 && codePoint <= 0x303f) // 中日韩符号和标点
  );
}
