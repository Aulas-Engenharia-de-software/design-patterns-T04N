class EstadoLigado {
  clicar(botao) {
    console.log('Desligando...');
    botao.setEstado(new EstadoDesligado());
  }
}

class EstadoDesligado {
  clicar(botao) {
    console.log('Ligando...');
    botao.setEstado(new EstadoLigado());
  }
}


class Botao {
  constructor() {
    this.estado = new EstadoDesligado(); 
  }

  setEstado(estado) {
    this.estado = estado;
  }

  clicar() {
    this.estado.clicar(this);
  }
}


const botao = new Botao();

botao.clicar(); // Ligando...
botao.clicar(); // Desligando...
botao.clicar(); // Ligando...
