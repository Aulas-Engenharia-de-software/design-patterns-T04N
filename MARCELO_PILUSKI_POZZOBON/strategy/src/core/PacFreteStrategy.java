package core;

public class PacFreteStrategy implements FreteStrategy {
    @Override
    public double calcular(double peso, double distancia) {
        return 10 + peso * 0.8 + distancia * 0.3;
    }
}

