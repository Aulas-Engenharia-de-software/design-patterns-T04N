#include <iostream>
#include <string>
#include <memory>

class CafeComponent {
public:
    virtual double getPreco() const = 0;
    virtual std::string getDescricao() const = 0;
    virtual ~CafeComponent() = default;
};

class CafeSimples : public CafeComponent {
public:
    double getPreco() const override {
        return 2.0;
    }

    std::string getDescricao() const override {
        return "Café";
    }
};

// decorator base
class CafeDecorator : public CafeComponent {
protected:
    std::unique_ptr<CafeComponent> cafe;

public:
    explicit CafeDecorator(std::unique_ptr<CafeComponent> c) : cafe(std::move(c)) {}

    double getPreco() const override {
        return cafe->getPreco();
    }

    std::string getDescricao() const override {
        return cafe->getDescricao();
    }
};

// decorator concreto aplicado para leite
class ComLeite : public CafeDecorator {
public:
    explicit ComLeite(std::unique_ptr<CafeComponent> c) : CafeDecorator(std::move(c)) {}

    double getPreco() const override {
        return cafe->getPreco() + 0.5;
    }

    std::string getDescricao() const override {
        return cafe->getDescricao() + " com leite";
    }
};

// decorator concreto aplicado para açúcar
class ComAcucar : public CafeDecorator {
public:
    explicit ComAcucar(std::unique_ptr<CafeComponent> c) : CafeDecorator(std::move(c)) {}

    double getPreco() const override {
        return cafe->getPreco() + 0.3;
    }

    std::string getDescricao() const override {
        return cafe->getDescricao() + " com açúcar";
    }
};

int main() {
    auto cafeSimples = std::make_unique<CafeSimples>();
    std::cout << cafeSimples->getDescricao() << " - R$ " << cafeSimples->getPreco() << std::endl;

    auto cafeComLeite = std::make_unique<ComLeite>(std::make_unique<CafeSimples>());
    std::cout << cafeComLeite->getDescricao() << " - R$ " << cafeComLeite->getPreco() << std::endl;

    auto cafeCompleto = std::make_unique<ComAcucar>(
        std::make_unique<ComLeite>(std::make_unique<CafeSimples>())
    );
    std::cout << cafeCompleto->getDescricao() << " - R$ " << cafeCompleto->getPreco() << std::endl;

    return 0;
}