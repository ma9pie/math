import Big from 'big.js';

import { floor } from './format';

type Argument = number | string | BigInt | undefined;

const validate = (num: Argument) => {
  if (typeof num === 'bigint') {
    return num.toString();
  }
  if (!num || isNaN(+num)) {
    return 0;
  }
  return num as number | string;
};

export const math = (value: Argument) => {
  value = validate(value);
  let res = new Big(value);
  return {
    value: function (limit: number = 18) {
      const value = floor(res.valueOf(), limit);
      if (new Big(value).eq(0)) return '0';
      return value;
    },
    toNumber: function (limit: number = 18) {
      const value = floor(res.valueOf(), limit);
      if (new Big(value).eq(0)) return 0;
      return Number(value);
    },
    // Addition
    add: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.plus(validate(arg[i]));
      }
      return this;
    },
    // Subtraction
    sub: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.minus(validate(arg[i]));
      }
      return this;
    },
    // Multiplication
    mul: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.mul(validate(arg[i]));
      }
      return this;
    },
    //Division
    div: function (...arg: Argument[]) {
      for (let i = 0; i < arg.length; i++) {
        res = res.div(validate(arg[i]));
      }
      return this;
    },
    // Equal
    eq: function (num: Argument) {
      num = validate(num);
      return res.eq(num || 0);
    },
    // Greater than equal
    gte: function (num: Argument) {
      num = validate(num);
      return res.gte(num || 0);
    },
    // Greater than
    gt: function (num: Argument) {
      num = validate(num);
      return res.gt(num || 0);
    },
    // Less than equal
    lte: function (num: Argument) {
      num = validate(num);
      return res.lte(num || 0);
    },
    // Less than
    lt: function (num: Argument) {
      num = validate(num);
      return res.lt(num || 0);
    },
    // Absolute
    abs: function () {
      if (res.lt(0)) res = res.mul(-1);
      return this;
    },
    // Power
    pow: function (n: number) {
      res = new Big(res.valueOf()).pow(n);
      return this;
    },
  };
};
