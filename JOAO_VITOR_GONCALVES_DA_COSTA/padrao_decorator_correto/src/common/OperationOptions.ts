import DivisionDecorator from "../classes/Decorators/DivisionDecorator";
import InitialCalculatorDecorator from "../classes/Decorators/InitialCalculatorDecorator";
import MultiplicationDecorator from "../classes/Decorators/MultiplicationDecorator";
import PowDecorator from "../classes/Decorators/PowDecorator";
import RestDivisionDecorator from "../classes/Decorators/RestDivisionDecorator";
import SquareRootDecorator from "../classes/Decorators/SquareRootDecorator";
import SubDecorator from "../classes/Decorators/SubDecorator";
import SumDecorator from "../classes/Decorators/SumDecorator";

const initialCalculatorDecorator = new InitialCalculatorDecorator();

export const operations = {
  initialCalculatorDecorato: new InitialCalculatorDecorator(),
  division: new DivisionDecorator(initialCalculatorDecorator),
  multiplication: new MultiplicationDecorator(initialCalculatorDecorator),
  pow: new PowDecorator(initialCalculatorDecorator),
  restDivision: new RestDivisionDecorator(initialCalculatorDecorator),
  squareRoot: new SquareRootDecorator(initialCalculatorDecorator),
  sub: new SubDecorator(initialCalculatorDecorator),
  sum: new SumDecorator(initialCalculatorDecorator),
}

export type AvailableOptions = keyof typeof operations;
export type AvailableDecorators = typeof operations;