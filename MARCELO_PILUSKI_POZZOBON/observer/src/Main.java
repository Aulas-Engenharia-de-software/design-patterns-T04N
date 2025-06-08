import observer.Assinante;
import observer.Editora;

public class Main {
    public static void main(String[] args) {
        Editora editoraTech = new Editora("Tech News");

        Assinante joao = new Assinante("João");
        Assinante maria = new Assinante("Maria");
        Assinante carla = new Assinante("Carla");

        editoraTech.registrarObserver(joao);
        editoraTech.registrarObserver(maria);
        editoraTech.registrarObserver(carla);

        editoraTech.lancarNovaEdicao(1);

        editoraTech.removerObserver(carla);

        editoraTech.lancarNovaEdicao(2);
    }
}