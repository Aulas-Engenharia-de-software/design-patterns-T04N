const EmailNotification = require("./EmailNotification");
const SmsNotification = require("./SmsNotification");
const PushNotification = require("./PushNotification");

function notifyUser(type, recipient, message) {
  let notifier;

  if (type === "email") {
    notifier = new EmailNotification();
  } else if (type === "sms") {
    notifier = new SmsNotification();
  } else if (type === "push") {
    notifier = new PushNotification();
  } else {
    console.log("Tipo de notificação inválido!");
    return;
  }

  notifier.send(recipient, message);
}

// ✅ Usando:
notifyUser("email", "user@example.com", "Bem-vindo ao nosso sistema!");
notifyUser("sms", "11999998888", "Seu código é 123456");
notifyUser("push", "user123", "Você tem uma nova mensagem!");
