package questionario02.strategy_calcular_valor;

import questionario02.strategy_calcular_valor.model.Produto;
import questionario02.strategy_calcular_valor.service.Calculadora;
import questionario02.strategy_calcular_valor.strategy.DescontoDezPorcento;
import questionario02.strategy_calcular_valor.strategy.SemDesconto;

public class Program {
    public static void main(String[] args) {
        Produto produto = new Produto("Exemplo1", 250.00);

        Calculadora calculadora = new Calculadora();

        System.out.println("Produto: " + produto.getNome());
        System.out.println("Preço original: R$" + String.format("%.2f", produto.getPrecoOriginal()));
        System.out.println("------------------------------------");

        calculadora.setEstrategia(new SemDesconto());
        double precoFinalSemDesconto = calculadora.calcular(produto);
        System.out.println("Preço final (sem desconto): R$" + String.format("%.2f", precoFinalSemDesconto));
        System.out.println("------------------------------------");
        
        calculadora.setEstrategia(new DescontoDezPorcento());
        double precoFinalComDesconto = calculadora.calcular(produto);
        System.out.println("Preço final (com 10% desconto): R$" + String.format("%.2f", precoFinalComDesconto));
    }
}

