package questionario02.observer_revistas;

import questionario02.observer_revistas.interfaces.Observador;
import questionario02.observer_revistas.model.Assinante;
import questionario02.observer_revistas.model.Revista;

public class Program {

    public static void main(String[] args) {

        Revista revistaObserver = new Revista("Revista Observer");

        Observador assinanteGabriel = new Assinante("Gabriel");
        Observador assinantePaludo = new Assinante("Paludo");

        revistaObserver.adicionarObservador(assinanteGabriel);
        revistaObserver.adicionarObservador(assinantePaludo);

        revistaObserver.lancarNovaEdicao();

        revistaObserver.removerObservador(assinanteGabriel);

        revistaObserver.lancarNovaEdicao();
    }
}