import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math isZero method test', () => {
  let t;

  t = function (num: Argument, expected: boolean) {
    test(createTestName(arguments), () => {
      expect(math(num).isZero()).toEqual(expected);
    });
  };

  t('0', true);
  t('0.0', true);
  t('-0', true);
  t('0e0', true);
  t('0e-5', true);
  t('0.0e0', true);
  t('0.0e-5', true);
  t(0, true);
  t(0.0, true);
  t(-0, true);
  t(0e-5, true);
  t(0.0e-5, true);
  t(BigInt(0), true);
  t(BigInt(-0), true);
  t(BigInt('0'), true);
  t('', true);
  t(' ', true);
  t('test', true);
  t(null, true);
  t(undefined, true);
});
