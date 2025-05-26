package naive_implementation_database;

public class DatabaseConnection {
    private DatabaseConfig config;
    
    public DatabaseConnection(DatabaseConfig config) {
        this.config = config;
    }
    
    public void connect() {
        System.out.println("Conectando ao banco de dados usando:");
        config.displayConfig();
    }
}
