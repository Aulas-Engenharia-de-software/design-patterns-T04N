public class Trabalho4_SemFactory {
    public static void main(String[] args) {
        Produto produto = new ProdutoA();
        produto.mostrar();
    }
}

class ProdutoA implements Produto {
    @Override
    public void mostrar() {
        System.out.println("Criado: Produto A");
    }
}

interface Produto {
    void mostrar();
}