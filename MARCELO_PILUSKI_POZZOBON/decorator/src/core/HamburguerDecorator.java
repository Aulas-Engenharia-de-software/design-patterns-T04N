package core;

import food.Food;

public abstract class HamburguerDecorator implements Food {
    protected Food food;

    public HamburguerDecorator(Food food) {
        this.food = food;
    }

    @Override
    public String getDescription() {
        return food.getDescription();
    }

    @Override
    public double getPrice() {
        return food.getPrice();
    }
}
