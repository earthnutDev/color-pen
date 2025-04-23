/**
 *
 * 是否在终端占用两个字符宽度
 *
 */
export function isTwoLen(code: string) {
  const codePoint = code.codePointAt(0) || 0;
  return (
    (codePoint >= 0x4e00 && codePoint <= 0x9fff) ||
    (codePoint >= 0x20000 && codePoint <= 0x2a6df) ||
    // 全角符号
    (codePoint >= 0xff00 && codePoint <= 0xffef) ||
    // 常用 Emoji
    (codePoint >= 0x1f300 && codePoint <= 0x1fad6)
  );
}
