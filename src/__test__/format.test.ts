import { numberToString, floor } from '../../src/utils';

describe('numberToString test', () => {
  test('', () => {
    const result = numberToString(0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(null);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(undefined);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString('test');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(123);
    expect(result).toEqual('123');
  });
  test('', () => {
    const result = numberToString(-123);
    expect(result).toEqual('-123');
  });
  test('', () => {
    const result = numberToString(1e-7);
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = numberToString('1e-7');
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = numberToString('1e-18');
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = numberToString(1e-10);
    expect(result).toEqual('0.0000000001');
  });
  test('', () => {
    const result = numberToString(1e-18);
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = numberToString('1e18');
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = numberToString(1e18);
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = numberToString('1e21');
    expect(result).toEqual('1000000000000000000000');
  });
  test('', () => {
    const result = numberToString(1e21);
    expect(result).toEqual('1000000000000000000000');
  });
  test('', () => {
    const result = numberToString(1.23e-5);
    expect(result).toEqual('0.0000123');
  });
  test('', () => {
    const result = numberToString(-1e20);
    expect(result).toEqual('-100000000000000000000');
  });
});

describe('floor test', () => {
  test('', () => {
    const result = floor('123.123123123', 1);
    expect(result).toEqual('123.1');
  });
  test('', () => {
    const result = floor('123123123');
    expect(result).toEqual('123123123');
  });
  test('', () => {
    const result = floor('1e6');
    expect(result).toEqual('1000000');
  });
  test('', () => {
    const result = floor('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('0.11111', 6);
    expect(result).toEqual('0.11111');
  });
  test('', () => {
    const result = floor('0.11111', 3);
    expect(result).toEqual('0.111');
  });
  test('', () => {
    const result = floor('0.11111', 2);
    expect(result).toEqual('0.11');
  });
  test('', () => {
    const result = floor('0.11111', 1);
    expect(result).toEqual('0.1');
  });
  test('', () => {
    const result = floor('0.11111', 0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('test');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor(null, 0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor(undefined, 0);
    expect(result).toEqual('0');
  });
});
