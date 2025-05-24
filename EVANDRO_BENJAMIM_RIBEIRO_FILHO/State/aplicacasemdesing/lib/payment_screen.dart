import 'package:flutter/material.dart';

class PaymentScreen extends StatelessWidget {
  final double amount;

  PaymentScreen({required this.amount});

  void _confirmPayment(BuildContext context) {

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Pagamento Realizado'),
        content: Text('Você pagou R\$ ${amount.toStringAsFixed(2)} com sucesso!'),
        actions: [
          TextButton(
            onPressed: () => Navigator.popUntil(context, (route) => route.isFirst),
            child: Text('OK'),
          ),
        ],
      ),
    );
  }

  void _cancelPayment(BuildContext context) {
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Confirmar Pagamento')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              'Você está prestes a pagar:',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 10),
            Text(
              'R\$ ${amount.toStringAsFixed(2)}',
              style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 30),
            ElevatedButton(
              onPressed: () => _confirmPayment(context),
              child: Text('Confirmar Pagamento'),
            ),
            SizedBox(height: 10),
            TextButton(
              onPressed: () => _cancelPayment(context),
              child: Text('Cancelar'),
            ),
          ],
        ),
      ),
    );
  }
}
