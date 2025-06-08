// Decorador de Leite
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getDescription() {
        return this.coffee.getDescription() + ', Leite';
    }

    getCost() {
        return this.coffee.getCost() + 2.00;
    }
}