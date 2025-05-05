## Passo a passo para utilização do Git

Siga os passos abaixo para entregar o projeto corretamente:

### 1. Clone o repositório

```bash
git clone https://github.com/Aulas-Engenharia-de-software/design-patterns-T04N
```

---

### 2. Crie sua branch com o seu nome

Substitua `SEU_NOME` pelo seu nome completo, utilizando letras **maiúsculas** e separando com underline (`_`).

```bash
git checkout -b feature/SEU_NOME
```

**Exemplo:**

```bash
git checkout -b feature/LUCAS_RODRIGUES_MARTINS_OLIVEIRA
```

---

### 3. Dentro da branch, crie uma pasta com o seu nome

Todo o seu trabalho deve estar **dentro dessa pasta**, nomeada com o seu nome completo no mesmo padrão:

**Exemplo de pasta:** `LUCAS_RODRIGUES_MARTINS_OLIVEIRA`

---

### 4. Adicione os arquivos do seu trabalho

```bash
git add .
```

---

### 5. Faça o commit e envie para o repositório remoto

Utilize uma mensagem de commit descritiva:

```bash
git commit -m "feat: adicionando exemplos de Singleton"
git push origin feature/SEU_NOME
```

**Exemplo:**

```bash
git push origin feature/LUCAS_RODRIGUES_MARTINS_OLIVEIRA
```

---

## 6. Após o trabalho estar concluído:
- Abrir um pull request para a branch MASTER,
- Somente será considerado concluído somente nesse passo.
