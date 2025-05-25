import java.util.Scanner;


public class App {

    public static double calcular(double valor, double peso){
        return valor * peso;
    }

    public static void main(String[] args) throws Exception {
        
        Scanner read = new Scanner(System.in);
        double frete = 0;

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
                    frete = calcular(valor, peso) * 0.04;
                    System.out.println("Calculando frete no valor de R$"+valor+" com peso de "+peso+" kg");
                    System.out.println("Valor do frete PAX: R$"+frete);
                    continuar = false;
                    break;
                case 2:
                    frete = calcular(valor, peso) * 0.05;
                    System.out.println("Calculando frete no valor de R$"+valor+" com peso de "+peso+" kg");
                    System.out.println("Valor do frete PAX: R$"+frete);
                    continuar = false;
                    break;
                case 3:
                    frete = calcular(valor, peso) * 0.06;
                    System.out.println("Calculando frete no valor de R$"+valor+" com peso de "+peso+" kg");
                    System.out.println("Valor do frete PAX: R$"+frete);
                    continuar = false;
                    break;
                default:
                    break;
            }
        }
        read.close();
    }
}
