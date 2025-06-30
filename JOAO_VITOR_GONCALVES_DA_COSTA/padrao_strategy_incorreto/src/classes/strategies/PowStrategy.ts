import type Strategy from "../../interfaces/strategy";

export default class PowStrategy implements Strategy {

  calculate(operated: number, operator: number): number {
    return  operated ** operator;
  }

  operation: string = "^";
}