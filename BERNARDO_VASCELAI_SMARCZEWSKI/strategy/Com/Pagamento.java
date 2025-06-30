package BERNARDO_VASCELAI_SMARCZEWSKI.strategy.Com;

public class Pagamento {
    private PagamentoStrategy estrategia;

    public void setEstrategia(PagamentoStrategy estrategia) {
        this.estrategia = estrategia;
    }

    public void processarPagamento(double valor) {
        if (estrategia == null) {
            System.out.println("Nenhuma estratégia de pagamento definida.");
            return;
        }
        estrategia.pagar(valor);
    }
}