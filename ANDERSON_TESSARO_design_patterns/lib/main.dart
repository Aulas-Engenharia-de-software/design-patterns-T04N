import 'package:flutter/material.dart';
import 'pagamento_adapter.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final List<Map<String, dynamic>> pagamentos = [
    {
      "descricao": "Cartão Moderno",
      "pagamento": CartaoCredito(), // classe moderna
    },
    {
      "descricao": "Método Antigo Adaptado",
      "pagamento": PagamentoAdapter(PagamentoAntigo()), // adaptado
    },
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Adapter de Pagamento',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Exemplo de Adapter'),
          backgroundColor: Colors.teal,
        ),
        body: ListView.builder(
          itemCount: pagamentos.length,
          itemBuilder: (context, index) {
            final item = pagamentos[index];

            return Card(
              margin: const EdgeInsets.all(10),
              child: ListTile(
                title: Text(item["descricao"]),
                trailing: ElevatedButton(
                  child: const Text("Pagar"),
                  onPressed: () {
                    item["pagamento"].pagar(99.90);
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text("${item["descricao"]} executado!"),
                      ),
                    );
                  },
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

// Classe moderna implementando a interface diretamente
class CartaoCredito implements Pagamento {
  @override
  void pagar(double valor) {
    print("Pagamento MODERNO de R\$ ${valor.toStringAsFixed(2)} realizado.");
  }
}
