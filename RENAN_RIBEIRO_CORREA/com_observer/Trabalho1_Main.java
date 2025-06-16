public class Trabalho1_Main {
    public static void main(String[] args) {
        SistemaDeAviso sistema = new SistemaDeAviso();

        sistema.adicionarUsuario(new Usuario("Renan"));
        sistema.adicionarUsuario(new Usuario("João"));

        sistema.avisarTodos("Promoção na loja!");
    }
}