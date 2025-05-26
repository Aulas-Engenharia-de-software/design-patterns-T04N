#include "Logger.hpp"
#include <iostream>
#include <memory>

class MinhaClasse {
private:
    Logger& logger;

public:
    explicit MinhaClasse(Logger& logger) : logger(logger) {
        logger.log("MinhaClasse construída");
    }

    void fazerAlgo() {
        logger.log("Fazendo algo em MinhaClasse");
    }
};

int main() {
    try {
        // criando um logger
        Logger logger("app.log");

        // usando o logger diretamente
        logger.log("Aplicação iniciada");

        // passando o logger para outras classes
        MinhaClasse obj(logger);
        obj.fazerAlgo();

        // Mais logs
        logger.log("Operação 1");
        logger.flush();

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