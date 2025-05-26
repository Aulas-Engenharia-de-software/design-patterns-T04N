package adapter.adaptee;

public class LogExterno {

    public void registrar(String nivel, String texto) {
        System.out.println("LOG_EXTERNO [" + nivel.toUpperCase() + "] " + texto);
    }

    public void registrarExcecao(String texto, Throwable t) {
        System.err.println("LOG_EXTERNO [ERRO] " + texto + ", Causa: " + t.getMessage());
    }
}
