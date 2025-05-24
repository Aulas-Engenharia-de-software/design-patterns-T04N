import 'package:flutter/material.dart';
import 'payment_screen.dart';

void main() {
  runApp(MaterialApp(
    title: 'Fluxo de Pagamento',
    home: PaymentHome(),
  ));
}

class PaymentHome extends StatefulWidget {
  @override
  _PaymentHomeState createState() => _PaymentHomeState();
}

class _PaymentHomeState extends State<PaymentHome> {
  final TextEditingController _amountController = TextEditingController();

  void _navigateToPaymentScreen() {
    final amountText = _amountController.text.trim();
    if (amountText.isEmpty) return;

    final amount = double.tryParse(amountText);
    if (amount == null || amount <= 0) return;

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => PaymentScreen(amount: amount),
      ),
    );
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
              controller: _amountController,
              keyboardType: TextInputType.numberWithOptions(decimal: true),
              decoration: InputDecoration(labelText: 'Valor do pagamento'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _navigateToPaymentScreen,
              child: Text('Pagar'),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _amountController.dispose();
    super.dispose();
  }
}