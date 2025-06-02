package strategy;

import core.Product;

public class ProductDiscountStrategy implements IProductPriceStrategy{

    @Override
    public Double calcular(Product product) {
        return product.getPrice() * 0.9;
    }
}
