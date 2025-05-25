const EmailNotification = require("./EmailNotification");
const SmsNotification = require("./SmsNotification");
const PushNotification = require("./PushNotification");
const Whatsnotification = require("./WhatsAppNotification");

class NotificationFactory {
  createNotification() {
    throw new Error("Método 'createNotification' precisa ser implementado.");
  }

  sendNotification(recipient, message) {
    const notifier = this.createNotification();
    notifier.send(recipient, message);
  }
}

class EmailFactory extends NotificationFactory {
  createNotification() {
    return new EmailNotification();
  }
}

class SmsFactory extends NotificationFactory {
  createNotification() {
    return new SmsNotification();
  }
}

class PushFactory extends NotificationFactory {
  createNotification() {
    return new PushNotification();
  }
}

class ZapFactory extends NotificationFactory {
  createNotification() {
    return new Whatsnotification();
  }
}

module.exports = {
  EmailFactory,
  SmsFactory,
  PushFactory,
  ZapFactory,
};
