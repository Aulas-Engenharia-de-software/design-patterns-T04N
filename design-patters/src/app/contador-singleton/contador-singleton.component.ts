import { Component } from '@angular/core';
import { ContadorService } from '../services/contador.service';
@Component({
  selector: 'app-contador-singleton',
  imports: [],
  
  template: ` 
  
  <h3>Contador com Singleton</h3>
    <p>Valor: {{ contador }}</p>
    <button (click)="incrementar()">Incrementar</button>`
})


export class ContadorSingletonComponent {
 contador = 0;
  constructor(private contadorService: ContadorService) {
    this.contador = this.contadorService.getContador()
  }

  incrementar(){
    this.contadorService.incrementar();
    this.contador = this.contadorService.getContador();
  }
}
