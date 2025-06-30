import Strategy from "../interface/Strategy";

export default class WithoutDiscount implements Strategy {
  calcular(number: number): number {
    return number;
  }
}