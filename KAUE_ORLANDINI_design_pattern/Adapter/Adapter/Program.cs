using System;
using System.Collections.Generic;

// Interface original legada (não pode ser modificada)
public interface IGraphic
{
    void Draw();
}

// Implementação concreta legada
public class LegacyRectangle : IGraphic
{
    public void Draw()
    {
        Console.WriteLine("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓");
        Console.WriteLine("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓");
        Console.WriteLine("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓");
    }
}

// Nova interface desejada
public interface IModernRenderer
{
    void Render();
}

// Adapter que converte Draw() para Render()
public class GraphicAdapter : IModernRenderer
{
    private readonly IGraphic _legacyGraphic;

    public GraphicAdapter(IGraphic legacyGraphic)
    {
        _legacyGraphic = legacyGraphic;
    }

    public void Render()
    {
        Console.WriteLine("\n[ADAPTER] Convertendo Draw() para Render()...");
        _legacyGraphic.Draw(); // Chamando a implementação original
        Console.WriteLine("Conversão concluída com sucesso!\n");
    }
}

// Interface do console
class Program
{
    static void Main()
    {
        // Criando instância legada
        IGraphic legacyRectangle = new LegacyRectangle();

        // Criando o adapter
        IModernRenderer modernRenderer = new GraphicAdapter(legacyRectangle);

        while (true)
        {
            Console.Clear();
            Console.WriteLine("=== DEMONSTRAÇÃO DO PADRÃO ADAPTER ===");
            Console.WriteLine("1. Usar Render() (via adapter)");
            Console.WriteLine("2. Usar Draw() diretamente (legado)");
            Console.WriteLine("3. Sair");
            Console.Write("\nEscolha uma opção: ");

            if (!int.TryParse(Console.ReadLine(), out int choice) || choice == 3)
                break;

            switch (choice)
            {
                case 1:
                    Console.WriteLine("\nChamando a nova interface:");
                    modernRenderer.Render();
                    break;

                case 2:
                    Console.WriteLine("\nChamando a interface legada diretamente:");
                    legacyRectangle.Draw();
                    Console.WriteLine();
                    break;

                default:
                    Console.WriteLine("\nOpção inválida!");
                    break;
            }

            Console.WriteLine("Pressione qualquer tecla para continuar...");
            Console.ReadKey();
        }
    }
}