public class ProcessadorPagamento {
    private FormaPagamento forma;

    public ProcessadorPagamento(FormaPagamento forma) {
        this.forma = forma;
    }

    public void processar(double valor) {
        forma.pagar(valor);
    }

}
