import MainDecorator from "./MainDecorator";

export default class SubDecorator extends MainDecorator {

  calculate(operated: number, operator: number): number {
    return this._handleDecimalSubtraction(operated, operator);
  }

  private _handleDecimalSubtraction(firstNumber: number, secondNumber: number): number {
    const [_, firstNumberAfterDot] = firstNumber.toString().split(".");
    const [__, secondNumberAfterDot] = secondNumber.toString().split(".");

    if (!firstNumberAfterDot && !secondNumberAfterDot) {
      return firstNumber - secondNumber;
    }

    const biggerLength = Math.max(firstNumberAfterDot.length, secondNumberAfterDot.length);
    const timesTo = Math.pow(10, biggerLength);

    const firstNumberTimesFlootLength = firstNumber * timesTo, 
          secondNumberTimesFlootLength = secondNumber * timesTo;
    
    return (firstNumberTimesFlootLength - secondNumberTimesFlootLength) / timesTo;
  }
  
  get operation(): string {
    return "-";
  }
}