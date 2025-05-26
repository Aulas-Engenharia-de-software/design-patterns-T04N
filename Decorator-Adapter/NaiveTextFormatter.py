# naive_text_formatter.py
class TextFormatter:
    def __init__(self, text):
        self.text = text

    def plain(self):
        return self.text

    def bold(self):
        return f"\033[1m{self.text}\033[0m"

    def italic(self):
        return f"\033[3m{self.text}\033[0m"

    def underline(self):
        return f"\033[4m{self.text}\033[0m"

    def bold_italic(self):
        return f"\033[1;3m{self.text}\033[0m"

    def bold_underline(self):
        return f"\033[1;4m{self.text}\033[0m"

    def italic_underline(self):
        return f"\033[3;4m{self.text}\033[0m"

    def bold_italic_underline(self):
        return f"\033[1;3;4m{self.text}\033[0m"


def main():
    print("\n=== Formatação de Texto (Versão Ingênua) ===")
    print("Esta versão tem formatações pré-definidas e limitadas")

    text = input("\nDigite o texto a formatar: ")
    formatter = TextFormatter(text)

    while True:
        print("\nOpções de formatação:")
        print("1 - Negrito")
        print("2 - Itálico")
        print("3 - Sublinhado")
        print("4 - Negrito + Itálico")
        print("5 - Negrito + Sublinhado")
        print("6 - Itálico + Sublinhado")
        print("7 - Todos (Negrito+Itálico+Sublinhado)")
        print("8 - Digitar novo texto")
        print("9 - Sair")

        choice = input("Escolha: ")

        if choice == "1":
            print("Resultado:", formatter.bold())
        elif choice == "2":
            print("Resultado:", formatter.italic())
        elif choice == "3":
            print("Resultado:", formatter.underline())
        elif choice == "4":
            print("Resultado:", formatter.bold_italic())
        elif choice == "5":
            print("Resultado:", formatter.bold_underline())
        elif choice == "6":
            print("Resultado:", formatter.italic_underline())
        elif choice == "7":
            print("Resultado:", formatter.bold_italic_underline())
        elif choice == "8":
            text = input("\nNovo texto: ")
            formatter = TextFormatter(text)
        elif choice == "9":
            print("\nLimitações desta versão:")
            print("- Combinações fixas (não pode criar novas sem modificar o código)")
            print("- Código repetitivo para cada combinação")
            break
        else:
            print("Opção inválida!")


if __name__ == "__main__":
    main()