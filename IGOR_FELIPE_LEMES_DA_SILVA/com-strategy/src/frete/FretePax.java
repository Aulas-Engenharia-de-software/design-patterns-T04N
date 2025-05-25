package frete;

public class FretePax implements FreteStrategy{

    @Override
    public Double calcularFrete(double valor, double peso) {
        return valor * peso * 0.04;
    }
    
}
