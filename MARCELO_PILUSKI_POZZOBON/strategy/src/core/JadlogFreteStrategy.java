package core;

public class JadlogFreteStrategy implements FreteStrategy {
    @Override
    public double calcular(double peso, double distancia) {
        return 15 + peso * 0.6 + distancia * 0.3;
    }
}
