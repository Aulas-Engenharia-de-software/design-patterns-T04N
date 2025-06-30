import 'package:flutter/material.dart';


class PaymentScreen extends StatelessWidget {
  final double amount;

  const PaymentScreen({required this.amount, Key? key}) : super(key: key);



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tela de Pagamento'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Valor do pagamento:',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 10),
            Text(
              'R\$ ${amount.toStringAsFixed(2)}',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 30),
            ElevatedButton(
              onPressed: () {

                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Pagamento processado com sucesso!')),
                );

                Future.delayed(Duration(seconds: 2), () {
                  Navigator.pop(context);
                });
              },
              child: Text('Confirmar Pagamento'),
            ),
          ],
        ),
      ),
    );
  }
}