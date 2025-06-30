// Decorador de Chantilly
class WhipDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getDescription() {
        return this.coffee.getDescription() + ', Chantilly';
    }

    getCost() {
        return this.coffee.getCost() + 3.00;
    }
}