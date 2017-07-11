import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatPhone'})

export class FormatPhone implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) { return value; }

    const splittedNumber = value.split('-');
    let formattedPhone = splittedNumber[0] != null ? '(' +  splittedNumber[0] + ')' : '';
    formattedPhone += splittedNumber[1] != null ? ' ' + splittedNumber[1] : '';
    formattedPhone += splittedNumber[2] != null ? '-' + splittedNumber[2] : '';
    return formattedPhone;
  }
}
