package questionario02.observer_revistas.interfaces;

public interface Observador {

    void receberNotificacao(String nomeRevista, int edicao);
    
}