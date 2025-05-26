# naive_license.py
class LicenseManager:
    def __init__(self, license_key=None, max_accesses=0):
        self._license_key = license_key
        self._max_accesses = max_accesses
        self._remaining_accesses = max_accesses
        print(f"🔑 Nova instância criada com chave: {license_key}")

    def validate_license(self):
        if self._remaining_accesses <= 0:
            print("❌ Licença esgotada!")
            return False
        return self._license_key == "ABC123"

    def use_access(self):
        if self.validate_license():
            self._remaining_accesses -= 1
            print(f"✅ Acesso concedido! Restam {self._remaining_accesses} acessos.")
            return True
        print("❌ Acesso negado!")
        return False

    def add_accesses(self, quantity):
        self._remaining_accesses += quantity
        print(f"➡️ Adicionados {quantity} acessos. Total: {self._remaining_accesses}")

    def show_info(self):
        print("\nℹ️ Informações da Licença:")
        print(f"Chave: {self._license_key}")
        print(f"Acessos totais: {self._max_accesses}")
        print(f"Acessos restantes: {self._remaining_accesses}")


def main():
    print("\n=== 🔒 Sistema de Licenças (Versão Ingênua) ===")
    print("💡 Esta versão permite múltiplas instâncias independentes")

    # Configuração inicial
    print("\n📝 Configuração Inicial - Instância 1:")
    key1 = input("Digite a chave de licença: ") or "ABC123"
    accesses1 = int(input("Número de acessos: ") or 3)
    manager1 = LicenseManager(key1, accesses1)

    print("\n📝 Configuração Inicial - Instância 2:")
    key2 = input("Digite outra chave: ") or "XYZ789"
    accesses2 = int(input("Número de acessos: ") or 5)
    manager2 = LicenseManager(key2, accesses2)

    while True:
        print("\n🔧 Menu Principal:")
        print("1. Gerenciar Instância 1")
        print("2. Gerenciar Instância 2")
        print("3. Comparar instâncias")
        print("4. Sair")

        main_choice = input("Escolha: ")

        if main_choice in ["1", "2"]:
            manager = manager1 if main_choice == "1" else manager2

            while True:
                print(f"\n🔧 Gerenciando Instância {main_choice}:")
                print("1. Usar acesso")
                print("2. Adicionar acessos")
                print("3. Ver informações")
                print("4. Voltar")

                choice = input("Escolha: ")

                if choice == "1":
                    manager.use_access()
                elif choice == "2":
                    qty = int(input("Quantidade de acessos a adicionar: "))
                    manager.add_accesses(qty)
                elif choice == "3":
                    manager.show_info()
                elif choice == "4":
                    break
                else:
                    print("Opção inválida!")

        elif main_choice == "3":
            print("\n🔍 Comparação das Instâncias:")
            print("=== Instância 1 ===")
            manager1.show_info()
            print("\n=== Instância 2 ===")
            manager2.show_info()
            print(f"\nAs instâncias são o mesmo objeto? {manager1 is manager2}")

        elif main_choice == "4":
            print("\n💡 Problemas desta abordagem:")
            print("- Múltiplas instâncias com estados diferentes")
            print("- Dificuldade para manter consistência")
            print("- Controle de licença não centralizado")
            break

        else:
            print("Opção inválida!")


if __name__ == "__main__":
    main()