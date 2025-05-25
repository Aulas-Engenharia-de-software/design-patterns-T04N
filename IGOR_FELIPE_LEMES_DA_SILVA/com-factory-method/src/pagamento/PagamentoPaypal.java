package pagamento;

public class PagamentoPaypal implements Pagamento{
    public void fazerPagamento(double valor){
        System.out.println("Realizando pagamento no valor de R$"+valor+" pelo Paypal");
        System.out.println("Pagamento realizado.");
    }
}
