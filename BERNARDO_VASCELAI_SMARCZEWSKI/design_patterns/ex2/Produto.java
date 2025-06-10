package BERNARDO_VASCELAI_SMARCZEWSKI.design_patterns.ex2;

public class Produto {
    private String nome;
    private double preco;
    private Strategy descontoStrategy;

    public Produto(String nome, double preco, Strategy descontoStrategy) {
        this.nome = nome;
        this.preco = preco;
        this.descontoStrategy = descontoStrategy;
    }

    public double getPrecoComDesconto() {
        return descontoStrategy.calcularDesconto(preco);

    }

    public void setDescontoStrategy(Strategy descontoStrategy) {
        this.descontoStrategy = descontoStrategy;
    }

    public String getNome() {
        return nome;
    }
}
