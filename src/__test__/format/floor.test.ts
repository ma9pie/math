import { Argument } from '@/types';
import { createTestName, floor } from '@/utils';

describe('floor test', () => {
  let t;

  t = function (num: Argument, expected: string) {
    test(createTestName(arguments), () => {
      expect(floor(num)).toEqual(expected);
    });
  };

  t('123123123', '123123123');
  t('1e6', '1000000');
  t('0', '0');
  t('', '0');
  t(' ', '0');
  t('test', '0');
  t(null, '0');
  t(undefined, '0');

  t = function (num: Argument, precision: number, expected: string) {
    const name = createTestName(arguments);
    test(name, async () => {
      expect(floor(num, precision)).toEqual(expected);
    });
  };

  t('123.123123123', 1, '123.1');
  t('0.11111', 6, '0.11111');
  t('0.11111', 3, '0.111');
  t('0.11111', 2, '0.11');
  t('0.11111', 1, '0.1');
  t('0.11111', 0, '0');
  t('', 0, '0');
  t(' ', 0, '0');
  t('test', 0, '0');
  t(null, 0, '0');
  t(undefined, 0, '0');
});
