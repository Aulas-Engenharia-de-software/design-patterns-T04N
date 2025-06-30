document.addEventListener('DOMContentLoaded', () => {
  const btnCriar = document.getElementById('btnCriar');

  btnCriar.addEventListener('click', () => {
    const tipo = document.getElementById('tipoNotificacao').value;
    let notificacao;

    if (tipo === 'email') {
      notificacao = {
        enviar: () => alert("Notificação por E-mail enviada!")
      };
    } else if (tipo === 'sms') {
      notificacao = {
        enviar: () => alert("Notificação por SMS enviada!")
      };
    } else {
      alert("Selecione um tipo de notificação.");
      return;
    }

    notificacao.enviar();
  });
});
