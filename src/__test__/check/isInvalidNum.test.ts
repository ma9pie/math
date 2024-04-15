import { Argument } from '@/types';
import { createTestName, isInvalidNum } from '@/utils';

describe('isInvalidNum test', () => {
  let t;

  t = function (num: Argument, expected: boolean) {
    test(createTestName(arguments), () => {
      expect(isInvalidNum(num)).toEqual(expected);
    });
  };

  t(0, false);
  t(123, false);
  t(-123, false);
  t(1.23e-5, false);
  t(1e-7, false);
  t(1e-10, false);
  t(1e-18, false);
  t(-1e20, false);
  t(1e18, false);
  t(1e21, false);
  t('0', false);
  t('1e-7', false);
  t('1e-18', false);
  t('1e18', false);
  t('1e21', false);
  t(BigInt(0), false);
  t(BigInt(1), false);
  t(BigInt(-1), false);
  t(BigInt('0'), false);
  t(BigInt('1'), false);
  t(BigInt('-1'), false);
  t('', true);
  t(' ', true);
  t('test', true);
  t(null, true);
  t(undefined, true);
});
