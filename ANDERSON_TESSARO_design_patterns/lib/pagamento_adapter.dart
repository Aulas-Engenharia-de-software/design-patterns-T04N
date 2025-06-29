// Interface moderna
abstract class Pagamento {
  void pagar(double valor);
}

// Classe antiga com método diferente
class PagamentoAntigo {
  void realizarPagamentoAntigo(double quantia) {
    print("Pagamento ANTIGO de R\$ ${quantia.toStringAsFixed(2)} realizado.");
  }
}

// Adapter que implementa a interface moderna e usa a classe antiga
class PagamentoAdapter implements Pagamento {
  final PagamentoAntigo pagamentoAntigo;

  PagamentoAdapter(this.pagamentoAntigo);

  @override
  void pagar(double valor) {
    pagamentoAntigo.realizarPagamentoAntigo(valor);
  }
}
