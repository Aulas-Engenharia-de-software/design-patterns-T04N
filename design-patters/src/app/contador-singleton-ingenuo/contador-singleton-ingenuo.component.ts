import { Component } from '@angular/core';



class Contador {
  private contador = 0;

  incrementar(): void {
    this.contador++;
  }

  getContador(): number {
    return this.contador;
  }
}

@Component({
  selector: 'app-contador-singleton-ingenuo',
  imports: [],
  template: `
    <h3>Contador Ingênuo (sem Singleton)</h3>
    <p>Valor: {{ contador }}</p>
    <button (click)="incrementar()">Incrementar</button>
  `
})
export class ContadorSingletonIngenuoComponent {
 

  private contadorLocal = new Contador();

  contador = 0;

  incrementar() {
    // Incrementa o contador da instância local (única para este componente).
    this.contadorLocal.incrementar();

   
    this.contador = this.contadorLocal.getContador();
  }
}

