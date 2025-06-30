
package naive_implementation_video;

public class VideoProcessor {
    private boolean applyColorFilter;
    private boolean addWatermark;
    private boolean addSubtitles;
    private boolean compress;
    
    public VideoProcessor(boolean applyColorFilter, boolean addWatermark, 
                         boolean addSubtitles, boolean compress) {
        this.applyColorFilter = applyColorFilter;
        this.addWatermark = addWatermark;
        this.addSubtitles = addSubtitles;
        this.compress = compress;
    }
    
    public void processVideo(String videoFile) {
        System.out.println("Carregando vídeo: " + videoFile);
        
        if (applyColorFilter) {
            System.out.println("Aplicando filtro de cores");
        }
        
        if (addWatermark) {
            System.out.println("Adicionando marca d'água");
        }
        
        if (addSubtitles) {
            System.out.println("Incluindo legendas");
        }
        
        if (compress) {
            System.out.println("Comprimindo o vídeo");
        }
        
        System.out.println("Salvando vídeo processado");
    }
}
