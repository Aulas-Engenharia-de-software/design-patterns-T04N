import MainDecorator from "./MainDecorator";

export default class SubDecorator extends MainDecorator {

  calculate(operated: number, operator: number): number {
    return operated - operator
  }

  get operation(): string {
    return "-";
  }
}