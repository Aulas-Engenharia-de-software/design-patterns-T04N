class Notification {
  send(recipient, message) {
    throw new Error("Método 'send' precisa ser implementado.");
  }
}

module.exports = Notification;
