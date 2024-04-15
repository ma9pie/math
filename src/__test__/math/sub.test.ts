import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math sub method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(math(numA).sub(numB).value()).toEqual(expected);
    });
  };

  t(3, 4, '-1');
  t(1e-18, 1e-18, '0');
  t(0.155062399728289, 0.1589, '-0.003837600271711');
  t('123456789012345678', '123456789012345678', '0');
  t('999999999', '-0.000000000000000001', '999999999.000000000000000001');
  t(0.1, 1e-18, '0.099999999999999999');
  t(1e-18, 0.1, '-0.099999999999999999');
  t(1, undefined, '1');
  t(1, null, '1');
  t(undefined, 1, '-1');
  t(null, 1, '-1');
  t(10, BigInt(3), '7');

  t = function (
    numA: Argument,
    numB: Argument,
    numC: Argument,
    expected: string
  ) {
    test(createTestName(arguments), () => {
      expect(math(numA).sub(numB).sub(numC).value()).toEqual(expected);
    });
  };

  t(1.1, 2.2, 3.3, '-4.4');
  t(0, 0, 0, '0');
  t(3.2, 4.9, 5.99, '-7.69');
  t(1e-18, 1e-18, 1e-18, '-0.000000000000000001');

  t = function (num: Argument, nums: Argument[], expected: string) {
    test(createTestName(arguments), () => {
      expect(
        math(num)
          .sub(...nums)
          .value()
      ).toEqual(expected);
    });
  };

  t(10, [BigInt(3), 3, '3'], '1');
  t(1.001, [0.1, 0.2, 0.3, 0.4], '0.001');
});
