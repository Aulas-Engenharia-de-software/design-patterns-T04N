package questionario02.strategy_calcular_valor.strategy;

import questionario02.strategy_calcular_valor.model.Produto;

public interface DescontoStrategy {

    double calcular(Produto produto);
    
}
