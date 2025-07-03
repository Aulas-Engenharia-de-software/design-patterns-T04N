class Botao {
  constructor() {
    this.ligado = false;
  }

  clicar() {
    if (this.ligado) {
      console.log('Desligando...');
      this.ligado = false;
    } else {
      console.log('Ligando...');
      this.ligado = true;
    }
  }
}

const botao = new Botao();

botao.clicar(); // Ligando...
botao.clicar(); // Desligando...
botao.clicar(); // Ligando...
