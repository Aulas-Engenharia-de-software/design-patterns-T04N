export class Contador {
  private static instance: Contador;
  private valor: number = 0;

  private constructor() {}

  public static getInstance(): Contador {
    if (!Contador.instance) {
      Contador.instance = new Contador();
    }
    return Contador.instance;
  }

  public aumentar(): void {
    this.valor++;
  }

  public diminuir(): void {
    this.valor--;
  }

  public getValor(): number {
    return this.valor;
  }
}