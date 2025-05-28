// Componente base
interface Cafe {
  custo(): number;
  descricao(): string;
}

// Componentes concretos
class CafeExpresso implements Cafe {
  custo() {
    return 5;
  }

  descricao() {
    return "Café Expresso";
  }
}

class CafeComLeite implements Cafe {
  custo() {
    return 6;
  }
  descricao() {
    return "Café com Leite";
  }
}

// Decorator base
abstract class CafeDecorator implements Cafe {
  constructor(protected cafe: Cafe) {}
  abstract custo(): number;
  abstract descricao(): string;
}

// Complementos
class Chantilly extends CafeDecorator {
  custo() {
    return this.cafe.custo() + 2;
  }
  descricao() {
    return this.cafe.descricao() + " + Chantilly";
  }
}

class Chocolate extends CafeDecorator {
  custo() {
    return this.cafe.custo() + 3;
  }
  descricao() {
    return this.cafe.descricao() + " + Chocolate";
  }
}

// Uso
const pedido = new Chantilly(new Chocolate(new CafeExpresso()));
const pedido2 = new Chocolate(new Chantilly(new CafeComLeite()));
console.log(pedido.descricao()); // Café Expresso + Chocolate + Chantilly
console.log(pedido2.descricao()); // Café com Leite + Chantilly + Chocolate
console.log(pedido.custo()); // 10
console.log(pedido2.custo()); // 11
