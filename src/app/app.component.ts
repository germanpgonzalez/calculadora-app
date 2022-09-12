import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  titulo: String = 'Aplicación de Calculadora'

  sumar():void {
    this.resultado = this.numero1 + this.numero2;
  }


  reiniciar():void {
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }

}
