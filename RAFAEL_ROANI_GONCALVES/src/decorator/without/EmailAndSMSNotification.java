package decorator.without;

public class EmailAndSMSNotification extends Notification {

    private String emailAddress;

    private String phoneNumber;
    
    public EmailAndSMSNotification(String message, String emailAddress, String phoneNumber) {
        super(message);
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }
    
    @Override
    public void send() {
        super.send();
        System.out.println("Also sending via Email to: " + emailAddress);
        System.out.println("Also sending via SMS to: " + phoneNumber);
    }

}
