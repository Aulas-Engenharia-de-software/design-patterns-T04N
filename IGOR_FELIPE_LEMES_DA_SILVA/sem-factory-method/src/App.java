import java.util.Scanner;

import pagamento.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        Scanner read = new Scanner(System.in);
        int escolha = 0;
        Double valor = 0.0;
        Pagamento pagamento = null;

        System.out.println("Digite o valor do pagamento: ");
        valor = read.nextDouble();

        Boolean continuar = true;

        while(continuar == true){

            System.out.println("Escolha o método de pagamento: ");
            System.out.println("[1] Nubank");
            System.out.println("[2] Paypal");
            System.out.println("[3] Pix");
            escolha = read.nextInt();

            switch (escolha) {
                case 1:
                    pagamento = new PagamentoNubank();
                    continuar = false;
                    break;
                case 2:
                    pagamento = new PagamentoPaypal();
                    continuar = false;
                    break;
                case 3:
                    pagamento = new PagamentoPix();
                    continuar = false;
                    break;
                default:
                    System.out.println("Inválido, escolha outro");
                    break;
            }
        }

        pagamento.fazerPagamento(valor);

        read.close();
    }
}