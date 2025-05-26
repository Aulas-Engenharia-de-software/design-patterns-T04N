package semstrategy;

public class CarrinhoCompras{

    public void finalizarCompra(double valorTotal, FormaPagamento forma) {

        System.out.println("Processando compra de R$ " + String.format("%.2f", valorTotal));

        if (forma == FormaPagamento.CARTAO_CREDITO) {
            pagarComCartao(valorTotal);
        } else if (forma == FormaPagamento.BOLETO_BANCARIO) {
            pagarComBoleto(valorTotal);
        } else if (forma == FormaPagamento.PIX) {
            pagarComPix(valorTotal);
        } else {
            System.out.println("Erro: Forma de pagamento inválida ou não selecionada");
        }
    }

    private void pagarComCartao(double valor) {
        System.out.println("Pagando R$ " + String.format("%.2f", valor) + " com cartão de drédito");
    }

    private void pagarComBoleto(double valor) {
        System.out.println("Gerando boleto de R$ " + String.format("%.2f", valor));
    }

    private void pagarComPix(double valor) {
        System.out.println("Realizando Pix de R$ " + String.format("%.2f", valor));
    }
}