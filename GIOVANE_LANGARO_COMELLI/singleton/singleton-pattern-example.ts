/*
  classe singleton representando um cigas..
  garante que apenas uma instancia da classe Cigarette possa ser criada
*/

export class Cigarette {
	// a unica instancia da classe Cigarette
	private static instance: Cigarette | undefined;

	// constructor privado para evitar instanciacao externa
	private constructor() {}

	// retorna a instancia da classe Cigarette
	// Se a instancia ainda nao existir,ela sera criada
	static getInstance(): Cigarette {
		if (!Cigarette.instance) {
			Cigarette.instance = new Cigarette();
		}
		return Cigarette.instance;
	}
}

// acessando nossa instancia
const cigas = Cigarette.getInstance();
const cigas2 = Cigarette.getInstance();

// verificando se ambas as referencias apontam para a mesma intancia
console.log(cigas === cigas2); // true
