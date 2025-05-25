class NotificationStrategy {
  send(recipient, message) {
    throw new Error("O método 'send' precisa ser implementado.");
  }
}

module.exports = NotificationStrategy;
