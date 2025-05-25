package factory;

import pagamento.*;

public class PaypalFactory implements PagamentoFactory{
    public Pagamento criarPagamento(){
        return new PagamentoPaypal();
    }
}
