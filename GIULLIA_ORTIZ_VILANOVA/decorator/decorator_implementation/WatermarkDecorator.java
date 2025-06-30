package decorator_implementation_video;

public class WatermarkDecorator extends VideoProcessorDecorator {
    public WatermarkDecorator(VideoProcessorInterface processor) {
        super(processor);
    }
    
    @Override
    public void process(String videoFile) {
        super.process(videoFile);
        System.out.println("Adicionando marca d'água ao vídeo");
    }
}
