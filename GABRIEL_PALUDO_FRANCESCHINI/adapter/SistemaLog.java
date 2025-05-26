package adapter;

import adapter.adaptee.LogExterno;
import adapter.adapter.AdaptadorLogExterno;
import adapter.client.ServicoCliente;
import adapter.target.Logger;

public class SistemaLog {
    public static void main(String[] args) {
        LogExterno bibliotecaExterna = new LogExterno();

        Logger adaptador = new AdaptadorLogExterno(bibliotecaExterna);

        ServicoCliente servico = new ServicoCliente(adaptador);

        System.out.println("Executando com cliente válido");
        servico.adicionarCliente("Gabriel Paludo");

        System.out.println("\nExecutando com cliente inválido");
        servico.adicionarCliente("Erro");
    }
}

