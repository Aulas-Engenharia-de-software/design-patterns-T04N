# decorator_text_formatter.py
from abc import ABC, abstractmethod


# === INTERFACES ===
class TextComponent(ABC):
    @abstractmethod
    def render(self):
        pass


# Interface esperada por um sistema externo (Adapter será feito para ela)
class ExternalTextFormatter(ABC):
    @abstractmethod
    def formatar_texto(self):
        pass


# === COMPONENTES CONCRETOS E DECORATORS ===
class PlainText(TextComponent):
    def __init__(self, text):
        self.text = text

    def render(self):
        return self.text


class TextDecorator(TextComponent):
    def __init__(self, component):
        self._component = component

    def render(self):
        return self._component.render()


class BoldDecorator(TextDecorator):
    def render(self):
        return f"\033[1m{super().render()}\033[0m"


class ItalicDecorator(TextDecorator):
    def render(self):
        return f"\033[3m{super().render()}\033[0m"


class UnderlineDecorator(TextDecorator):
    def render(self):
        return f"\033[4m{super().render()}\033[0m"


class ColorDecorator(TextDecorator):
    def __init__(self, component, color):
        super().__init__(component)
        self._color = color

    def render(self):
        colors = {
            "vermelho": "\033[31m",
            "verde": "\033[32m",
            "azul": "\033[34m",
            "reset": "\033[0m"
        }
        return f"{colors.get(self._color, '')}{super().render()}{colors['reset']}"


# === ADAPTER ===
class TextFormatterAdapter(ExternalTextFormatter):
    def __init__(self, text_component: TextComponent):
        self.text_component = text_component

    def formatar_texto(self):
        return self.text_component.render()


# === MAIN ===
def main():
    print("\n=== Formatação de Texto (Decorator + Adapter) ===")
    print("Esta versão combina formatações e adapta ao formato esperado por outro sistema")

    text = PlainText(input("\nDigite o texto a formatar: "))
    current_component = text

    while True:
        # Usa o adapter aqui
        adapter = TextFormatterAdapter(current_component)
        print("\nFormatação atual:", adapter.formatar_texto())

        print("\nAdicionar formatação:")
        print("1 - Negrito")
        print("2 - Itálico")
        print("3 - Sublinhado")
        print("4 - Cor (vermelho/verde/azul)")
        print("5 - Reiniciar formatação")
        print("6 - Digitar novo texto")
        print("7 - Sair")

        choice = input("Escolha: ")

        if choice == "1":
            current_component = BoldDecorator(current_component)
            print("✔ Negrito aplicado")
        elif choice == "2":
            current_component = ItalicDecorator(current_component)
            print("✔ Itálico aplicado")
        elif choice == "3":
            current_component = UnderlineDecorator(current_component)
            print("✔ Sublinhado aplicado")
        elif choice == "4":
            color = input("Cor (vermelho/verde/azul): ").lower()
            if color in ["vermelho", "verde", "azul"]:
                current_component = ColorDecorator(current_component, color)
                print(f"✔ Cor {color} aplicada")
            else:
                print("Cor inválida!")
        elif choice == "5":
            current_component = text
            print("✔ Formatação reiniciada")
        elif choice == "6":
            text = PlainText(input("\nNovo texto: "))
            current_component = text
        elif choice == "7":
            print("\nResumo das vantagens:")
            print("- Combinação dinâmica de formatações (Decorator)")
            print("- Integração com sistemas externos via Adapter")
            print("- Alta flexibilidade e extensibilidade (Open/Closed)")
            break
        else:
            print("Opção inválida!")


if __name__ == "__main__":
    main()
