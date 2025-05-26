# singleton_license.py
class LicenseManager:
    _instance = None
    _license_key = None
    _max_accesses = 0
    _remaining_accesses = 0

    def __new__(cls, license_key=None, max_accesses=0):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            if license_key:
                cls._instance._license_key = license_key
                cls._instance._max_accesses = max_accesses
                cls._instance._remaining_accesses = max_accesses
                print("🔑 Licença inicial configurada com sucesso!")
        elif license_key and license_key != cls._instance._license_key:
            print("⚠️ AVISO: Sistema já possui uma licença ativa. Nova chave ignorada!")
        return cls._instance

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
    print("\n=== 🔒 Sistema de Licenças (Com Singleton) ===")
    print("💡 Esta versão garante uma única instância consistente")

    # Configuração inicial
    print("\n📝 Configuração Inicial:")
    key = input("Digite a chave de licença: ") or "ABC123"
    accesses = int(input("Número de acessos: ") or 3)
    manager1 = LicenseManager(key, accesses)

    # Tentativa de criar nova instância
    print("\n⚠️ Tentando criar segunda instância...")
    key2 = input("Digite outra chave: ") or "XYZ789"
    accesses2 = int(input("Número de acessos: ") or 5)
    manager2 = LicenseManager(key2, accesses2)

    while True:
        print("\n🔧 Menu:")
        print("1. Usar acesso")
        print("2. Adicionar acessos")
        print("3. Ver informações")
        print("4. Verificar instâncias")
        print("5. Sair")

        choice = input("Escolha: ")

        if choice == "1":
            manager1.use_access()
        elif choice == "2":
            qty = int(input("Quantidade: "))
            manager1.add_accesses(qty)
        elif choice == "3":
            manager1.show_info()
        elif choice == "4":
            print("\n🔍 Verificação de Instâncias:")
            print(f"manager1 é manager2? {manager1 is manager2}")
            print("Ambos referenciam o mesmo objeto Singleton")
        elif choice == "5":
            print("\n💡 Vantagens desta abordagem:")
            print("- Garante uma única instância em todo o sistema")
            print("- Estado global consistente")
            print("- Controle centralizado da licença")
            break
        else:
            print("Opção inválida!")


if __name__ == "__main__":
    main()