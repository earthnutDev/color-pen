import { dev } from '@qqi/dev-log';
import { _p } from 'a-node-tools';
import { randomPen, redPen } from '..';
dev('测试各种笔的样式', it => {
  it('测试 redPen', () => {
    _p(redPen`红色的字`.concat('普通的字'));
    _p(redPen.bold`红色加粗的字`.concat('普通的字'));
    _p(randomPen`随机色值文本`);
    _p(randomPen`随机色值文本`);
    _p(randomPen`随机色值文本`);
  });
});
