package GUILHERME_DUDU_BERTI.design_patterns.exercicio2;

public class DescontoFixo implements StrategyDesconto {
    private double valorDesconto;

    public DescontoFixo(double valorDesconto) {
        this.valorDesconto = valorDesconto;
    }

    @Override
    public double aplicarDesconto(double preco) {
        return Math.max(0, preco - valorDesconto);
    }
}
