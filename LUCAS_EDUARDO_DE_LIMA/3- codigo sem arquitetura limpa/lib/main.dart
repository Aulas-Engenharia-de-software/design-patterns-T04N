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
  final TextEditingController _controller = TextEditingController();
  String _status = '';

  void _confirmarPagamento() {
    String valor = _controller.text;
    setState(() {
      _status = 'Pagamento confirmado: R\$ $valor';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Pagamento 2')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: 'Digite o valor'),
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _confirmarPagamento,
              child: Text('Confirmar'),
            ),
            SizedBox(height: 20),
            Text(_status, style: TextStyle(fontSize: 18)),
          ],
        ),
      ),
    );
  }
}