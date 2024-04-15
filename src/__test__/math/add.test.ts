import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math add method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(math(numA).add(numB).value()).toEqual(expected);
    });
  };

  t(3, 4, '7');
  t(1e18, 1e18, '2000000000000000000');
  t(0.1, 1e18, '1000000000000000000.1');
  t(1e-18, 1e-18, '0.000000000000000002');
  t(0, 1e-18, '0.000000000000000001');
  t(1e-18, 0, '0.000000000000000001');
  t(0, 0, '0');
  t(0.0, 0.0, '0');
  t(1, undefined, '1');
  t(1, null, '1');
  t('0.155062399728289', 0.1589, '0.313962399728289');
  t('999999999', '-0.000000000000000001', '999999998.999999999999999999');

  t = function (
    numA: Argument,
    numB: Argument,
    numC: Argument,
    expected: string
  ) {
    test(createTestName(arguments), () => {
      expect(math(numA).add(numB).add(numC).value()).toEqual(expected);
    });
  };

  t(1e-7, '2e-7', 3e-7, '0.0000006');
  t(-1e-7, '-2e-7', -3e-7, '-0.0000006');
  t(0.1, '0.2', 0.3, '0.6');
  t(0.1, '-0.2', 0.3, '0.2');
  t(3, 4, 5, '12');
  t(1, BigInt(2), '3', '6');

  t = function (num: Argument, nums: Argument[], expected: string) {
    test(createTestName(arguments), () => {
      expect(
        math(num)
          .add(...nums)
          .value()
      ).toEqual(expected);
    });
  };

  t(1, [BigInt(2), '3', 4, 0.5], '10.5');
  t(1, [0.1, 0.2, 0.3, 0.4], '2');
});
