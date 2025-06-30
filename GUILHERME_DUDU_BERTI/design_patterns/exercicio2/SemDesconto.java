package GUILHERME_DUDU_BERTI.design_patterns.exercicio2;

public class SemDesconto implements StrategyDesconto {
    @Override
    public double aplicarDesconto(double preco) {
        return preco;
    }
}
