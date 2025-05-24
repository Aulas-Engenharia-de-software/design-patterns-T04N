import 'package:flutter/material.dart';

class PaymentScreen extends StatelessWidget {
  final double amount;

  const PaymentScreen({required this.amount, super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Tela de Pagamento')),
      body: Center(
        child: Text(
          'Você irá pagar R\$ ${amount.toStringAsFixed(2)}',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
