public class Main {
    public static void main(String[] args) {
        ProcessadorPagamento pagamento1 = new ProcessadorPagamento(new PagamentoPIX());
        pagamento1.processar(150.0);

        ProcessadorPagamento pagamento2 = new ProcessadorPagamento(new PagamentoCartao());
        pagamento2.processar(250.0);

        ProcessadorPagamento pagamento3 = new ProcessadorPagamento(new PagamentoBoleto());
        pagamento3.processar(350.0);
    }

}
