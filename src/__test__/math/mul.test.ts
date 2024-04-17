import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math mul method test', () => {
  let t;

  t = function (numA: Argument, numB: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(math(numA).mul(numB).value()).toEqual(expected);
    });
  };

  t(3, 4, '12');
  t(1e-18, 1e18, '1');
  t(1, undefined, '0');
  t(null, 1, '0');
  t(0.1, 1e-18, '0.0000000000000000001');
  t(1e18, 1e18, '1000000000000000000000000000000000000');
  t(1, -1, '-1');
  t('999999999', '-0.000000000000000001', '-0.000000000999999999');
  t(
    '123456789012345678',
    '123456789012345678',
    '15241578753238836527968299765279684'
  );
  t('0.155062399728289', '0.1589', '0.0246394153168251221');
  t(
    '123123.155062399728289',
    '9999999.1589',
    '1231231447065.1115599055885361221'
  );
  t('-123.99999', '-123.99999', '15375.9975200001');
  t('124', '124', '15376');
  t('27.258901', '20.529702', '559.617114377502');
  t(Infinity, Number.MAX_SAFE_INTEGER, '0');
  t(
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    '81129638414606663681390495662081'
  );
  t(
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    '81129638414606663681390495662081'
  );

  t = function (
    numA: Argument,
    numB: Argument,
    numC: Argument,
    expected: string
  ) {
    test(createTestName(arguments), () => {
      expect(math(numA).mul(numB).mul(numC).value()).toEqual(expected);
    });
  };

  t(1, 1, 1, '1');
  t(1e-7, 1e-7, 1e-7, '0.000000000000000000001');
  t(0.1, BigInt(10), '5', '5');

  t = function (num: Argument, nums: Argument[], expected: string) {
    test(createTestName(arguments), () => {
      expect(
        math(num)
          .mul(...nums)
          .value()
      ).toEqual(expected);
    });
  };

  t(-1, [-1, '-1'], '-1');
  t(3, [3, BigInt(3), '3'], '81');
  t(1, [0, 9999999, '99999999'], '0');
});
