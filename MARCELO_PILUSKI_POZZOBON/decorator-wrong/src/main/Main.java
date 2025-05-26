package main;

import core.Hamburguer;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Hamburguer pedido = new Hamburguer();

        boolean continuar = true;

        System.out.println("Implementação errada Decorator");
        System.out.println("Pedido inicial: " + pedido.getDescription() + " - R$" + pedido.getPrice());

        while (continuar) {
            System.out.println("\nDeseja adicionar algo?");
            System.out.println("1 - Queijo Extra (+R$2.50)");
            System.out.println("2 - Batata Frita (+R$5.00)");
            System.out.println("3 - Sem cebola");
            System.out.println("4 - Finalizar Pedido");

            int opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    pedido.addCheese();
                    break;
                case 2:
                    pedido.addFries();
                    break;
                case 3:
                    pedido.removeOnion();
                    break;
                case 4:
                    continuar = false;
                    break;
                default:
                    System.out.println("Opção inválida.");
            }

            System.out.println("\nPedido atual: " + pedido.getDescription());
            System.out.printf("Preço total: R$%.2f\n", pedido.getPrice());
        }

        System.out.println("\nPedido finalizado - " + pedido.getDescription());
    }
}
