import type Strategy from "../../interfaces/strategy";

export default class Context {
  
  private strategy: Strategy | null = null;
  
  constructor () { }

  get curretOperation(): string | undefined {
    return this.strategy?.operation ?? "";
  }

  set setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  
  getPercentage(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
  
  getPow(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
  
  getSquareRoot(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
  
  getDivision(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
  
  getSum(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
  
  getSub(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
  
  getMultiplication(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }

  execute(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
}