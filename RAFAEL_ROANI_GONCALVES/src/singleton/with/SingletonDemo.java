package singleton.with;

public class SingletonDemo {

    public static void main(String[] args) {
        System.out.println("Demonstrating the solution with Singleton pattern:");
        
        ConfigurationManager config1 = ConfigurationManager.getInstance();
        
        ConfigurationManager config2 = ConfigurationManager.getInstance();
        
        System.out.println("Are config1 and config2 the same instance? " + (config1 == config2));
        
        config1.setApiKey("new-api-key");
        config1.setTimeout(60);
        
        System.out.println("\nConfig1 settings:");
        System.out.println("API Key: " + config1.getApiKey());
        System.out.println("Timeout: " + config1.getTimeout());
        
        System.out.println("\nConfig2 settings:");
        System.out.println("API Key: " + config2.getApiKey());
        System.out.println("Timeout: " + config2.getTimeout());
        
        System.out.println("\nSolution: Changes in one instance reflect in all references!");
        System.out.println("This ensures consistent configurations across the application.");
    }

}
