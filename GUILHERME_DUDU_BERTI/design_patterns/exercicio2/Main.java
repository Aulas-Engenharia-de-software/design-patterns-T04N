package GUILHERME_DUDU_BERTI.design_patterns.exercicio2;

public class Main {
    public static void main(String[] args) {
        Produto produto = new Produto("Smartphone", 1000, new SemDesconto());

        System.out.println("Preço sem desconto: " + produto.getPrecoComDesconto());

        produto.setStrategyDesconto(new DescontoFixo(100));
        System.out.println("Preço com desconto fixo de 100: " + produto.getPrecoComDesconto());

        produto.setStrategyDesconto(new DescontoPercentual(15));
        System.out.println("Preço com desconto de 15%: " + produto.getPrecoComDesconto());
    }
}
