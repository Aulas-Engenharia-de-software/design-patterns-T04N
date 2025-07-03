class VendingMachine:
    def __init__(self):
        self.state = "NO_COIN"  

    def insert_coin(self):
        if self.state == "NO_COIN":
            print("Moeda inserida.")
            self.state = "HAS_COIN"
        elif self.state == "HAS_COIN":
            print("Moeda já inserida.")
        elif self.state == "SOLD":
            print("Aguarde, estamos entregando o produto.")

    def eject_coin(self):
        if self.state == "NO_COIN":
            print("Nenhuma moeda para devolver.")
        elif self.state == "HAS_COIN":
            print("Moeda devolvida.")
            self.state = "NO_COIN"
        elif self.state == "SOLD":
            print("Produto já foi selecionado. Não é possível devolver a moeda.")

    def select_product(self):
        if self.state == "NO_COIN":
            print("Insira uma moeda primeiro.")
        elif self.state == "HAS_COIN":
            print("Produto selecionado.")
            self.state = "SOLD"
        elif self.state == "SOLD":
            print("Entregando produto...")
            self.state = "NO_COIN"


if __name__ == "__main__":
    machine = VendingMachine()

    machine.select_product()     
    machine.insert_coin()        
    machine.insert_coin()       
    machine.select_product()     
    machine.insert_coin()        
    machine.select_product()     
    machine.eject_coin()         
