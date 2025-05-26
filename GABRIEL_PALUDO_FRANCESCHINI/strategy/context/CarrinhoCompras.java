package strategy.context;
import strategy.strategy.*;

public class CarrinhoCompras {
    private PagamentoStrategy estrategiaPagamento;

    public void setEstrategiaPagamento(PagamentoStrategy estrategiaPagamento) {
        this.estrategiaPagamento = estrategiaPagamento;
    }

    public void finalizarCompra(double valorTotal) {
        if (estrategiaPagamento == null) {
            System.out.println("Erro: nenhuma forma de pagamento selecionada.");
            return;
        }
        estrategiaPagamento.pagar(valorTotal);
    }
}