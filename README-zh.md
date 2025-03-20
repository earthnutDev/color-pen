# 🖊️

![version](<https://img.shields.io/npm/v/color-pen.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>) ![NPM Last Update](<https://img.shields.io/npm/last-update/color-pen?logo=npm&label=版本最后更新&labelColor=rgb(255,36,63)&color=rgb(0,0,0)>) ![📦 size](<https://img.shields.io/bundlephobia/minzip/color-pen.svg?logo=npm&label=压缩包大小&labelColor=rgb(201,158,140)&color=rgb(0,0,0)>) ![downloads](<https://img.shields.io/npm/dm/color-pen.svg?logo=npm&logoColor=rgb(0,0,0)&label=月下载量&labelColor=rgb(194,112,210)&color=rgb(0,0,0)>) ![downloads](<https://img.shields.io/npm/dt/color-pen.svg?logo=npm&label=总下载量&labelColor=rgb(107,187,124)&color=rgb(0,0,0)>)

![last commit](<https://img.shields.io/github/last-commit/earthnutDev/color-pen.svg?logo=github&logoColor=rgb(0,0,0)&label=最后推码&labelColor=rgb(255,165,0)&color=rgb(0,0,0)>) ![GitHub commit activity](<https://img.shields.io/github/commit-activity/y/earthnutDev/color-pen.svg?logo=github&label=推码数&labelColor=rgb(128,0,128)&color=rgb(0,0,0)>) [![Coverage Status](https://coveralls.io/repos/github/earthnutDev/color-pen/badge.svg?branch=main)](https://coveralls.io/github/earthnutDev/color-pen?branch=main) [![codecov](https://codecov.io/gh/earthnutDev/color-pen/branch/main/graph/badge.svg)](https://codecov.io/gh/earthnutDev/color-pen)

---

![中文 🇨🇳](<https://img.shields.io/badge/🇨🇳-中_%20_文-rgb(0,0,0)?style=social>) [![English 🌍](<https://img.shields.io/badge/🌍-English-rgb(0,0,0)>)](https://github.com/earthnutDev/color-pen/blob/main/README.md) [![查看 📔 日志](<https://img.shields.io/badge/👀-日_%20_志-rgb(0,125,206)>)](https://github.com/earthnutDev/color-pen/blob/main/CHANGELOG.md) [![bug 🙋‍♂️ 提交](<https://img.shields.io/badge/☣️-bug_%20_提交-rgb(255,0,63)>)](https://github.com/earthnutDev/color-pen/issues)

---

## Color 模块

一个运用于 terminal（意味着无法在浏览器环境使用，实际上，浏览器有更简便的[实现方式](https://developer.mozilla.org/zh-CN/docs/Web/API/console)） 的字符串色值：

### Color 静态方法

|       方法        |                  示意                   |       rgb 色值       | ｜ 16 进制色值 |
| :---------------: | :-------------------------------------: | :------------------: | :------------: |
| `fromHexadecimal` |             从 16 进制获取              |         ---          |      ---       |
|     `fromRgb`     |               从 rgb 获取               |         ---          |      ---       |
|     `random`      |                 随机色                  |         ---          |      ---       |
|    `darkBlack`    |                 暗黑色                  |  `rgb(86 ,86 ,86)`   |   `#565656`    |
|     `darkRed`     | <span style="color:#b5281d">暗红</span> |  `rgb(181 ,40 ,29)`  |   `#b5281d`    |
|    `darkGreen`    |                  暗绿                   |  `rgb(50 ,181 ,32)`  |   `#32b520`    |
|   `darkYellow`    |                  暗黄                   | `rgb(160 ,160 ,29)`  |   `#a0a01d`    |
|    `darkBlue`     |                  暗蓝                   |  `rgb(64 ,10 ,217)`  |   `#400ad9`    |
|   `darkMagenta`   |                 暗杨红                  | `rgb(201 ,24 ,201)`  |   `#c918c9`    |
|    `darkCyan`     |                 暗青色                  | `rgb(45 ,174 ,187)`  |   `#2daebb`    |
|    `darkWhite`    |                 暗白色                  | `rgb(193 ,193 ,193)` |   `#c1c1c1`    |
|   `lightBlack`    |                 亮黑色                  | `rgb(111 ,111 ,111)` |   `#6f6f6f`    |
|       `red`       |                  红色                   |  `rgb(252 ,33 ,25)`  |   `#fc2119`    |
|      `green`      |                  绿色                   |  `rgb(47 ,232 ,26)`  |   `#2fe81a`    |
|     `yellow`      |                  黄色                   | `rgb(232 ,236 ,20)`  |   `#e8ec14`    |
|      `blue`       |                  蓝色                   |  `rgb(74 ,3 ,254)`   |   `#4a03fe`    |
|     `magenta`     |                 杨红色                  |  `rgb(251 ,0 ,253)`  |   `#fb00fa`    |
|      `cyan`       |                  青色                   | `rgb(255 ,255 ,255)` |   `#ffffff`    |

## 使用 Color

```ts
import { Color, _p } from 'a-node-tools';
/** `_p` 与 `Color` 不是配搭使用，`_p` 仅是 `process.stdout.write` 的封装  */

_p(`${Color.red(`红色开头${Color.yellow('中间是黄色')}与结尾`)}`);

_p(Color.random('随机打印一个色值的字符串'));
```
