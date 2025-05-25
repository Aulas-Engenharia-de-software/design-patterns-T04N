import { Pokemon } from "./pokemon";

export interface OrdenacaoStrategy {
  ordenar(pokemons: Pokemon[]): Pokemon[];
}
/*
  Interface que define a estratégia de ordenação para uma lista de pokémons.
 */