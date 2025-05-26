package adapter.adapter;

import adapter.adaptee.LogExterno;
import adapter.target.Logger;

public class AdaptadorLogExterno implements Logger {
    private LogExterno logExterno;

    public AdaptadorLogExterno(LogExterno logExterno) {
        this.logExterno = logExterno;
    }

    @Override
    public void logInfo(String mensagem) {
        logExterno.registrar("info", mensagem);
    }

    @Override
    public void logErro(String mensagem, Exception e) {
        logExterno.registrarExcecao(mensagem, e);
    }
}