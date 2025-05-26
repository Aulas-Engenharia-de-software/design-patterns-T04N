package decorators;

import core.HamburguerDecorator;
import food.Food;

public class MoreCheeseDecorator extends HamburguerDecorator {

    public MoreCheeseDecorator(Food food) {
        super(food);
    }

    @Override
    public String getDescription() {
        return food.getDescription() + ", queijo extra";
    }

    @Override
    public double getPrice() {
        return food.getPrice() + 2.50;
    }
}
