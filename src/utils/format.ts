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
  const value = numberToString(num);
  let [integer, digits] = value.split('.');
  if (precision === 0) return integer;
  digits = digits && precision ? digits.slice(0, precision) : digits;
  return digits === undefined ? integer : `${integer}.${digits}`;
};
