import Context from "./classes/Context";
import WithDiscount from "./classes/WithDiscount";
import WithoutDiscount from "./classes/WithoutDiscount";

const context = new Context();

const withDiscountStrategy = new WithoutDiscount(), withoutDiscountStrategy = new WithDiscount();

const numberToBeTransform = +(Math.random() * 100).toFixed(2);

console.log(`Número original: ${numberToBeTransform}`);

context.strategy = withoutDiscountStrategy;

console.log(`Desconto com a estratégia sem desconto: R$: ${context.execute(numberToBeTransform)?.toFixed(2)}`);

context.strategy = withDiscountStrategy;

console.log(`Desconto com a estratégia com desconto: R$: ${context.execute(numberToBeTransform)?.toFixed(2)}`);