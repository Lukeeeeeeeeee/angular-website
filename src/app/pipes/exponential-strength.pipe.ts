import { Pipe, PipeTransform } from '@angular/core';

/**
 * 以指数方式提高值
 * 默认为1
 * 用法(Usage):
 *  value | exponentialStrength:exponent
 * 举例(Example):
 *  {{2 | exponentialStrength:10}}
 *  结果: 1024
 */

@Pipe({
    name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: string): number {
        const exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}
