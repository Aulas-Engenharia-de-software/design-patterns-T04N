from abc import ABC, abstractmethod

# 1.INTERFACE DO DESING
class EstrategiaEntrega(ABC):
    @abstractmethod
    def entregar(self):
        pass

# 2. ESTRATEGIAS CONCRETAS COM RETORNOS DIFERENTES
class EntregaCarro(EstrategiaEntrega):
    def entregar(self):
        return "Entrega realizada com CARRO."

class EntregaMoto(EstrategiaEntrega):
    def entregar(self):
        return "Entrega realizada com MOTO."

class EntregaBicicleta(EstrategiaEntrega):
    def entregar(self):
        return "Entrega realizada com BICICLETA."

# 3. CLASSE QUE USA A ESTRATEGIA
class Entrega:
    def __init__(self, estrategia: EstrategiaEntrega):
        self.estrategia = estrategia

    def executar(self):
        return self.estrategia.entregar()

if __name__ == "__main__":
    entrega1 = Entrega(EntregaCarro())
    print(entrega1.executar())

    entrega2 = Entrega(EntregaMoto())
    print(entrega2.executar())

    entrega3 = Entrega(EntregaBicicleta())
    print(entrega3.executar())

## EXPLICAÇÃO 
# O Strategy Pattern permite definir uma família de algoritmos (ou 
# comportamentos), encapsulá-los em classes separadas e torná-los 
# intercambiáveis dentro do código que os usa. No exemplo, cada tipo 
# de entrega (carro, moto, bicicleta) é uma estratégia diferente que 
# implementa o método entregar(). A classe Entrega recebe uma dessas 
# estratégias e executa a entrega sem saber os detalhes de como ela é 
# feita. Isso deixa o sistema flexível para trocar a forma de entrega
# em tempo de execução, facilitando a manutenção e a expansão com 
# novos tipos de entrega sem precisar modificar o código principal.