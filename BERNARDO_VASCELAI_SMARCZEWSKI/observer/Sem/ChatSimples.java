package BERNARDO_VASCELAI_SMARCZEWSKI.observer.Sem;

import java.util.ArrayList;

public class ChatSimples {
    public static void main(String[] args) {
        ArrayList<String> usuarios = new ArrayList<>();
        usuarios.add("João");
        usuarios.add("Maria");
        usuarios.add("Jorge");

        String mensagem = "Olá, mundo!";
        for (String usuario : usuarios) {
            System.out.println("Enviando para " + usuario + ": " + mensagem);
        }
    }
}