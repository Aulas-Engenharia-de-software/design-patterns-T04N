using System;

namespace WithoutStrategyPattern
{
    public class Order
    {
        public enum ShippingMethod
        {
            Standard,
            Express,
            International
        }

        public double TotalCost { get; set; }
        public ShippingMethod Method { get; set; }

        #region Calcular Frete
        public double CalculateShipping()
        {
            switch (Method)
            {
                case ShippingMethod.Standard:
                    return TotalCost * 0.05;
                case ShippingMethod.Express:
                    return TotalCost * 0.1 + 15;
                case ShippingMethod.International:
                    return TotalCost * 0.25 + 50;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
        #endregion
    }

    class Program
    {
        static void Main(string[] args)
        {
            #region Menu
            Console.WriteLine("DEMONSTRAÇÃO SEM STRATEGY PATTERN");
            Console.WriteLine("----------------------------------");

            while (true)
            {
                try
                {
                    Console.Write("\nDigite o valor total do pedido (ou 'sair' para encerrar): ");
                    string input = Console.ReadLine();

                    if (input.ToLower() == "sair")
                        break;

                    if (!double.TryParse(input, out double total))
                    {
                        Console.WriteLine("Valor inválido. Tente novamente.");
                        continue;
                    }

                    Console.WriteLine("\nEscolha o método de envio:");
                    Console.WriteLine("1 - Standard (5% do total)");
                    Console.WriteLine("2 - Express (10% do total + R$15)");
                    Console.WriteLine("3 - International (25% do total + R$50)");
                    Console.Write("Opção: ");

                    if (!int.TryParse(Console.ReadLine(), out int option) || option < 1 || option > 3)
                    {
                        Console.WriteLine("Opção inválida. Tente novamente.");
                        continue;
                    }

                    #region Novo Pedido
                    var order = new Order
                    {
                        TotalCost = total,
                        Method = (Order.ShippingMethod)(option - 1)
                    };
                    #endregion

                    #region Display Valor Frete
                    double shippingCost = order.CalculateShipping();

                    Console.WriteLine($"\nRESULTADO:");
                    Console.WriteLine($"Valor do pedido: R${order.TotalCost:F2}");
                    Console.WriteLine($"Método de envio: {order.Method}");
                    Console.WriteLine($"Custo de envio: R${shippingCost:F2}");
                    Console.WriteLine($"Total a pagar: R${order.TotalCost + shippingCost:F2}");
                    #endregion
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Ocorreu um erro: {ex.Message}");
                }
            }

            Console.WriteLine("\nDemonstração encerrada. Pressione qualquer tecla para sair...");
            Console.ReadKey();
            #endregion
        }
    }
}