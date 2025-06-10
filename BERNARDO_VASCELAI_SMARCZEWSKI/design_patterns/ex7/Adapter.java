package BERNARDO_VASCELAI_SMARCZEWSKI.design_patterns.ex7;

public class Adapter implements Pagamento {
    private PagamentoAntigo pagamentoAntigo;

    public Adapter(PagamentoAntigo pagamentoAntigo) {
        this.pagamentoAntigo = pagamentoAntigo;
    }

    @Override
    public void pagar(double valor) {
        // Converte o valor para string e chama o método antigo
        pagamentoAntigo.processarPagamentoAntigo(String.format("%.2f", valor));
    }
}
