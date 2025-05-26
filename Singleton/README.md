# Gerenciamento de Licenças de Software

## Objetivo
Este projeto apresenta duas implementações para gerenciamento de licenças de software:

- **NaiveLicense** — uma versão simples que permite múltiplas instâncias independentes, cada uma com seu próprio estado de licença e acessos;
- **SingletonLicense** — uma versão que usa o padrão Singleton para garantir que exista apenas uma instância única e consistente do gerenciador de licença durante a execução.

---

## Comparação entre NaiveLicense e SingletonLicense

| Aspecto                 | NaiveLicense                         | SingletonLicense                               |
|-------------------------|------------------------------------|-----------------------------------------------|
| Controle de instância   | Permite múltiplas instâncias independentes | Garante única instância (Singleton)          |
| Controle de estado      | Cada instância tem seu próprio estado | Estado centralizado e compartilhado           |
| Funcionalidades         | Validação de chave, controle e adição de acessos | Mesmas funcionalidades com instância única   |
| Consistência            | Pode haver inconsistência entre instâncias | Estado consistente e unificado                 |
| Complexidade da implementação | Simples, sem controle rigoroso de instância | Mais elaborado, com controle via `__new__`   |
| Uso prático             | Fácil para cenários simples ou testes | Ideal para controle centralizado de licença  |

---

## Resumo
Este projeto mostra como o uso do padrão **Singleton** melhora o controle e a consistência em sistemas que devem ter um único gerenciador global de recursos, como uma licença de software.

Enquanto a versão ingênua permite múltiplas instâncias com estados separados, a versão com Singleton garante uma única instância centralizada.
