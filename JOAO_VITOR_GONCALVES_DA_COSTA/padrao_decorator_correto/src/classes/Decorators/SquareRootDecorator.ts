import MainDecorator from "./MainDecorator";

export default class SquareRootDecorator extends MainDecorator {

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
  
  get operation(): string {
    return "\u221A";
  }
}