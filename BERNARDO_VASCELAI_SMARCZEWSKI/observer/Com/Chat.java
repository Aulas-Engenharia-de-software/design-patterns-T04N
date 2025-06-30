package BERNARDO_VASCELAI_SMARCZEWSKI.observer.Com;

import java.util.ArrayList;
import java.util.List;

public class Chat {
    private List<Observer> usuarios = new ArrayList<>();

    public void adicionarUsuario(Observer o) {
        usuarios.add(o);
    }

    public void removerUsuario(Observer o) {
        usuarios.remove(o);
    }

    public void enviarMensagem(String mensagem) {
        for (Observer usuario : usuarios) {
            usuario.receberMensagem(mensagem);
        }
    }
}
