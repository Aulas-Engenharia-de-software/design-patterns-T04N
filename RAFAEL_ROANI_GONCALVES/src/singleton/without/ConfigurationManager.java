package singleton.without;

public class ConfigurationManager {

    private String databaseUrl;

    private String apiKey;

    private int timeout;

    public ConfigurationManager() {
        System.out.println("Creating a new ConfigurationManager instance");
        this.databaseUrl = "jdbc:mysql://localhost:3306/mydb";
        this.apiKey = "default-api-key";
        this.timeout = 30;
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
