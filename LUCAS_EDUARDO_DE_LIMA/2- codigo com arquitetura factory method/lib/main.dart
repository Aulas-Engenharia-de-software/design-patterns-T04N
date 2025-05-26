import 'package:flutter/material.dart';

void main() => runApp(PagamentoApp());

class PagamentoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: PagamentoTela());
  }
}

// Product
abstract class Pagamento {
  String processarPagamento(String valor);
}

// ConcreteProduct
class PagamentoPix implements Pagamento {
  @override
  String processarPagamento(String valor) {
    return 'Pagamento via Pix de R\$ $valor realizado!';
  }
}

// Creator
abstract class PagamentoFactory {
  Pagamento criarPagamento();
}

// ConcreteCreator
class PixFactory implements PagamentoFactory {
  @override
  Pagamento criarPagamento() => PagamentoPix();
}

class PagamentoTela extends StatefulWidget {
  @override
  _PagamentoTelaState createState() => _PagamentoTelaState();
}

class _PagamentoTelaState extends State<PagamentoTela> {
  final TextEditingController _controller = TextEditingController();
  String _mensagem = '';

  void _realizarPagamento() {
    final valor = _controller.text;
    PagamentoFactory factory = PixFactory();
    Pagamento pagamento = factory.criarPagamento();

    setState(() {
      _mensagem = pagamento.processarPagamento(valor);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Factory Method Pagamento')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: 'Valor do pagamento'),
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _realizarPagamento,
              child: Text('Pagar com Pix'),
            ),
            SizedBox(height: 20),
            Text(_mensagem, style: TextStyle(fontSize: 18)),
          ],
        ),
      ),
    );
  }
}