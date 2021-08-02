import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, ocultar:boolean): string {
    /*if(ocultar){
      let valueOculto:string = '';
      for(let i=0;i<value.length;i++){
        valueOculto+='*';
      }
      value = valueOculto;
    }
    return value;*/
    return ocultar ? '*'.repeat(value.length) : value;

  }

}
