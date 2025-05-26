# Explicação Projeto Strategy #

## Aplicação Strategy ##

O padrão de projeto Strategy permite que você defina um conjunto de algoritmos e os troque dinamicamente durante a execução do programa. Em vez de ter um comportamento fixo dentro de uma classe, ele possibilita que diferentes abordagens sejam escolhidas conforme a necessidade, o que aumenta a flexibilidade e respeita o princípio da responsabilidade única.

Por exemplo, no nosso projeto, criamos uma calculadora de frete que aplica regras de cálculo distintas para cada transportadora (Sedex, PAC, Motoboy). Cada transportadora é uma estratégia de cálculo específica, implementada como uma classe que segue a mesma interface (FreteStrategy).

Essa abordagem elimina a necessidade de várias estruturas condicionais (como if-else ou switch) e segue o Princípio Aberto/Fechado. Isso significa que podemos adicionar novas estratégias de frete sem alterar o código existente.

Além disso, o padrão Strategy mantém o contexto (a CalculadoraFrete) separado da lógica de cada algoritmo, tornando o sistema mais modular, fácil de testar e expandir.

Embora o conceito seja simples, a implementação inicial pode gerar dúvidas sobre o uso de interfaces, como injetar a estratégia e como dividir adequadamente as responsabilidades.