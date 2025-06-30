import { CentralEmergencia } from './CentralEmergencia.js';
import { Setor } from './Setor.js';

class App {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.central = new CentralEmergencia(this.log.bind(this));
    this.init();
  }
  init() {
    this.container.innerHTML = `
      <h3>Adicionar Setor</h3>
      <input type="text" id="nomeSetor" placeholder="Nome do setor">
      <button id="btnAddSetor">Adicionar Setor</button>

      <h3>Lançar Emergência</h3>
      <input type="text" id="mensagemEmergencia" placeholder="Mensagem de emergência">
      <button id="btnNotificar">Notificar Setores</button>

      <h3>Log de Notificações</h3>
      <div class="log" id="log"></div>
    `;

    document.getElementById("btnAddSetor").onclick = () => this.adicionarSetor();
    document.getElementById("btnNotificar").onclick = () => this.notificarEmergencia();
  }

  adicionarSetor() {
    const nomeSetor = document.getElementById("nomeSetor").value;
    if (nomeSetor === '') {
      alert("Informe o nome do setor!");
      return;
    }

    const setor = new Setor(nomeSetor, this.log.bind(this));
    this.central.adicionarSetor(setor);
    document.getElementById("nomeSetor").value = '';
  }

  notificarEmergencia() {
    const mensagem = document.getElementById("mensagemEmergencia").value;
    if (mensagem === '') {
      alert("Informe a mensagem de emergência!");
      return;
    }

    this.central.notificarSetores(mensagem);
    document.getElementById("mensagemEmergencia").value = '';
  }

  log(mensagem) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += mensagem + "<br>";
    logDiv.scrollTop = logDiv.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App('app');
});
