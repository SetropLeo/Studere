---
título: Custo amortizado
módulo: 19
tempo: 30 min
notas-base: "[[Amortized Analysis]]"
---

# 19 · Custo amortizado

**Tempo estimado:** 30 minutos · **Pré-requisito:** [[17 - Listas dinâmicas e listas ligadas]] e [[15 - Medindo algoritmos]].

**Ao final você vai conseguir:**

1. Explicar o que é custo amortizado e por que ele não é o custo de cada operação.
2. Calcular o total de cópias de um vetor que dobra de tamanho.
3. Ver por que crescer de forma fixa é mais caro do que crescer dobrando.

**Antes de começar:** no módulo 17, a inserção no fim do vetor dinâmico apareceu como "amortizada constante". Aqui você vê de onde vem esse número.

---

## Para começar

Você guarda fotos num vetor que, quando enche, precisa ser trocado por outro maior, copiando tudo. Uma inserção que copia 1000 elementos parece cara. Mas ela acontece raramente. Olhando a sequência inteira de inserções, o custo médio por inserção pode ser pequeno. Essa média é o custo amortizado.

---

## Mapa do módulo

```mermaid
flowchart LR
  S["Sequência de n inserções"] --> T["Total de cópias"]
  T --> M["Dividido por n: custo amortizado"]
  M --> G["Crescer dobrando: custo amortizado constante"]
```

*Figura 1: o custo amortizado sai do total de uma sequência, e não de uma operação isolada.*

**Como ler:** a conta começa pela sequência inteira. Dividir pelo número de operações dá a média, que é o custo amortizado.

---

## Mini-aula 1: custo amortizado

> [!tip] Ideia
> Uma operação pode ser cara, mas as baratas compensam. Olhando a sequência, a média por operação é pequena.

> [!info] Definição
> O **custo amortizado** (amortized cost) de uma operação é o custo médio de uma sequência de operações, no pior caso da sequência. A biblioteca frisa que não há probabilidade envolvida: é uma garantia sobre a sequência.

Veja o total de cópias de um vetor que dobra, para as primeiras inserções. Antes de rodar, pense: em quais inserções aparece uma cópia?

```python
def copias(n):
    cap, tamanho, total = 1, 0, 0
    for _ in range(n):
        if tamanho == cap:
            total += tamanho
            cap *= 2
        tamanho += 1
    return total

for n in range(1, 10):
    print(n, copias(n))
```

Saída real:

```
1 0
2 1
3 3
4 3
5 7
6 7
7 7
8 7
9 15
```

**Como ler:** a cada vez que o número de elementos passa de uma potência de 2, o total salta. Entre um salto e outro, as inserções não copiam nada.

> [!warning] Armadilha comum
> Custo amortizado não é o custo máximo. Uma operação pode custar muito, e a média ainda ser baixa. A garantia é sobre a sequência inteira.

> [!question]- Checkpoint
> 1. Na saída, a partir de que inserção o total cresce de 3 para 7?
> 2. Por que o total fica igual entre as inserções 5 e 8?
>
> > [!success]- Resposta
> > 1. Na inserção 5, quando o vetor de capacidade 4 enche.
> > 2. Porque nenhuma dessas inserções precisa dobrar o vetor.

---

## Mini-aula 2: vetor que dobra

> [!tip] Ideia
> Dobrar a capacidade faz as cópias acontecerem cada vez mais raramente. A soma das cópias fica proporcional ao número de inserções.

> [!info] Definição
> Pela biblioteca, em qualquer sequência de `m` operações de inserção e remoção a partir de um vetor vazio, o custo total de crescer e encolher o vetor é `O(m)`. Por isso o custo amortizado por operação é `O(1)`.

A biblioteca também registra três métodos de análise: **agregado** (somar o custo total e dividir), **contábil** (cobrar um valor fixo por operação e guardar o excedente) e **potencial** (uma função do estado que nunca fica negativa). Para o vetor que dobra, cobrar 3 por inserção é suficiente.

> [!warning] Armadilha comum
> O resultado depende de dobrar. A biblioteca diz que o crescimento precisa ser geométrico: crescer de um em um torna o custo amortizado linear.

> [!question]- Checkpoint
> 1. Se o vetor dobra, quantas cópias ocorrem até a inserção 16?
> 2. Quantas cópias ocorrem se o vetor cresce de um em um, até a inserção 16?
>
> > [!success]- Resposta
> > 1. As cópias acontecem nas inserções 2, 3, 5, 9: total 1 + 2 + 4 + 8 = 15.
> > 2. Uma cópia em cada inserção, com o tamanho acumulado: 0 + 1 + ... + 15 = 120.

---

## Mini-aula 3: por que dobrar

> [!tip] Ideia
> Crescer de forma fixa parece razoável, mas o total de cópias cresce com o quadrado do número de inserções.

> [!info] Definição
> No crescimento fixo, cada cópia custa o tamanho atual, e o tamanho cresce a cada inserção. A soma de `0` até `n - 1` é quadrática, e o custo amortizado por inserção é linear, como a biblioteca registra.

Como ler: comparando os totais das duas estratégias, a diferença fica clara. Dobrar mantém o total proporcional a `n`; crescer de um em um deixa o total quadrático.

> [!warning] Armadilha comum
> Não generalize o custo amortizado para qualquer estratégia de crescimento. Ele vale para o caso geométrico; para o fixo, a análise dá outro resultado.

> [!question]- Checkpoint
> 1. Em 100 inserções, de um em um, qual é o total de cópias, aproximadamente, em termos de `n²`?
> 2. Dobrando, o total em 100 inserções é da ordem de `n` ou de `n²`?
>
> > [!success]- Resposta
> > 1. Cerca de `n²/2`, porque é a soma de 0 a 99, que dá 4950.
> > 2. Da ordem de `n`, porque as cópias ficam espaçadas.

---

## Exercícios

Cada exercício tem um bloco com a função a completar e os testes com `assert`. As funções que modelam o vetor estão prontas nos blocos. Quando todos passarem, aparece `Passou!`.

### Aquecimento

**A1. Custo médio.** Complete `custo_medio(n)`, que devolve o total de cópias ao inserir `n` elementos, dividido por `n`. A função `quantas_copias`, já pronta, calcula o total.

```python
def quantas_copias(n):
    # já pronta
    cap = 1
    tamanho = 0
    copias = 0
    for _ in range(n):
        if tamanho == cap:
            copias += tamanho
            cap *= 2
        tamanho += 1
    return copias

def custo_medio(n):
    """Total de cópias dividido pelo número de inserções."""
    ...

assert custo_medio(1) == 0, "nenhuma cópia"
assert round(custo_medio(5), 2) == 1.4, "7 cópias em 5 inserções"
assert custo_medio(2) == 0.5, "uma cópia em duas inserções"
print("Passou!")
```

> [!hint]- Dica 1
> Chame `quantas_copias(n)` e divida o resultado por `n`.

> [!hint]- Dica 2
> Use `/`, a divisão comum, para obter um número real.

> [!example]- Solução
> ```python
> def custo_medio(n):
>     """Total de cópias dividido pelo número de inserções."""
>     return quantas_copias(n) / n
> ```
>
> **Erro comum:** Usar `//`. A média perde a parte decimal, e 7 / 5 = 1.4 viraria 1.

**A2. Onde copiar.** Complete `pontos_de_copia(n)`, que devolve a lista dos números `k` (de 1 a `n`) das inserções em que o vetor está cheio e precisa dobrar e copiar. Use `cap` e `tamanho`, como na função anterior.

```python
def pontos_de_copia(n):
    """Devolve as inserções k (de 1 a n) em que o vetor cheio dobra e copia."""
    ...

assert pontos_de_copia(5) == [2, 3, 5], "as cópias acontecem nas inserções 2, 3 e 5"
assert pontos_de_copia(1) == [], "uma inserção não copia"
assert pontos_de_copia(4) == [2, 3], "até 4, copia nas inserções 2 e 3"
print("Passou!")
```

> [!hint]- Dica 1
> Para cada `k` de 1 até `n`: se `tamanho == cap`, guarde `k` na lista e dobre `cap`. Depois, some 1 em `tamanho`.

> [!hint]- Dica 2
> Para `n = 5`, as cópias acontecem nas inserções 2, 3 e 5.

> [!example]- Solução
> ```python
> def pontos_de_copia(n):
>     """Devolve as inserções k (de 1 a n) em que o vetor cheio dobra e copia."""
>     cap = 1
>     tamanho = 0
>     pontos = []
>     for k in range(1, n + 1):
>         if tamanho == cap:
>             pontos.append(k)
>             cap *= 2
>         tamanho += 1
>     return pontos
> ```
>
> **Erro comum:** Guardar `tamanho` no lugar de `k`. A lista deve conter o número da inserção, não o número de elementos.

**A3. Crescimento fixo.** Agora o vetor cresce de 1 em 1, e não dobra. Complete `quantas_copias_linear(n)`, que devolve o total de elementos copiados ao inserir `n` elementos. A capacidade começa em 0 e aumenta 1 a cada cópia.

```python
def quantas_copias_linear(n):
    """Total de cópias ao inserir n elementos, com a capacidade crescendo de 1 em 1."""
    ...

assert quantas_copias_linear(1) == 0, "uma inserção"
assert quantas_copias_linear(3) == 3, "0 + 1 + 2"
assert quantas_copias_linear(5) == 10, "0 + 1 + 2 + 3 + 4"
print("Passou!")
```

> [!hint]- Dica 1
> Use `cap = 0`, `tamanho = 0` e `copias = 0`. Quando `tamanho == cap`, some `tamanho` em `copias` e aumente `cap` em 1.

> [!hint]- Dica 2
> Para `n = 3`, as cópias são 0, 1 e 2: o total é 3.

> [!example]- Solução
> ```python
> def quantas_copias_linear(n):
>     """Total de cópias ao inserir n elementos, com a capacidade crescendo de 1 em 1."""
>     cap = 0
>     tamanho = 0
>     copias = 0
>     for _ in range(n):
>         if tamanho == cap:
>             copias += tamanho
>             cap += 1
>         tamanho += 1
>     return copias
> ```
>
> **Erro comum:** Dobrar `cap`, como no caso anterior. Esta função é justamente o caso sem dobrar.

### Praticando

**P1. Cobrar 3 por inserção.** Pela biblioteca, o total de cópias do vetor que dobra fica coberto com 3 unidades por inserção. Complete `cabe_com_3_por_insercao(limite)`, que devolve `True` se, para todo `n` de 1 até `limite`, `quantas_copias(n) <= 3 * n`. A função `quantas_copias` já está pronta.

```python
def quantas_copias(n):
    # já pronta
    cap = 1
    tamanho = 0
    copias = 0
    for _ in range(n):
        if tamanho == cap:
            copias += tamanho
            cap *= 2
        tamanho += 1
    return copias

def cabe_com_3_por_insercao(limite):
    """Devolve True se quantas_copias(n) <= 3 * n para todo n de 1 até limite."""
    ...

assert cabe_com_3_por_insercao(50) == True, "3 por inserção cobre as cópias até 50"
assert cabe_com_3_por_insercao(1) == True, "só n = 1"
print("Passou!")
```

> [!hint]- Dica 1
> Percorra `n` de 1 até `limite`, e confira a desigualdade a cada passo.

> [!hint]- Dica 2
> Se alguma falhar, `return False`. Ao fim do laço, `return True`.

> [!example]- Solução
> ```python
> def cabe_com_3_por_insercao(limite):
>     """Devolve True se quantas_copias(n) <= 3 * n para todo n de 1 até limite."""
>     for n in range(1, limite + 1):
>         if quantas_copias(n) > 3 * n:
>             return False
>     return True
> ```
>
> **Erro comum:** Testar só `n = limite`. A cobertura precisa valer para cada inserção.

**P2. Saldo de crédito.** Use a ideia da cobrança: a cada inserção, recebe-se 3 unidades e paga-se o custo de cópia dessa inserção. Complete `saldo_nunca_negativo(n)`, que devolve `True` se o saldo não fica negativo em nenhum momento das `n` inserções. Use `cap` e `tamanho` do vetor que dobra, e `saldo` começando em 0.

```python
def saldo_nunca_negativo(n):
    """Cobra 3 por inserção e paga a cópia; devolve True se o saldo nunca fica negativo."""
    ...

assert saldo_nunca_negativo(50) == True, "o crédito de 3 por inserção cobre as cópias"
assert saldo_nunca_negativo(1) == True, "uma inserção"
print("Passou!")
```

> [!hint]- Dica 1
> Em cada inserção: custo `c = 0`; se `tamanho == cap`, `c = tamanho` e dobre `cap`. Depois, `saldo += 3 - c` e `tamanho += 1`.

> [!hint]- Dica 2
> Se `saldo < 0` em algum momento, `return False`.

> [!example]- Solução
> ```python
> def saldo_nunca_negativo(n):
>     """Cobra 3 por inserção e paga a cópia; devolve True se o saldo nunca fica negativo."""
>     cap = 1
>     tamanho = 0
>     saldo = 0
>     for _ in range(n):
>         c = 0
>         if tamanho == cap:
>             c = tamanho
>             cap *= 2
>         saldo += 3 - c
>         tamanho += 1
>         if saldo < 0:
>             return False
>     return True
> ```
>
> **Erro comum:** Calcular o saldo só no fim. A regra vale a cada passo, porque uma inserção pode ficar a descoberto antes de a conta fechar.

**P3. Custo de uma inserção.** Complete `custo_do_passo(n, k)`, que devolve quantos elementos são copiados na inserção de número `k` (de 1 a `n`), no vetor que dobra. Simule as `k` inserções e devolva o custo da última.

```python
def custo_do_passo(n, k):
    """Custo (cópias) da inserção de número k, no vetor que dobra."""
    ...

assert custo_do_passo(5, 2) == 1, "a segunda inserção copia 1"
assert custo_do_passo(5, 3) == 2, "a terceira copia 2"
assert custo_do_passo(5, 4) == 0, "a quarta não copia"
assert custo_do_passo(5, 5) == 4, "a quinta copia 4"
print("Passou!")
```

> [!hint]- Dica 1
> Use `custo = 0` antes de cada inserção. Se `tamanho == cap`, `custo = tamanho` e dobre `cap`.

> [!hint]- Dica 2
> Ao final do laço de `k` voltas, `custo` é o custo da última inserção.

> [!example]- Solução
> ```python
> def custo_do_passo(n, k):
>     """Custo (cópias) da inserção de número k, no vetor que dobra."""
>     cap = 1
>     tamanho = 0
>     custo = 0
>     for _ in range(k):
>         custo = 0
>         if tamanho == cap:
>             custo = tamanho
>             cap *= 2
>         tamanho += 1
>     return custo
> ```
>
> **Erro comum:** Devolver o custo acumulado de todas as inserções. A pergunta é só sobre a inserção `k`.

### Desafio

**D1. Fator de crescimento.** Generalize o vetor que dobra: cada vez que enche, a capacidade é multiplicada por `fator` (um inteiro maior ou igual a 2). Complete `custo_com_fator(n, fator)`, que devolve o total de cópias ao inserir `n` elementos, começando com capacidade 1.

```python
def custo_com_fator(n, fator):
    """Total de cópias ao inserir n elementos, multiplicando a capacidade por fator quando enche."""
    ...

assert custo_com_fator(5, 2) == 7, "fator 2 dá o caso de dobrar"
assert custo_com_fator(5, 3) == 4, "cópias de 1 e de 3 elementos"
assert custo_com_fator(1, 2) == 0, "uma inserção não copia"
print("Passou!")
```

> [!hint]- Dica 1
> Igual ao caso de dobrar, mas use `cap *= fator`.

> [!hint]- Dica 2
> Para `n = 5` e `fator = 3`, a cópia acontece na inserção 2 (1 elemento) e na inserção 4 (3 elementos): total 4.

> [!example]- Solução
> ```python
> def custo_com_fator(n, fator):
>     """Total de cópias ao inserir n elementos, multiplicando a capacidade por fator quando enche."""
>     cap = 1
>     tamanho = 0
>     copias = 0
>     for _ in range(n):
>         if tamanho == cap:
>             copias += tamanho
>             cap *= fator
>         tamanho += 1
>     return copias
> ```
>
> **Erro comum:** Manter `cap *= 2` e ignorar o parâmetro `fator`. O resultado não muda com o fator, e o teste com 3 falha.


---

## Mini-projeto (opcional)

Um mini-projeto que junta o total de cópias e a média por inserção. Tente sozinho antes de abrir a solução.

**Objetivo.** Devolva o par `(total, media)`: o total de cópias ao inserir `n` elementos num vetor que dobra, e a média por inserção, arredondada com duas casas. As funções `quantas_copias` e `custo_medio` já estão prontas.

```python
def quantas_copias(n):
    # já pronta
    cap = 1
    tamanho = 0
    copias = 0
    for _ in range(n):
        if tamanho == cap:
            copias += tamanho
            cap *= 2
        tamanho += 1
    return copias

def custo_medio(n):
    # já pronta
    return quantas_copias(n) / n

def resumo_custos(n):
    """Devolve (total de cópias, média por inserção arredondada a duas casas)."""
    ...

assert resumo_custos(5) == (7, 1.4), "7 cópias, média 1.4"
assert resumo_custos(1) == (0, 0.0), "uma inserção sem cópia"
print("Passou!")
```

> [!hint]- Dica 1
> O total é `quantas_copias(n)`. A média é `round(custo_medio(n), 2)`.

> [!hint]- Dica 2
> Devolva uma tupla com os dois valores.

> [!example]- Solução
> ```python
> def resumo_custos(n):
>     """Devolve (total de cópias, média por inserção arredondada a duas casas)."""
>     return (quantas_copias(n), round(custo_medio(n), 2))
> ```
>
> **Erro comum:** Calcular a média como `total // n`. A divisão inteira apaga a parte decimal.


---

## Fechando

**Resumo**

- Custo amortizado: média do custo de uma sequência de operações, no pior caso da sequência.
- Vetor que dobra: as cópias ficam espaçadas, e o total é `O(m)` para `m` operações.
- Métodos: agregado, contábil e potencial.
- Crescer de forma fixa dá custo amortizado linear, não constante.

**Glossário rápido**

- **Custo amortizado** (amortized cost): custo médio de uma sequência de operações.
- **Análise agregada** (aggregate): somar o total e dividir pelo número de operações.
- **Análise contábil** (accounting): cobrar um valor fixo e guardar o excedente.
- **Função potencial** (potential function): função do estado, sempre não negativa, que guarda o crédito.
- **Crescimento geométrico**: capacidade multiplicada por um fator fixo a cada vez.

**Perguntas de revisão**

1. Por que uma inserção que copia muito não invalida o custo amortizado constante?
2. Quantas cópias ocorrem se o vetor dobra e você faz 9 inserções?
3. Por que o crescimento fixo é mais caro, segundo a análise de custo amortizado?

**E agora?** O próximo módulo é **Tabelas hash**. Ele mostra como buscar uma chave em tempo médio constante, e onde essa promessa depende de suposições.

---

## Para ir mais fundo

- [[Amortized Analysis]]
- [[Dynamic Array and Linked List]]
