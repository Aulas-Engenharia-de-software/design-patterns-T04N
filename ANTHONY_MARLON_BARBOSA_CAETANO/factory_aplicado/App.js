import { NotificacaoFactory } from "./NotificacaoFactory.js";

document.addEventListener('DOMContentLoaded', () => {
  const btnCriar = document.getElementById('btnCriar');

  btnCriar.addEventListener('click', () => {
    const tipo = document.getElementById('tipoNotificacao').value;

    if (tipo === '') {
      alert("Selecione um tipo de notificação.");
      return;
    }

    const notificacao = NotificacaoFactory.criar(tipo);
    notificacao.enviar();
  });
});
