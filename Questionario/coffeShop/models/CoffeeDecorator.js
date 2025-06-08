// Decorador Abstrato
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee;
    }

    getDescription() {
        return this.coffee.getDescription();
    }

    getCost() {
        return this.coffee.getCost();
    }
}