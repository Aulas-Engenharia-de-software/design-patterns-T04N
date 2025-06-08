from abc import ABC, abstractmethod

# INTERFACE OBSERVER
class Observer(ABC):
    @abstractmethod
    def update(self, temperatura):
        pass

# INTERFACE SUBJECT
class Subject(ABC):
    @abstractmethod
    def registrar_observer(self, observer: Observer):
        pass

    @abstractmethod
    def remover_observer(self, observer: Observer):
        pass

    @abstractmethod
    def notificar_observers(self):
        pass

# SENSOR DE TEMPERATURA (SUBJECT)
class SensorTemperatura(Subject):
    def __init__(self):
        self._observers = []
        self._temperatura = None

    def registrar_observer(self, observer: Observer):
        self._observers.append(observer)

    def remover_observer(self, observer: Observer):
        self._observers.remove(observer)

    def notificar_observers(self):
        for observer in self._observers:
            observer.update(self._temperatura)

    def set_temperatura(self, temperatura):
        print(f"Sensor: temperatura atualizada para {temperatura}°C")
        self._temperatura = temperatura
        self.notificar_observers()

# DISPLAY PRA MOSTRAR TEMPERATURA
class DisplayTemperatura(Observer):
    def __init__(self, nome):
        self.nome = nome

    def update(self, temperatura):
        print(f"{self.nome} exibindo temperatura: {temperatura}°C")


if __name__ == "__main__":
    sensor = SensorTemperatura()

    display1 = DisplayTemperatura("Display Sala")
    display2 = DisplayTemperatura("Display Cozinha")
    display3 = DisplayTemperatura("Display Quarto")

    sensor.registrar_observer(display1)
    sensor.registrar_observer(display2)
    sensor.registrar_observer(display3)

    sensor.set_temperatura(25)
    sensor.set_temperatura(30)

    sensor.remover_observer(display2)

    sensor.set_temperatura(28)


## O padrão Observer permite que um objeto (no caso, o sensor de 
# temperatura) informe automaticamente a vários outros objetos 
# (os displays) sempre que seu estado mudar, sem que ele precise 
# saber detalhes sobre esses objetos. Os displays “se inscrevem” 
# para receber essas atualizações do sensor. Quando o sensor detecta 
# uma nova temperatura, ele notifica todos os displays cadastrados,
# que então mostram a nova temperatura. Isso facilita porque o sensor 
# e os displays ficam desacoplados — o sensor não precisa conhecer cada 
# display diretamente, e é fácil adicionar ou remover displays sem 
# mexer no sensor