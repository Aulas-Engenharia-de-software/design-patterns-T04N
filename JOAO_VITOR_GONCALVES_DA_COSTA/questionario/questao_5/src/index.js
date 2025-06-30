"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const Context_1 = __importDefault(require("./classes/Context"));
const WithDiscount_1 = __importDefault(require("./classes/WithDiscount"));
const WithoutDiscount_1 = __importDefault(require("./classes/WithoutDiscount"));
const context = new Context_1.default();
const withDiscountStrategy = new WithoutDiscount_1.default(), withoutDiscountStrategy = new WithDiscount_1.default();
const numberToBeTransform = +(Math.random() * 100).toFixed(2);
console.log(`Número original: ${numberToBeTransform}`);
context.strategy = withoutDiscountStrategy;
console.log(`Desconto com a estratégia sem desconto: R$: ${(_a = context.execute(numberToBeTransform)) === null || _a === void 0 ? void 0 : _a.toFixed(2)}`);
context.strategy = withDiscountStrategy;
console.log(`Desconto com a estratégia com desconto: R$: ${(_b = context.execute(numberToBeTransform)) === null || _b === void 0 ? void 0 : _b.toFixed(2)}`);
