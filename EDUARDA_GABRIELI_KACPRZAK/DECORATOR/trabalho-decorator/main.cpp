#include <iostream>
#include <string>

class Cafe {
private:
    bool temLeite;
    bool temAcucar;
    double preco;

public:
    Cafe() : temLeite(false), temAcucar(false), preco(2.0) {}

    void adicionarLeite() {
        temLeite = true;
        preco += 0.5;
    }

    void adicionarAcucar() {
        temAcucar = true;
        preco += 0.3;
    }

    double getPreco() const {
        return preco;
    }

    void descricao() const {
        std::cout << "Café";
        if (temLeite) std::cout << " com leite";
        if (temAcucar) std::cout << " com açúcar";
        std::cout << " - R$ " << preco << std::endl;
    }
};

// Exemplo de uso
int main() {
    // Café simples
    Cafe cafe1;
    cafe1.descricao();

    // Café com leite
    Cafe cafe2;
    cafe2.adicionarLeite();
    cafe2.descricao();

    // Café com leite e açúcar
    Cafe cafe3;
    cafe3.adicionarLeite();
    cafe3.adicionarAcucar();
    cafe3.descricao();

    return 0;
}