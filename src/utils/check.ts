import { Argument } from '@/types';

/**
 * Check if the number is valid
 * @returns boolean
 */
export const isInvalidNum = (num: Argument) => {
  if (num === null || num === undefined || num === '') {
    return true;
  }

  switch (typeof num) {
    case 'number':
      if (num === Infinity) {
        return true;
      }
      break;
    case 'string':
      if (num.trim() === '') {
        return true;
      }
      break;
    case 'bigint':
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
