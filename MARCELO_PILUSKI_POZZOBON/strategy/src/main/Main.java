package main;

import core.CalculadoraFrete;
import core.JadlogFreteStrategy;
import core.PacFreteStrategy;
import core.SedexFreteStrategy;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CalculadoraFrete calculadora = new CalculadoraFrete();

        System.out.print("Digite o peso do pacote (kg): ");
        double peso = scanner.nextDouble();

        System.out.print("Digite a distância (km): ");
        double distancia = scanner.nextDouble();

        System.out.println("\nEscolha o tipo de frete:");
        System.out.println("1 - Sedex");
        System.out.println("2 - PAC");
        System.out.println("3 - Jadlog\n");

        int opcao = scanner.nextInt();

        switch (opcao) {
            case 1:
                calculadora.setEstrategia(new SedexFreteStrategy());
                break;
            case 2:
                calculadora.setEstrategia(new PacFreteStrategy());
                break;
            case 3:
                calculadora.setEstrategia(new JadlogFreteStrategy());
                break;
            default:
                System.out.println("Opção inválida.");
                return;
        }

        double valor = calculadora.calcularFrete(peso, distancia);
        System.out.printf("Valor do frete: R$ %.2f\n", valor);
    }
}
