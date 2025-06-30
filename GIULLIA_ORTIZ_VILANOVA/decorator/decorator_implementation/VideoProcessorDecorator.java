package decorator_implementation_video;

public abstract class VideoProcessorDecorator implements VideoProcessorInterface {
    protected VideoProcessorInterface wrappedProcessor;
    
    public VideoProcessorDecorator(VideoProcessorInterface processor) {
        this.wrappedProcessor = processor;
    }
    
    @Override
    public void process(String videoFile) {
        wrappedProcessor.process(videoFile);
    }
}
