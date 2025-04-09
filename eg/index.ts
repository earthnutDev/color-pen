import pen from '..';

const log = console.log;

const boldPen = pen.bold;

const redPen = pen.red;

const redBoldPen = redPen.bold;

const redBoldYellowBgPen = redBoldPen.bgYellow;

const italicPen = redBoldYellowBgPen.italic;
log(pen('标准的文本展示'));

log(boldPen('粗体文本展示'));

log(redPen('红色文本展示'));

log(redBoldPen('红色粗体文本展示'));

log(pen.random('任意色值的文本'));

log(pen.random('任意色值的文本'));

log(redBoldYellowBgPen('红色粗体黄色背景的文本'));

log(
  pen.red.blink(
    `红色的闪烁（${pen.underline.random('内嵌的任意色的带下划线的文本')}）的文本`,
  ),
);

log(italicPen('斜体文本'));
