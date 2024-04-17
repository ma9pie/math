import { Argument } from '@/types';
import { createTestName, math } from '@/utils';

describe('math abs method test', () => {
  let t;

  t = function (num: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(math(num).abs().value()).toEqual(expected);
    });
  };

  t(-0.00000000001, '0.00000000001');
  t(-0, '0');
  t(0, '0');
  t(-1, '1');
  t('-1e7', '10000000');
  t(1e7, '10000000');
  t(BigInt(-9000), '9000');
  t(BigInt(-0), '0');
  t(BigInt(-333), '333');
  t(Infinity, '0');
  t(Number.MAX_SAFE_INTEGER, '9007199254740991');
  t(Number.MIN_SAFE_INTEGER, '9007199254740991');
});
