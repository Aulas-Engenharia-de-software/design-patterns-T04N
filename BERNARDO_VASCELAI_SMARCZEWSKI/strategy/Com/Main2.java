package BERNARDO_VASCELAI_SMARCZEWSKI.strategy.Com;

public class Main2 {
    public static void main(String[] args) {
        Pagamento processador = new Pagamento();

        processador.setEstrategia(new Pix());
        processador.processarPagamento(100.0);

        processador.setEstrategia(new Cartao());
        processador.processarPagamento(200.0);

        processador.setEstrategia(new Boleto());
        processador.processarPagamento(150.0);
    }
}