
package singleton_implementation_database;

public class DatabaseConfig {
    private static DatabaseConfig instance;
    
    private String host;
    private int port;
    private String username;
    private String password;
    private int maxConnections;

    private DatabaseConfig() {

        this.host = "localhost";
        this.port = 5432;
        this.username = "user1";
        this.password = "pass123";
        this.maxConnections = 10;
    }

    public static DatabaseConfig getInstance() {
        if (instance == null) {
            instance = new DatabaseConfig();
        }
        return instance;
    }

    public void updateConfig(String host, int port, String username, 
                           String password, int maxConnections) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.maxConnections = maxConnections;
    }
    
    public String getConnectionString() {
        return String.format("jdbc:postgresql://%s:%d/mydb", host, port);
    }
    
    public void displayConfig() {
        System.out.println("Database Configuration:");
        System.out.println("Host: " + host);
        System.out.println("Port: " + port);
        System.out.println("Username: " + username);
        System.out.println("Max Connections: " + maxConnections);
    }
}
