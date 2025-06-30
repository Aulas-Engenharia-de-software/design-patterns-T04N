package decorator_implementation_video;

public class Main {
    public static void main(String[] args) {

        System.out.println("Processamento básico:");
        VideoProcessorInterface processor = new BaseVideoProcessor();
        processor.process("video1.mp4");
        
        System.out.println("\n-------------------\n");

        System.out.println("Processamento com filtro de cor e marca d'água:");
        VideoProcessorInterface processorWithEffects = new WatermarkDecorator(
            new ColorFilterDecorator(new BaseVideoProcessor())
        );
        processorWithEffects.process("video2.mp4");
        
        System.out.println("\n-------------------\n");

        System.out.println("Processamento com todos os efeitos:");
        VideoProcessorInterface processorWithAllEffects = new CompressionDecorator(
            new SubtitleDecorator(
                new WatermarkDecorator(
                    new ColorFilterDecorator(new BaseVideoProcessor())
                )
            )
        );
        processorWithAllEffects.process("video3.mp4");
    }
}
