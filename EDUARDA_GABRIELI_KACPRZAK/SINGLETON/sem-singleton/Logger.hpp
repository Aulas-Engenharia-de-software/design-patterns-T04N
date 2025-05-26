#ifndef LOGGER_HPP
#define LOGGER_HPP

#include <fstream>
#include <mutex>
#include <string>

class Logger {
private:
    std::ofstream logFile;
    std::mutex mtx;
    std::string filename;

public:
    // construtor público (diferente do singleton)
    explicit Logger(const std::string& filename = "app.log");

    Logger(const Logger&) = delete;
    Logger& operator=(const Logger&) = delete;

    Logger(Logger&&) noexcept;
    Logger& operator=(Logger&&) noexcept;

    void log(const std::string& message);
    void flush();

    ~Logger();
};

#endif // LOGGER_HPP