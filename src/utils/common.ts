/**
 * Create test name
 * @returns 't(?, ?, ...);'
 */
export const createTestName = (args: IArguments) => {
  const arr: any = [];
  Array.from(args).map((arg) => {
    if (arg === null) {
      return arr.push('null');
    }
    if (arg === undefined) {
      undefined;
      return arr.push('undefined');
    }
    if (typeof arg === 'bigint') {
      return arr.push(`BigInt(${arg.toString()})`);
    }
    if (typeof arg === 'string') {
      return arr.push(`'${arg}'`);
    }
    arr.push(arg);
  });
  return `t(${arr.join(', ')});`;
};
