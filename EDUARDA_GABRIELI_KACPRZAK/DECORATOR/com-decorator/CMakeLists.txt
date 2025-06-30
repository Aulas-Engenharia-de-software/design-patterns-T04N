cmake_minimum_required(VERSION 3.31)
project(com-decorator)

set(CMAKE_CXX_STANDARD 20)

add_executable(com-decorator
        main.cpp
        DataStream.h
        BasicStream.h
        StreamDecorator.h
        StreamFilters.h
)