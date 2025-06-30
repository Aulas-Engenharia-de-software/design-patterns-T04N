package main;

import core.CalculadoraFrete;

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
        System.out.println("3 - jadlog");

        int opcao = scanner.nextInt();
        String tipo = "";

        switch (opcao) {
            case 1:
                tipo = "Sedex";
                break;
            case 2:
                tipo = "Pac";
                break;
            case 3:
                tipo = "Jadlog";
                break;
            default:
                System.out.println("Opção inválida.");
                return;
        }

        double valor = calculadora.calcular(peso, distancia, tipo);
        System.out.printf("Valor do frete: R$ %.2f\n", valor);
    }
}
