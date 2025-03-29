# 🖊️

[![version](<https://img.shields.io/npm/v/color-pen.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/color-pen) [![NPM Last Update](<https://img.shields.io/npm/last-update/color-pen?logo=npm&label=版本最后更新&labelColor=rgb(255,36,63)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/color-pen) [![📦 size](<https://img.shields.io/bundlephobia/minzip/color-pen.svg?logo=npm&label=压缩包大小&labelColor=rgb(201,158,140)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/color-pen) [![downloads](<https://img.shields.io/npm/dm/color-pen.svg?logo=npm&logoColor=rgb(0,0,0)&label=月下载量&labelColor=rgb(194,112,210)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/color-pen) [![downloads](<https://img.shields.io/npm/dt/color-pen.svg?logo=npm&label=总下载量&labelColor=rgb(107,187,124)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/color-pen)

[![last commit](<https://img.shields.io/github/last-commit/earthnutDev/color-pen.svg?logo=github&logoColor=rgb(0,0,0)&label=最后推码&labelColor=rgb(255,165,0)&color=rgb(0,0,0)>)](https://github.com/earthnutDev/color-pen) [![GitHub commit activity](<https://img.shields.io/github/commit-activity/y/earthnutDev/color-pen.svg?logo=github&label=推码数&labelColor=rgb(128,0,128)&color=rgb(0,0,0)>)](https://github.com/earthnutDev/color-pen) [![Coverage Status](<https://img.shields.io/coverallsCoverage/github/earthnutDev/color-pen?logo=coveralls&label=coveralls&labelColor=rgb(12, 244, 39)&color=rgb(0,0,0)>)](https://coveralls.io/github/earthnutDev/color-pen?branch=main) [![codecov](<https://img.shields.io/codecov/github/earthnutDev/color-pen/main/?logo=codecov&label=codecov&labelColor=rgb(7, 245, 245)&color=rgb(0,0,0)>)](https://codecov.io/gh/earthnutDev/color-pen)

---

[![查看 📔 日志](<https://img.shields.io/badge/👀-日_%20_志-rgb(0,125,206)>)](https://github.com/earthnutDev/color-pen/blob/main/CHANGELOG.md) [![bug 🙋‍♂️ 提交](<https://img.shields.io/badge/☣️-bug_%20_提交-rgb(255,0,63)>)](https://github.com/earthnutDev/color-pen/issues)

---

## 颜色模块

一个运用于 terminal（意味着无法在浏览器环境使用，实际上，浏览器有更简便的[实现方式](https://developer.mozilla.org/zh-CN/docs/Web/API/console)） 的字符串色值：

## pen 静态属性

|  颜色类型的属性   |   对应的 RGB 色值    | ｜ 对应的 16 进制色值 |
| :---------------: | :------------------: | :-------------------: |
|       `hex`       |         ---          |          ---          |
|       `rgb`       |         ---          |          ---          |
|     `random`      |         ---          |          ---          |
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

- `bg` 开头的是配置背景色
- `hex` 以 16 进制值配置文本色
- `rgb` 以 rgb 值配置文本色
- `random` 随机颜色
- `bgRandom` 随机背景色
- `bgHex` 以 16 进制值配置背景色
- `bgRgb` 以 RGB 值配置背景色

| 非颜色色值其他属性 | 示意                                                   |
| :----------------- | :----------------------------------------------------- |
| `bold`             | 粗体文本                                               |
| `dim`              | 细体文本                                               |
| `italic`           | 斜体文本                                               |
| `underline`        | 带下划线的文本                                         |
| `blink`            | 闪烁文本（在某些终端上可能无效，譬如 vscode 自带终端） |
| `reversed`         | Reversed text and background                           |
| `hide`             | Hide text                                              |

## 使用 `pen`

```ts
const _p = console.log;

// 简单用法
_p(pen.red('红色文本')); // 输出红色文本
_p(pen.green('绿色文本')); // 输出绿色文本
_p(pen.blue('蓝色文本')); // 输出蓝色文本
_p(pen.yellow('黄色文本')); // 输出黄色文本
_p(pen.magenta('洋红文本')); // 输出洋红文本
_p(pen.cyan('青色文本')); // 输出青色文本
_p(pen.white('白色文本')); // 输出白色文本
_p(pen.bold('粗体文本')); // 输出粗体文本
_p(pen.italic('斜体文本')); // 输出斜体文本
_p(pen.underline('下划线文本')); // 输出下划线文本
_p(pen.inverse('反转文本')); // 输出反转文本
_p(pen.bold.italic.cyan('粗斜体青色文本')); // 输出粗斜体青色文本

_p(`${pen.red(`红色开头${pen.yellow('中间是黄色')}与结尾`)}`);

_p(pen.random('随机打印一个色值的字符串'));

/// 创建带样式的 🖊️
const redBoldPen = pen.red.bold;

_p(redBoldPen('红色粗体文本')); // 输出红色粗体文本

_p(redBoldPen.italic('红色粗体斜体文本')); // 输出红色粗体斜体文本
```

## 文档地址

参看 [https://earthnut.dev/color-pen/](https://earthnut.dev/color-pen/)
