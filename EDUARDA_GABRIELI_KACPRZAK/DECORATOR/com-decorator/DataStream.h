#pragma once
#include <string>

class DataStream {
public:
    virtual ~DataStream() = default;
    virtual std::string processData(const std::string& data) const = 0;
};