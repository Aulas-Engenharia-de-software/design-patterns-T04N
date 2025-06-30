import 'payment_state.dart';
import 'package:flutter/material.dart';


class PaymentContext {
  late PaymentState _state;
  double _amount = 0.0;
  final VoidCallback setStateCallback;

  PaymentContext({required this.setStateCallback}) {
    _state = EnterAmountState();
  }

 

  void setState(PaymentState state) {
    _state = state;
    setStateCallback();
  }

  PaymentState getState() => _state;

  void setAmount(double amount) => _amount = amount;
  double getAmount() => _amount;

  void reset() {
    _amount = 0.0;
    setState(EnterAmountState());
  }
}
