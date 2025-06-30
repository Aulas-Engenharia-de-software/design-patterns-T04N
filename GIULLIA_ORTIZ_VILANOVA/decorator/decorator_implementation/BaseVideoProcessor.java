
package decorator_implementation_video;

public class BaseVideoProcessor implements VideoProcessorInterface {
    @Override
    public void process(String videoFile) {
        System.out.println("Carregando vídeo: " + videoFile);
        System.out.println("Processamento básico do vídeo");
        System.out.println("Salvando vídeo processado");
    }
}
