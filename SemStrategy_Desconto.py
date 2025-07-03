class Pedido:
    def __init__(self, valor: float, tipo_desconto: str, valor_desconto: float = 0.0):
        self.valor = valor
        self.tipo_desconto = tipo_desconto  
        self.valor_desconto = valor_desconto

    def total_com_desconto(self) -> float:
        if self.tipo_desconto == 'fixo':
            return max(0, self.valor - self.valor_desconto)
        elif self.tipo_desconto == 'percentual':
            return self.valor * (1 - self.valor_desconto / 100)
        else:  
            return self.valor

pedido1 = Pedido(100.0, 'fixo', 10.0)
print(f"Total com desconto fixo: R$ {pedido1.total_com_desconto():.2f}")

pedido2 = Pedido(200.0, 'percentual', 15.0)
print(f"Total com desconto percentual: R$ {pedido2.total_com_desconto():.2f}")

pedido3 = Pedido(50.0, 'nenhum')
print(f"Total sem desconto: R$ {pedido3.total_com_desconto():.2f}")
