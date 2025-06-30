package decorators;

import core.HamburguerDecorator;
import food.Food;

public class FriesDecorator extends HamburguerDecorator {

    public FriesDecorator(Food food) {
        super(food);
    }

    @Override
    public String getDescription() {
        return food.getDescription() + ", batata frita";
    }

    @Override
    public double getPrice() {
        return food.getPrice() + 5.00;
    }
}

