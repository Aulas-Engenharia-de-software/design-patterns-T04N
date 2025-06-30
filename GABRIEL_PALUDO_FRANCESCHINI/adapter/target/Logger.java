package adapter.target;


public interface Logger {

    void logInfo(String mensagem);

    void logErro(String mensagem, Exception e);
}