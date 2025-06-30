package observer;

public interface Subject {
    void registrarObserver(Observer o);
    void removerObserver(Observer o);
    void notificarObservers();
}
