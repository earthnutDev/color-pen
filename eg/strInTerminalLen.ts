import assert from 'node:assert';
import test from 'node:test';
import { strInTerminalLength } from 'src/strInTerminalLength';

test('测试字符串在终端显示的字符宽度', async it => {
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好，好得很。天大姐发上来大姐发的了发就是的了就发i哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛i金龙都是解放',
    );

    assert.equal(strLen, 126);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好，好得很。天大姐发上来大姐发的了发就是的了就发i哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解放',
    );

    assert.equal(strLen, 125);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好，好得很。天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解放',
    );

    assert.equal(strLen, 124);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好，好得很天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解放',
    );

    assert.equal(strLen, 122);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好好得很天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解放',
    );

    assert.equal(strLen, 120);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好好得很天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解👩',
    );

    assert.equal(strLen, 120);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好好得很天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解😊',
    );

    assert.equal(strLen, 120);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好好得很天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解😁',
    );

    assert.equal(strLen, 120);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好好得很天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解。',
    );

    assert.equal(strLen, 120);
  });
  await it.test('测试 ', async () => {
    const strLen = strInTerminalLength(
      '你好好得很天大姐发上来大姐发的了发就是的了就发哦啊色的沙发和电视好的沙发就好的哈分开就好是对方金龙路就是对佛金龙都是解.',
    );

    assert.equal(strLen, 119);
  });
});
