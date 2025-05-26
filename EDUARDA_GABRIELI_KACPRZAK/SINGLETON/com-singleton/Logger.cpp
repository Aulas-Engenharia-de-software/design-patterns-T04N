#include "Logger.hpp"
#include <stdexcept>

std::unique_ptr<Logger> Logger::instance = nullptr;
std::mutex Logger::mtx;

Logger::Logger() {
    logFile.open("app.log", std::ios::app);
    if (!logFile.is_open()) {
        throw std::runtime_error("Não foi possível abrir o arquivo de log");
    }
}

Logger& Logger::getInstance() {
    std::lock_guard<std::mutex> lock(mtx);
    if (!instance) {
        instance.reset(new Logger());
    }
    return *instance;
}

void Logger::log(const std::string& message) {
    std::lock_guard<std::mutex> lock(mtx);
    logFile << message << std::endl;
}

void Logger::flush() {
    std::lock_guard<std::mutex> lock(mtx);
    logFile.flush();
}

Logger::~Logger() {
    if (logFile.is_open()) {
        logFile.close();
    }
}