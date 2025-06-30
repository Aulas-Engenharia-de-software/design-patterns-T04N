import MainDecorator from "./MainDecorator";

export default class DivisionDecorator extends MainDecorator {

  calculate(operated: number, operator: number): number {
    return  operated / operator;
  }

  get operation(): string {
    return "/";
  }
}