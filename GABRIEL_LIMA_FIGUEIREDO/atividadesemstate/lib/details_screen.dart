import 'package:flutter/material.dart';

class DetailsScreen extends StatelessWidget {
  final String message;

  const DetailsScreen({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Detalhes')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Você digitou: $message', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () => Navigator.of(context).pop(),
              child: Text('Voltar'),
            ),
          ],
        ),
      ),
    );
  }
}
