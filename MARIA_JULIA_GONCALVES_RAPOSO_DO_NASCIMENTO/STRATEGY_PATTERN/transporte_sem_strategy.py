# CLASSES COMPLETAS COM LOGICA IMPLEMENTADA
class Entrega:
    def __init__(self, tipo):
        self.tipo = tipo

    def entregar(self):
        if self.tipo == "carro":
            return "Entrega realizada com CARRO."
        elif self.tipo == "moto":
            return "Entrega realizada com MOTO."
        elif self.tipo == "bicicleta":
            return "Entrega realizada com BICICLETA."
        else:
            return "Tipo de entrega inválido."

if __name__ == "__main__":
    entrega1 = Entrega("carro")
    print(entrega1.entregar())

    entrega2 = Entrega("moto")
    print(entrega2.entregar())

    entrega3 = Entrega("bicicleta")
    print(entrega3.entregar())

## EXPLICAÇÃO
# Neste código, a classe Entrega controla diretamente todos os tipos 
# de entrega dentro do método entregar(), usando if para decidir o 
# que fazer conforme o tipo passado na criação do objeto. Isso 
# significa que a lógica de como cada entrega é feita está toda 
# misturada numa única classe e método, tornando o código menos 
# organizado e mais difícil de modificar ou expandir. Se quiser
# adicionar um novo tipo de entrega, terá que editar esse método, o 
# que pode causar erros e aumentar o acoplamento entre as 
# funcionalidades.
