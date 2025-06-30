package factory;

import pagamento.*;

public class NubankFactory implements PagamentoFactory{
    public Pagamento criarPagamento(){
        return new PagamentoNubank();
    }
}
