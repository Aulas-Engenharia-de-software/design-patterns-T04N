#pragma once
#include "DataStream.h"
#include <memory>

class StreamDecorator : public DataStream {
protected:
    std::unique_ptr<DataStream> stream;

public:
    explicit StreamDecorator(std::unique_ptr<DataStream> stream_)
        : stream(std::move(stream_)) {}

    std::string processData(const std::string& data) const override {
        return stream->processData(data);
    }
};