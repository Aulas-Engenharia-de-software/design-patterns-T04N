import frete.FreteStrategy;

public class FreteService {
    private String tipo;
    private FreteStrategy strategy;

    public FreteService(String tipo, FreteStrategy strategy){
        this.tipo = tipo;
        this.strategy = strategy;
    }

    public void calcular(double valor, double peso){
        System.out.println("Calculando frete no valor de R$"+valor+" com peso de "+peso+" kg");
        System.out.println("Valor do frete "+tipo+": R$"+strategy.calcularFrete(valor, peso));
    }
}
