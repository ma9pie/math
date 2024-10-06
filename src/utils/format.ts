import Big from 'big.js';

import { Argument } from '@/types';
import { isInvalidNum } from '@/utils';

/**
 * Normalize num
 * 1 => '1'
 * '1' => '1'
 * '' => '0'
 * ' ' => '0'
 * 'test => '0'
 * null => '0'
 * undefined => '0'
 * BigInt(1) => '1'
 */
export const normalize = (num: Argument) => {
  if (typeof num === 'bigint') {
    return num.toString();
  }
  if (isInvalidNum(num)) {
    return '0';
  }
  return String(num);
};

/**
 * Convert number to string
 * 1e7 => '10000000'
 * 1e-7 => '0.0000001'
 */
export const numberToString = (num: Argument) => {
  const normalizedNum = normalize(num);
  return new Big(normalizedNum).toFixed();
};

/**
 * Decimal point rounding off
 * floor(0.1234,2) => '0.12'
 */
export const floor = (num: Argument, precision?: number) => {
  const parts = numberToString(num);
  let [integer, decimal] = parts.split('.');
  if (!decimal || precision === 0) {
    return integer;
  }
  decimal = decimal && precision ? decimal.slice(0, precision) : decimal;
  return `${integer}.${decimal}`;
};
