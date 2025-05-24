import 'package:flutter/material.dart';
import 'payment_screen_factory.dart';

class PaymentHomeFactoryPage extends StatefulWidget {
  final PaymentScreenFactory factory;

  const PaymentHomeFactoryPage({required this.factory, super.key});

  @override
  State<PaymentHomeFactoryPage> createState() => _PaymentHomeFactoryPageState();
}

class _PaymentHomeFactoryPageState extends State<PaymentHomeFactoryPage> {
  final TextEditingController _controller = TextEditingController();

  void _goToPaymentScreen() {
    final amount = double.tryParse(_controller.text.trim());
    if (amount == null || amount <= 0) return;

    final paymentScreen = widget.factory.createPaymentScreen(amount);
    Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => paymentScreen),
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