import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //é o que torna singleton
})


export class ContadorService {
  private contador: number = 0;
  

  incrementar(): void {
    this.contador++;
  }

  getContador(): number {
    return this.contador;
  }
}
