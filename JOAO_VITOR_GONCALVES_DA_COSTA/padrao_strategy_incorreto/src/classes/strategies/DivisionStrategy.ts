import type Strategy from "../../interfaces/strategy";

export default class DivisionStrategy implements Strategy {

  calculate(operated: number, operator: number): number {
    return  operated / operator;
  }

  operation: string = "/";
}