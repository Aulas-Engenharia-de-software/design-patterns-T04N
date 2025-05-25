import { Pokemon } from "./pokemon";
import { OrdenacaoStrategy } from "./ordenacao-strategy";
export class OrdenarPorNome implements OrdenacaoStrategy {
  ordenar(pokemons: Pokemon[]): Pokemon[] {
    return [...pokemons].sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
/*
 Implementa a estratégia de ordenação dos pokémons pelo nome em ordem alfabética crescente.
 */