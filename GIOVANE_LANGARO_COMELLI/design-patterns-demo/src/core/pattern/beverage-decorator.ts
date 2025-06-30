export abstract class Beverage {
  abstract price(): number;
  abstract description(): string;
}

export class Espresso extends Beverage {
  price() {
    return 6;
  }
  description() {
    return "Espresso";
  }
}

export class Cappuccino extends Beverage {
  price() {
    return 8;
  }
  description() {
    return "Cappuccino";
  }
}

abstract class CondimentDecorator extends Beverage {
  constructor(protected drink: Beverage) {
    super();
  }
}

export class Chocolate extends CondimentDecorator {
  price() {
    return this.drink.price() + 2;
  }
  description() {
    return this.drink.description().concat(" with Chocolate");
  }
}

export class Milk extends CondimentDecorator {
  price() {
    return this.drink.price() + 1;
  }
  description() {
    return this.drink.description().concat(" with Milk");
  }
}
