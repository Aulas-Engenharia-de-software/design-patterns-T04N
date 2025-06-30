// 7. Implemente código de Strategy para métodos de pagamento: cartão, boleto e PIX.
interface PaymentStrategy {
  pay(amount: number): Promise<void>;
}

class CardPayment implements PaymentStrategy {
  async pay(amount: number) {
    console.log(`cobranca no cartao: R$ ${amount.toFixed(2)}`);
    // integracao com gateway de cartao...
  }
}

class BoletoPayment implements PaymentStrategy {
  async pay(amount: number) {
    console.log(`gerando boleto de R$ ${amount.toFixed(2)}`);
    // geracao do nuero do boleto / PDF...
  }
}

class PixPayment implements PaymentStrategy {
  async pay(amount: number) {
    console.log(`qrcode PIX: R$ ${amount.toFixed(2)}`);
    // chamada a api de pix...
  }
}

type Method = "card" | "boleto" | "pix";

const strategies: Record<Method, PaymentStrategy> = {
  card: new CardPayment(),
  boleto: new BoletoPayment(),
  pix: new PixPayment(),
};

export async function processPayment(method: Method, amount: number) {
  await strategies[method].pay(amount);
}

// exemplo
processPayment("pix", 150);
