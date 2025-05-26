import singleton.with.SingletonDemo;
import singleton.without.NonSingletonDemo;
import decorator.with.DecoratorDemo;
import decorator.without.NonDecoratorDemo;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        System.out.println("Design Patterns Demonstration");
        System.out.println("============================");
        System.out.println("1. Singleton Pattern - Without");
        System.out.println("2. Singleton Pattern - With");
        System.out.println("3. Decorator Pattern - Without");
        System.out.println("4. Decorator Pattern - With");
        System.out.println("5. Exit");
        System.out.println();

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Enter your choice (1-5): ");
            int choice = scanner.nextInt();
            System.out.println();

            switch (choice) {
                case 1:
                    NonSingletonDemo.main(args);
                    break;
                case 2:
                    SingletonDemo.main(args);
                    break;
                case 3:
                    NonDecoratorDemo.main(args);
                    break;
                case 4:
                    DecoratorDemo.main(args);
                    break;
                case 5:
                    System.out.println("Exiting...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }

            System.out.println("\nPress Enter to continue...");
            scanner.nextLine();
            scanner.nextLine();
            System.out.println("\n");
        }
    }

}
