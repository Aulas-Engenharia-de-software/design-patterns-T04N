public class Trabalho3_MainFactory {
    public static void main(String[] args) {
        Fabrica fabrica = new FabricaA();  // Pode trocar por FabricaB
        Produto produto = fabrica.criarProduto();
        produto.mostrar();
    }
}