public class PagamentoCartao implements FormaPagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento de R$" + valor + " via Cartão de Crédito processado.");
    }
}