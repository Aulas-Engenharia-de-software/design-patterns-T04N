package decorator.without;

public class SMSNotification extends Notification {

    private String phoneNumber;
    
    public SMSNotification(String message, String phoneNumber) {
        super(message);
        this.phoneNumber = phoneNumber;
    }
    
    @Override
    public void send() {
        super.send();
        System.out.println("Also sending via SMS to: " + phoneNumber);
    }

}
