package semstrategy;


public class SistemaPagamentos {

    public static void main(String[] args) {
        CarrinhoCompras carrinho = new CarrinhoCompras();

        System.out.println("Compra 1");
        carrinho.finalizarCompra(250.75, FormaPagamento.CARTAO_CREDITO);

        System.out.println("\nCompra 2");
        carrinho.finalizarCompra(99.90, FormaPagamento.PIX);

        System.out.println("\nCompra 3");
        carrinho.finalizarCompra(150.00, FormaPagamento.BOLETO_BANCARIO);
    }
}