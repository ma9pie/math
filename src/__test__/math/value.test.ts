import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math value method test', () => {
  let t;

  t = function (num: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(math(num).value()).toEqual(expected);
    });
  };

  t(3, '3');
  t(1e18, '1000000000000000000');
  t(1e-18, '0.000000000000000001');
  t('', '0');
  t(' ', '0');
  t('test', '0');
  t(undefined, '0');
  t(null, '0');
  t(BigInt(3), '3');
  t(BigInt(-3), '-3');
  t(BigInt(0), '0');
});