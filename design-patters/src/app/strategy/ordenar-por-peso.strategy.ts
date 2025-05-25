import { Pokemon } from "./pokemon";
import { OrdenacaoStrategy } from "./ordenacao-strategy";
export class OrdenarPorPeso implements OrdenacaoStrategy {
  ordenar(pokemons: Pokemon[]): Pokemon[] {
    return [...pokemons].sort((a, b) => a.peso - b.peso);
  }
}
/*
 Implementa a estratégia de ordenação dos pokémons pelo peso em ordem crescente.
 */