import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  suma: string = '+';
  resta: string = '-';
  multi: string = '*';
  div: string = '/';
  punto: string = '.' 
  mensaje: string = 'Error!';
  cadenaVacia: string = '0';
  num1: string = '';
  num2: string = '';
  bnum1: boolean = false;
  bnum2: boolean = false;

  actualizar(numero: string): void {
    if (this.cadenaVacia == '0' || this.cadenaVacia == this.mensaje) {
      this.cadenaVacia = numero
    }
    else {
      this.cadenaVacia = this.cadenaVacia + numero;
    }
  }


  resultados(): void {
    try {
      this.cadenaVacia = eval(this.cadenaVacia);
    }
    catch (error) {
      this.cadenaVacia = this.mensaje
    }
  }

  borrar(): void {
    if (this.cadenaVacia.length > 1) {
      this.cadenaVacia = this.cadenaVacia.slice(0, -1);
    } else {
      this.cadenaVacia = '0'
    }

  }
  regresar() {
    this.cadenaVacia = "0"
  }

}
