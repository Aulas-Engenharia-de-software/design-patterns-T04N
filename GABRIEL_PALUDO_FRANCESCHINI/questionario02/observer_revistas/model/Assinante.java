package questionario02.observer_revistas.model;

import questionario02.observer_revistas.interfaces.Observador;

public class Assinante implements Observador {

    private String nome;

    public Assinante(String nome) {
        this.nome = nome;
    }

    @Override
    public void receberNotificacao(String nomeRevista, int edicao) {
        System.out.println(nome + ", a nova edição da revista '" + nomeRevista + "' (Edição " + edicao + ") chegou!");
    }
    
}