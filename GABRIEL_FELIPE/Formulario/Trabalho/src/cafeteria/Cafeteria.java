package cafeteria;

public class Cafeteria {
    public static void main(String[] args) {
        Cafe cafe1 = new Leite(new CafeExpresso());
        System.out.println(cafe1.getDescricao() + " - R$" + cafe1.getPreco());

        Cafe cafe2 = new Chocolate(new Leite(new CafeFiltrado()));
        System.out.println(cafe2.getDescricao() + " - R$" + cafe2.getPreco());
    }
}

