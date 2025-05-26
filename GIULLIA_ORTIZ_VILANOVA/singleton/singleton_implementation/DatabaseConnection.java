
package singleton_implementation_database;

public class DatabaseConnection {
    private DatabaseConfig config;
    
    public DatabaseConnection() {

        this.config = DatabaseConfig.getInstance();
    }
    
    public void connect() {
        System.out.println("Conectando ao banco de dados usando:");
        config.displayConfig();
    }
}
