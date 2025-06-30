import singleton.Configuracao;
import strategy.Calculadora;
import strategy.Soma;
import strategy.Subtracao;

public class Main {
    public static void main(String[] args) {
        // Singleton
        Configuracao conf1 = Configuracao.getInstancia();
        System.out.println("Idioma atual: " + conf1.getIdioma());

        Configuracao conf2 = Configuracao.getInstancia();
        conf2.setIdioma("Inglês");

        System.out.println("Idioma após mudança (conf1): " + conf1.getIdioma());

        // Strategy
        Calculadora calculadora = new Calculadora();

        calculadora.setOperacao(new Soma());
        System.out.println("Soma: " + calculadora.calcular(10, 5));

        calculadora.setOperacao(new Subtracao());
        System.out.println("Subtração: " + calculadora.calcular(10, 5));
    }
}
