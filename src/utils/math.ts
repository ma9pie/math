import Big from 'big.js';

import { Argument } from '@/types';
import { floor, isIncludeInvalidValue, isInvalidNum, normalize } from '@/utils';

export const math = (value: Argument) => {
  const normalizedValue = normalize(value);
  let res = new Big(normalizedValue);

  return {
    /**
     * Return value methods
     * @returns value
     */

    // String type value
    value: function (precision?: number) {
      const value = floor(res.valueOf(), precision);
      return value;
    },

    // Number type value
    toNumber: function (precision?: number) {
      const value = floor(res.valueOf(), precision);
      return Number(value);
    },

    /**
     * Calulation methods
     * @returns this
     */

    // Addition
    add: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.plus(normalize(args[i]));
      }
      return this;
    },

    // Subtraction
    sub: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.minus(normalize(args[i]));
      }
      return this;
    },

    // Multiplication
    mul: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.mul(normalize(args[i]));
      }
      return this;
    },

    //Division
    div: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.div(normalize(args[i]));
      }
      return this;
    },

    // Absolute
    abs: function () {
      if (res.lt(0)) {
        res = res.mul(-1);
      }
      return this;
    },

    // Power
    pow: function (n: number) {
      res = res.pow(n);
      return this;
    },

    /**
     * Comparison methods
     * @returns boolean
     */

    // Equal
    eq: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      arg = normalize(arg);
      return res.eq(arg);
    },

    // Greater than equal
    gte: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      arg = normalize(arg);
      return res.gte(arg);
    },

    // Greater than
    gt: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      arg = normalize(arg);
      return res.gt(arg);
    },

    // Less than equal
    lte: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      arg = normalize(arg);
      return res.lte(arg);
    },

    // Less than
    lt: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      arg = normalize(arg);
      return res.lt(arg);
    },

    // Check if it is zero
    isZero: function () {
      if (isIncludeInvalidValue(value)) {
        return false;
      }
      return res.eq(0);
    },
  };
};
