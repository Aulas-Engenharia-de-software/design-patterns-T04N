package decorator_implementation_video;

public class ColorFilterDecorator extends VideoProcessorDecorator {
    public ColorFilterDecorator(VideoProcessorInterface processor) {
        super(processor);
    }
    
    @Override
    public void process(String videoFile) {
        super.process(videoFile);
        System.out.println("Aplicando filtro de cores ao vídeo");
    }
}
