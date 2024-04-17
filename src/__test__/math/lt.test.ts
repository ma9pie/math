import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math lt method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: boolean) {
    test(createTestName(arguments), () => {
      expect(math(numA).lt(numB)).toEqual(expected);
    });
  };

  t('1', 1, false);
  t(1, '0.9', false);
  t('1', 1.1, true);
  t(1, 1, false);
  t(1, 0.9, false);
  t(1, 1.1, true);
  t(1, -1.1, false);
  t(1, 1e-7, false);
  t(1, -1e-7, false);
  t(1e9, 1e8, false);
  t(-1, -2, false);
  t(0, -999999, false);
  t(0, 1, true);
  t(1e7, 1e7, false);
  t(BigInt(0), 0.1, true);
  t(BigInt(0), '0', false);
  t(BigInt(1), 1, false);
  t(Infinity, Number.MAX_SAFE_INTEGER, false);
  t(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, false);
  t(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, true);
});
