package decorator.with;

public class DecoratorDemo {

    public static void main(String[] args) {
        System.out.println("Demonstrating the solution with Decorator pattern:");
        System.out.println("----------------------------------------------");

        System.out.println("1. Basic notification:");
        Notification basicNotification = new BasicNotification("Important message");
        basicNotification.send();
        System.out.println();

        System.out.println("2. Email notification:");
        Notification emailNotification = new EmailNotificationDecorator(
            new BasicNotification("Important message"), "user@example.com");
        emailNotification.send();
        System.out.println();

        System.out.println("3. SMS notification:");
        Notification smsNotification = new SMSNotificationDecorator(
            new BasicNotification("Important message"), "123-456-7890");
        smsNotification.send();
        System.out.println();

        System.out.println("4. Combined Email and SMS notification:");
        Notification combinedNotification = new SMSNotificationDecorator(
            new EmailNotificationDecorator(
                new BasicNotification("Important message"), "user@example.com"),
            "123-456-7890");
        combinedNotification.send();
        System.out.println();

        System.out.println("5. Combined SMS and Email notification (different order):");
        Notification combinedNotification2 = new EmailNotificationDecorator(
            new SMSNotificationDecorator(
                new BasicNotification("Important message"), "123-456-7890"),
            "user@example.com");
        combinedNotification2.send();
        System.out.println();
        
        System.out.println("Solution: With the Decorator pattern, we don't need to create");
        System.out.println("a new class for each combination of features. We can combine");
        System.out.println("decorators flexibly at runtime.");
        System.out.println("If we want to add more notification types (e.g., Push, Slack),");
        System.out.println("we just need to create new decorator classes, and we can combine");
        System.out.println("them with existing decorators without creating new classes.");
    }

}
