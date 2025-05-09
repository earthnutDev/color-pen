import { dev } from '@qqi/dev-log';
import { truncateStringWithChar } from '..';
import assert from 'node:assert';

dev('测试 truncateStringWithChar', it => {
  it('测试第一次', () => {
    assert.equal(truncateStringWithChar('爱我中华', 1), ' ');
    assert.equal(truncateStringWithChar('爱我中华', 2), '爱');
  });
});
