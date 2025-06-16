import { NotificacaoEmail } from "./NotificacaoEmail.js";
import { NotificacaoSMS } from "./NotificacaoSMS.js";

export class NotificacaoFactory {
  static criar(tipo) {
    if (tipo === 'email') {
      return new NotificacaoEmail();
    } else if (tipo === 'sms') {
      return new NotificacaoSMS();
    } else {
      throw new Error("Tipo de notificação inválido.");
    }
  }
}
