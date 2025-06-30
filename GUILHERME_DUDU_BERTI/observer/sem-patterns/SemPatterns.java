public class SemPatterns {

    private String[] usuarios;

    public SemPatterns(String[] usuarios) {
        this.usuarios = usuarios;
    }

    public void enviarMensagem(String remetente, String mensagem) {
        for (String usuario : usuarios) {
            if (!usuario.equals(remetente)) {
                System.out.println(usuario + " recebeu: " + remetente + ": " + mensagem);
            }
        }
    }

    public static void main(String[] args) {
        String[] participantes = { "Ana", "Bruno", "Carlos" };
        SemPatterns chat = new SemPatterns(participantes);

        chat.enviarMensagem("Ana", "Oi pessoal, tudo bem?");
        chat.enviarMensagem("Bruno", "Oi Ana! Tudo ótimo.");
    }

}