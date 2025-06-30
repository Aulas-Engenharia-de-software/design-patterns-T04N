package strategy.strategy;

public class BoletoBancario implements PagamentoStrategy {
    @Override
    public void pagar(double valor) {
        System.out.println("Gerando boleto de R$ " + String.format("%.2f", valor));

    }
}