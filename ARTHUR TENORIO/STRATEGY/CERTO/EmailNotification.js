const NotificationStrategy = require("./NotificationStrategy");

class EmailNotification extends NotificationStrategy {
  send(recipient, message) {
    console.log(`[Email] Enviando email para ${recipient}`);
    console.log(`Conteúdo: ${message}`);
    console.log("Email enviado com sucesso!");
  }
}

module.exports = EmailNotification;
