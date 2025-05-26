package decorators;

import core.HamburguerDecorator;
import food.Food;

public class NoOnionDecorator extends HamburguerDecorator {

    public NoOnionDecorator(Food food) {
        super(food);
    }

    @Override
    public String getDescription() {
        return food.getDescription() + ", sem cebola";
    }
}
