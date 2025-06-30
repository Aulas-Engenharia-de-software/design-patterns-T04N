import 'package:flutter/material.dart';
import 'state/payment_context.dart';
import 'state/payment_state.dart';



class PaymentScreen extends StatefulWidget {
  const PaymentScreen({super.key});

  @override
  State<PaymentScreen> createState() => _PaymentScreenState();
}

class _PaymentScreenState extends State<PaymentScreen> {
  final TextEditingController _controller = TextEditingController();
  late PaymentContext _paymentContext;

  @override
  void initState() {
    super.initState();
    _paymentContext = PaymentContext(setStateCallback: () => setState(() {}));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Pagamento (State Pattern)")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: _paymentContext.getState().buildUI(context, _controller, _paymentContext),
      ),
    );
  }
}
