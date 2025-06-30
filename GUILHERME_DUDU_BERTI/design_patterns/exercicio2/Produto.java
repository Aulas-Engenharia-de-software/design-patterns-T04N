package GUILHERME_DUDU_BERTI.design_patterns.exercicio2;

public class Produto {
    private String nome;
    private double preco;
    private StrategyDesconto strategyDesconto;

    public Produto(String nome, double preco, StrategyDesconto strategyDesconto) {
        this.nome = nome;
        this.preco = preco;
        this.strategyDesconto = strategyDesconto;
    }

    public void setStrategyDesconto(StrategyDesconto strategyDesconto) {
        this.strategyDesconto = strategyDesconto;
    }

    public double getPrecoComDesconto() {
        return strategyDesconto.aplicarDesconto(preco);
    }

    // Getters
    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }
}
