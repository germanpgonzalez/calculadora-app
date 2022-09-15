import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  numero1: number;
  numero2: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void {
    let resultado = this.numero1 + this.numero2;
    this.resultadoSuma.emit(resultado);
  }
}
