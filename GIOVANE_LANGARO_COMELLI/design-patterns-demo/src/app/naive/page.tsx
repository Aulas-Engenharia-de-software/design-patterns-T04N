import { OrderCard } from "@/components/order-card";
import { EspressoWithMilkAndChocolateNaive } from "@/core/naive/beverage-naive";
import { AppConfigNaive } from "@/core/naive/config-naive";

export default function Page() {
  const drink = new EspressoWithMilkAndChocolateNaive();
  const cfg = new AppConfigNaive(); // todo import eh uma nova instancia

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <OrderCard
        heading="Naïve Version"
        description={drink.description()}
        subtotal={drink.price()}
        tax={cfg.tax}
      />
    </main>
  );
}
