# Sistema de Formatação de Texto

## Objetivo  
Este projeto apresenta duas implementações para formatar texto no terminal utilizando códigos ANSI, demonstrando a diferença entre uma solução ingênua (naive) e uma abordagem orientada a padrões de projeto (Decorator + Adapter).

---

## Descrição dos Códigos

### NaiveTextFormatter  
Implementa uma classe simples com métodos fixos para aplicar formatações pré-definidas (negrito, itálico, sublinhado e suas combinações).  
É uma solução direta, porém limitada: cada combinação precisa ser implementada manualmente, resultando em código repetitivo e pouca flexibilidade.

### DecoratorAdapterTextFormatter  
Utiliza os padrões de projeto **Decorator** e **Adapter** para criar um sistema flexível e extensível de formatação de texto.  
- **Decorator**: Permite combinar formatações dinamicamente, aplicando camadas (negrito, itálico, sublinhado, cor) de forma modular.  
- **Adapter**: Facilita a integração com sistemas externos, adaptando a interface para um formato esperado sem alterar a implementação dos decoradores.

---

## Comparação entre NaiveTextFormatter e DecoratorAdapterTextFormatter

| Aspecto                  | NaiveTextFormatter                         | DecoratorAdapterTextFormatter                     |
|--------------------------|--------------------------------------------|--------------------------------------------------|
| Flexibilidade            | Limitada a combinações pré-definidas       | Combinação dinâmica e ilimitada de formatações   |
| Extensibilidade          | Baixa — novas formatações exigem mudanças | Alta — novas formatações adicionadas com Decorator |
| Reuso                    | Código repetitivo para cada estilo          | Reuso eficiente com composição de decoradores    |
| Integração com sistemas  | Nenhuma integração externa                   | Adapter para compatibilidade com sistemas externos|
| Complexidade             | Simples e direta                            | Modular e orientada a padrões de projeto         |

---

## Resumo

Esses exemplos ilustram a evolução de uma implementação direta e limitada para uma solução mais robusta e profissional usando padrões de projeto. O uso do **Decorator** permite compor formatos complexos de forma elegante, enquanto o **Adapter** promove compatibilidade e flexibilidade na integração com outros sistemas.
