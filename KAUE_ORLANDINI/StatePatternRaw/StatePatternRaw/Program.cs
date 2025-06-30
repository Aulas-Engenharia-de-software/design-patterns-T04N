using System;
using System.Collections.Generic;

namespace WithoutStatePattern
{
    public class Order
    {
        public enum OrderStatus
        {
            Pending,
            Approved,
            Cancelled,
            Shipped
        }

        public int Id { get; set; }
        public double TotalCost { get; set; }
        public OrderStatus Status { get; set; }

        #region Status Pedido
        public void Approve()
        {
            if (Status == OrderStatus.Pending)
            {
                Status = OrderStatus.Approved;
                Console.WriteLine("Pedido aprovado!");
            }
            else
            {
                Console.WriteLine("Não é possível aprovar o pedido no estado atual.");
            }
        }

        public void Cancel()
        {
            if (Status == OrderStatus.Pending || Status == OrderStatus.Approved)
            {
                Status = OrderStatus.Cancelled;
                Console.WriteLine("Pedido cancelado!");
            }
            else
            {
                Console.WriteLine("Não é possível cancelar o pedido no estado atual.");
            }
        }

        public void Ship()
        {
            if (Status == OrderStatus.Approved)
            {
                Status = OrderStatus.Shipped;
                Console.WriteLine("Pedido enviado!");
            }
            else
            {
                Console.WriteLine("Não é possível enviar o pedido no estado atual.");
            }
        }
        #endregion

        #region Display Status
        public void DisplayStatus()
        {
            Console.WriteLine($"Pedido {Id}: Status = {Status}, Total = R${TotalCost:F2}");
        }
        #endregion
    }

    class Program
    {
        private static List<Order> orders = new List<Order>();
        private static int nextId = 1;

        static void Main(string[] args)
        {
            #region Menu
            Console.WriteLine("SISTEMA DE PEDIDOS SEM STATE PATTERN");
            Console.WriteLine("------------------------------------");

            while (true)
            {
                Console.WriteLine("\nMENU PRINCIPAL:");
                Console.WriteLine("1 - Criar novo pedido");
                Console.WriteLine("2 - Listar pedidos");
                Console.WriteLine("3 - Gerenciar pedido");
                Console.WriteLine("4 - Excluir pedido");
                Console.WriteLine("5 - Sair");
                Console.Write("Opção: ");

                string input = Console.ReadLine();

                if (input == "5") break;

                try
                {
                    switch (input)
                    {
                        case "1":
                            CreateOrder();
                            break;
                        case "2":
                            ListOrders();
                            break;
                        case "3":
                            ManageOrder();
                            break;
                        case "4":
                            DeleteOrder();
                            break;
                        default:
                            Console.WriteLine("Opção inválida!");
                            break;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Erro: {ex.Message}");
                }
            }

            Console.WriteLine("\nSistema encerrado. Pressione qualquer tecla para sair...");
            Console.ReadKey();
            #endregion
        }

        #region Criar Pedido
        static void CreateOrder()
        {
            Console.Write("\nDigite o valor total do pedido: ");
            if (!double.TryParse(Console.ReadLine(), out double total) || total <= 0)
            {
                Console.WriteLine("Valor inválido!");
                return;
            }

            var order = new Order
            {
                Id = nextId++,
                TotalCost = total,
                Status = Order.OrderStatus.Pending
            };

            orders.Add(order);
            Console.WriteLine($"Pedido {order.Id} criado com sucesso!");
        }
        #endregion

        #region Listar Pedidos
        static void ListOrders()
        {
            Console.WriteLine("\nLISTA DE PEDIDOS:");
            if (orders.Count == 0)
            {
                Console.WriteLine("Nenhum pedido cadastrado.");
                return;
            }

            foreach (var order in orders)
            {
                order.DisplayStatus();
            }
        }
        #endregion

        #region Gerenciar Status Pedido
        static void ManageOrder()
        {
            Console.Write("\nDigite o ID do pedido: ");
            if (!int.TryParse(Console.ReadLine(), out int id))
            {
                Console.WriteLine("ID inválido!");
                return;
            }

            var order = orders.Find(o => o.Id == id);
            if (order == null)
            {
                Console.WriteLine("Pedido não encontrado!");
                return;
            }

            while (true)
            {
                Console.WriteLine($"\nGERENCIANDO PEDIDO {order.Id}:");
                order.DisplayStatus();
                Console.WriteLine("1 - Aprovar");
                Console.WriteLine("2 - Cancelar");
                Console.WriteLine("3 - Enviar");
                Console.WriteLine("4 - Voltar");
                Console.Write("Opção: ");

                string option = Console.ReadLine();
                if (option == "4") break;

                switch (option)
                {
                    case "1":
                        order.Approve();
                        break;
                    case "2":
                        order.Cancel();
                        break;
                    case "3":
                        order.Ship();
                        break;
                    default:
                        Console.WriteLine("Opção inválida!");
                        break;
                }
            }
        }
        #endregion

        #region Deletar Pedidos
        static void DeleteOrder()
        {
            Console.Write("\nDigite o ID do pedido a ser excluído: ");
            if (!int.TryParse(Console.ReadLine(), out int id))
            {
                Console.WriteLine("ID inválido!");
                return;
            }

            var order = orders.Find(o => o.Id == id);
            if (order == null)
            {
                Console.WriteLine("Pedido não encontrado!");
                return;
            }

            if (order.Status == Order.OrderStatus.Shipped)
            {
                Console.WriteLine("Não é possível excluir um pedido já enviado!");
                return;
            }

            orders.Remove(order);
            Console.WriteLine("Pedido excluído com sucesso!");
        }
        #endregion
    }
}