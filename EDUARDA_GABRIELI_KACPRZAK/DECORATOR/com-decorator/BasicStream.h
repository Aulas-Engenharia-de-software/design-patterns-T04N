#pragma once
#include "DataStream.h"

class BasicStream : public DataStream {
public:
    std::string processData(const std::string& data) const override {
        return data; // aqui retorna o texto original sem modificações
    }
};