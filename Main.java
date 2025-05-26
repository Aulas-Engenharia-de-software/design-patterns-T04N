import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String msg);
}

class Medico implements Observer {
    private String nome;
    public Medico(String nome) { this.nome = nome; }
    public void update(String msg) {
        System.out.println("Dr. " + nome + " recebeu: " + msg);
    }
}

class Hospital {
    private List<Observer> observers = new ArrayList<>();
    public void addObserver(Observer o) { observers.add(o); }
    public void notifyObservers(String msg) {
        for (Observer o : observers) o.update(msg);
    }
    public void novoPaciente(String nome) {
        System.out.println("Novo paciente: " + nome);
        notifyObservers(nome);
    }
}

public class Main {
    public static void main(String[] args) {
        Hospital h = new Hospital();
        h.addObserver(new Medico("Carlos"));
        h.addObserver(new Medico("Ana"));

        h.novoPaciente("João");
        h.novoPaciente("Maria");
    }
}
