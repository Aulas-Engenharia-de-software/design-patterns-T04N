public class PagamentoPIX implements FormaPagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento de R$" + valor + " via PIX processado.");
    }
}