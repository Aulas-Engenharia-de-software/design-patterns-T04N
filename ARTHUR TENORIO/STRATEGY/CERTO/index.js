const EmailNotification = require("./EmailNotification");
const SmsNotification = require("./SmsNotification");
const PushNotification = require("./PushNotification");
const NotificationContext = require("./NotificationContext");

const emailContext = new NotificationContext(new EmailNotification());
emailContext.send("user@example.com", "Bem-vindo ao sistema!");

console.log("-------------------------------------------------------------");

emailContext.setStrategy(new SmsNotification());
emailContext.send("11999998888", "Seu código é 123456");

console.log("-------------------------------------------------------------");

emailContext.setStrategy(new PushNotification());
emailContext.send("user123", "Você tem uma nova mensagem!");
