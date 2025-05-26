package strategy.strategy;

public class Pix implements PagamentoStrategy {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void pagar(double valor) {
        System.out.println("Realizando Pix de R$ " + String.format("%.2f", valor)
                         + " para a chave: " + chavePix);
    }
}