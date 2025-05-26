
package naive_implementation_database;

public class Main {
    public static void main(String[] args) {

        DatabaseConfig config1 = new DatabaseConfig("localhost", 5432, "user1", "pass123", 10);
        DatabaseConfig config2 = new DatabaseConfig("localhost", 5432, "user1", "pass123", 10);

        DatabaseConnection conn1 = new DatabaseConnection(config1);
        DatabaseConnection conn2 = new DatabaseConnection(config2);
        
        System.out.println("Primeira conexão:");
        conn1.connect();
        
        System.out.println("\nSegunda conexão:");
        conn2.connect();

        System.out.println("\nAs configurações são o mesmo objeto? " + (config1 == config2));
    }
}
