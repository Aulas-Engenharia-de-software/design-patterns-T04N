public class PagamentoBoleto implements FormaPagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Boleto gerado no valor de R$" + valor + ".");
    }
}