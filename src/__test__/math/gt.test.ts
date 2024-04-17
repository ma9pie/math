import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math gt method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: boolean) {
    test(createTestName(arguments), () => {
      expect(math(numA).gt(numB)).toEqual(expected);
    });
  };

  t(1, '1', false);
  t('1', 0.9, true);
  t(1, '1.1', false);
  t(1, 1, false);
  t(1, 0.9, true);
  t(1, 1.1, false);
  t(1, -1.1, true);
  t(1, 1e-7, true);
  t(1, -1e-7, true);
  t(1, 1e7, false);
  t(1e8, 1e7, true);
  t(-1, -2, true);
  t(0, -999999, true);
  t(1e7, 1e7, false);
  t(BigInt(15), 16, false);
  t(BigInt(0), BigInt(-999), true);
  t(1001, BigInt(1000), true);
  t(Infinity, Number.MAX_SAFE_INTEGER, false);
  t(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, false);
  t(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, true);
});
