package BERNARDO_VASCELAI_SMARCZEWSKI.design_patterns.ex2;

public class DescontoPercentual implements Strategy {
    private double percentual;

    public DescontoPercentual(double percentual) {
        this.percentual = percentual;
    }

    @Override
    public double calcularDesconto(double precoOriginal) {
        return precoOriginal - (precoOriginal * percentual);
    }
}