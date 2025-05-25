const {
  EmailFactory,
  SmsFactory,
  PushFactory,
  ZapFactory,
} = require("./NotificationFactory");

function notifyUser(factory, recipient, message) {
  factory.sendNotification(recipient, message);
}
console.log("-----------------------------------------------------");

notifyUser(
  new EmailFactory(),
  "user@example.com",
  "Seja bem-vindo ao nosso sistema!"
);
console.log("-----------------------------------------------------");
notifyUser(
  new SmsFactory(),
  "11999998888",
  "Seu código de verificação é 123456"
);
console.log("-----------------------------------------------------");
notifyUser(
  new ZapFactory(),
  "Arthur o mais integligente ",
  "Mensagem enviada para o whatsapp"
);
console.log("-----------------------------------------------------");

notifyUser(new PushFactory(), "user123", "Você tem uma nova mensagem!");
