package cafeteria;

public abstract class ComplementoDecorator implements Cafe {
    protected Cafe cafe;

    public ComplementoDecorator(Cafe cafe) {
        this.cafe = cafe;
    }

    public String getDescricao() {
        return cafe.getDescricao();
    }

    public double getPreco() {
        return cafe.getPreco();
    }
}
