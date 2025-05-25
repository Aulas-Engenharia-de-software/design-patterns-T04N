package pagamento;

public class PagamentoNubank implements Pagamento{
    public void fazerPagamento(double valor){
        System.out.println("Realizando pagamento no valor de R$"+valor+" pela nubank");
        System.out.println("Pagamento realizado.");
    }
}
