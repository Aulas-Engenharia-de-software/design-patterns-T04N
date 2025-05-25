import MainDecorator from "./MainDecorator";

export default class SumDecorator extends MainDecorator {
  calculate(a: number, b: number): number {
    return a + b;
  }

  get operation(): string {
    return "+";
  }
}