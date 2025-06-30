package strategy;

import core.Product;

public class Calculator {
    private Product product;

    public Calculator(Product product) {
        this.product = product;
    }

    public Double calculate(IProductPriceStrategy strategy) {
        return strategy.calcular(product);
    }
}
