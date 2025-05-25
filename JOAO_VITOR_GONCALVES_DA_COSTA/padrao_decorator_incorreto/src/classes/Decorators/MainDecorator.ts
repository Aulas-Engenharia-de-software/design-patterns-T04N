import type { AvailableOptions } from "../../common/OperationOptions";
import type { Calculator } from "../../interfaces/calculator";

export default class MainDecorator {
  
  calculateSum(a: number, b: number): number {
    return a + b;
  };

  calculateSub(a: number, b: number): number {
    return this._handleDecimalSubtraction(a, b);
  };
  
  calculateDivision(a: number, b: number): number {
    return  a / b;
  }
  
  calculateMultiplication(a: number, b: number): number {
    return  a * b;
  }
  
  calculatePow(a: number, b: number) {
    return  a ** b;
  }
  
  calculateRestDivision(a: number, b: number): number {
    return  a % b;
  }
  
  calculateSquareRoot(a: number, b: number): number {
    return  this._handleDecimalPoints(a ** (1 / b));
  }

  private _handleDecimalPoints(value: number): number {
    const [_, afterDot] = value.toString().split(".");
    
    if (afterDot?.length > 1) {
      const onlyEqualCharacters = afterDot.match(/^([\d])\1*$/g);

      if (onlyEqualCharacters) {
        return +value.toFixed(0);
      } 
    }

    return +value;
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
  
  getOperation(op: AvailableOptions): string {
    switch (op) {
      case "initialCalculatorDecorato":
        return "";
      case "division":
        return "/";
      case "multiplication":
        return "x";
      case "pow":
        return "^";
      case "restDivision":
        return "%";
      case "squareRoot":
        return "\u221A";
      case "sub":
        return "-";
      case "sum":
    } return "+";
  };
}