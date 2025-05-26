package BERNARDO_VASCELAI_SMARCZEWSKI.strategy.Com;

public class Boleto implements PagamentoStrategy {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento de R$" + valor + " gerado por Boleto Bancário.");
    }
}