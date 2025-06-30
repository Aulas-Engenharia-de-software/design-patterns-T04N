using System;

namespace WithStrategyPattern
{
    #region Implementacao Strategy Pattern
    public interface IShippingStrategy
    {
        double Calculate(double orderTotal);
        string GetMethodName();
    }

    #region Frete Padrao
    public class StandardShipping : IShippingStrategy
    {
        public double Calculate(double orderTotal) => orderTotal * 0.05;
        public string GetMethodName() => "Standard (5% do total)";
    }
    #endregion

    #region Frete Expresso 
    public class ExpressShipping : IShippingStrategy
    {
        public double Calculate(double orderTotal) => orderTotal * 0.1 + 15;
        public string GetMethodName() => "Express (10% + R$15)";
    }
    #endregion

    #region Frete Internacional
    public class InternationalShipping : IShippingStrategy
    {
        public double Calculate(double orderTotal) => orderTotal * 0.25 + 50;
        public string GetMethodName() => "International (25% + R$50)";
    }
    #endregion

    #endregion

    public class Order
    {
        #region Setter/Getter
        private IShippingStrategy _shippingStrategy;
        public double TotalCost { get; set; }

        public Order(IShippingStrategy shippingStrategy)
        {
            _shippingStrategy = shippingStrategy;
        }

        public void SetShippingStrategy(IShippingStrategy shippingStrategy)
        {
            _shippingStrategy = shippingStrategy;
        }

        public string GetShippingMethodName()
        {
            return _shippingStrategy.GetMethodName();
        }
        #endregion

        #region Calcular Frete
        public double CalculateShipping()
        {
            return _shippingStrategy.Calculate(TotalCost);
        }
        #endregion
    }

    class Program
    {
        static void Main(string[] args)
        {
            #region Menu
            Console.WriteLine("DEMONSTRAÇÃO COM STRATEGY PATTERN");
            Console.WriteLine("---------------------------------");

            var strategies = new IShippingStrategy[]
            {
                new StandardShipping(),
                new ExpressShipping(),
                new InternationalShipping()
            };

            var order = new Order(strategies[0]);

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

                    order.TotalCost = total;

                    Console.WriteLine("\nEscolha o método de envio:");
                    for (int i = 0; i < strategies.Length; i++)
                    {
                        Console.WriteLine($"{i + 1} - {strategies[i].GetMethodName()}");
                    }
                    Console.Write("Opção: ");

                    if (!int.TryParse(Console.ReadLine(), out int option) || option < 1 || option > strategies.Length)
                    {
                        Console.WriteLine("Opção inválida. Tente novamente.");
                        continue;
                    }

                    order.SetShippingStrategy(strategies[option - 1]);
                    double shippingCost = order.CalculateShipping();

                    Console.WriteLine($"\nRESULTADO:");
                    Console.WriteLine($"Valor do pedido: R${order.TotalCost:F2}");
                    Console.WriteLine($"Método de envio: {order.GetShippingMethodName()}");
                    Console.WriteLine($"Custo de envio: R${shippingCost:F2}");
                    Console.WriteLine($"Total a pagar: R${order.TotalCost + shippingCost:F2}");
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