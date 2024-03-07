import Big from 'big.js';

type Num = number | string | undefined | null;

/**
 * Convert number to string
 * 1e7 => "10000000"
 * 1e-7 => "0.0000001"
 */
export const numberToString = (num: Num) => {
  if (!num || isNaN(Number(num))) {
    return '0';
  }
  return new Big(num).toFixed();
};

/**
 * Decimal point rounding off
 * floor(0.1234,2) => "0.12"
 */
export const floor = (num: Num, precision?: number) => {
  const value = numberToString(num);
  let [integer, digits] = value.split('.');
  if (precision === 0) return integer;
  digits = digits && precision ? digits.slice(0, precision) : digits;
  return digits === undefined ? integer : `${integer}.${digits}`;
};
