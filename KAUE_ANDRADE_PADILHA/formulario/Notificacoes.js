var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concretas
var NotificacaoEmail = /** @class */ (function () {
    function NotificacaoEmail() {
    }
    NotificacaoEmail.prototype.enviar = function (mensagem) {
        console.log("Enviando Email: " + mensagem);
    };
    return NotificacaoEmail;
}());
var NotificacaoSMS = /** @class */ (function () {
    function NotificacaoSMS() {
    }
    NotificacaoSMS.prototype.enviar = function (mensagem) {
        console.log("Enviando SMS: " + mensagem);
    };
    return NotificacaoSMS;
}());
// Factory
var NotificacaoFactory = /** @class */ (function () {
    function NotificacaoFactory() {
    }
    return NotificacaoFactory;
}());
var EmailFactory = /** @class */ (function (_super) {
    __extends(EmailFactory, _super);
    function EmailFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailFactory.prototype.criarNotificacao = function () {
        return new NotificacaoEmail();
    };
    return EmailFactory;
}(NotificacaoFactory));
var SMSFactory = /** @class */ (function (_super) {
    __extends(SMSFactory, _super);
    function SMSFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSFactory.prototype.criarNotificacao = function () {
        return new NotificacaoSMS();
    };
    return SMSFactory;
}(NotificacaoFactory));
// Uso
function enviarMensagem(factory, msg) {
    var notificacao = factory.criarNotificacao();
    notificacao.enviar(msg);
}
enviarMensagem(new EmailFactory(), "Olá por email!");
enviarMensagem(new SMSFactory(), "Olá por SMS!");
