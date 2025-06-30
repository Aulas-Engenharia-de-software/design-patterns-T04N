package questionario02.strategy_calcular_valor.service;

import questionario02.strategy_calcular_valor.model.Produto;
import questionario02.strategy_calcular_valor.strategy.DescontoStrategy;

public class Calculadora {

     private DescontoStrategy estrategia;

    public void setEstrategia(DescontoStrategy estrategia) {
        this.estrategia = estrategia;
    }

    public double calcular(Produto produto) {
        if (estrategia == null) {
            throw new IllegalStateException("A estratégia de desconto não foi definida");
        }
        return estrategia.calcular(produto);
        
    }
}
