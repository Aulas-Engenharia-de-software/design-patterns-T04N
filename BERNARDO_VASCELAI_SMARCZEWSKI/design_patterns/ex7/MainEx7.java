package BERNARDO_VASCELAI_SMARCZEWSKI.design_patterns.ex7;

// Implemente um Adapter para reutilizar uma classe antiga como PagamentoAntigo, adaptando-a a uma interface Pagamento.

public class MainEx7 {
    public static void main(String[] args) {
        PagamentoAntigo sistemaAntigo = new PagamentoAntigo();
        Pagamento pagamentoAdaptado = new Adapter(sistemaAntigo);

        pagamentoAdaptado.pagar(150.75);
    }
}