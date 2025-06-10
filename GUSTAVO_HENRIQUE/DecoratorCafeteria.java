// Interface base do café
interface Cafe {
    String getDescricao();
    double getCusto();
}

// Tipos base de café
class CafeSimples implements Cafe {
    public String getDescricao() {
        return "Café Simples";
    }

    public double getCusto() {
        return 5.0;
    }
}

class CafeExpresso implements Cafe {
    public String getDescricao() {
        return "Café Expresso";
    }

    public double getCusto() {
        return 7.0;
    }
}

// Classe abstrata Decorator
abstract class CafeDecorator implements Cafe {
    protected Cafe cafe;

    public CafeDecorator(Cafe cafe) {
        this.cafe = cafe;
    }

    public String getDescricao() {
        return cafe.getDescricao();
    }

    public double getCusto() {
        return cafe.getCusto();
    }
}

// Complemento: Leite
class Leite extends CafeDecorator {
    public Leite(Cafe cafe) {
        super(cafe);
    }

    public String getDescricao() {
        return cafe.getDescricao() + ", com Leite";
    }

    public double getCusto() {
        return cafe.getCusto() + 2.0;
    }
}

// Complemento: Chocolate
class Chocolate extends CafeDecorator {
    public Chocolate(Cafe cafe) {
        super(cafe);
    }

    public String getDescricao() {
        return cafe.getDescricao() + ", com Chocolate";
    }

    public double getCusto() {
        return cafe.getCusto() + 3.0;
    }
}

// Classe principal
public class Main {
    public static void main(String[] args) {
        Cafe pedido1 = new CafeSimples();
        pedido1 = new Leite(pedido1);
        pedido1 = new Chocolate(pedido1);

        System.out.println("Pedido 1: " + pedido1.getDescricao());
        System.out.println("Custo: R$" + pedido1.getCusto());

        System.out.println();

        Cafe pedido2 = new CafeExpresso();
        pedido2 = new Chocolate(pedido2);

        System.out.println("Pedido 2: " + pedido2.getDescricao());
        System.out.println("Custo: R$" + pedido2.getCusto());
    }
}
