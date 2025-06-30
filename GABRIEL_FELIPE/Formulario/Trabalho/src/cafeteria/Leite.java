package cafeteria;

public class Leite extends ComplementoDecorator {
    public Leite(Cafe cafe) {
        super(cafe);
    }

    public String getDescricao() {
        return super.getDescricao() + " + Leite";
    }

    public double getPreco() {
        return super.getPreco() + 1.5;
    }
}

