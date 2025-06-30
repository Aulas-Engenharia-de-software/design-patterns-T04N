import Strategy from "../interface/Strategy";

export default class Context {

  private _strategy: Strategy | null = null;

  constructor() {

  }
  
  set strategy(strategy: Strategy) {
    this._strategy = strategy;
  }
  
  execute(value: number) {
    return this._strategy?.calcular(value);
  }
  
}