class SubscriberSMS {
  name;
  phone;
  
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  update(edition) {
    console.log(`[SMS] ${this.name} (${this.phone}) recebeu: ${edition}`);
  }
}

module.exports = SubscriberSMS;