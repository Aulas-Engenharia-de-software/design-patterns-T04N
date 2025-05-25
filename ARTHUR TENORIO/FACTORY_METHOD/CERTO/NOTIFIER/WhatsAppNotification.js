const Notification = require("./Notification");

class Whatsnotification extends Notification {
  send(recipient, message) {
    console.log(`mensagem enviada para o ${recipient}`);
    console.log(`conteudo ${message}`);
    console.log("mensagem enviada com sucesso");
  }
}

module.exports = Whatsnotification;
