package decorator_implementation_video;

public class SubtitleDecorator extends VideoProcessorDecorator {
    public SubtitleDecorator(VideoProcessorInterface processor) {
        super(processor);
    }
    
    @Override
    public void process(String videoFile) {
        super.process(videoFile);
        System.out.println("Incluindo legendas no vídeo");
    }
}
