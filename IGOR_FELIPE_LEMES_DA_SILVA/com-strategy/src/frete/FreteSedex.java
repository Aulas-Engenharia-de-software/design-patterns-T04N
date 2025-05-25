package frete;

public class FreteSedex implements FreteStrategy{

    @Override
    public Double calcularFrete(double valor, double peso) {
        return valor * peso * 0.05;
    }
    
}
