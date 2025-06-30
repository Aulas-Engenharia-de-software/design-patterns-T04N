package singleton;

public class Configuracao {
    private static Configuracao instancia;
    private String idioma;

    private Configuracao() {
        this.idioma = "Português";
    }

    public static Configuracao getInstancia() {
        if (instancia == null) {
            instancia = new Configuracao();
        }
        return instancia;
    }

    public String getIdioma() {
        return idioma;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }
}
