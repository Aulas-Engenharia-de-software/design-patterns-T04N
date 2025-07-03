from abc import ABC, abstractmethod

class State(ABC):
    @abstractmethod
    def insert_coin(self):
        pass

    @abstractmethod
    def eject_coin(self):
        pass

    @abstractmethod
    def select_product(self):
        pass

class NoCoinState(State):
    def __init__(self, machine):
        self.machine = machine

    def insert_coin(self):
        print("Moeda inserida.")
        self.machine.set_state(self.machine.has_coin_state)

    def eject_coin(self):
        print("Nenhuma moeda para devolver.")

    def select_product(self):
        print("Insira uma moeda primeiro.")

class HasCoinState(State):
    def __init__(self, machine):
        self.machine = machine

    def insert_coin(self):
        print("Moeda já inserida.")

    def eject_coin(self):
        print("Moeda devolvida.")
        self.machine.set_state(self.machine.no_coin_state)

    def select_product(self):
        print("Produto selecionado.")
        self.machine.set_state(self.machine.sold_state)

class SoldState(State):
    def __init__(self, machine):
        self.machine = machine

    def insert_coin(self):
        print("Aguarde, já estamos entregando o produto.")

    def eject_coin(self):
        print("Produto já foi selecionado. Não é possível devolver a moeda.")

    def select_product(self):
        print("Entregando produto...")
        self.machine.set_state(self.machine.no_coin_state)

class VendingMachine:
    def __init__(self):
        self.no_coin_state = NoCoinState(self)
        self.has_coin_state = HasCoinState(self)
        self.sold_state = SoldState(self)

        self.state = self.no_coin_state

    def set_state(self, state):
        self.state = state

    def insert_coin(self):
        self.state.insert_coin()

    def eject_coin(self):
        self.state.eject_coin()

    def select_product(self):
        self.state.select_product()

if __name__ == "__main__":
    machine = VendingMachine()

    machine.select_product()
    machine.insert_coin()
    machine.insert_coin()
    machine.select_product()
    machine.insert_coin()
    machine.select_product()
    machine.eject_coin()
