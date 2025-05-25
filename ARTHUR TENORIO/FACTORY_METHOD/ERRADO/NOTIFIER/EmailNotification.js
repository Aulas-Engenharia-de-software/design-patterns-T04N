const Notification = require("./Notification");

class EmailNotification extends Notification {
  send(recipient, message) {
    console.log(`[Email] Enviando email para ${recipient}`);
    console.log(`Conteúdo: ${message}`);
    console.log("Email enviado com sucesso!");
  }
}

module.exports = EmailNotification;
