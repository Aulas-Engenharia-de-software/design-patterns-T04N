#include "Logger.hpp"
#include <iostream>

int main() {
    try {
        // testando o logger
        Logger& logger = Logger::getInstance();
        
        logger.log("Aplicação iniciada");
        logger.log("Executando operação 1");
        logger.flush();
        
        // simulando algumas operações
        for (int i = 0; i < 3; ++i) {
            logger.log("Processando item " + std::to_string(i));
        }
        
        logger.log("Aplicação finalizada");
    }
    catch (const std::exception& e) {
        std::cerr << "Erro: " << e.what() << std::endl;
        return 1;
    }
    
    return 0;
}