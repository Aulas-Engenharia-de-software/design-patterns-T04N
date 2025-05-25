from abc import ABC, abstractmethod

# PRODUTO: INTERFACE COMUM
class Transporte(ABC):
    @abstractmethod
    def entregar(self):
        pass

# PRODUTOS COMPLETOS
class Carro(Transporte):
    def entregar(self):
        return "Entrega realizada com CARRO."

class Moto(Transporte):
    def entregar(self):
        return "Entrega realizada com MOTO."

class Bicicleta(Transporte):
    def entregar(self):
        return "Entrega realizada com BICICLETA."

# CREATOR: FACTORY BASE
class TransporteFactory(ABC):
    @abstractmethod
    def criar_transporte(self) -> Transporte:
        pass

    def iniciar_entrega(self):
        transporte = self.criar_transporte()
        return transporte.entregar()

# CREATOR CONCRETOS
class CarroFactory(TransporteFactory):
    def criar_transporte(self) -> Transporte:
        return Carro()

class MotoFactory(TransporteFactory):
    def criar_transporte(self) -> Transporte:
        return Moto()

class BicicletaFactory(TransporteFactory):
    def criar_transporte(self) -> Transporte:
        return Bicicleta()

# CÓDIGO CLIENTE
def realizar_entrega(factory: TransporteFactory):
    resultado = factory.iniciar_entrega()
    print(resultado)


if __name__ == "__main__":
    realizar_entrega(CarroFactory())
    realizar_entrega(MotoFactory())
    realizar_entrega(BicicletaFactory())


## EXPLICAÇÃO
# O padrão Factory Method serve para criar objetos de forma flexível, 
# sem o código principal saber exatamente qual classe está sendo usada.
# No código de exemplo, temos uma interface Transporte com um método 
# entregar(), e três classes (Carro, Moto e Bicicleta) que implementam
# esse método de formas diferentes. Depois, temos uma fábrica abstrata
# chamada TransporteFactory, que define o método criar_transporte(), 
# e fábricas concretas (CarroFactory, MotoFactory e BicicletaFactory) 
# que sabem qual objeto criar. No final, o código cliente chama 
# realizar_entrega() e recebe o transporte pronto, sem saber se foi 
# um carro, moto ou bicicleta — tudo isso graças ao uso do Factory 
# Method, que separa a lógica de criação da lógica de uso.
