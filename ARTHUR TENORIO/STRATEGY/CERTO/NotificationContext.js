class NotificationContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  send(recipient, message) {
    this.strategy.send(recipient, message);
  }
}

module.exports = NotificationContext;
