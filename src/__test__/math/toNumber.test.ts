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
  t(Infinity, 0);
  t(Number.MAX_SAFE_INTEGER, 9007199254740991);
  t(Number.MIN_SAFE_INTEGER, -9007199254740991);

  t = function (num: Argument, precision: number, expected: number) {
    test(createTestName(arguments), () => {
      expect(math(num).toNumber(precision)).toEqual(expected);
    });
  };

  t(0, 10, 0);
  t(0.0000001, 1, 0);
  t(0.9999999, 2, 0.99);
  t(0.123123, 3, 0.123);
  t(1000, 3, 1000);
});
