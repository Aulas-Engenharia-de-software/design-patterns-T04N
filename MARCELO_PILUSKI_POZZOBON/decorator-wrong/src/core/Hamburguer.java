package core;

public class Hamburguer implements Food {

    private boolean hasCheese = false;
    private boolean hasFries = false;
    private boolean hasOnion = true;

    @Override
    public String getDescription() {
        String description = "Hambúrguer simples";
        if (hasCheese) {
            description += ", queijo extra";
        }
        if (hasFries) {
            description += ", batata frita";
        }
        if (!hasOnion) {
            description += ", sem cebola";
        }
        return description;
    }

    @Override
    public double getPrice() {
        double price = 10.00;
        if (hasCheese) {
            price += 2.50;
        }
        if (hasFries) {
            price += 5.00;
        }
        return price;
    }

    public void addCheese() {
        this.hasCheese = true;
    }

    public void addFries() {
        this.hasFries = true;
    }

    public void removeOnion() {
        this.hasOnion = false;
    }
}

