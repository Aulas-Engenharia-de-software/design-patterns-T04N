package strategy;

import core.Product;

public class ProductNoDiscountStrategy implements IProductPriceStrategy{

    @Override
    public Double calcular(Product product) {
        return product.getPrice();
    }
}
