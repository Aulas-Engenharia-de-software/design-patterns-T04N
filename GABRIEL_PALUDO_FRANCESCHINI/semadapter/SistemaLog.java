package semadapter;

public class SistemaLog {
    public static void main(String[] args) {

        LogExterno bibliotecaExterna = new LogExterno();

        ServicoCliente servico = new ServicoCliente(bibliotecaExterna);

        System.out.println("Executando com cliente válido");
        servico.adicionarCliente("Gabriel Paludo");

        System.out.println("\nExecutando com cliente inválido");
        servico.adicionarCliente("Erro");
    }
}