using System;

// Interface Strategy
public interface IOperacaoMatematica
{
    string Nome { get; } // Nome da operação para exibição
    int Executar(int a, int b);
}

// Implementações concretas
public class Adicao : IOperacaoMatematica
{
    public string Nome => "Adição";
    public int Executar(int a, int b) => a + b;
}

public class Subtracao : IOperacaoMatematica
{
    public string Nome => "Subtração";
    public int Executar(int a, int b) => a - b;
}

public class Multiplicacao : IOperacaoMatematica
{
    public string Nome => "Multiplicação";
    public int Executar(int a, int b) => a * b;
}

public class Divisao : IOperacaoMatematica
{
    public string Nome => "Divisão";
    public int Executar(int a, int b) => b != 0 ? a / b : throw new DivideByZeroException();
}

// Contexto
public class Calculadora
{
    private IOperacaoMatematica _operacao;

    public void DefinirOperacao(IOperacaoMatematica operacao)
    {
        _operacao = operacao;
    }

    public int Calcular(int a, int b)
    {
        if (_operacao == null)
            throw new InvalidOperationException("Operação não definida.");

        return _operacao.Executar(a, b);
    }
}

// Interface do Console
class Program
{
    static void Main()
    {
        var calculadora = new Calculadora();
        var operacoes = new Dictionary<int, IOperacaoMatematica>
        {
            { 1, new Adicao() },
            { 2, new Subtracao() },
            { 3, new Multiplicacao() },
            { 4, new Divisao() }
        };

        while (true)
        {
            Console.Clear();
            Console.WriteLine("=== CALCULADORA STRATEGY ===");
            Console.WriteLine("Operações disponíveis:");
            foreach (var op in operacoes)
            {
                Console.WriteLine($"{op.Key}. {op.Value.Nome}");
            }
            Console.WriteLine("0. Sair");
            Console.Write("\nEscolha uma operação: ");

            if (!int.TryParse(Console.ReadLine(), out int escolha) || escolha == 0)
                break;

            if (!operacoes.TryGetValue(escolha, out var operacao))
            {
                Console.WriteLine("Opção inválida!");
                Console.ReadKey();
                continue;
            }

            Console.Write("\nDigite o primeiro número: ");
            int a = int.Parse(Console.ReadLine());
            Console.Write("Digite o segundo número: ");
            int b = int.Parse(Console.ReadLine());

            try
            {
                calculadora.DefinirOperacao(operacao);
                int resultado = calculadora.Calcular(a, b);
                Console.WriteLine($"\nResultado ({operacao.Nome}): {resultado}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro: {ex.Message}");
            }

            Console.WriteLine("\nPressione qualquer tecla para continuar...");
            Console.ReadKey();
        }
    }
}