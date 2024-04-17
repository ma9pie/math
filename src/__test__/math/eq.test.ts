import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math eq method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: boolean) {
    test(createTestName(arguments), () => {
      expect(math(numA).eq(numB)).toEqual(expected);
    });
  };

  t(1, 1, true);
  t(1, '1', true);
  t(0, '1', false);
  t('0', 0, true);
  t('1e7', 1e7, true);
  t(1e-7, 1e7, false);
  t(-0.00000000001, '-0.00000000001', true);
  t(BigInt(1e7), '1e7', true);
  t(BigInt(-1e6), '-1000000', true);
  t('', 0, false);
  t(' ', 0, false);
  t('test', 0, false);
  t('test', null, false);
  t(null, 0, false);
  t(undefined, 0, false);
  t(null, undefined, false);
  t(Infinity, Infinity, false);
  t(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, true);
  t(Number.MAX_SAFE_INTEGER, Infinity, false);
});
