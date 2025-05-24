import 'payment_screen.dart';

abstract class PaymentScreenFactory {
  PaymentScreen createPaymentScreen(double amount);
}

class DefaultPaymentScreenFactory implements PaymentScreenFactory {
  @override
  PaymentScreen createPaymentScreen(double amount) {
    return PaymentScreen(amount: amount);
  }
}