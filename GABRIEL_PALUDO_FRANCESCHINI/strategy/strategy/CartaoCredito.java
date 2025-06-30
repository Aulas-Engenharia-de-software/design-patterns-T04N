package strategy.strategy;

public class CartaoCredito implements PagamentoStrategy {
    private String nome;
    private String numeroCartao;

    public CartaoCredito(String nome, String numeroCartao) {
        this.nome = nome;
        this.numeroCartao = numeroCartao;
    }

    @Override
    public void pagar(double valor) {
        System.out.println("Pagando R$ " + String.format("%.2f", valor)
                         + " com cartão de crédito (Titular: " + nome
                         + ", Número: " + numeroCartao + ")");

    }
}