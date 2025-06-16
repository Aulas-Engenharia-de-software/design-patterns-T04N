package RICARDO_DINIZ_SILVA.design_patern;

interface TextComponent {
    String render();
    int getWidth();
    int getHeight();
}


class TextView implements TextComponent {
    private String text;
    private int width;
    private int height;
    
    public TextView(String text) {
        this.text = text;
        this.width = text.length();
        this.height = 1;
    }
    
    @Override
    public String render() {
        return text;
    }
    
    @Override
    public int getWidth() {
        return width;
    }
    
    @Override
    public int getHeight() {
        return height;
    }
}


abstract class TextDecorator implements TextComponent {
    protected TextComponent component;
    
    public TextDecorator(TextComponent component) {
        this.component = component;
    }
    
    @Override
    public String render() {
        return component.render();
    }
    
    @Override
    public int getWidth() {
        return component.getWidth();
    }
    
    @Override
    public int getHeight() {
        return component.getHeight();
    }
}


class SimpleBorderDecorator extends TextDecorator {
    private char borderChar;
    
    public SimpleBorderDecorator(TextComponent component, char borderChar) {
        super(component);
        this.borderChar = borderChar;
    }
    
    @Override
    public String render() {
        String content = component.render();
        int width = component.getWidth();
        
        StringBuilder result = new StringBuilder();
        
        
        result.append(createBorderLine(width + 2)).append("\n");
        
        
        String[] lines = content.split("\n");
        for (String line : lines) {
            result.append(borderChar)
                  .append(padString(line, width))
                  .append(borderChar)
                  .append("\n");
        }
        
       
        result.append(createBorderLine(width + 2));
        
        return result.toString();
    }
    
    @Override
    public int getWidth() {
        return component.getWidth() + 2;
    }
    
    @Override
    public int getHeight() {
        return component.getHeight() + 2;
    }
    
    private String createBorderLine(int width) {
        return String.valueOf(borderChar).repeat(width);
    }
    
    private String padString(String str, int width) {
        if (str.length() >= width) {
            return str;
        }
        return str + " ".repeat(width - str.length());
    }
}


class DoubleBorderDecorator extends TextDecorator {
    
    public DoubleBorderDecorator(TextComponent component) {
        super(component);
    }
    
    @Override
    public String render() {
        String content = component.render();
        int width = component.getWidth();
        
        StringBuilder result = new StringBuilder();
        
        
        result.append("╔").append("═".repeat(width)).append("╗").append("\n");
        
        
        String[] lines = content.split("\n");
        for (String line : lines) {
            result.append("║")
                  .append(padString(line, width))
                  .append("║")
                  .append("\n");
        }
        
        
        result.append("╚").append("═".repeat(width)).append("╝");
        
        return result.toString();
    }
    
    @Override
    public int getWidth() {
        return component.getWidth() + 2;
    }
    
    @Override
    public int getHeight() {
        return component.getHeight() + 2;
    }
    
    private String padString(String str, int width) {
        if (str.length() >= width) {
            return str;
        }
        return str + " ".repeat(width - str.length());
    }
}


class PaddedBorderDecorator extends TextDecorator {
    private int padding;
    private char borderChar;
    
    public PaddedBorderDecorator(TextComponent component, int padding, char borderChar) {
        super(component);
        this.padding = padding;
        this.borderChar = borderChar;
    }
    
    @Override
    public String render() {
        String content = component.render();
        int width = component.getWidth() + (padding * 2);
        
        StringBuilder result = new StringBuilder();
        
        
        result.append(createBorderLine(width + 2)).append("\n");
        
        
        for (int i = 0; i < padding; i++) {
            result.append(borderChar)
                  .append(" ".repeat(width))
                  .append(borderChar)
                  .append("\n");
        }
        
       
        String[] lines = content.split("\n");
        for (String line : lines) {
            result.append(borderChar)
                  .append(" ".repeat(padding))
                  .append(padString(line, component.getWidth()))
                  .append(" ".repeat(padding))
                  .append(borderChar)
                  .append("\n");
        }
        
        
        for (int i = 0; i < padding; i++) {
            result.append(borderChar)
                  .append(" ".repeat(width))
                  .append(borderChar)
                  .append("\n");
        }
        
        
        result.append(createBorderLine(width + 2));
        
        return result.toString();
    }
    
    @Override
    public int getWidth() {
        return component.getWidth() + (padding * 2) + 2;
    }
    
    @Override
    public int getHeight() {
        return component.getHeight() + (padding * 2) + 2;
    }
    
    private String createBorderLine(int width) {
        return String.valueOf(borderChar).repeat(width);
    }
    
    private String padString(String str, int width) {
        if (str.length() >= width) {
            return str;
        }
        return str + " ".repeat(width - str.length());
    }
}


class ColoredBorderDecorator extends TextDecorator {
    private String color;
    private char borderChar;
    
    public ColoredBorderDecorator(TextComponent component, String color, char borderChar) {
        super(component);
        this.color = color;
        this.borderChar = borderChar;
    }
    
    @Override
    public String render() {
        String content = component.render();
        int width = component.getWidth();
        
        StringBuilder result = new StringBuilder();
        
        
        String colorPrefix = "[" + color.toUpperCase() + "] ";
        
    
        result.append(colorPrefix).append(createBorderLine(width + 2)).append("\n");
        
       
        String[] lines = content.split("\n");
        for (String line : lines) {
            result.append(colorPrefix)
                  .append(borderChar)
                  .append(padString(line, width))
                  .append(borderChar)
                  .append("\n");
        }
        
    
        result.append(colorPrefix).append(createBorderLine(width + 2));
        
        return result.toString();
    }
    
    @Override
    public int getWidth() {
        return component.getWidth() + 2 + ("[" + color.toUpperCase() + "] ").length();
    }
    
    @Override
    public int getHeight() {
        return component.getHeight() + 2;
    }
    
    private String createBorderLine(int width) {
        return String.valueOf(borderChar).repeat(width);
    }
    
    private String padString(String str, int width) {
        if (str.length() >= width) {
            return str;
        }
        return str + " ".repeat(width - str.length());
    }
}


public class Questao7 {
    public static void main(String[] args) {
        System.out.println("=== TESTE DO DECORATOR PATTERN PARA TEXTVIEW ===\n");
        
   
        TextComponent textView = new TextView("Arquitetura de Software");
        System.out.println("1. TextView básico:");
        System.out.println(textView.render());
        System.out.println("Dimensões: " + textView.getWidth() + "x" + textView.getHeight());
        System.out.println("\n" + "=".repeat(60) + "\n");
        
       
        TextComponent simpleBorder = new SimpleBorderDecorator(textView, '*');
        System.out.println("2. Com borda simples (*):");
        System.out.println(simpleBorder.render());
        System.out.println("Dimensões: " + simpleBorder.getWidth() + "x" + simpleBorder.getHeight());
        System.out.println("\n" + "=".repeat(60) + "\n");
        

        TextComponent doubleBorder = new DoubleBorderDecorator(textView);
        System.out.println("3. Com borda dupla:");
        System.out.println(doubleBorder.render());
        System.out.println("Dimensões: " + doubleBorder.getWidth() + "x" + doubleBorder.getHeight());
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        
        TextComponent paddedBorder = new PaddedBorderDecorator(textView, 2, '#');
        System.out.println("4. Com borda e padding (2 espaços):");
        System.out.println(paddedBorder.render());
        System.out.println("Dimensões: " + paddedBorder.getWidth() + "x" + paddedBorder.getHeight());
        System.out.println("\n" + "=".repeat(60) + "\n");
        

        TextComponent coloredBorder = new ColoredBorderDecorator(textView, "red", '+');
        System.out.println("5. Com borda colorida:");
        System.out.println(coloredBorder.render());
        System.out.println("Dimensões: " + coloredBorder.getWidth() + "x" + coloredBorder.getHeight());
        System.out.println("\n" + "=".repeat(60) + "\n");
        
      
        TextComponent multiDecorated = new DoubleBorderDecorator(
            new PaddedBorderDecorator(
                new SimpleBorderDecorator(textView, '-'), 
                1, 
                '|'
            )
        );
        System.out.println("6. Múltiplos decorators combinados:");
        System.out.println("   (SimpleBorder + PaddedBorder + DoubleBorder)");
        System.out.println(multiDecorated.render());
        System.out.println("Dimensões: " + multiDecorated.getWidth() + "x" + multiDecorated.getHeight());
        System.out.println("\n" + "=".repeat(60) + "\n");
        
      
        TextComponent longText = new TextView("Design Patterns em Java!");
        TextComponent fancyBorder = new ColoredBorderDecorator(
            new DoubleBorderDecorator(longText), 
            "blue", 
            '◆'
        );
        System.out.println("7. Teste com texto maior e borda fancy:");
        System.out.println(fancyBorder.render());
        System.out.println("Dimensões: " + fancyBorder.getWidth() + "x" + fancyBorder.getHeight());
        
        System.out.println("\n=== TESTE CONCLUÍDO COM SUCESSO! ===");
    }
}