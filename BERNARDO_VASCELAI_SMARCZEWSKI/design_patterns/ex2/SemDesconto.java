package BERNARDO_VASCELAI_SMARCZEWSKI.design_patterns.ex2;

public class SemDesconto implements Strategy {
    @Override
    public double calcularDesconto(double precoOriginal) {
        return precoOriginal;
    }
}
