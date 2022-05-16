import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  // 11122233344
  // CPF 111.222.333-44
  transform(value: string): string {
    if (value && value.length === 11) {
      //11122233344
      return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`;
    }
    return value;
  }

}
