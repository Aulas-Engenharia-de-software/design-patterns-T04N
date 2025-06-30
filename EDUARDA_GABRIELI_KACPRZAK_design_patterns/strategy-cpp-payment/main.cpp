#include <iostream>
#include <string>
#include <memory>

class PaymentStrategy {
public:
    virtual ~PaymentStrategy() = default;
    virtual void processPayment(double amount) const = 0;
};

class CreditCardPayment : public PaymentStrategy {
public:
    void processPayment(double amount) const override {
        std::cout << "Processando pagamento de R$" << amount
                  << " via Cartão de Crédito" << std::endl;
    }
};

class BoletoPayment : public PaymentStrategy {
public:
    void processPayment(double amount) const override {
        std::cout << "Gerando boleto de R$" << amount << std::endl;
        std::cout << "Código do boleto: BOL" << rand() % 10000 << std::endl;
    }
};

class PixPayment : public PaymentStrategy {
public:
    void processPayment(double amount) const override {
        std::cout << "Processando PIX de R$" << amount << std::endl;
        std::cout << "Chave PIX: 123e4567-e89b-12d3-a456-426655440000" << std::endl;
    }
};

class PaymentProcessor {
private:
    std::unique_ptr<PaymentStrategy> strategy;

public:
    explicit PaymentProcessor(std::unique_ptr<PaymentStrategy> strategy)
        : strategy(std::move(strategy)) {}

    void setPaymentMethod(std::unique_ptr<PaymentStrategy> newStrategy) {
        strategy = std::move(newStrategy);
    }

    void executePayment(double amount) const {
        if (strategy) {
            strategy->processPayment(amount);
        } else {
            std::cerr << "Método de pagamento não selecionado!" << std::endl;
        }
    }
};

int main() {
    srand(time(nullptr));

    PaymentProcessor processor(std::make_unique<CreditCardPayment>());

    double purchaseAmount = 150.50;

    std::cout << "Compra no valor de R$" << purchaseAmount << std::endl;

    processor.executePayment(purchaseAmount);

    processor.setPaymentMethod(std::make_unique<BoletoPayment>());
    processor.executePayment(purchaseAmount);

    processor.setPaymentMethod(std::make_unique<PixPayment>());
    processor.executePayment(purchaseAmount);

    return 0;
}