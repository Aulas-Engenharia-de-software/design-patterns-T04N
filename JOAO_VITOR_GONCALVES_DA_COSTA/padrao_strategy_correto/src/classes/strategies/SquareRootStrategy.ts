import type Strategy from "../../interfaces/strategy";

export default class SquareRootStrategy implements Strategy {

  calculate(operated: number, operator: number): number {
    return  this._handleDecimalPoints(operated ** (1 / operator));
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
  
  operation: string = "\u221A";
}