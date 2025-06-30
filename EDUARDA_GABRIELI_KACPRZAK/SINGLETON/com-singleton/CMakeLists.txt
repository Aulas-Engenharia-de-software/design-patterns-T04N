cmake_minimum_required(VERSION 3.31)
project(com-singleton)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


add_executable(com-singleton main.cpp Logger.cpp Logger.hpp)

