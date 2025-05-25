import { Component } from '@angular/core';
import { OrdenarPorNome } from './ordenar-por-nome.strategy';
import { OrdenarPorPeso } from './ordenar-por-peso.strategy';
import { Pokemon } from './pokemon';
import { OrdenacaoStrategy } from './ordenacao-strategy';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule],
    selector: 'app-ordenar-pokemons-strategy',
    standalone: true,
    template: `
    <h2>Ordenação com Strategy</h2>
    
    
    <select (change)="trocarEstrategia($event)">
      <option value="nome">Ordenar por Nome</option>
      <option value="peso">Ordenar por Peso</option>
    </select>

    <ul>
      <li *ngFor="let p of pokemonsOrdenados">
        {{ p.nome }} - {{ p.peso }}kg
      </li>
    </ul>
  `,
})
export class OrdenarPokemonsStrategyComponent {
    pokemons: Pokemon[] = [
        { nome: 'Charizard', peso: 90 },
        { nome: 'Bulbasaur', peso: 69 },
        { nome: 'Snorlax', peso: 460 },
        { nome: 'Pikachu', peso: 60 }
    ];

    // Aqui definimos uma estratégia padrão (ordenar por nome)
    estrategia: OrdenacaoStrategy = new OrdenarPorNome();

    // Getter que retorna os pokémons ordenados segundo a estratégia atual
    get pokemonsOrdenados(): Pokemon[] {
        // A chamada ao método 'ordenar' é delegada à estratégia atual,
       
        return this.estrategia.ordenar(this.pokemons);
    }

    // Método que troca a estratégia de ordenação conforme a escolha do usuário
    trocarEstrategia(event: Event): void {
       
        const tipo = (event.target as HTMLSelectElement).value;

        
        if (tipo === 'peso') {
            this.estrategia = new OrdenarPorPeso();
        } else {
            this.estrategia = new OrdenarPorNome();
        }
    } 
}


