package BERNARDO_VASCELAI_SMARCZEWSKI.strategy.Com;

public class Pix implements PagamentoStrategy {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento de R$" + valor + " realizado via PIX.");
    }
}