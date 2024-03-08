import { math } from '@/utils';

describe('math test', () => {
  // Normal
  test('', () => {
    const result = math(3).value();
    expect(result).toEqual('3');
  });
  test('', () => {
    const result = math(1e18).value();
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = math(1e-18).value();
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = math(undefined).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(null).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(BigInt(3)).value();
    expect(result).toEqual('3');
  });
  test('', () => {
    const result = math(BigInt(-3)).value();
    expect(result).toEqual('-3');
  });
  test('', () => {
    const result = math(BigInt(0)).value();
    expect(result).toEqual('0');
  });

  // Addition
  test('', () => {
    const result = math(3).add(4).value();
    expect(result).toEqual('7');
  });
  test('', () => {
    const result = math(3).add(4).add(5).value();
    expect(result).toEqual('12');
  });
  test('', () => {
    const result = math(3).add(4).add(5).value();
    expect(result).toEqual('12');
  });
  test('', () => {
    const result = math(1e18).add(1e18).value();
    expect(result).toEqual('2000000000000000000');
  });
  test('', () => {
    const result = math(0.1).add(1e18).value();
    expect(result).toEqual('1000000000000000000.1');
  });
  test('', () => {
    const result = math(1e-18).add(1e-18).value();
    expect(result).toEqual('0.000000000000000002');
  });
  test('', () => {
    const result = math(0).add(1e-18).value();
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = math(1e-18).add(0).value();
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = math(0).add(0).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0.0).add(0.0).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1).add(undefined).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).add(null).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math('0.155062399728289').add(0.1589).value();
    expect(result).toEqual('0.313962399728289');
  });
  test('', () => {
    const result = math('999999999').add('-0.000000000000000001').value();
    expect(result).toEqual('999999998.999999999999999999');
  });
  test('', () => {
    const result = math(1).add(BigInt(2)).add('3').value();
    expect(result).toEqual('6');
  });
  test('', () => {
    const result = math(1).add(BigInt(2), '3', 4, 0.5).value();
    expect(result).toEqual('10.5');
  });

  // Subtraction
  test('', () => {
    const result = math(3).sub(4).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(1e-18).sub(1e-18).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1e-18).sub(1e-18).sub(1e-18).value();
    expect(result).toEqual('-0.000000000000000001');
  });
  test('', () => {
    const result = math(0.155062399728289).sub(0.1589).value();
    expect(result).toEqual('-0.003837600271711');
  });
  test('', () => {
    const result = math('123456789012345678').sub('123456789012345678').value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1.1).sub(2.2).sub(3.3).value();
    expect(result).toEqual('-4.4');
  });
  test('', () => {
    const result = math(0).sub(0).sub(0).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math('999999999').sub('-0.000000000000000001').value();
    expect(result).toEqual('999999999.000000000000000001');
  });
  test('', () => {
    const result = math(0.1).sub(1e-18).value();
    expect(result).toEqual('0.099999999999999999');
  });
  test('', () => {
    const result = math(1e-18).sub(0.1).value();
    expect(result).toEqual('-0.099999999999999999');
  });
  test('', () => {
    const result = math(1).sub(undefined).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).sub(null).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(undefined).sub(1).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(null).sub(1).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(3.2).sub(4.9).sub(5.99).value();
    expect(result).toEqual('-7.69');
  });
  test('', () => {
    const result = math(10).sub(BigInt(3)).value();
    expect(result).toEqual('7');
  });
  test('', () => {
    const result = math(10).sub(BigInt(3), 3, '3').value();
    expect(result).toEqual('1');
  });

  // Multiplication
  test('', () => {
    const result = math(3).mul(4).value();
    expect(result).toEqual('12');
  });
  test('', () => {
    const result = math(1e-18).mul(1e18).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(undefined).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(null).mul(1).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0.1).mul(1e-18).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1e18).mul(1e18).value();
    expect(result).toEqual('1000000000000000000000000000000000000');
  });
  test('', () => {
    const result = math(1e18).mul(1e-18).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).mul(1).mul(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).mul(1).mul(1).mul(1).mul(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).mul(0).mul(1).mul(1).mul(1).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1).mul(-1).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math('999999999').mul('-0.000000000000000001').value();
    expect(result).toEqual('-0.000000000999999999');
  });
  test('', () => {
    const result = math(1e-18).mul(0.1).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math('123456789012345678').mul('123456789012345678').value();
    expect(result).toEqual('15241578753238836527968299765279684');
  });
  test('', () => {
    const result = math('0.155062399728289').mul('0.1589').value();
    expect(result).toEqual('0.024639415316825122');
  });
  test('', () => {
    const result = math('123123.155062399728289').mul('9999999.1589').value();
    expect(result).toEqual('1231231447065.111559905588536122');
  });
  test('', () => {
    const result = math('-123.99999').mul('-123.99999').value();
    expect(result).toEqual('15375.9975200001');
  });
  test('', () => {
    const result = math('124').mul('124').value();
    expect(result).toEqual('15376');
  });
  test('', () => {
    const result = math(1e-18).mul(1e-18).mul(1e-18).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math('27.258901').mul('20.529702').value();
    expect(result).toEqual('559.617114377502');
  });
  test('', () => {
    const result = math(0.1).mul(BigInt(10)).mul('5').value();
    expect(result).toEqual('5');
  });
  test('', () => {
    const result = math(3).mul(3, BigInt(3), '3').value();
    expect(result).toEqual('81');
  });

  //Division
  test('', () => {
    const result = math(3).div(4).value();
    expect(result).toEqual('0.75');
  });
  test('', () => {
    const result = math(1).div(2).value();
    expect(result).toEqual('0.5');
  });
  test('', () => {
    const result = math(1).div(1e-18).value();
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = math(1e-18).div(1).value();
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = math(1e-18).div(1e-18).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).div(3).value();
    expect(result).toEqual('0.333333333333333333');
  });
  test('', () => {
    const result = math(0.1).div(1e18).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1e-18).div(1e-18).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(0).div(1e-18).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1e18).div('123').value();
    expect(result).toEqual('8130081300813008.130081300813008130');
  });
  test('', () => {
    const result = math(1).div(1).div(1).div(1).div(1).div(1).div(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).div(10).div(10).div(10).div(10).div(10).value();
    expect(result).toEqual('0.00001');
  });
  test('', () => {
    const result = math('0.155062399728289').div(-0.1589).value();
    expect(result).toEqual('-0.975848959901126494');
  });
  test('', () => {
    const result = math(1.1).div(1.2).value();
    expect(result).toEqual('0.916666666666666666');
  });
  test('', () => {
    const result = math(undefined).div(99999999).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(null).div(1).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math('999999999').div('-0.000000000000000001').value();
    expect(result).toEqual('-999999999000000000000000000');
  });
  test('', () => {
    const result = math('27.258901').div('20.529702').value();
    expect(result).toEqual('1.327778698395135009');
  });
  test('', () => {
    const result = math('0.000476').div('-0.158153').value();
    expect(result).toEqual('-0.003009743729173648');
  });
  test('', () => {
    const result = math('122.701132').div('777.245032').value();
    expect(result).toEqual('0.157866730501019143');
  });
  test('', () => {
    const result = math('0.157866730501019143').div('777.245032').value();
    expect(result).toEqual('0.000203110633071269');
  });
  test('', () => {
    const result = math('1.0003767627176685').div(3.90169139033e-7).value();
    expect(result).toEqual('2563956.660429409129167003');
  });
  test('', () => {
    const result = math('5234.6942385637').div('34.84190235278222').value();
    expect(result).toEqual('150.241344044915375516');
  });
  test('', () => {
    const result = math(-1).div(-1).div(-1).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(10).div(BigInt(3)).value();
    expect(result).toEqual('3.333333333333333333');
  });
  test('', () => {
    const result = math(256).div(BigInt(2), 2, '2').value();
    expect(result).toEqual('32');
  });

  // Greater than equal
  test('', () => {
    const result = math(1).gte(1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(0.9);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).gte(-1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(1e-18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(-1e-18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1e19).gte(1e18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(-1).gte(-2);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).gte(0);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).gte(-999999);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1e18).gte(1e18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(BigInt(15)).gte(16);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(BigInt(0)).gte(-1);
    expect(result).toEqual(true);
  });

  // Greater than
  test('', () => {
    const result = math(1).gt(1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).gt(0.9);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gt(1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).gt(-1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gt(1e-18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gt(-1e-18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1e19).gt(1e18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(-1).gt(-2);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).gt(0);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).gt(-999999);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1e18).gt(1e18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).gt(BigInt(-999));
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1001).gt(BigInt(1000));
    expect(result).toEqual(true);
  });

  // Less than equal
  test('', () => {
    const result = math(1).lte(1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).lte(0.9);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lte(1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).lte(-1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lte(1e-18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lte(-1e-18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1e19).lte(1e18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(-1).lte(-2);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).lte(0);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).lte(-999999);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1e18).lte(1e18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(BigInt(0)).lte(0.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(BigInt(1)).lte(1);
    expect(result).toEqual(true);
  });

  // Less than
  test('', () => {
    const result = math(1).lt(1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(0.9);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).lt(-1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(1e-18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(-1e-18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1e19).lt(1e18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(-1).lt(-2);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).lt(0);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).lt(-999999);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1e18).lt(1e18);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1e18).lt(BigInt(1e18));
    expect(result).toEqual(false);
  });

  // Equal
  test('', () => {
    const result = math(1).eq(1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).eq('1');
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).eq('1');
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math('0').eq(0);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math('1e18').eq(1e18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math('1e-18').eq(1e-18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1e18).eq(1e18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(-0.00000000001).eq('-0.00000000001');
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(BigInt(1e18)).eq(1e18);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(BigInt(-1e6)).eq('-1000000');
    expect(result).toEqual(true);
  });

  // Absolute
  test('', () => {
    const result = math(-0.00000000001).abs().value();
    expect(result).toEqual('0.00000000001');
  });
  test('', () => {
    const result = math(1).mul(-1).abs().value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(-1).mul(-1).abs().value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(0).mul(-1).abs().value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0).abs().value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(-1).abs().value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math('-1e18').abs().value();
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = math(1e18).abs().value();
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = math(BigInt(-9000)).abs().value();
    expect(result).toEqual('9000');
  });
  test('', () => {
    const result = math(BigInt(0)).abs().value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(BigInt(333)).abs().value();
    expect(result).toEqual('333');
  });

  // Power
  test('', () => {
    const result = math(1).add(2).pow(3).value();
    expect(result).toEqual('27');
  });
  test('', () => {
    const result = math(0.1).pow(3).value();
    expect(result).toEqual('0.001');
  });
  test('', () => {
    const result = math(1e-6).pow(3).value();
    expect(result).toEqual('0.000000000000000001');
  });
  test('', () => {
    const result = math(1e6).pow(3).value();
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = math(-1).pow(2).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(-1).pow(11).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(1.0001).pow(1000).value();
    expect(result).toEqual('1.105165392603232697');
  });
  test('', () => {
    const result = math(1.0001).pow(-1000).value();
    expect(result).toEqual('0.904841941932768878');
  });
});
