import 'package:flutter/material.dart';

void main() => runApp(PagamentoApp());

class PagamentoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: PagamentoTela());
  }
}

// State
abstract class EstadoPagamento {
  String pagar(String valor);
}

// ConcreteStates
class EstadoInicial implements EstadoPagamento {
  @override
  String pagar(String valor) => 'Processando pagamento de R\$ $valor...';
}

class EstadoConcluido implements EstadoPagamento {
  @override
  String pagar(String valor) => 'Pagamento de R\$ $valor concluído!';
}

// Context
class PagamentoContexto {
  late EstadoPagamento _estado;

  PagamentoContexto() {
    _estado = EstadoInicial();
  }

  void mudarEstado(EstadoPagamento novoEstado) {
    _estado = novoEstado;
  }

  String realizarPagamento(String valor) {
    return _estado.pagar(valor);
  }
}

class PagamentoTela extends StatefulWidget {
  @override
  _PagamentoTelaState createState() => _PagamentoTelaState();
}

class _PagamentoTelaState extends State<PagamentoTela> {
  final TextEditingController _controller = TextEditingController();
  final PagamentoContexto _contexto = PagamentoContexto();
  String _mensagem = '';

  void _pagar() {
    String valor = _controller.text;
    String mensagemInicial = _contexto.realizarPagamento(valor);
    _contexto.mudarEstado(EstadoConcluido());
    String mensagemFinal = _contexto.realizarPagamento(valor);
    setState(() {
      _mensagem = '$mensagemInicial\n$mensagemFinal';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Pagamento com State Pattern')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: 'Valor'),
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _pagar,
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