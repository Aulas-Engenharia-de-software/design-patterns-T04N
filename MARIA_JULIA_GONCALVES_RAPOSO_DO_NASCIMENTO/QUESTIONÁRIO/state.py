from abc import ABC, abstractmethod

# INTERFACE ESTADO PORTA
class EstadoPorta(ABC):
    @abstractmethod
    def abrir(self, porta):
        pass

    @abstractmethod
    def fechar(self, porta):
        pass

    @abstractmethod
    def trancar(self, porta):
        pass

    @abstractmethod
    def destrancar(self, porta):
        pass

# ESTADO ABERTA
class Aberta(EstadoPorta):
    def abrir(self, porta):
        print("A porta já está aberta.")

    def fechar(self, porta):
        print("Fechando a porta...")
        porta.estado = Fechada()

    def trancar(self, porta):
        print("Não é possível trancar a porta aberta. Feche-a primeiro.")

    def destrancar(self, porta):
        print("A porta não está trancada.")

# ESTADO FECHADO
class Fechada(EstadoPorta):
    def abrir(self, porta):
        print("Abrindo a porta...")
        porta.estado = Aberta()

    def fechar(self, porta):
        print("A porta já está fechada.")

    def trancar(self, porta):
        print("Trancando a porta...")
        porta.estado = Trancada()

    def destrancar(self, porta):
        print("A porta não está trancada.")

# ESTADO TRANCADA
class Trancada(EstadoPorta):
    def abrir(self, porta):
        print("A porta está trancada. Destranque antes de abrir.")

    def fechar(self, porta):
        print("A porta já está fechada e trancada.")

    def trancar(self, porta):
        print("A porta já está trancada.")

    def destrancar(self, porta):
        print("Destrancando a porta...")
        porta.estado = Fechada()

# CONTEXTO PORTA
class Porta:
    def __init__(self):
        self.estado = Fechada()  # Estado inicial

    def abrir(self):
        self.estado.abrir(self)

    def fechar(self):
        self.estado.fechar(self)

    def trancar(self):
        self.estado.trancar(self)

    def destrancar(self):
        self.estado.destrancar(self)

if __name__ == "__main__":
    porta = Porta()

    porta.abrir()      # Abrindo a porta
    porta.trancar()    # Não é possível trancar a porta aberta. Fechar primeiro.
    porta.fechar()     # Fechando a porta
    porta.trancar()    # Trancando a porta
    porta.abrir()      # A porta está trancada. Destranque antes de abrir
    porta.destrancar() # Destrancando a porta
    porta.abrir()      # Abrindo a porta



##A porta pode estar em três estados: aberta, fechada ou trancada. 
# Cada estado define o que pode ou não ser feito — por exemplo, não 
# dá para abrir uma porta trancada, ou trancar uma porta aberta. O 
# padrão State organiza isso criando uma classe para cada estado, 
# que sabe como responder às ações (abrir, fechar, trancar, destrancar). 
# A porta mantém qual é o estado atual e, quando uma ação acontece, ela 
# delega para o estado cuidar da resposta. Assim, fica fácil mudar o 
# comportamento da porta só mudando o estado, sem precisar de muitos 
# “if” espalhados no código