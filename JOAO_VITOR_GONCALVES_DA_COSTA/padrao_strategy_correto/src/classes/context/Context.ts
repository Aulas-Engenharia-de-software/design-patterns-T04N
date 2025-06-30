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

  execute(operated: number, operator: number): number {
    if (!this.strategy) {
      return;
    }

    return this.strategy.calculate(operated, operator);
  }
}