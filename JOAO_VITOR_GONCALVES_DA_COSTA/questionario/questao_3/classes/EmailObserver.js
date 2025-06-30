class SubscriberEmail {
  name;
  email;
  
  constructor(name, email) {
    this.nome = name;
    this.email = email;
  }

  update(edition) {
    console.log(`[Email] ${this.name} (${this.email}) recebeu: ${edition}`);
  }
}

module.exports = SubscriberEmail;