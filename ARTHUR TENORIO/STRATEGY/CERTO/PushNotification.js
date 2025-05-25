const NotificationStrategy = require("./NotificationStrategy");

class PushNotification extends NotificationStrategy {
  send(recipient, message) {
    console.log(`[Push] Enviando notificação push para ${recipient}`);
    console.log(`Conteúdo: ${message}`);
  }
}

module.exports = PushNotification;
