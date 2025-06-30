package decorator.with;

public class SMSNotificationDecorator extends NotificationDecorator {

    private String phoneNumber;
    
    public SMSNotificationDecorator(Notification notification, String phoneNumber) {
        super(notification);
        this.phoneNumber = phoneNumber;
    }
    
    @Override
    public void send() {
        super.send();
        sendSMS();
    }
    
    private void sendSMS() {
        System.out.println("Also sending via SMS to: " + phoneNumber);
    }

}
