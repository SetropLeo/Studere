---
name: consultar-acervo
description: Protocolo para responder perguntas usando só o que já existe no acervo do Studere ("pesquise na nossa base", "o que temos sobre", "o que sabemos de"). Busca, lê e apresenta com links, status, confiança, validade e lacunas, sem ir à internet. Use quando o usuário quer consultar o que já foi pesquisado.
---

# Consultar o acervo

Roda na conversa principal. **Não usa a web**: responde apenas com o que está no vault. (Comparar com a internet é outro fluxo: revalidação.)

## Passos

1. **Buscar:** Grep/Glob em `Acervo/` e `Cursos/` pelo termo e sinônimos (PT e EN) em títulos, tags e corpo. Comece pelos `_MOC *.md`: eles indexam o tema.
2. **Ler** as notas relevantes (MOC primeiro, depois as atômicas que respondem à pergunta). Se forem muitas (mais de ~10), delegue a leitura a um agente `Explore` e trabalhe com o resumo.
3. **Responder** a pergunta do usuário com o conteúdo do acervo, sintetizado, e logo abaixo:
   - **Notas usadas:** lista de `[[wikilinks]]`.
   - **Confiança e validade:** `confianca`, `status` e se a `validade` já passou.
   - **Fontes principais** (nível A/B) por trás da resposta.
   - **Lacunas:** o que a pergunta pede e o acervo não cobre.
   - **Cursos relacionados**, se existirem.
4. **Se não houver nada (ou pouco):** diga com clareza e ofereça estudar o tema (fluxo de estudo do `CLAUDE.md`).
5. **Se o acervo tem a informação mas está com `validade` vencida ou `status: rascunho`:** avise e ofereça revalidar com a internet.

## Regras

- Nunca complete lacunas com conhecimento próprio sem marcar. Se acrescentar algo que não está no acervo, diga explicitamente "isto não está na base".
- Não edite o acervo ao consultar. Se achar erro ou nota duplicada, sugira ao final.
- Se a pergunta cruzar áreas, siga os links entre notas e mostre as conexões.
