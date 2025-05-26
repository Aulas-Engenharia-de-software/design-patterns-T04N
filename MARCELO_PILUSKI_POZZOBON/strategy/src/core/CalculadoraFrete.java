package core;

public class CalculadoraFrete {
    private FreteStrategy estrategia;

    public void setEstrategia(FreteStrategy estrategia) {
        this.estrategia = estrategia;
    }

    public double calcularFrete(double peso, double distancia) {
        if (estrategia == null) {
            throw new IllegalStateException("Defina uma transportadora!");
        }
        return estrategia.calcular(peso, distancia);
    }
}

