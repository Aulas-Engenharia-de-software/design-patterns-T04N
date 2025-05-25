package factory;

import pagamento.*;

public class PixFactory implements PagamentoFactory{
    public Pagamento criarPagamento(){
        return new PagamentoPix();
    }
}
