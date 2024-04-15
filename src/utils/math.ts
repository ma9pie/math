import Big from 'big.js';

import { Argument } from '@/types';
import { floor, normalize } from '@/utils';

export const math = (value: Argument) => {
  const normalizedValue = normalize(value);
  let res = new Big(normalizedValue);

  return {
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

    // Addition
    add: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.plus(normalize(arg[i]));
      }
      return this;
    },

    // Subtraction
    sub: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.minus(normalize(arg[i]));
      }
      return this;
    },

    // Multiplication
    mul: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.mul(normalize(arg[i]));
      }
      return this;
    },

    //Division
    div: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.div(normalize(arg[i]));
      }
      return this;
    },

    // Equal
    eq: function (num: Argument) {
      num = normalize(num);
      return res.eq(num);
    },

    // Greater than equal
    gte: function (num: Argument) {
      num = normalize(num);
      return res.gte(num);
    },

    // Greater than
    gt: function (num: Argument) {
      num = normalize(num);
      return res.gt(num);
    },

    // Less than equal
    lte: function (num: Argument) {
      num = normalize(num);
      return res.lte(num);
    },

    // Less than
    lt: function (num: Argument) {
      num = normalize(num);
      return res.lt(num);
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
  };
};
