import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value.toLowerCase();
    let nombres = value.split(' ');
    nombres = nombres.map(nombres => nombres[0].toUpperCase() + nombres.substring(1))
    return nombres.join(' ');
  }

}
