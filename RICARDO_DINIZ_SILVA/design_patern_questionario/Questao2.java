package RICARDO_DINIZ_SILVA.design_patern;


interface PaymentProcessor {
    void processPayment(double amount);
}


class PayPalAPI {
    public void makePayment(double amount, String currency) {
        System.out.println("Pagamento de " + amount + " " + currency + " processado via PayPal");
    }
}


class PayPalAdapter implements PaymentProcessor {
    private PayPalAPI paypal;
    
    public PayPalAdapter() {
        this.paypal = new PayPalAPI();
    }
    
    @Override
    public void processPayment(double amount) {
        paypal.makePayment(amount, "USD");
    }
}


public class Questao2 {
    public static void main(String[] args) {
        PaymentProcessor processor = new PayPalAdapter();
        processor.processPayment(100.50);
    }
}