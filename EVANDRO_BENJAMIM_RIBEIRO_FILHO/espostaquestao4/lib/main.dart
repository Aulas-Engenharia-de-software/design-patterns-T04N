
abstract class Veiculo {
  String tipo();
}

class Carro implements Veiculo {
  @override
  String tipo() => "Carro";
}

class Moto implements Veiculo {
  @override
  String tipo() => "Moto";
}

class FabricaVeiculo {
  static Veiculo criarVeiculo(String tipo) {
    switch (tipo.toLowerCase()) {
      case 'carro':
        return Carro();
      case 'moto':
        return Moto();
      default:
        throw Exception('Tipo de veículo desconhecido: $tipo');
    }
  }
}

void main() {

  Veiculo veiculo1 = FabricaVeiculo.criarVeiculo("carro");
  print("Veículo criado: ${veiculo1.tipo()}");


  Veiculo veiculo2 = FabricaVeiculo.criarVeiculo("moto");
  print("Veículo criado: ${veiculo2.tipo()}");


  try {
    Veiculo veiculo3 = FabricaVeiculo.criarVeiculo("avião");
    print("Veículo criado: ${veiculo3.tipo()}");
  } catch (e) {
    print("Erro: $e");
  }
}
