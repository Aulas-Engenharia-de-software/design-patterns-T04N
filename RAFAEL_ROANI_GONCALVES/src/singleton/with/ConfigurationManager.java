package singleton.with;

public class ConfigurationManager {

    private static ConfigurationManager instance;
    
    private String databaseUrl;
    private String apiKey;
    private int timeout;
    
    private ConfigurationManager() {
        System.out.println("Creating the ConfigurationManager instance");
        this.databaseUrl = "jdbc:mysql://localhost:3306/mydb";
        this.apiKey = "default-api-key";
        this.timeout = 30;
    }
    
    public static ConfigurationManager getInstance() {
        if (instance == null) {
            instance = new ConfigurationManager();
        }
        return instance;
    }
    
    public String getDatabaseUrl() {
        return databaseUrl;
    }
    
    public void setDatabaseUrl(String databaseUrl) {
        this.databaseUrl = databaseUrl;
    }
    
    public String getApiKey() {
        return apiKey;
    }
    
    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }
    
    public int getTimeout() {
        return timeout;
    }
    
    public void setTimeout(int timeout) {
        this.timeout = timeout;
    }

}
