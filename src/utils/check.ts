import { Argument } from '@/types';

/**
 * Check if the number is valid
 * @returns boolean
 */
export const isInvalidNum = (num: Argument) => {
  if (num === undefined || num === null || num === '') {
    return true;
  }

  if (typeof num === 'string' && num.trim() === '') {
    return true;
  }

  if (typeof num === 'bigint') {
    return false;
  }

  return isNaN(Number(num));
};

/**
 * Check if contains invalid values?
 * @returns boolean
 */
export const isIncludeInvalidValue = (...args: Argument[]) => {
  let check = false;
  args.map((arg) => {
    if (isInvalidNum(arg)) {
      check = true;
    }
  });
  return check;
};
