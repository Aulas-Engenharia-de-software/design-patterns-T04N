package observer;

public class Assinante implements Observer{
    private String nome;

    public Assinante(String nome) {
        this.nome = nome;
    }

    @Override
    public void update(String revista, int edicao) {
        System.out.println(nome + " recebeu notificação: Nova edição " + edicao + " da revista '" + revista + "' disponível!");
    }
}
