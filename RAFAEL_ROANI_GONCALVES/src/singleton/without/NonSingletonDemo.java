package singleton.without;

public class NonSingletonDemo {

    public static void main(String[] args) {
        System.out.println("Demonstrating the problem without Singleton pattern:");
        
        ConfigurationManager config1 = new ConfigurationManager();
        
        ConfigurationManager config2 = new ConfigurationManager();
        
        System.out.println("Are config1 and config2 the same instance? " + (config1 == config2));
        
        config1.setApiKey("new-api-key");
        config1.setTimeout(60);
        
        System.out.println("\nConfig1 settings:");
        System.out.println("API Key: " + config1.getApiKey());
        System.out.println("Timeout: " + config1.getTimeout());
        
        System.out.println("\nConfig2 settings:");
        System.out.println("API Key: " + config2.getApiKey());
        System.out.println("Timeout: " + config2.getTimeout());
        
        System.out.println("\nProblem: Changes in one instance don't reflect in other instances!");
        System.out.println("This can lead to inconsistent configurations across the application.");
    }

}
