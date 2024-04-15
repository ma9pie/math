import { Argument } from '@/types';
import { createTestName, numberToString } from '@/utils';

describe('numberToString test', () => {
  let t;

  t = function (num: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(numberToString(num)).toEqual(expected);
    });
  };

  t(0, '0');
  t(123, '123');
  t(-123, '-123');
  t(1.23e-5, '0.0000123');
  t(1e-7, '0.0000001');
  t(1e-10, '0.0000000001');
  t(1e-18, '0.000000000000000001');
  t(-1e20, '-100000000000000000000');
  t(1e18, '1000000000000000000');
  t(1e21, '1000000000000000000000');
  t('0', '0');
  t('1e-7', '0.0000001');
  t('1e-18', '0.000000000000000001');
  t('1e18', '1000000000000000000');
  t('1e21', '1000000000000000000000');
  t(null, '0');
  t(undefined, '0');
  t('test', '0');
});
