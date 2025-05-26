
package decorator_implementation_video;

public class CompressionDecorator extends VideoProcessorDecorator {
    public CompressionDecorator(VideoProcessorInterface processor) {
        super(processor);
    }
    
    @Override
    public void process(String videoFile) {
        super.process(videoFile);
        System.out.println("Comprimindo o vídeo");
    }
}
