import { OrderCard } from "@/components/order-card";
import { Chocolate, Espresso, Milk } from "@/core/pattern/beverage-decorator";
import { AppConfig } from "@/core/pattern/config-singleton";

export default function Page() {
  // composicao dinamica com decorator
  const drink = new Chocolate(new Milk(new Espresso()));

  // singleton
  const cfg = AppConfig.instance;
  cfg.tax = 0.09; // essa config e global e refletida em todos os lugares

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <OrderCard
        heading="Design Pattern Version"
        description={drink.description()}
        subtotal={drink.price()}
        tax={cfg.tax}
      />
    </main>
  );
}
