# Explicação Decorator #

Disclmaimer: Projeto alterado de API para projeto no console pois tive problemas com os Beans e não conseguiria entregar a tempo.

## Explicação Decorator no projeto ##

O design pattern do decorator tem em mente não alterar a classe principal de um objeto após o mesmo já ser completo, criado os "decoradores" ou "wrappers".

Esse design segue o princípio Open/Closed, pelo qual diz que após uma classe ser escrita e fechada, ela não pode ser aberta novamente.

Este tipo de projeto é perfeito para esse tipo de design, pois como podemos ver o hambúrguer é criado e é possível adicionar infinitos adicionais para o pedido sem alterar a estrutura padrão do projeto, apenas criado um Wrapper com a sua lógica.

Sua implementação é complicada por conta das abstrações e dos conceitos de "Classe abstrata" e "Classe concreta", que podem confundir e causar diversos erros na implementação do mesmo.