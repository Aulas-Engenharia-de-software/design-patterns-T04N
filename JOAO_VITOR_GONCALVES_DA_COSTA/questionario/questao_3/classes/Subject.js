class Publisher {
  subscribers;
  
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber) {
    this.subscribers = this.subscribers.filter(obs => obs !== subscriber);
  }

  notifySubscribers(edition) {
    console.log(`\n[Editora] Nova edição lançada: ${edition}`);
    this.subscribers.forEach(assinante => assinante.update(edition));
  }
}

module.exports = Publisher;