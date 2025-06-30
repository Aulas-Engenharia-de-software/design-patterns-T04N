package singleton_implementation_database;

public class Main {
    public static void main(String[] args) {

        DatabaseConfig config = DatabaseConfig.getInstance();

        DatabaseConnection conn1 = new DatabaseConnection();
        DatabaseConnection conn2 = new DatabaseConnection();
        
        System.out.println("Primeira conexão:");
        conn1.connect();
        
        System.out.println("\nSegunda conexão:");
        conn2.connect();

        System.out.println("\nAtualizando configuração...");
        config.updateConfig("db.example.com", 5432, "admin", "admin123", 20);
        
        System.out.println("\nConexões após atualização:");
        System.out.println("Primeira conexão:");
        conn1.connect();
        
        System.out.println("\nSegunda conexão:");
        conn2.connect();

        DatabaseConfig anotherConfig = DatabaseConfig.getInstance();
        System.out.println("\nAs configurações são o mesmo objeto? " + (config == anotherConfig));
    }
}
