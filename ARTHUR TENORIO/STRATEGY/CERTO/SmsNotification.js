const NotificationStrategy = require("./NotificationStrategy");

class SmsNotification extends NotificationStrategy {
  send(recipient, message) {
    if (recipient.length !== 11) {
      console.log("Número inválido para SMS!");
      return;
    }
    console.log(`[SMS] Enviando SMS para ${recipient}`);
    console.log(`Conteúdo: ${message}`);
  }
}

module.exports = SmsNotification;
