public class PagamentoAdapter implements Pagamento {
    private PagamentoAntigo pagamentoAntigo;

    public PagamentoAdapter(PagamentoAntigo pagamentoAntigo) {
        this.pagamentoAntigo = pagamentoAntigo;
    }

    @Override
    public void pagar(double valor) {
        // Aqui adaptamos a chamada para o método do pagamento antigo
        pagamentoAntigo.realizarPagamento(valor);
    }
}
