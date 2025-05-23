export abstract class BeverageNaive {
  abstract price(): number;
  abstract description(): string;
}

export class EspressoNaive extends BeverageNaive {
  price() {
    return 6;
  }

  description() {
    return "Espresso";
  }
}

export class EspressoWithMilkNaive extends EspressoNaive {
  price() {
    return 8;
  }

  description() {
    return super.description().concat(" with Milk");
  }
}

export class EspressoWithMilkAndChocolateNaive extends EspressoNaive {
  price() {
    return 10;
  }

  description() {
    return super.description().concat(" with Milk and Chocolate");
  }
}
