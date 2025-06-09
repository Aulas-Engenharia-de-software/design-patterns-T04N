package questionario02.strategy_calcular_valor.strategy;

import questionario02.strategy_calcular_valor.model.Produto;

public class DescontoDezPorcento implements DescontoStrategy {

    @Override
    public double calcular(Produto produto) {
        double precoOriginal = produto.getPrecoOriginal();
        return precoOriginal - (precoOriginal * 0.10);
    }
}