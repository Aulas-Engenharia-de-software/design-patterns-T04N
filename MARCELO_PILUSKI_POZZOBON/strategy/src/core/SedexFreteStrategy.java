package core;

public class SedexFreteStrategy implements FreteStrategy {
    @Override
    public double calcular(double peso, double distancia) {
        return 15 + peso * 1.2 + distancia * 0.5;
    }
}

