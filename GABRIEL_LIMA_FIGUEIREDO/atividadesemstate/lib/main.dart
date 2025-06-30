import 'package:flutter/material.dart';
import 'home_screen.dart';
import 'details_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sem State',
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/details': (context) {
          final String message = ModalRoute.of(context)!.settings.arguments as String;
          return DetailsScreen(message: message);
        },
      },
    );
  }
}
