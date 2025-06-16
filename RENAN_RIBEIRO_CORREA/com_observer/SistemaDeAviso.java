import java.util.ArrayList;
import java.util.List;

public class SistemaDeAviso {
    private List<Observador> usuarios = new ArrayList<>();

    public void adicionarUsuario(Observador o) {
        usuarios.add(o);
    }

    public void avisarTodos(String mensagem) {
        for (Observador o : usuarios) {
            o.receberNotificacao(mensagem);
        }
    }
}
