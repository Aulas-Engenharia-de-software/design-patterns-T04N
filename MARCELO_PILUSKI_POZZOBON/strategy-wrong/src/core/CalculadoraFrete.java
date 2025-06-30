package core;

public class CalculadoraFrete {

    public double calcular(double peso, double distancia, String transportadora) {
        switch(transportadora) {
            case "Sedex":
                return 15 + peso * 1.2 + distancia * 0.5;
            case "Pac":
                return 10 + peso * 0.8 + distancia * 0.3;
            case "Jadlog":
                return 15 + peso * 0.6 + distancia * 0.3;
            default:
                System.out.println("Opção Inválida!");
                return 0;
        }
    }
}
