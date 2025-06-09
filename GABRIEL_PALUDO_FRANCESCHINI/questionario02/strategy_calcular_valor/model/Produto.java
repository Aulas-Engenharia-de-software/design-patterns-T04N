package questionario02.strategy_calcular_valor.model;

public class Produto {
    
    private String nome;
    private double precoOriginal;

    public Produto(String nome, double precoOriginal) {
        this.nome = nome;
        this.precoOriginal = precoOriginal;
    }

    public String getNome() {
        return nome;
    }

    public double getPrecoOriginal() {
        return precoOriginal;
    }
}