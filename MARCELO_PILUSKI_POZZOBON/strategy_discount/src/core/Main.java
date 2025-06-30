package core;

import strategy.Calculator;
import strategy.IProductPriceStrategy;
import strategy.ProductDiscountStrategy;
import strategy.ProductNoDiscountStrategy;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Product product = new Product("Almôndega", 10.00);
        Calculator calculadora = new Calculator(product);


        Scanner scan = new Scanner(System.in);
        System.out.println("Você gostaria do desconto no seu produto? [Y/N]\n");
        String option = scan.nextLine();

        Map<String, IProductPriceStrategy> strategy = new HashMap<>();
        strategy.put("Y", new ProductDiscountStrategy());
        strategy.put("N", new ProductNoDiscountStrategy());

        Double newPrice = calculadora.calculate(strategy.get(option));

        System.out.println("O valor total da venda é de " + newPrice);
    }
}