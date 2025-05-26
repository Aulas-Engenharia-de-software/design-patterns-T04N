package semadapter;

public class ServicoCliente {

    private LogExterno loggerExterno;

    public ServicoCliente(LogExterno loggerExterno) {
        this.loggerExterno = loggerExterno;
    }

    public void adicionarCliente(String nome) {

        loggerExterno.registrar("info", "Tentando adicionar cliente: " + nome);
        try {
            if (nome == null || nome.trim().isEmpty() || nome.equals("Erro")) {
                throw new IllegalArgumentException("Nome do cliente é inválido");
            }

            System.out.println("Lógica de negócio: Cliente " + nome + " processado");

            loggerExterno.registrar("info", "Cliente " + nome + " adicionado com sucesso");
        } catch (IllegalArgumentException e) {

            loggerExterno.registrarExcecao("Falha ao adicionar cliente: " + nome + ",", e);
        }
    }
}