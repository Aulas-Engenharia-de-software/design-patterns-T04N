package GUILHERME_DUDU_BERTI.design_patterns.exercicio2;

public class DescontoPercentual implements StrategyDesconto {
    private double percentual;

    public DescontoPercentual(double percentual) {
        this.percentual = percentual;
    }

    @Override
    public double aplicarDesconto(double preco) {
        return preco * (1 - percentual / 100);
    }
}

