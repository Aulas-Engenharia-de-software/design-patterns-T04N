package BERNARDO_VASCELAI_SMARCZEWSKI.design_patterns.ex2;

public class DescontoFixo implements Strategy {
    private double valorDesconto;

    public DescontoFixo(double valorDesconto) {
        this.valorDesconto = valorDesconto;
    }

    @Override
    public double calcularDesconto(double precoOriginal) {
        return precoOriginal - valorDesconto;
    }
}