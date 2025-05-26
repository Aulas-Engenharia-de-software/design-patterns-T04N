package naive_implementation_video;

public class Main {
    public static void main(String[] args) {
        System.out.println("Processando vídeo com filtro de cor e marca d'água:");
        VideoProcessor processor1 = new VideoProcessor(true, true, false, false);
        processor1.processVideo("video1.mp4");
        
        System.out.println("\n-------------------\n");
        
        System.out.println("Processando vídeo com todos os efeitos:");
        VideoProcessor processor2 = new VideoProcessor(true, true, true, true);
        processor2.processVideo("video2.mp4");
    }
}
