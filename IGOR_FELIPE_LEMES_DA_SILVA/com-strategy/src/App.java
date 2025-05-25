import java.util.Scanner;

import frete.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        Scanner read = new Scanner(System.in);
        FreteService frete = null;

        System.out.println("Digite o valor da compra");
        double valor = read.nextDouble();

        System.out.println("Digite o peso da compra");
        double peso = read.nextDouble();

        boolean continuar = true;
        int escolha = 0;

        while(continuar == true){
            System.out.println("Escolha o tipo de frente");
            System.out.println("[1] Pax");
            System.out.println("[2] Sedex");
            System.out.println("[3] Entrega Rápido");
            escolha = read.nextInt();

            switch (escolha) {
                case 1:
                    frete = new FreteService("Pax",new FretePax());
                    frete.calcular(valor, peso);
                    continuar = false;
                    break;
                case 2:
                    frete = new FreteService("Sedex",new FreteSedex());
                    frete.calcular(valor, peso);
                    continuar = false;
                    break;
                case 3:
                    frete = new FreteService("Entrega Rápido",new FreteEntregaRapido());
                    frete.calcular(valor, peso);
                    continuar = false;
                    break;
                default:
                    break;
            }
        }
        read.close();
    }
}
