#include "Logger.hpp"
#include <stdexcept>

Logger::Logger(const std::string& filename) : filename(filename) {
    logFile.open(filename, std::ios::app);
    if (!logFile.is_open()) {
        throw std::runtime_error("Não foi possível abrir o arquivo de log: " + filename);
    }
}

Logger::Logger(Logger&& other) noexcept
    : logFile(std::move(other.logFile))
    , filename(std::move(other.filename)) {
}

Logger& Logger::operator=(Logger&& other) noexcept {
    if (this != &other) {
        logFile = std::move(other.logFile);
        filename = std::move(other.filename);
    }
    return *this;
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