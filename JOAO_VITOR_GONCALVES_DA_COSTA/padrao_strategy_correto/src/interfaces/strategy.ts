export default interface Strategy {
  
  calculate(num1: number, num2: number): number;

  readonly operation: string;
  
}