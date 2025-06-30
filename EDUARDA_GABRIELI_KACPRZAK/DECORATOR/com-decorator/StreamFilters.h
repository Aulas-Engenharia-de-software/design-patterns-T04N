#pragma once
#include "StreamDecorator.h"
#include <algorithm>
#include <string>
#include <cctype>

// esse decorador converte texto para maiúsculas
class UpperCaseFilter : public StreamDecorator {
public:
    explicit UpperCaseFilter(std::unique_ptr<DataStream> stream)
        : StreamDecorator(std::move(stream)) {}

    std::string processData(const std::string& data) const override {
        std::string result = StreamDecorator::processData(data);
        std::transform(result.begin(), result.end(), result.begin(), ::toupper);
        return result;
    }
};

//  decorator para inverter texto
class ReverseFilter : public StreamDecorator {
public:
    explicit ReverseFilter(std::unique_ptr<DataStream> stream)
        : StreamDecorator(std::move(stream)) {}

    std::string processData(const std::string& data) const override {
        std::string result = StreamDecorator::processData(data);
        std::reverse(result.begin(), result.end());
        return result;
    }
};

// decorador para substituir palavras
class ReplaceFilter : public StreamDecorator {
private:
    std::string from;
    std::string to;

public:
    ReplaceFilter(std::unique_ptr<DataStream> stream,
                  const std::string& from,
                  const std::string& to)
        : StreamDecorator(std::move(stream))
        , from(from)
        , to(to) {}

    std::string processData(const std::string& data) const override {
        std::string result = StreamDecorator::processData(data);
        size_t pos = 0;
        while ((pos = result.find(from, pos)) != std::string::npos) {
            result.replace(pos, from.length(), to);
            pos += to.length();
        }
        return result;
    }
};