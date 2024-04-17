import Big from 'big.js';

import { Argument } from '@/types';
import { floor, isIncludeInvalidValue, isInvalidNum, normalize } from '@/utils';

export const math = (value: Argument) => {
  const normalizedValue = normalize(value);
  let res = new Big(normalizedValue);

  return {
    /**
     * [value]
     * value() => string
     *
     * Returns calculated value as string
     */
    value: function (precision?: number) {
      const value = floor(res.valueOf(), precision);
      return value;
    },

    /**
     * [toNumber]
     * toNumber() => number
     *
     * Returns calculated value as number
     */
    toNumber: function (precision?: number) {
      const value = floor(res.valueOf(), precision);
      return Number(value);
    },

    /**
     * [add]
     * .add(n) => Big
     * n : number | string | BigInt
     *
     * Returns the current value added by n.
     *
     * If the n is invalid, it is treated as 0.
     */
    add: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.plus(normalize(args[i]));
      }
      return this;
    },

    /**
     * [sub]
     * .sub(n) => Big
     * n : number | string | BigInt
     *
     * Returns the current value subtracted by n.
     *
     * If the n is invalid, it is treated as 0.
     */
    sub: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.minus(normalize(args[i]));
      }
      return this;
    },

    /**
     * [mul]
     * .mul(n) => Big
     * n : number | string | BigInt
     *
     * Returns the current value multiplied by n.
     *
     * If the n is invalid, it is treated as 0.
     */
    mul: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.mul(normalize(args[i]));
      }
      return this;
    },

    /**
     * [div]
     * .div(n) => Big
     * n : number | string | BigInt
     *
     * Returns the current value divided by n.
     *
     * If the n is invalid, it is treated as 0.
     */
    div: function (...args: Argument[]) {
      for (let i = 0; i < args.length; i++) {
        res = res.div(normalize(args[i]));
      }
      return this;
    },

    /**
     * [abs]
     * .abs() => Big
     *
     * Returns the absolute current value.
     */
    abs: function () {
      if (res.lt(0)) {
        res = res.mul(-1);
      }
      return this;
    },

    /**
     * [pow]
     * .pow(n) => Big
     * n : number | string | BigInt
     *
     * Returns the current value nth power.
     *
     * If the n is invalid, it is treated as 0.
     */
    pow: function (arg: Argument) {
      res = res.pow(Number(normalize(arg)));
      return this;
    },

    /**
     * [eq]
     * .eq(n) => boolean
     * n : number | string | BigInt
     *
     * Returns whether the current value and n are the same.
     */
    eq: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      return res.eq(normalize(arg));
    },

    /**
     * [gt]
     * .gt(n) => boolean
     * n : number | string | BigInt
     *
     * Returns whether the current value is greater than n.
     */
    gt: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      return res.gt(normalize(arg));
    },

    /**
     * [gte]
     * .gte(n) => boolean
     * n : number | string | BigInt
     *
     * Returns whether the current value is greater than or equal to n.
     */
    gte: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      return res.gte(normalize(arg));
    },

    /**
     * [lt]
     * .lt(n) => boolean
     * n : number | string | BigInt
     *
     * Returns whether the current value is less than n.
     */
    lt: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      return res.lt(normalize(arg));
    },

    /**
     * [lte]
     * .lte(n) => boolean
     * n : number | string | BigInt
     *
     * Returns whether the current value is less than or equal to n.
     */
    lte: function (arg: Argument) {
      if (isIncludeInvalidValue(value, arg)) {
        return false;
      }
      return res.lte(normalize(arg));
    },

    /**
     * [isZero]
     * .isZero() => boolean
     *
     * Returns whether the current value is 0.
     */
    isZero: function () {
      if (isIncludeInvalidValue(value)) {
        return false;
      }
      return res.eq(0);
    },
  };
};
