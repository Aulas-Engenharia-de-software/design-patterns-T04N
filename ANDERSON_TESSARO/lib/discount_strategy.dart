// discount_strategy.dart

abstract class DiscountStrategy {
  double applyDiscount(double price);
}

class NoDiscount implements DiscountStrategy {
  @override
  double applyDiscount(double price) => price;
}

class FixedDiscount implements DiscountStrategy {
  final double discountAmount;

  FixedDiscount(this.discountAmount);

  @override
  double applyDiscount(double price) {
    return (price - discountAmount).clamp(0, price);
  }
}

class PercentageDiscount implements DiscountStrategy {
  final double percentage;

  PercentageDiscount(this.percentage);

  @override
  double applyDiscount(double price) {
    return price * (1 - percentage / 100);
  }
}

class Product {
  final String name;
  final double price;
  final DiscountStrategy discountStrategy;

  Product({
    required this.name,
    required this.price,
    required this.discountStrategy,
  });

  double get discountedPrice => discountStrategy.applyDiscount(price);
}
