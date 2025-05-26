package adapter.client;

import adapter.target.Logger;

public class ServicoCliente {
    private Logger logger;

    public ServicoCliente(Logger logger) {
        this.logger = logger;
    }

    public void adicionarCliente(String nome) {
        logger.logInfo("Tentando adicionar cliente: " + nome);
        try {
            if (nome == null || nome.trim().isEmpty() || nome.equals("Erro")) {
                throw new IllegalArgumentException("Nome do cliente é inválido");
            }
            System.out.println("Lógica de negócio: Cliente " + nome + " processado");
            logger.logInfo("Cliente " + nome + " adicionado com sucesso");
        } catch (IllegalArgumentException e) {
            logger.logErro("Falha ao adicionar cliente: " + nome, e);
        }
    }
}