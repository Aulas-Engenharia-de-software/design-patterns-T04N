import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'State Pattern Demo',
      home: AppController(),
    );
  }
}

/// Classe que simula a troca de estados (telas)
class AppController extends StatefulWidget {
  const AppController({super.key});

  @override
  State<AppController> createState() => _AppControllerState();
}

class _AppControllerState extends State<AppController> {
  String _currentScreen = 'home';
  String _message = '';

  void _goToDetails(String message) {
    setState(() {
      _message = message;
      _currentScreen = 'details';
    });
  }

  void _goToHome() {
    setState(() {
      _currentScreen = 'home';
      _message = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_currentScreen == 'home') {
      return HomeScreen(onSend: _goToDetails);
    } else {
      return DetailsScreen(message: _message, onBack: _goToHome);
    }
  }
}

class HomeScreen extends StatefulWidget {
  final void Function(String) onSend;

  const HomeScreen({super.key, required this.onSend});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final TextEditingController _controller = TextEditingController();

  void _handleSubmit() {
    final text = _controller.text.trim();
    if (text.isNotEmpty) {
      widget.onSend(text);
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
              onPressed: _handleSubmit,
              child: Text('Enviar para detalhes'),
            ),
          ],
        ),
      ),
    );
  }
}

class DetailsScreen extends StatelessWidget {
  final String message;
  final VoidCallback onBack;

  const DetailsScreen({super.key, required this.message, required this.onBack});

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
              onPressed: onBack,
              child: Text('Voltar'),
            ),
          ],
        ),
      ),
    );
  }
}
