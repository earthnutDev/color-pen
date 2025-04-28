# 🖊️

[![version](<https://img.shields.io/npm/v/color-pen.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/color-pen) [![Coverage Status](<https://img.shields.io/coverallsCoverage/github/earthnutDev/color-pen?logo=coveralls&label=coveralls&labelColor=rgb(12, 244, 39)&color=rgb(0,0,0)>)](https://coveralls.io/github/earthnutDev/color-pen?branch=main) [![codecov](<https://img.shields.io/codecov/c/github/earthnutDev/color-pen/main?logo=codecov&label=codecov&labelColor=rgb(7, 245, 245)&color=rgb(0,0,0)>)](https://codecov.io/gh/earthnutDev/color-pen) [![issues 提交](<https://img.shields.io/badge/issues-提交-rgb(255,0,63)?logo=github>)](https://github.com/earthnutDev/color-pen/issues)

## 颜色模块

一个运用于 terminal（意味着无法在浏览器环境使用，实际上，浏览器有更简便的[实现方式](https://developer.mozilla.org/zh-CN/docs/Web/API/console)） 的字符串色值

## ANSI 模块相关

- `esc` ANSI 转义符
- `csi` CSI（Control Sequence Introducer）带 `[` 的 `esc` 字符串 `\u001b[` 或者是 `\x1b`
- `terminalResetStyle` 重置属性样式，即 `\x1b[0m`
- `terminalRegExp` 一个用于 ANSI 的正则字符串，可用与判断字符串是否包含 ANSI 转义或是清理
- `strInTerminalLength` 获取字符串在终端显示的长度
- `truncateStringWithChar` 以在终端的长度截断字符串
- `strInOneLineOnTerminal` 在终端中以一行的形式展示字符串（不影响单行内的换行符）

### `esc`

`esc` 表示 ANSI 的控制序列前缀描述，即 `\x1b` 或者是 `\u001b`。

```ts
import { esc } from 'color-pen';
// 光标向上
const cursorMoveUpStr = esc.concat('[2A');

console.log(cursorMoveUpStr);
```

### `csi`

`csi` 表示 ANSI 的控制序列，即 `\x1b[` 或者是 `\u001b[`。

```ts
import { csi } from 'color-pen';
// 光标向上
const cursorMoveUpStr = csi.concat('2A');

console.log(cursorMoveUpStr);
```

### `terminalResetStyle`

`terminalRestStyle` 表示 ANSI 的属性重置，即 `\x1b[0m` 或 `\u001b[0m` 或 `\x1b[m` 或 `\u001b[m`。

```ts
import { pen, terminalResetStyle } from 'color-pen';

pen.red`我是红色的文本${terminalResetStyle.concat('其实，在使用 terminalResetStyle 的时候会被截断，而最后的返回，这里也是红的')}我也是红色的`;
```

### `terminalRegExp` 正则

一段长的 ANSI 正则字符串，用于判断字符串是否包含 ANSI 转义或是清理字符串中的 ANSI 转义码。

```ts
import { terminalRegExp } from 'color-pen';

terminalRegExp.latestIndex = 0;

console.log(terminalRegExp.test('\x1b[0m')); // true

terminalRegExp.latestIndex = 0;

console.log(terminalRegExp.test('\x1b[?25l')); // true

terminalRegExp.latestIndex = 0;

console.log(terminalRegExp.test('\x1b[38;5;236m')); // true
```

### `strInTerminalLength` 字符串在终端显示的长度

暂时没有示例展示

## pen 静态属性

|  颜色类型的属性   |   对应的 RGB 色值    | ｜ 对应的 16 进制色值 |
| :---------------: | :------------------: | :-------------------: |
|       `hex`       |         ---          |          ---          |
|       `rgb`       |         ---          |          ---          |
|     `random`      |         ---          |          ---          |
|      `color`      |         ---          |          ---          |
|     `number`      |         ---          |          ---          |
|      `black`      |  `rgb(86 ,86 ,86)`   |       `#565656`       |
|       `red`       |  `rgb(181 ,40 ,29)`  |       `#b5281d`       |
|      `green`      |  `rgb(50 ,181 ,32)`  |       `#32b520`       |
|     `yellow`      | `rgb(160 ,160 ,29)`  |       `#a0a01d`       |
|      `blue`       |  `rgb(64 ,10 ,217)`  |       `#400ad9`       |
|     `magenta`     | `rgb(201 ,24 ,201)`  |       `#c918c9`       |
|      `cyan`       | `rgb(45 ,174 ,187)`  |       `#2daebb`       |
|      `white`      | `rgb(193 ,193 ,193)` |       `#c1c1c1`       |
|   `brightBlack`   | `rgb(111 ,111 ,111)` |       `#6f6f6f`       |
|    `brightRed`    |  `rgb(252 ,33 ,25)`  |       `#fc2119`       |
|   `brightGreen`   |  `rgb(47 ,232 ,26)`  |       `#2fe81a`       |
|  `brightYellow`   | `rgb(232 ,236 ,20)`  |       `#e8ec14`       |
|   `brightBlue`    |  `rgb(74 ,3 ,254)`   |       `#4a03fe`       |
|  `brightMagenta`  |  `rgb(251 ,0 ,253)`  |       `#fb00fa`       |
|   `brightCyan`    |                      |                       |
|   `brightWhite`   | `rgb(255 ,255 ,255)` |       `#ffffff`       |
|      `bgRgb`      |         ---          |          ---          |
|      `bgHex`      |         ---          |          ---          |
|    `bgRandom`     |         ---          |          ---          |
|     `bgColor`     |         ---          |          ---          |
|    `bgNumber`     |         ---          |          ---          |
|     `bgBlack`     |  `rgb(86 ,86 ,86)`   |       `#565656`       |
|      `bgRed`      |  `rgb(181 ,40 ,29)`  |       `#b5281d`       |
|     `bgGreen`     |  `rgb(50 ,181 ,32)`  |       `#32b520`       |
|    `bgYellow`     | `rgb(160 ,160 ,29)`  |       `#a0a01d`       |
|     `bgBlue`      |  `rgb(64 ,10 ,217)`  |       `#400ad9`       |
|    `bgMagenta`    | `rgb(201 ,24 ,201)`  |       `#c918c9`       |
|     `bgCyan`      | `rgb(45 ,174 ,187)`  |       `#2daebb`       |
|     `bgWhite`     | `rgb(193 ,193 ,193)` |       `#c1c1c1`       |
|  `bgBrightBlack`  | `rgb(111 ,111 ,111)` |       `#6f6f6f`       |
|   `bgBrightRed`   |  `rgb(252 ,33 ,25)`  |       `#fc2119`       |
|  `bgBrightGreen`  |  `rgb(47 ,232 ,26)`  |       `#2fe81a`       |
| `bgBrightYellow`  | `rgb(232 ,236 ,20)`  |       `#e8ec14`       |
|  `bgBrightBlue`   |  `rgb(74 ,3 ,254)`   |       `#4a03fe`       |
| `bgBrightMagenta` |  `rgb(251 ,0 ,253)`  |       `#fb00fa`       |
|  `bgBrightCyan`   |                      |                       |
|  `bgBrightWhite`  | `rgb(255 ,255 ,255)` |       `#ffffff`       |

###

- `bg` 开头的是配置背景色
- `hex` 以 16 进制值配置文本色
- `rgb` 以 rgb 值配置文本色
- `color` 以 16 进制或 rgb 配置文本色
- `number` 以终端色值数值配置文本色
- `random` 随机颜色
- `bgRandom` 随机背景色
- `bgHex` 以 16 进制值配置背景色
- `bgRgb` 以 RGB 值配置背景色
- `bgColor` 以 16 进制或 rgb 配置背景色
- `bgNumber` 以终端色值数值配置背景色

| 非颜色色值其他属性 | 示意                                                   |
| :----------------- | :----------------------------------------------------- |
| `bold`             | 粗体文本                                               |
| `dim`              | 细体文本                                               |
| `italic`           | 斜体文本                                               |
| `underline`        | 带下划线的文本                                         |
| `blink`            | 闪烁文本（在某些终端上可能无效，譬如 vscode 自带终端） |
| `reversed`         | Reversed text and background                           |
| `hide`             | Hide text                                              |

注意，在使用 `hex` 或是 `color` 进行使用色值时，尽量不要使用十六进制的数值，可能会产生歧义。例如：

```ts
import { pen } from 'color-pen';

pen.hex(0x000000)`期待是黑色文本`; // 其实输出的是任意色的文本

pen.color(0x0000ff)`期待是蓝色文本`; // 其实输出的是任意色的文本
```

## 使用 `pen`

注意 _从 v1.0.0 版本开始，pen 正式接受模版函数调用方式_

```ts
import { Dog } from '@qqi/dev-log';

const dog = new Dog({
  name: 'color pen',
  type: 'error',
});

// 简单用法
dog(pen.red('红色文本')); // 输出红色文本
dog(pen.red`红色${pen.italic`内嵌默认色斜体文本`}文本`); // 输出红色文本
dog(pen.green('绿色文本')); // 输出绿色文本
dog(pen.green`绿色文本`); // 输出绿色文本
dog(pen.blue('蓝色文本')); // 输出蓝色文本
dog(pen.blue`蓝色文本`); // 输出蓝色文本
dog(pen.yellow('黄色文本')); // 输出黄色文本
dog(pen.yellow`黄色文`); // 输出黄色文本
dog(pen.magenta('洋红文本')); // 输出洋红文本
dog(pen.magenta`洋红文本`); // 输出洋红文本
dog(pen.cyan('青色文本')); // 输出青色文本
dog(pen.cyan`青色文本`); // 输出青色文本
dog(pen.white('白色文本')); // 输出白色文本
dog(pen.white`白色文本`); // 输出白色文本
dog(pen.bold('粗体文本')); // 输出粗体文本
dog(pen.bold`粗体文本`); // 输出粗体文本
dog(pen.italic('斜体文本')); // 输出斜体文本
dog(pen.italic`斜体文本`); // 输出斜体文本
dog(pen.underline('下划线文本')); // 输出下划线文本
dog(pen.underline`下划线文本`); // 输出下划线文本
dog(pen.inverse('反转文本')); // 输出反转文本
dog(pen.inverse`反转文本`); // 输出反转文本
dog(pen.bold.italic.cyan('粗斜体青色文本')); // 输出粗斜体青色文本
dog(pen.bold.italic.cyan`粗斜体${pen.red`内嵌红色字`}青色文本`); // 输出粗斜体青色文本

dog(`${pen.red(`红色开头${pen.yellow('中间是黄色')}与结尾`)}`);
dog(`${pen.red`红色开头${pen.yellow`中间是黄色`}与结尾`}`);

dog(pen.random('随机打印一个色值的字符串'));
dog(pen.random`随机打印一个${pen.bgRandom('设置')}的字符串`);

/// 创建带样式的 🖊️
const redBoldPen = pen.red.bold;

dog(redBoldPen('红色粗体文本')); // 输出红色粗体文本

dog(redBoldPen.italic('红色粗体斜体文本')); // 输出红色粗体斜体文本
```

## 文档地址

- 本包文档参看 [https://earthnut.dev/color-pen/](https://earthnut.dev/color-pen/)
- [ANSI](https://earthnut.dev/%E6%97%A5%E5%BF%97/ANSI%20%E8%BD%AC%E4%B9%89%E7%A0%81) 转义相关
