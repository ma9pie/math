import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math gte method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: boolean) {
    test(createTestName(arguments), () => {
      expect(math(numA).gte(numB)).toEqual(expected);
    });
  };

  t(1, '1', true);
  t('1', 0.9, true);
  t(1, '1.1', false);
  t(1, 1, true);
  t(1, 0.9, true);
  t(1, 1.1, false);
  t(1, -1.1, true);
  t(1, 1e-7, true);
  t(1, -1e-7, true);
  t(1, 1e7, false);
  t(1e8, 1e7, true);
  t(-1, -2, true);
  t(0, -999999, true);
  t(1e7, 1e7, true);
  t(BigInt(15), 16, false);
  t(BigInt(0), -1, true);
});
