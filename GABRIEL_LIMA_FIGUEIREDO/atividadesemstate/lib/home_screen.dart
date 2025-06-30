import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  HomeScreen({super.key});

  final TextEditingController _controller = TextEditingController();

  void _sendToDetails(BuildContext context) {
    final text = _controller.text.trim();
    if (text.isNotEmpty) {
      Navigator.of(context).pushNamed('/details', arguments: text);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Digite algo antes de continuar')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: 'Digite algo'),
            ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: () => _sendToDetails(context),
              child: Text('Enviar para detalhes'),
            ),
          ],
        ),
      ),
    );
  }
}
