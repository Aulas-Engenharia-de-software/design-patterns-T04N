using System;
using System.Collections.Generic;

namespace WithStatePattern
{
    #region Implementacao State Pattern

    #region Set State
    public interface IOrderState
    {
        void Approve(Order order);
        void Cancel(Order order);
        void Ship(Order order);
        void DisplayStatus();
        bool CanDelete();
    }
    #endregion

    #region Status Pendente 
    public class PendingState : IOrderState
    {
        public void Approve(Order order)
        {
            Console.WriteLine("Pedido aprovado!");
            order.SetState(new ApprovedState());
        }

        public void Cancel(Order order)
        {
            Console.WriteLine("Pedido cancelado!");
            order.SetState(new CancelledState());
        }

        public void Ship(Order order)
        {
            Console.WriteLine("Não é possível enviar um pedido pendente!");
        }

        public void DisplayStatus()
        {
            Console.WriteLine("Status: Pendente");
        }

        public bool CanDelete() => true;
    }
    #endregion

    #region Status Aprovado
    public class ApprovedState : IOrderState
    {
        public void Approve(Order order)
        {
            Console.WriteLine("O pedido já está aprovado!");
        }

        public void Cancel(Order order)
        {
            Console.WriteLine("Pedido cancelado!");
            order.SetState(new CancelledState());
        }

        public void Ship(Order order)
        {
            Console.WriteLine("Pedido enviado!");
            order.SetState(new ShippedState());
        }

        public void DisplayStatus()
        {
            Console.WriteLine("Status: Aprovado");
        }

        public bool CanDelete() => true;
    }
    #endregion

    #region Status Cancelado
    public class CancelledState : IOrderState
    {
        public void Approve(Order order)
        {
            Console.WriteLine("Não é possível aprovar um pedido cancelado!");
        }

        public void Cancel(Order order)
        {
            Console.WriteLine("O pedido já está cancelado!");
        }

        public void Ship(Order order)
        {
            Console.WriteLine("Não é possível enviar um pedido cancelado!");
        }

        public void DisplayStatus()
        {
            Console.WriteLine("Status: Cancelado");
        }

        public bool CanDelete() => true;
    }
    #endregion

    #region Status Enviado
    public class ShippedState : IOrderState
    {
        public void Approve(Order order)
        {
            Console.WriteLine("Não é possível aprovar um pedido já enviado!");
        }

        public void Cancel(Order order)
        {
            Console.WriteLine("Não é possível cancelar um pedido já enviado!");
        }

        public void Ship(Order order)
        {
            Console.WriteLine("O pedido já foi enviado!");
        }

        public void DisplayStatus()
        {
            Console.WriteLine("Status: Enviado");
        }

        public bool CanDelete() => false;
    }
    #endregion

    #endregion


    public class Order
    {
        private IOrderState _state;
        public int Id { get; }
        public double TotalCost { get; set; }

        public Order(int id, double totalCost)
        {
            Id = id;
            TotalCost = totalCost;
            _state = new PendingState();
        }

        #region Set State
        public void SetState(IOrderState state)
        {
            _state = state;
        }

        public void Approve() => _state.Approve(this);
        public void Cancel() => _state.Cancel(this);
        public void Ship() => _state.Ship(this);
        #endregion

        #region Display Status
        public void DisplayStatus()
        {
            Console.Write($"Pedido {Id}: Total = R${TotalCost:F2}, ");
            _state.DisplayStatus();
        }
        public bool CanDelete() => _state.CanDelete();
        #endregion
    }

    class Program
    {
        private static List<Order> orders = new List<Order>();
        private static int nextId = 1;

        static void Main(string[] args)
        {
            #region Menu
            Console.WriteLine("SISTEMA DE PEDIDOS COM STATE PATTERN");
            Console.WriteLine("-------------------------------------");

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

            var order = new Order(nextId++, total);
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

        #region Deletar Pedido
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

            if (!order.CanDelete())
            {
                Console.WriteLine("Não é possível excluir este pedido no estado atual!");
                return;
            }

            orders.Remove(order);
            Console.WriteLine("Pedido excluído com sucesso!");
        }
        #endregion
    }
}