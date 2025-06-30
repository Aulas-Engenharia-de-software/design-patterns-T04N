import Strategy from "../interface/Strategy";

export default class WithDiscount implements Strategy {
  calcular(number: number): number {
    return number * .10;
  }
}