import DivisionStrategy from "../classes/strategies/DivisionStrategy";
import MultiplicationStrategy from "../classes/strategies/MultiplicationStrategy";
import PowStrategy from "../classes/strategies/PowStrategy";
import RestDivisionStrategy from "../classes/strategies/RestDivision";
import SquareRootStrategy from "../classes/strategies/SquareRootStrategy";
import SubStrategy from "../classes/strategies/SubStrategy";
import SumStrategy from "../classes/strategies/SumStrategy";

export const operations = {
  division: new DivisionStrategy(),
  multiplication: new MultiplicationStrategy(),
  pow: new PowStrategy(),
  restDivision: new RestDivisionStrategy(),
  squareRoot: new SquareRootStrategy(),
  sub: new SubStrategy(),
  sum: new SumStrategy(),
}

export type AvailableOptions = keyof typeof operations;