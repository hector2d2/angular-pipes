import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitan America';
  nombre2: string = 'heCtoR RicarDo tRisTan MeNdeZ';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI; 
  porcentaje:number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'fr';
  videoUrl:string = 'https://www.youtube.com/embed/ITTAkYCt99k';
  ocultar:boolean = false;

  valorPromesa = new Promise<string >((resolve) => {
    setTimeout(()=>{
      resolve('Llego la data');
    },4500);
  });

  heroe = {
    nombre: 'logan',
    clave: 'Wolwerin',
    edad: 500,
    direccion:{
      calle: 'primera',
      casa: 20
    }
  }

  cambiarIdioma(idioma:string){
    this.idioma = idioma;
  }
}
