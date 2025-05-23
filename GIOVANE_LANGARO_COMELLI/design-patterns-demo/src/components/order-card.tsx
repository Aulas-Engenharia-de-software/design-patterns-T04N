import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  heading: string;
  description: string;
  subtotal: number;
  tax: number;
}

export const OrderCard = ({
  heading,
  description,
  subtotal,
  tax,
}: Readonly<Props>) => {
  const total = subtotal * (1 + tax);
  const formattedTax = `Tax (${(tax * 100).toFixed(0)}%): ${(subtotal * tax).toFixed(2)}`;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <p>Subtotal: {subtotal.toFixed(2)}</p>
        <p>{formattedTax}</p>
      </CardContent>
      <CardFooter className="flex w-full justify-between items-center">
        <p className="font-bold">Total: ${total.toFixed(2)}</p>
        <Button>Checkout</Button>
      </CardFooter>
    </Card>
  );
};
