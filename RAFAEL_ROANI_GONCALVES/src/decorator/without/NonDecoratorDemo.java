package decorator.without;

public class NonDecoratorDemo {

    public static void main(String[] args) {
        System.out.println("Demonstrating the problem without Decorator pattern:");
        System.out.println("----------------------------------------------");

        System.out.println("1. Basic notification:");
        Notification basicNotification = new Notification("Important message");
        basicNotification.send();
        System.out.println();
        
        System.out.println("2. Email notification:");
        EmailNotification emailNotification = new EmailNotification(
            "Important message", "user@example.com");
        emailNotification.send();
        System.out.println();
        
        System.out.println("3. SMS notification:");
        SMSNotification smsNotification = new SMSNotification(
            "Important message", "123-456-7890");
        smsNotification.send();
        System.out.println();
        
        System.out.println("4. Combined Email and SMS notification:");
        EmailAndSMSNotification combinedNotification = new EmailAndSMSNotification(
            "Important message", "user@example.com", "123-456-7890");
        combinedNotification.send();
        System.out.println();
        
        System.out.println("Problem: If we want to add more notification types (e.g., Push, Slack),");
        System.out.println("we would need to create many more classes for each combination:");
        System.out.println("- PushNotification");
        System.out.println("- SlackNotification");
        System.out.println("- EmailAndPushNotification");
        System.out.println("- EmailAndSlackNotification");
        System.out.println("- SMSAndPushNotification");
        System.out.println("- SMSAndSlackNotification");
        System.out.println("- EmailAndSMSAndPushNotification");
        System.out.println("- EmailAndSMSAndSlackNotification");
        System.out.println("- EmailAndPushAndSlackNotification");
        System.out.println("- SMSAndPushAndSlackNotification");
        System.out.println("- EmailAndSMSAndPushAndSlackNotification");
        System.out.println("This leads to a class explosion problem!");
    }

}
