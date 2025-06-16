document.addEventListener('DOMContentLoaded', () => {
  const btnNotificar = document.getElementById('btnNotificar');

  btnNotificar.addEventListener('click', () => {
    const mensagem = document.getElementById('mensagemEmergencia').value;
    if (mensagem === '') {
      alert("Informe a mensagem de emergência!");
      return;
    }

    document.getElementById('setor1').innerText = `📢 Setor 1: ${mensagem}`;
    document.getElementById('setor2').innerText = `📢 Setor 2: ${mensagem}`;
  });
});
