package BERNARDO_VASCELAI_SMARCZEWSKI.strategy.Com;

public class Cartao implements PagamentoStrategy {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento de R$" + valor + " realizado com Cartão de Crédito.");
    }
}