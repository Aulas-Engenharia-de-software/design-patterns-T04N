import MainDecorator from "./MainDecorator";

export default class MultiplicationDecorator extends MainDecorator {

  calculate(operated: number, operator: number): number {
    return  operated * operator;
  }

  get operation(): string {
    return "x";
  }
}