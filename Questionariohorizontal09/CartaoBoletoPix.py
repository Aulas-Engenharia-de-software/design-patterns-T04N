from abc import ABC, abstractmethod


# Interface Strategy
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass


# Estratégias concretas
class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        card_number = input("Digite o número do cartão: ")
        expiry = input("Digite a data de validade (MM/AA): ")
        cvv = input("Digite o CVV: ")
        print(f"Processando pagamento de R${amount:.2f} via Cartão de Crédito")
        return f"Pagamento com cartão {card_number[-4:]} aprovado"


class BoletoPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Gerando boleto no valor de R${amount:.2f}")
        return "Boleto gerado com sucesso. Código: 123456789"


class PixPayment(PaymentStrategy):
    def pay(self, amount):
        pix_key = input("Digite sua chave PIX (CPF/Email/Telefone): ")
        print(f"Processando PIX de R${amount:.2f} para chave {pix_key}")
        return "Pagamento via PIX realizado com sucesso"


# Contexto
class PaymentProcessor:
    def __init__(self, strategy: PaymentStrategy = None):
        self._strategy = strategy

    def set_strategy(self, strategy: PaymentStrategy):
        self._strategy = strategy

    def process_payment(self, amount):
        if not self._strategy:
            raise ValueError("Estratégia de pagamento não definida")
        return self._strategy.pay(amount)


# Interação com usuário
def menu_pagamento():
    print("\nSelecione o método de pagamento:")
    print("1 - Cartão de Crédito")
    print("2 - Boleto Bancário")
    print("3 - PIX")
    print("0 - Cancelar")
    return input("Opção: ")


def main_pagamento():
    processor = PaymentProcessor()

    while True:
        opcao = menu_pagamento()

        if opcao == '0':
            print("Compra cancelada")
            break
        elif opcao == '1':
            processor.set_strategy(CreditCardPayment())
        elif opcao == '2':
            processor.set_strategy(BoletoPayment())
        elif opcao == '3':
            processor.set_strategy(PixPayment())
        else:
            print("Opção inválida!")
            continue

        try:
            valor = float(input("Digite o valor do pagamento: R$"))
            if valor <= 0:
                print("Valor deve ser positivo!")
                continue

            resultado = processor.process_payment(valor)
            print(resultado)
            break
        except ValueError:
            print("Valor inválido! Digite um número.")


if __name__ == "__main__":
    main_pagamento()