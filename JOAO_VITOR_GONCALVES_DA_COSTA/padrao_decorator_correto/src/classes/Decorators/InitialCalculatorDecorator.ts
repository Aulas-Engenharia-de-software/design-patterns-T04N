import type { Calculator } from "../../interfaces/calculator";

export default class InitialCalculatorDecorator implements Calculator {

  calculate(): number {
    return  0;
  }

  get operation(): string {
    return "";
  }
}