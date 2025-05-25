# CLASSES CONCRETAS
class Carro:
    def entregar(self):
        return "Entrega realizada com CARRO."

class Moto:
    def entregar(self):
        return "Entrega realizada com MOTO."

class Bicicleta:
    def entregar(self):
        return "Entrega realizada com BICICLETA."

# CÓDIGO CLIENTE COM LÓGICA DE ESCOLHA EMBUTIDA
def realizar_entrega(tipo: str):
    if tipo == 'carro':
        transporte = Carro()
    elif tipo == 'moto':
        transporte = Moto()
    elif tipo == 'bike':
        transporte = Bicicleta()
    else:
        return "Tipo de transporte inválido!"

    return transporte.entregar()

if __name__ == "__main__":
    print(realizar_entrega('carro'))
    print(realizar_entrega('moto'))
    print(realizar_entrega('bike'))


## EXPLICAÇÃO 
# No código sem Factory Method, a função realizar_entrega é responsável 
# por criar os objetos de transporte (Carro, Moto, Bicicleta) usando 
# if com strings. Isso deixa o código mais difícil de manter e crescer,
# porque toda vez que você quiser adicionar um novo transporte (como 
# um Drone), vai ter que abrir e mexer nessa função, o que pode causar 
# erros e repetir código. O Factory Method resolve isso separando a 
# parte que cria o transporte da parte que usa, colocando a criação 
# em fábricas específicas. Assim, o código cliente não precisa mais 
# saber como criar o objeto — ele só pede para a fábrica criar. Isso 
# deixa o sistema mais organizado, flexível e fácil de expandir, 
# seguindo boas práticas como o princípio aberto/fechado (aberto para 
# extensão, fechado para modificação).