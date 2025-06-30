package strategy;
import strategy.context.*;
import strategy.strategy.*;

public class SistemaPagamentos {
    public static void main(String[] args) {
        CarrinhoCompras carrinho = new CarrinhoCompras();
        double valor1 = 250.75;
        double valor2 = 99.90;
        double valor3 = 150.00;

        System.out.println("Tentativa 1: Cartão de crédito");
        carrinho.setEstrategiaPagamento(new CartaoCredito("Gabriel Paludo", "1234-5678-9012-3456"));
        carrinho.finalizarCompra(valor1);

        System.out.println("\nTentativa 2: Pix");
        carrinho.setEstrategiaPagamento(new Pix("gabriel@gmail.com"));
        carrinho.finalizarCompra(valor2);

        System.out.println("\nTentativa 3: Boleto");
        carrinho.setEstrategiaPagamento(new BoletoBancario());
        carrinho.finalizarCompra(valor3);

        System.out.println("\nTentativa 4: Sem Pagamento");
        carrinho.setEstrategiaPagamento(null);
        carrinho.finalizarCompra(50.00);
    }
}