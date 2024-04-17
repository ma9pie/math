import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math pow method test', () => {
  let t;

  t = function (num: Argument, n: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(math(num).pow(n).value()).toEqual(expected);
    });
  };

  t(3, 3, '27');
  t(0.1, 3, '0.001');
  t(1e-2, 3, '0.000001');
  t(1e2, 4, '100000000');
  t(-1, 2, '1');
  t(-1, 11, '-1');
  t(1.0001, 5, '1.00050010001000050001');
  t(1.0001, -1000, '0.90484194193276887808');
  t('4', '3', '64');
  t('10', '2', '100');
  t('-1', 5, '-1');
  t(2, '', '1');
  t(2, ' ', '1');
  t(2, 'test', '1');
  t(2, null, '1');
  t(2, undefined, '1');
});
