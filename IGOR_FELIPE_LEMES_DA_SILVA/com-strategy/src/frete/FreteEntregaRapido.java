package frete;

public class FreteEntregaRapido implements FreteStrategy{

    @Override
    public Double calcularFrete(double valor, double peso) {
        return valor * peso * 0.06;
    }
    
}
