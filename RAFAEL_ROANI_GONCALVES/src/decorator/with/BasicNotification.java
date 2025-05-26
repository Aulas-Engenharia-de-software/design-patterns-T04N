package decorator.with;

public class BasicNotification implements Notification {

    private String message;
    
    public BasicNotification(String message) {
        this.message = message;
    }
    
    @Override
    public void send() {
        System.out.println("Sending basic notification: " + message);
    }

}
