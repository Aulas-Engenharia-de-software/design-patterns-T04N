import { CommonModule } from "@angular/common";
import { Pokemon } from "../strategy/pokemon";
import { Component } from "@angular/core";

@Component({
  selector: 'app-ordenar-ingenuo',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <h2>Ordenação Ingênua</h2>
    <select (change)="ordenar($event)">
      <option value="nome">Ordenar por Nome</option>
      <option value="peso">Ordenar por Peso</option>
    </select>

    <ul>
      <li *ngFor="let p of pokemons">
        {{ p.nome }} - {{ p.peso }}kg
      </li>
    </ul>
  `,
})
export class OrdenarPokemonsIngenuoComponent {
  pokemons: Pokemon[] = [
    { nome: 'Charizard', peso: 90 },
    { nome: 'Bulbasaur', peso: 69 },
    { nome: 'Snorlax', peso: 460 },
    { nome: 'Pikachu', peso: 60 }
  ];

  ordenar(event: Event) {
    const tipo = (event.target as HTMLSelectElement).value;

    // A lógica de ordenação está diretamente implementada aqui,
 
    if (tipo === 'peso') {
      this.pokemons.sort((a, b) => a.peso - b.peso);
    } else {
      this.pokemons.sort((a, b) => a.nome.localeCompare(b.nome));
    }
  }
}

