# Design Patterns Demo

> Objetivo: mostrar de forma visual a diferenca entre solucoes sem nenhuma design pattern e soilucoes que aplicam-os.

---

## Funcionalidades

| pattern        | Como e demonstrado no projeto                                                               |
| ------------- | ------------------------------------------------------------------------------------------- |
| **Decorator** | Permite empilhar *condimentos* (leite, chocolate etc.) em uma bebida sem mamar com explosao de subclasses |
| **Singleton** | Garante uma unica instancia de config global (taxa, nome da loja) em toda a aplicacao |

Cada padrao possui **duas rotas**:

| Rota       | O que exibe                            |
| ---------- | -------------------------------------- |
| `/naive`   | implementacao **ingenua**     |
| `/pattern` | Implementcao **com o Design Pattern** |

---

## Como Executar

2. **Instale** as deps (projeto feito com bun):

   ```bash
   bun i
   ```
3. **Inicie** o exemplo:

   ```bash
   bun run dev
   ```
4. Acesse no navegador:

   * `http://localhost:3000/naive`  – versao sem patterns
   * `http://localhost:3000/pattern` – versao com Decorator + Singleton

---

## explicacao rapida dos codigos

### Decorator

* **Ingenuo**: para cada combinacao de bebida + extra e criada uma nova subclasse, causando crescimento exponencial.
* **Com Pattern**: as classes `Milk`, `Chocolate` etc. estendem um `CondimentDecorator` e recebem outra `Beverage` como argumento, permitindo composicao dinamica (`new Chocolate(new Milk(new Espresso()))`).

### Singleton

* **Ingenuo**: qualquer `import` pode criar `new AppConfigNaive()`, gerando varias isntancias e estados diferentes.
* **Com Pattern**: `AppConfig.instance` entrega sempre a mesma intancia; o constructor e privado.

---

## stack

* **Next.js** 14
* **TypeScript**
* **shadcn UI**

---
