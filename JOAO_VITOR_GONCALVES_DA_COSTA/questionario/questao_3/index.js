const Publisher = require('./classes/Subject');
const SubscriberObserver = require('./classes/SubscriberObserver');
const EmailSubscriber = require('./classes/EmailObserver');

const editora = new Publisher();

const joao = new EmailSubscriber("João", "joao@email.com");
const maria = new SubscriberObserver("Maria", "99999-0000");

editora.addSubscriber(joao);
editora.addSubscriber(maria);

editora.notifySubscribers("Edição 42 - Junho");

editora.removeSubscriber(maria);

editora.notifySubscribers("Edição 43 - Julho");