import java.util.List;
import java.util.ArrayList;


public class ChatRoom {
private List<Usuario> usuarios = new ArrayList<>();

public void entrar(Usuario usuario) {
    usuarios.add(usuario);
}

public void sair(Usuario usuario) {
    usuarios.remove(usuario);
}

public void enviarMensagem(String mensagem, Usuario remetente) {
    for (Usuario usuario : usuarios) {
        if (!usuario.equals(remetente)) {
            usuario.atualizar(remetente.getNome() + ": " + mensagem);
        }
    }
}


}