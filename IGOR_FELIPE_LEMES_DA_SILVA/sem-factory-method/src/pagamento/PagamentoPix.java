package pagamento;

public class PagamentoPix implements Pagamento{
    public void fazerPagamento(double valor){
        System.out.println("Realizando pagamento no valor de R$"+valor+" pelo Pix");
        System.out.println("Pagamento realizado.");
    }
}
