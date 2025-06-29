import 'package:flutter/material.dart';
import 'discount_strategy.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final List<Product> products = [
    Product(
      name: 'Produto A',
      price: 100,
      discountStrategy: NoDiscount(),
    ),
    Product(
      name: 'Produto B',
      price: 200,
      discountStrategy: FixedDiscount(30),
    ),
    Product(
      name: 'Produto C',
      price: 300,
      discountStrategy: PercentageDiscount(15),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Descontos com Strategy',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Produtos com Desconto'),
        ),
        body: ListView.builder(
          itemCount: products.length,
          itemBuilder: (context, index) {
            final p = products[index];
            return ListTile(
              title: Text(p.name),
              subtitle: Text(
                'Original: R\$ ${p.price.toStringAsFixed(2)}\nCom Desconto: R\$ ${p.discountedPrice.toStringAsFixed(2)}',
              ),
            );
          },
        ),
      ),
    );
  }
}
