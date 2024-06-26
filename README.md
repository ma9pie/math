# Easy math utility
A simple and easy-to-use mathematical calculation utility package.

[npm-url]: https://www.npmjs.com/package/@ma9pie/math
[license-image]: https://img.shields.io/badge/license-MIT-red.svg
[npm-version-image]: https://img.shields.io/npm/v/@ma9pie/math.svg
[npm-downloads-image]: https://img.shields.io/npm/dt/@ma9pie/math.svg

[![license-image]][npm-url] [![npm-version-image]][npm-url] [![npm-downloads-image]][npm-url]

### 🤔 Reason for development
When using precision calculation libraries such as big.js, bignumber.js, and decimals.js, we must create a constructor function with the new operator every time.

And the value 1e-7 is displayed as an exponential expression, such as '1e-7', not '0.0000001'.

To improve these points and make it easier to use, I developed this math utility library.

```javascript
console.log(new Big(1e-7).valueOf()); // '1e-7'
console.log(math(1e-7).value()); // '0.0000001'
```



### 📦 Install
```bash
npm i @ma9pie/math
```


### ✨ Features
- Easy-to-use API  
- Supports integer and floating point calculations   
- Rest parameters are available for added flexibility  
- Enhanced accuracy ensured through test code  


### 👨‍💻 Use
```javascript
import { math } from '@ma9pie/math';
```

You can develop calculation logic simply by using the math function. And calculation-related methods can be chained.

```javascript
math(10).add(1).add(2).add(3).add(4).value(); // '20'
```

And you can pass values using Rest parameters.

```javascript
math(10).add(1,2,3,4).value(); // '20'
```

If you want to round off specific digits, you can use the following.


```javascript
math(1).add(0.123456).value(2); // '1.12'
```

#### value
value() => string  
returns calculated value as string  

```javascript
math(1000).value(); // '1000'
math('1e7').value(); // '10000000'
math(1e-7).value(); // '0.0000001'
```

#### toNumber
toNumber() => number  
returns calculated value as number  

```javascript
math(1000).toNumber(); // 1000
math('1e7').toNumber(); // 10000000
math(1e-7).toNumber(); // 1e-7
```

#### add
.add(n) => Big  
n : number | string | BigInt  
returns the current value added by n.  
<i>if the n is invalid, it is treated as 0.</i>  

```javascript
0.1 + 0.2, // 0.30000000000000004
math(0.1).add(0.2).value(); // '0.3'
math(1).add(2).add(3).value(); // '6'
math(1).add(2, 3, 4).value(); // '10'
```

#### sub
.sub(n) => Big  
n : number | string | BigInt  
returns the current value subtracted by n.  
<i>if the n is invalid, it is treated as 0.</i>  

```javascript
0.3 - 0.1, // 0.19999999999999998
math(0.3).sub(0.1).value(); // '0.2'
math(1).sub(2).sub(3).value(); // '-4'
math(1).sub(2, 3, 4).value(); // '-8'
```

#### mul
.mul(n) => Big  
n : number | string | BigInt  
returns the current value multiplied by n.  
<i>if the n is invalid, it is treated as 0.</i>  

```javascript
0.6 * 3, // 1.7999999999999998
math(0.6).mul(3).value(); // '1.8'
math(2).mul(2).mul(2).value(); // '8'
math(2).mul(2, 2, 2).value(); // '16'
```

#### div
.div(n) => Big  
n : number | string | BigInt  
returns the current value divided by n.  
<i>if the n is invalid, it is treated as 0.</i>  

```javascript
355 / 113, // 3.1415929203539825
math(355).div(113).value(); // '3.141592920353982300'
math(10).div(3).value(); // '3.333333333333333333'
math(1000).div(10, 10, 10).value(); // '1'
```

#### abs
.abs() => Big  
returns the absolute current value.  

```javascript
math(-0.8).abs().value(); // '0.8'
```

#### pow
.pow(n) => Big  
n : number | string | BigInt  
returns the current value nth power.  
<i>if the n is invalid, it is treated as 0.</i>  

```javascript
0.7 ** 2, // 0.48999999999999994
Math.pow(0.7, 2); // 0.48999999999999994
math(0.7).pow(2).value(); // '0.49'
```

#### eq
.eq(n) => boolean  
n : number | string | BigInt  
returns whether the current value and n are the same.  

```javascript
0.1 + 0.2 === 0.3, // false
math(0.1).add(0.2).eq(0.3); // true
math('0.0000001').eq(1e-7); // true
math(1e7).eq(10000000); // true
```

#### gt
.gt(n) => boolean  
n : number | string | BigInt  
returns whether the current value is greater than n.  

```javascript
0.1 + 0.2 > 0.3, // true
math(0.1).add(0.2).gt(0.3); // false
```

#### gte
.gte(n) => boolean  
n : number | string | BigInt  
returns whether the current value is greater than or equal to n.  

```javascript
0.1 + 0.2 <= 0.3, // false
math(0.1).add(0.2).gte(0.3); // true
```

#### lt
.lt(n) => boolean  
n : number | string | BigInt  
returns whether the current value is less than n.  

```javascript
0.1 + 0.2 > 0.3, // true
math(0.1).add(0.2).lt(0.3); // false
```

#### lte
.lte(n) => boolean  
n : number | string | BigInt  
returns whether the current value is less than or equal to n.  

```javascript
0.1 + 0.2 <= 0.3, // false
math(0.1).add(0.2).lte(0.3); // true
```

#### isZero
.isZero() => boolean  
returns whether the current value is 0.  

```javascript
math(0).isZero(); // true
math(-0).isZero(); // true
math(0.0).isZero(); // true
math('0').isZero(); // true
math('-0').isZero(); // true
math(Number.MIN_SAFE_INTEGER).isZero(); // false
math(Number.MAX_SAFE_INTEGER).isZero(); // false
```


### 🔍 Test
```bash
npm run test
```

### 🤝 Contributing 
Thank you for your interest in the Lite UI project. Your contributions are always welcome.

### 📜 License
[MIT](https://choosealicense.com/licenses/mit/)