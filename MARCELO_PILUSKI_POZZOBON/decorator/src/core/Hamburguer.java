package core;

import food.Food;

public class Hamburguer implements Food {

    @Override
    public String getDescription() {
        return "Hambúrguer simples";
    }

    @Override
    public double getPrice() {
        return 10.00;
    }
}
