import { Argument } from '@/types';
import { comma, createTestName } from '@/utils';

describe('comma test', () => {
  let t;

  t = function (num: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(comma(num)).toEqual(expected);
    });
  };

  t('1000', '1,000');
  t('1000.123', '1,000.123');
  t('1000.123', '1,000.123');
  t('1000.123', '1,000.123');
  t('-1000.123', '-1,000.123');
  t('0.000123', '0.000123');
  t('0.000123', '0.000123');
  t('0.0', '0');
  t('1000000.0', '1,000,000');
  t(1e18, '1,000,000,000,000,000,000');
  t(1e18, '1,000,000,000,000,000,000');
  t(1789.123456, '1,789.123456');
  t(1789.123456, '1,789.123456');
  t(1789.123456, '1,789.123456');
  t(0.0000001, '0.0000001');
  t(1e-18, '0.000000000000000001');
  t('', '0');
  t('test', '0');
  t(undefined, '0');
  t(null, '0');
  t(9999999.99, '9,999,999.99');
  t(9999999.99, '9,999,999.99');
  t(-0.5, '-0.5');
  t(-0.4, '-0.4');
  t(0.5, '0.5');
  t(0.4, '0.4');
  t('1234567890.123456789', '1,234,567,890.123456789');
  t(1e-10, '0.0000000001');
  t(1e10, '10,000,000,000');
  t('0.000000000000000000001', '0.000000000000000000001');
  t('0.000000000000000000001', '0.000000000000000000001');
  t(Infinity, '0');
  t(NaN, '0');
});
