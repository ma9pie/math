import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math toNumber method test', () => {
  let t;

  t = function (num: Argument, expected: number) {
    test(createTestName(arguments), () => {
      expect(math(num).toNumber()).toEqual(expected);
    });
  };

  t(1e18, 1e18);
  t(1e-18, 1e-18);
  t('3', 3);
  t('1e18', 1e18);
  t('1e-18', 1e-18);
  t('', 0);
  t(' ', 0);
  t('test', 0);
  t(undefined, 0);
  t(null, 0);
  t(BigInt(3), 3);
  t(BigInt(-3), -3);
  t(BigInt(0), 0);
});
