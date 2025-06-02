package strategy;

import core.Product;

public interface IProductPriceStrategy {
    Double calcular(Product product);
}
