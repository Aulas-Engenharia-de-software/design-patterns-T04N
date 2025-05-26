#include <iostream>
#include <memory>
#include "BasicStream.h"
#include "StreamFilters.h"

int main() {
    // texto de teste
    std::string text = "Olá! Mensagem teste do meu trabalho de Stream de Dados com Decorator!!";
    std::cout << "Original text: " << text << "\n\n";

    // stream básico
    auto stream = std::make_unique<BasicStream>();
    std::cout << "Basic stream: " << stream->processData(text) << "\n";

    // aplicando filtro de maiúsculas
    auto upperStream = std::make_unique<UpperCaseFilter>(std::make_unique<BasicStream>());
    std::cout << "Uppercase filter: " << upperStream->processData(text) << "\n";

    // aplicando filtro de inversão
    auto reverseStream = std::make_unique<ReverseFilter>(std::make_unique<BasicStream>());
    std::cout << "Reverse filter: " << reverseStream->processData(text) << "\n";

    // aplicando filtro de substituição
    auto replaceStream = std::make_unique<ReplaceFilter>(
        std::make_unique<BasicStream>(),
        "World",
        "C++"
    );
    std::cout << "Replace filter: " << replaceStream->processData(text) << "\n";

    // combinando múltiplos filtros
    auto combinedStream = std::make_unique<UpperCaseFilter>(
        std::make_unique<ReplaceFilter>(
            std::make_unique<BasicStream>(),
            "TESTE",
            "FUNCIONANDO"
        )
    );
    std::cout << "\nCombined filters (uppercase + replace): "
              << combinedStream->processData(text) << "\n";

    return 0;
}