
# Documentação Técnica - Atividade 4: Versionamento, Acessibilidade e Deploy
## Informações do Projeto

**Atividade:** Desenvolvimento Front-End para Web

**Turma:** 005

**Aluna:** Letícia Gabrielly dos Santos Geovú

**RGM:** 46294554

**Atividade 4:** Versionamento, Acessibilidade (WCAG 2.1 AA) e Deploy

## 🎯 Descrição do Projeto

O projeto **Menos Tela e Mais Diversão** é uma aplicação web voltada à conscientização sobre o uso equilibrado de tecnologias por crianças.
Nesta etapa final, o foco foi consolidar o desenvolvimento com boas práticas profissionais: **versionamento com GitFlow, acessibilidade conforme WCAG 2.1 nível AA, e otimização para produção e deploy em ambiente real.**

---

### ⚙️ 1. `Controle de Versão com Git/GitHub`

**🔹 Estrutura GitFlow**

O fluxo de versionamento seguiu a metodologia GitFlow, com as seguintes branches principais:

- main → versão estável do projeto (produção)

- develop → ambiente de desenvolvimento e integração

- CSS, JS, modo-escuro, deploy → branches de features específicas


**🔹 Histórico de commits**

Os commits foram organizados de forma semântica e descritiva, utilizando convenções como:

- feat: para novas funcionalidades

- fix: para correções

- refactor: para ajustes de código

- style: para melhorias visuais

---

**🔹 Releases**

Após consolidar as features e integrar o conteúdo final, foi criada a release final:

```
git tag -a v1.1.0 -m "Release final otimizada - minificação, acessibilidade e produção

git push origin v1.1.0

```

**Versão Final: v1.1.0**

---

### 🧩 2. `Acessibilidade (WCAG 2.1 - Nível AA)`

O site foi aprimorado para garantir **acessibilidade universal**, atendendo aos principais critérios da **WCAG 2.1 Nível AA**.

---

**🔹 Implementações:**

- **Navegação via teclado**: todos os menus e botões são acessíveis com TAB e acionáveis com ENTER.

- **Estrutura semântica**: uso correto de **header, main, section, article, nav, footer e atributos aria-label e aria-labelledby**.

- **Leitores de tela**: todas as imagens possuem alt descritivo e botões com **aria-label**.

- **Contraste adequado**: cores revisadas para manter **contraste mínimo de 4.5:1** conforme **WCAG**.

- **Modo escuro e alto contraste**: implementado no arquivo **js/modo-escuro.js**, com troca dinâmica de tema e acessibilidade preservada.

---

Exemplo de regra aplicada:

```
body.dark-mode {
  background-color: #121212;
  color: #ffffffd9;
}
body.dark-mode header a {
  color: #ffffffd9 !important;
}
```
---

### 🚀 3. `Otimização para Produção`

**🔹 Minificação**

Todos os arquivos foram otimizados para reduzir o tamanho e melhorar o desempenho:

- CSS/style.css → CSS/style.min.css

- JS/script.js → JS/script.min.js

- index.html e páginas em /pages minificadas mantendo nomes originais

---

**🔹 Compressão de Imagens**

Todas as imagens foram comprimidas utilizando o TinyPNG.

- Formatos PNG e JPG otimizados sem perda significativa de qualidade.

- Algumas imagens foram convertidas para JPG para melhor desempenho, mantendo as originais por compatibilidade futura.

---

**🔹 Estrutura Final**

```
/CSS
 ├─ style.css
 ├─ style.min.css
/JS
 ├─ script.js
 ├─ script.min.js
 ├─ modo-escuro.js
/pages
 ├─ home.html
 ├─ sobre.html
 ├─ projetos.html
index.html
/assets/imagem/
```

### 🌐 4. `Deploy`

O deploy foi realizado via GitHub Pages, com a branch **main** como fonte de produção.

**Configuração:**

- Repositório: github.com/Leticiageovu/Desenvolvimento-Front-end-para-Web

- Branch: main

- Pasta raiz (/)

**Acesso online:**

🔗 https://leticiageovu.github.io/Desenvolvimento-Front-end-para-Web/


### 🧰 Tecnologias e Ferramentas Utilizadas

**HTML5** — Estrutura semântica

**CSS3** — Responsividade e estilo

**JavaScript (ES6+)** — Funcionalidades dinâmicas e SPA

**Git/GitHub** — Versionamento e releases

**TinyPNG** — Compressão de imagens

**Slick Slider / Chart.js**— Interatividade visual

**GitHub Pages** — Hospedagem gratuita e deploy automático


✨ Autoria

Desenvolvido por: Letícia Gabrielly dos Santos Geovú

Atividade 4 — Desenvolvimento Front-End para Web

Tema: Menos Tela e Mais Diversão

Versão Final: v1.1.0

Data: Novembro/2025
