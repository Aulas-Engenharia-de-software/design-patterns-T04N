from abc import ABC, abstractmethod

class DescontoStrategy(ABC):
    @abstractmethod
    def calcular(self, valor: float) -> float:
        pass

class DescontoFixo(DescontoStrategy):
    def __init__(self, desconto: float):
        self.desconto = desconto

    def calcular(self, valor: float) -> float:
        return max(0, valor - self.desconto)

class DescontoPercentual(DescontoStrategy):
    def __init__(self, percentual: float):
        self.percentual = percentual

    def calcular(self, valor: float) -> float:
        return valor * (1 - self.percentual / 100)

class SemDesconto(DescontoStrategy):
    def calcular(self, valor: float) -> float:
        return valor

class Pedido:
    def __init__(self, valor: float, estrategia: DescontoStrategy):
        self.valor = valor
        self.estrategia = estrategia

    def total_com_desconto(self) -> float:
        return self.estrategia.calcular(self.valor)

pedido1 = Pedido(100.0, DescontoFixo(10.0))
print(f"Total com desconto fixo: R$ {pedido1.total_com_desconto():.2f}")

pedido2 = Pedido(200.0, DescontoPercentual(15))
print(f"Total com desconto percentual: R$ {pedido2.total_com_desconto():.2f}")

pedido3 = Pedido(50.0, SemDesconto())
print(f"Total sem desconto: R$ {pedido3.total_com_desconto():.2f}")
