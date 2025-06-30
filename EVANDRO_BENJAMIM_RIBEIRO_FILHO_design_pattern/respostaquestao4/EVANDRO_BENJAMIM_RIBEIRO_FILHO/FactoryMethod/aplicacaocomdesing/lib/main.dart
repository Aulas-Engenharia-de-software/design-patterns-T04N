import 'package:flutter/material.dart';
import 'payment_home_factory_page.dart';
import 'payment_screen_factory.dart';

void main() {
  runApp(MaterialApp(
    title: 'Fluxo de Pagamento com Factory',
    theme: ThemeData(
      primarySwatch: Colors.blue,
      useMaterial3: true,
    ),
    home: PaymentHomeFactoryPage(factory: DefaultPaymentScreenFactory()),
  )); // MaterialApp
}