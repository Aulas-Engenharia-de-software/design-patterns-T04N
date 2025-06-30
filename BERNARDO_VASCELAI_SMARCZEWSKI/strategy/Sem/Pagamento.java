package BERNARDO_VASCELAI_SMARCZEWSKI.strategy.Sem;

public class Pagamento {
    public void pagar(String tipo, double valor) {
        if (tipo.equalsIgnoreCase("pix")) {
            System.out.println("Pagamento de R$" + valor + " realizado via PIX.");
        } else if (tipo.equalsIgnoreCase("cartao")) {
            System.out.println("Pagamento de R$" + valor + " realizado com Cartão de Crédito.");
        } else if (tipo.equalsIgnoreCase("boleto")) {
            System.out.println("Pagamento de R$" + valor + " gerado por Boleto Bancário.");
        } else {
            System.out.println("Tipo de pagamento desconhecido.");
        }
    }
}