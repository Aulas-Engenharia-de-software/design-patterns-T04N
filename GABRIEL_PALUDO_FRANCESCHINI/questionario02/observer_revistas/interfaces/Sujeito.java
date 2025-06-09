package questionario02.observer_revistas.interfaces;

public interface Sujeito {
    
    void adicionarObservador(Observador observador);
    void removerObservador(Observador observador);
    void notificarObservadores();

}