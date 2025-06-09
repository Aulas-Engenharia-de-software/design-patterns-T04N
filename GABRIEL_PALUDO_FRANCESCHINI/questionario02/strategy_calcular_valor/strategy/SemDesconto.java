package questionario02.strategy_calcular_valor.strategy;

import questionario02.strategy_calcular_valor.model.Produto;

public class SemDesconto implements DescontoStrategy {

    @Override
    public double calcular(Produto produto) {
        return produto.getPrecoOriginal();
    }
    
}