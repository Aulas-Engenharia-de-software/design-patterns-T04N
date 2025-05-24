import 'package:flutter/material.dart';
import 'payment_context.dart';

abstract class PaymentState {
  Widget buildUI(BuildContext context, TextEditingController controller, PaymentContext paymentContext);
}

class EnterAmountState extends PaymentState {
  @override
  Widget buildUI(BuildContext context, TextEditingController controller, PaymentContext paymentContext) {
    return Column(
      children: [
        const Text("Informe o valor para pagar:"),
        TextField(
          controller: controller,
          keyboardType: TextInputType.number,
          decoration: const InputDecoration(labelText: 'Valor'),
        ),
        const SizedBox(height: 20),
        ElevatedButton(
          onPressed: () {
            final text = controller.text.trim();
            final amount = double.tryParse(text);
            if (amount == null || amount <= 0) {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text("Valor inválido")),
              );
              return;
            }
            paymentContext.setAmount(amount);
            paymentContext.setState(ProcessingPaymentState());
          },
          child: const Text("Pagar"),
        ),
      ],
    );
  }
}

class ProcessingPaymentState extends PaymentState {
  @override
  Widget buildUI(BuildContext context, TextEditingController controller, PaymentContext paymentContext) {
    Future.delayed(const Duration(seconds: 2), () {
      paymentContext.setState(SuccessPaymentState());
    });

    return const Center(
      child: CircularProgressIndicator(),
    );
  }
}

class SuccessPaymentState extends PaymentState {
  @override
  Widget buildUI(BuildContext context, TextEditingController controller, PaymentContext paymentContext) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(Icons.check_circle, color: Colors.green, size: 80),
        const SizedBox(height: 16),
        Text("Pagamento de R\$ ${paymentContext.getAmount().toStringAsFixed(2)} realizado com sucesso!"),
        const SizedBox(height: 20),
        ElevatedButton(
          onPressed: () {
            paymentContext.reset();
          },
          child: const Text("Fazer outro pagamento"),
        ),
      ],
    );
  }
}
