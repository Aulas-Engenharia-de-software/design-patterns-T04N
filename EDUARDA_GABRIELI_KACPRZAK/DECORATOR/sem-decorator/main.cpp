#include <iostream>
#include <string>
#include <algorithm>

class DataStream {
private:
    std::string data;

public:
    DataStream(const std::string& input) : data(input) {}

    // métodos para aplicar diferentes filtros
    void toUpperCase() {
        std::transform(data.begin(), data.end(), data.begin(), ::toupper);
    }

    void reverse() {
        std::reverse(data.begin(), data.end());
    }

    void replaceWord(const std::string& oldWord, const std::string& newWord) {
        size_t pos = 0;
        while ((pos = data.find(oldWord, pos)) != std::string::npos) {
            data.replace(pos, oldWord.length(), newWord);
            pos += newWord.length();
        }
    }

    // método para obter o dado processado !!
    std::string getData() const {
        return data;
    }
};

int main() {
    DataStream stream("Olá! Mensagem teste do meu trabalho de Stream de Dados com Decorator!!");

    std::cout << "Original: " << stream.getData() << std::endl;

    stream.toUpperCase();
    std::cout << "Maiúsculas: " << stream.getData() << std::endl;

    stream.reverse();
    std::cout << "Invertido: " << stream.getData() << std::endl;

    DataStream stream2("Adoro comer uva.");
    std::cout << "\nOriginal: " << stream2.getData() << std::endl;
    
    // substituindo palavras ((extra
    stream2.replaceWord("uva", "bolo");
    std::cout << "Após substituição: " << stream2.getData() << std::endl;

    return 0;
}