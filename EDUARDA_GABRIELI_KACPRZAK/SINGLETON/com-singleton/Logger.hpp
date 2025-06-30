#ifndef LOGGER_HPP
#define LOGGER_HPP

#include <fstream>
#include <mutex>
#include <memory>
#include <string>

class Logger {
private:
    static std::unique_ptr<Logger> instance;
    static std::mutex mtx;
    std::ofstream logFile;

    Logger();

public:
    // deletar cópia e atribuição
    Logger(const Logger&) = delete;
    Logger& operator=(const Logger&) = delete;

    // método para obter a instância singleton
    static Logger& getInstance();

    // método para registrar mensagens
    void log(const std::string& message);

    // método para forçar a escrita no arquivo
    void flush();

    ~Logger();
};

#endif // LOGGER_HPP