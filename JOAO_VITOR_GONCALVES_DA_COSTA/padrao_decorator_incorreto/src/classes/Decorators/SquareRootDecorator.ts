import MainDecorator from "./MainDecorator";

export default class SquareRootDecorator extends MainDecorator {

  calculate(operated: number, operator: number): number {
    return  operated ** (1 / operator);
  }
  
  get operation(): string {
    return "\u221A";
  }
}