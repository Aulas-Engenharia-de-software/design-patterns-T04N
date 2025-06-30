package cafeteria;

public class Chocolate extends ComplementoDecorator {
    public Chocolate(Cafe cafe) {
        super(cafe);
    }

    public String getDescricao() {
        return super.getDescricao() + " + Chocolate";
    }

    public double getPreco() {
        return super.getPreco() + 2.0;
    }
}
