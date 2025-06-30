// Decorador de Chocolate
class ChocolateDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getDescription() {
        return this.coffee.getDescription() + ', Chocolate';
    }

    getCost() {
        return this.coffee.getCost() + 2.50;
    }
}