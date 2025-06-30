package decorator.with;

public class EmailNotificationDecorator extends NotificationDecorator {

    private String emailAddress;
    
    public EmailNotificationDecorator(Notification notification, String emailAddress) {
        super(notification);
        this.emailAddress = emailAddress;
    }
    
    @Override
    public void send() {
        super.send();
        sendEmail();
    }
    
    private void sendEmail() {
        System.out.println("Also sending via Email to: " + emailAddress);
    }

}
