import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardmask'
})
export class CardmaskPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    let chartValue: string;
    let cardMask: string = '';
    let newValueChar: string = '';

    for (let i = 0; i < value.length; i++){ 
      chartValue = value.charAt(i);
      newValueChar = chartValue === '-' || i>= value.length - 4 ? chartValue : 'X';
      cardMask += newValueChar;
    }
    return cardMask;
  }

}
