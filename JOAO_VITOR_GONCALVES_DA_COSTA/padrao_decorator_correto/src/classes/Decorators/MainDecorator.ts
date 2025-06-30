import type { Calculator } from "../../interfaces/calculator";

export default abstract class MainDecorator implements Calculator {
  
  constructor(calculator: Calculator) { }

  abstract calculate(a: number, b: number): number;
  
  abstract get operation(): string;
}