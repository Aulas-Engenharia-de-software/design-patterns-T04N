// Interface Notification
class Notification {
  send(message) {
    throw new Error("Método 'send' deve ser implementado.");
  }
}

// Implementações
class EmailNotification extends Notification {
  send(message) {
    showNotification(message, 'email');
  }
}

class SMSNotification extends Notification {
  send(message) {
    showNotification(message, 'sms');
  }
}

// Fábrica base
class NotificationFactory {
  createNotification() {
    throw new Error("Método 'createNotification' deve ser implementado.");
  }
}

// Fábrica concreta para Email
class EmailNotificationFactory extends NotificationFactory {
  createNotification() {
    return new EmailNotification();
  }
}

// Fábrica concreta para SMS
class SMSNotificationFactory extends NotificationFactory {
  createNotification() {
    return new SMSNotification();
  }
}

// Função que lida com a escolha da notificação
function handleNotification(type) {
  let factory;

  if (type === 'email') {
    factory = new EmailNotificationFactory();
  } else if (type === 'sms') {
    factory = new SMSNotificationFactory();
  }

  const notification = factory.createNotification();
  notification.send(`Notificação via ${type.toUpperCase()} enviada com sucesso!`);
}

// Função utilitária para exibir a notificação na tela
function showNotification(message, type) {
  const notificationDiv = document.getElementById('notification');
  notificationDiv.className = `notification ${type}-notification`;
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
}
