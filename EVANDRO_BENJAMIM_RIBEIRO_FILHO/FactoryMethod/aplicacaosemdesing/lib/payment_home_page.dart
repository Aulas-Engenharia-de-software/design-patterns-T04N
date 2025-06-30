import 'package:flutter/material.dart';
import 'payment_screen.dart';

class PaymentHomePage extends StatefulWidget {
  const PaymentHomePage({super.key});

  @override
  State<PaymentHomePage> createState() => _PaymentHomePageState();
}


class _PaymentHomePageState extends State<PaymentHomePage> {
  final TextEditingController _controller = TextEditingController();

  void _goToPaymentScreen() {
    final amount = double.tryParse(_controller.text.trim());
    if (amount == null || amount <= 0) return;

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => PaymentScreen(amount: amount),
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
              controller: _controller,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(labelText: 'Valor do pagamento'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _goToPaymentScreen,
              child: Text('Pagar'),
            )
          ],
        ),
      ),
    );
  }
}
