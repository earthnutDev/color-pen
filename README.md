# 🖊️

![version](<https://img.shields.io/npm/v/color-pen.svg?logo=npm&logoColor=rgb(0,0,0)&label=version&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>) ![NPM Last Update](<https://img.shields.io/npm/last-update/color-pen?logo=npm&labelColor=rgb(255,36,63)&color=rgb(0,0,0)>) ![📦 size](<https://img.shields.io/bundlephobia/minzip/color-pen.svg?logo=npm&labelColor=rgb(201,158,140)&color=rgb(0,0,0)>) ![downloads](<https://img.shields.io/npm/dm/color-pen.svg?logo=npm&logoColor=rgb(0,0,0)&labelColor=rgb(194,112,210)&color=rgb(0,0,0)>) ![downloads](<https://img.shields.io/npm/dt/color-pen.svg?logo=npm&labelColor=rgb(107,187,124)&color=rgb(0,0,0)>)

![last commit](<https://img.shields.io/github/last-commit/earthnutDev/color-pen.svg?logo=github&logoColor=rgb(0,0,0)&labelColor=rgb(255,165,0)&color=rgb(0,0,0)>) ![GitHub commit activity](<https://img.shields.io/github/commit-activity/y/earthnutDev/color-pen.svg?logo=github&labelColor=rgb(128,0,128)&color=rgb(0,0,0)>) [![Coverage Status](https://coveralls.io/repos/github/earthnutDev/color-pen/badge.svg?branch=main)](https://coveralls.io/github/earthnutDev/color-pen?branch=main) [![codecov](https://codecov.io/gh/earthnutDev/color-pen/branch/main/graph/badge.svg)](https://codecov.io/gh/earthnutDev/color-pen)

---

[![🇨🇳 中文](<https://img.shields.io/badge/🇨🇳-中_%20_文-rgb(0,0,0)>)](https://github.com/earthnutDev/color-pen/blob/main/README-zh.md) ![🌍 English](<https://img.shields.io/badge/🌍-English-rgb(0,0,0)?style=social>) [![👀 change log](<https://img.shields.io/badge/👀-change_%20_log-rgb(0,125,206)?logo=github>)](https://github.com/earthnutDev/color-pen/blob/main/CHANGELOG-en.md) [![submit 🙋‍♂️ issue](<https://img.shields.io/badge/☣️-submit_%20_issue-rgb(255,0,63)?logo=github>)](https://github.com/earthnutDev/color-pen/issues)

---

## Color section

The string color value of the terminal (meaning it cannot be used in a browser environment, (in fact, browsers have [a simpler implementation method](https://developer.mozilla.org/zh-CN/docs/Web/API/console)) :

## Color static method

|      method       |       rgb 色值       | ｜ Hexadecimal color value |
| :---------------: | :------------------: | :------------------------: |
| `fromHexadecimal` |         ---          |            ---             |
|     `fromRgb`     |         ---          |            ---             |
|     `random`      |         ---          |            ---             |
|    `darkBlack`    |  `rgb(86 ,86 ,86)`   |         `#565656`          |
|     `darkRed`     |  `rgb(181 ,40 ,29)`  |         `#b5281d`          |
|    `darkGreen`    |  `rgb(50 ,181 ,32)`  |         `#32b520`          |
|   `darkYellow`    | `rgb(160 ,160 ,29)`  |         `#a0a01d`          |
|    `darkBlue`     |  `rgb(64 ,10 ,217)`  |         `#400ad9`          |
|   `darkMagenta`   | `rgb(201 ,24 ,201)`  |         `#c918c9`          |
|    `darkCyan`     | `rgb(45 ,174 ,187)`  |         `#2daebb`          |
|    `darkWhite`    | `rgb(193 ,193 ,193)` |         `#c1c1c1`          |
|   `lightBlack`    | `rgb(111 ,111 ,111)` |         `#6f6f6f`          |
|       `red`       |  `rgb(252 ,33 ,25)`  |         `#fc2119`          |
|      `green`      |  `rgb(47 ,232 ,26)`  |         `#2fe81a`          |
|     `yellow`      | `rgb(232 ,236 ,20)`  |         `#e8ec14`          |
|      `blue`       |  `rgb(74 ,3 ,254)`   |         `#4a03fe`          |
|     `magenta`     |  `rgb(251 ,0 ,253)`  |         `#fb00fa`          |
|      `cyan`       | `rgb(255 ,255 ,255)` |         `#ffffff`          |

## use Color

```ts
import { Color, _p } from 'a-node-tools';

/** `_Color` does not necessarily have to ce used together with `_p` ，`_p` is just the encapsulation of `process.stdout.write` */

_p(
  `${Color.red(
    `Red start${Color.yellow('The middle is yellow')} and the red ending`,
  )}`,
);

_p(Color.random('Randomly print a string of color values'));
```
