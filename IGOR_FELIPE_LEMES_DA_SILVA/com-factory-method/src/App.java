import java.util.Scanner;

import factory.*;
import pagamento.Pagamento;

public class App {
    public static void main(String[] args) throws Exception {
        
        Scanner read = new Scanner(System.in);
        int escolha = 0;
        Double valor = 0.0;
        PagamentoFactory factory = null;

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
                    factory = new NubankFactory();
                    continuar = false;
                    break;
                case 2:
                    factory = new PaypalFactory();
                    continuar = false;
                    break;
                case 3:
                    factory = new PixFactory();
                    continuar = false;
                    break;
                default:
                    System.out.println("Inválido, escolha outro");
                    break;
            }
        }

        Pagamento pagamento = factory.criarPagamento();
        pagamento.fazerPagamento(valor);

        read.close();
    }
}