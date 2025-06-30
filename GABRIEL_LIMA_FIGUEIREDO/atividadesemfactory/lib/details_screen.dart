import 'package:flutter/material.dart';

class DetailsScreen extends StatelessWidget {
  final String data;

  const DetailsScreen({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Detalhes')),
      body: Center(
        child: Text(
          'Você digitou: $data',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
