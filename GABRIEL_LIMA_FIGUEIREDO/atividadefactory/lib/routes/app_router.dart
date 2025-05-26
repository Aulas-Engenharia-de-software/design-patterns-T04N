import 'package:flutter/material.dart';
import '../screens/home_screen.dart';
import '../screens/details_screen.dart';

class AppRouter {
  Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => HomeScreen());
      case '/details':
        final String message = settings.arguments as String;
        return MaterialPageRoute(
          builder: (_) => DetailsScreen(data: message),
        );
      default:
        return MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(child: Text('Rota não encontrada')),
          ),
        );
    }
  }
}
