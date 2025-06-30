package decorator.without;

public class EmailNotification extends Notification {

    private String emailAddress;
    
    public EmailNotification(String message, String emailAddress) {
        super(message);
        this.emailAddress = emailAddress;
    }
    
    @Override
    public void send() {
        super.send();
        System.out.println("Also sending via Email to: " + emailAddress);
    }

}
