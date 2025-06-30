package questionario02.observer_revistas.model;

import java.util.ArrayList;
import java.util.List;

import questionario02.observer_revistas.interfaces.*;

public class Revista implements Sujeito {
    private List<Observador> observadores = new ArrayList<>();
    private String nome;
    private int edicaoAtual;

    public Revista(String nome) {
        this.nome = nome;
    }

    public void lancarNovaEdicao() {
        this.edicaoAtual++;
        System.out.println("\nLançando nova edição da " + nome + "...");
        notificarObservadores();
    }

    @Override
    public void adicionarObservador(Observador observador) {
        observadores.add(observador);
        System.out.println("Novo observador (assinante) adicionado à revista " + nome + ".");
    }

    @Override
    public void removerObservador(Observador observador) {
        observadores.remove(observador);
        System.out.println("Observador (assinante) removido da revista " + nome + ".");
    }

    @Override
    public void notificarObservadores() {
        for (Observador obs : observadores) {
            obs.receberNotificacao(this.nome, this.edicaoAtual);
        }
    }
}