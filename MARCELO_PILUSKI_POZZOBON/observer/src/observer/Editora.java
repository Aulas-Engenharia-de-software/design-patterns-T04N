package observer;

import java.util.ArrayList;
import java.util.List;

public class Editora implements Subject{
    private List<Observer> observers;
    private String nomeRevista;
    private int edicaoAtual;

    public Editora(String nomeRevista) {
        this.nomeRevista = nomeRevista;
        this.observers = new ArrayList<>();
    }

    @Override
    public void registrarObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void removerObserver(Observer o) {
        observers.remove(o);
    }

    @Override
    public void notificarObservers() {
        for (Observer o : observers) {
            o.update(nomeRevista, edicaoAtual);
        }
    }

    public void lancarNovaEdicao(int novaEdicao) {
        System.out.println("\n[Editora] Lançando nova edição " + novaEdicao + " da revista " + nomeRevista);
        this.edicaoAtual = novaEdicao;
        notificarObservers();
    }
}
