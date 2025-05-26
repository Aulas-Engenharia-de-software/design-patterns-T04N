package BERNARDO_VASCELAI_SMARCZEWSKI.strategy.Sem;

public class Main3 {
    public static void main(String[] args) {
        Pagamento processador = new Pagamento();

        processador.pagar("pix", 100.0);
        processador.pagar("cartao", 200.0);
        processador.pagar("boleto", 150.0);
    }
}