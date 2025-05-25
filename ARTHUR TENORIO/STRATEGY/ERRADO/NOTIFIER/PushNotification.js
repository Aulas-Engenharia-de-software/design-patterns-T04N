const Notification = require("./Notification");

class PushNotification extends Notification {
  send(recipient, message) {
    console.log(`[Push] Enviando notificação push para ${recipient}`);
    console.log(`Conteúdo: ${message}`);
  }
}

module.exports = PushNotification;
