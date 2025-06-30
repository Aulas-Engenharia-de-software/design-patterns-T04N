public class SemPatterns {

    public void processarPagamento(String tipo, double valor) {
        if (tipo.equalsIgnoreCase("pix")) {
            System.out.println("Processando pagamento via PIX no valor de R$" + valor);
        } else if (tipo.equalsIgnoreCase("cartao")) {
            System.out.println("Processando pagamento via Cartão no valor de R$" + valor);
        } else if (tipo.equalsIgnoreCase("boleto")) {
            System.out.println("Gerando boleto para pagamento no valor de R$" + valor);
        } else {
            System.out.println("Forma de pagamento não reconhecida.");
        }
    }

    public static void main(String[] args) {
        SemPatterns pagamento = new SemPatterns();

        pagamento.processarPagamento("pix", 100.0);
        pagamento.processarPagamento("cartao", 200.0);
        pagamento.processarPagamento("boleto", 300.0);
    }

}
