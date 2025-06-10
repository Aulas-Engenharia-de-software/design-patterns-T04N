package BERNARDO_VASCELAI_SMARCZEWSKI.design_patterns.ex2;

// Implemente o padrão Strategy para representar diferentes formas de calcular desconto em um produto: 
// desconto fixo, percentual e sem desconto.

public class MainEx2 {
    public static void main(String[] args) {
        Produto produto1 = new Produto("Notebook", 3000.00, new DescontoFixo(300.00));
        Produto produto2 = new Produto("Smartphone", 2000.00, new DescontoPercentual(0.15));
        Produto produto3 = new Produto("Cabo USB", 50.00, new SemDesconto());

        System.out.println(produto1.getNome() + ": R$ " + produto1.getPrecoComDesconto());
        System.out.println(produto2.getNome() + ": R$ " + produto2.getPrecoComDesconto());
        System.out.println(produto3.getNome() + ": R$ " + produto3.getPrecoComDesconto());
    }
}
