
class Soma {
  executar(a, b) {
    return a + b;
  }
}

class Subtracao {
  executar(a, b) {
    return a - b;
  }
}

class Multiplicacao {
  executar(a, b) {
    return a * b;
  }
}

class Divisao {
  executar(a, b) {
    return a / b;
  }
}


class Calculadora {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }

  setEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  calcular(a, b) {
    return this.estrategia.executar(a, b);
  }
}


const calc = new Calculadora(new Soma());
console.log('Soma:', calc.calcular(10, 5));

calc.setEstrategia(new Subtracao());
console.log('Subtração:', calc.calcular(10, 5));

calc.setEstrategia(new Multiplicacao());
console.log('Multiplicação:', calc.calcular(10, 5));

calc.setEstrategia(new Divisao());
console.log('Divisão:', calc.calcular(10, 5));
