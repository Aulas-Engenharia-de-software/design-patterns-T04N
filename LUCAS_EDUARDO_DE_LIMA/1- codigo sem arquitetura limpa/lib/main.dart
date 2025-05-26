import 'package:flutter/material.dart';

void main() => runApp(PagamentoApp());

class PagamentoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: PagamentoTela(),
    );
  }
}

class PagamentoTela extends StatefulWidget {
  @override
  _PagamentoTelaState createState() => _PagamentoTelaState();
}

class _PagamentoTelaState extends State<PagamentoTela> {
  final TextEditingController _valorController = TextEditingController();
  String _mensagem = '';

  void _realizarPagamento() {
    final valor = _valorController.text;
    setState(() {
      _mensagem = 'Pagamento de R\$ $valor realizado com sucesso!';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Pagamento')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _valorController,
              decoration: InputDecoration(labelText: 'Valor do pagamento'),
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _realizarPagamento,
              child: Text('Pagar'),
            ),
            SizedBox(height: 20),
            Text(_mensagem, style: TextStyle(fontSize: 18)),
          ],
        ),
      ),
    );
  }
}
