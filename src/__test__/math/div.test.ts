import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math div method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(math(numA).div(numB).value()).toEqual(expected);
    });
  };

  t(3, 4, '0.75');
  t(1, 2, '0.5');
  t(1, 1e-7, '10000000');
  t(1e-7, 1, '0.0000001');
  t(1e-7, 1e-7, '1');
  t(1, 3, '0.33333333333333333333');
  t(0.1, 1e7, '0.00000001');
  t(0, 1e-7, '0');
  t(1e18, '123', '8130081300813008.13008130081300813008');
  t('0.155062399728289', -0.1589, '-0.97584895990112649465');
  t(1.1, 2.2, '0.5');
  t(undefined, 99999999, '0');
  t(null, 1, '0');
  t('999999999', '-0.000000000000000001', '-999999999000000000000000000');
  t('27.258901', '20.529702', '1.32777869839513500975');
  t('0.000476', '-0.158153', '-0.0030097437291736483');
  t('122.701132', '777.245032', '0.15786673050101914321');
  t('0.157866730501019143', '777.245032', '0.00020311063307126953');
  t('1.0003767627176685', 3.90169139033e-7, '2563956.66042940912916700339');
  t('5234.6942385637', '34.84190235278222', '150.24134404491537551684');
  t(10, BigInt(3), '3.33333333333333333333');

  t = function (
    numA: Argument,
    numB: Argument,
    numC: Argument,
    expected: string
  ) {
    test(createTestName(arguments), () => {
      expect(math(numA).div(numB).div(numC).value()).toEqual(expected);
    });
  };

  t(-1, -1, -1, '-1');
  t(1, 10, 10, '0.01');

  t = function (num: Argument, nums: Argument[], expected: string) {
    test(createTestName(arguments), () => {
      expect(
        math(num)
          .div(...nums)
          .value()
      ).toEqual(expected);
    });
  };

  t(256, [BigInt(2), 2, '2'], '32');
  t(1000, [3.3, 0.3, '33'], '30.60912151821242730334');
});
