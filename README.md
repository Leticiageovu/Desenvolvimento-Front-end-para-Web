# ONG Menos Tela e Mais Diversão

## 🧩 Sobre o Projeto

O site Menos Tela e Mais Diversão é uma aplicação web desenvolvida como projeto integrador do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de conscientizar sobre o uso equilibrado das tecnologias por crianças e adolescentes.
A iniciativa representa uma ONG fictícia, mas inspirada em causas reais, que busca incentivar atividades recreativas, culturais e educativas fora das telas.

----
## 🎯 Objetivo Geral

Criar um ambiente digital acessível, moderno e funcional que divulgue as ações da ONG, estimule o voluntariado e facilite o contato com o público — mostrando que é possível se divertir longe dos dispositivos eletrônicos.

---

### 💡 Ideia Central

A proposta do site é aproximar a comunidade das ações da ONG por meio de:

- Informações sobre os projetos sociais;

- Divulgação da missão, visão e valores da instituição;

- Cadastro de voluntários e doadores;

- Contato direto com a equipe e área administrativa;

- Uma navegação fluida e responsiva, representando boas práticas de desenvolvimento web.
  
---
### 🧭 `Estrutura Geral do Site`
Menos Tela e Mais Diversão/

│

├── index.html

├── pages/

│   ├── home.html

│   ├── sobre.html

│   ├── projetos.html

│   ├── transparencia.html

│   ├── recuperar-confirmacao.html

│   ├── recuperar-senha.html

│   ├── cadastro.html

│   ├── contato.html

│   └── login.html

│

├── js/

│   ├── router.js

│   ├── router.min.js

│   ├── formValidator.js

│   ├── formValidator.min.js

│   ├── cadastro.js

│   ├── cadastro.min.js

│   ├── contato.js

│   ├── contato.min.js

│   ├── login.js

│   ├── login.min.js

│   ├── modo-escuro.js

│   └── modo-escuro.min.js

│

├── CSS/

│   ├── style.css

│   └── style.min.css

│

├── assets/

│   └── imagens/

│

└── README.md

---

### 🧾 `Estrutura do Desenvolvimento`

O desenvolvimento foi dividido em 4 etapas principais (Atividades 1 a 4), seguindo um fluxo de aprendizado progressivo até a conclusão do site funcional hospedado no GitHub Pages.

---

### 🧱 `Atividade 1 — Estrutura HTML`

**Objetivo**: criar toda a estrutura semântica do site utilizando **HTML5**, com foco em acessibilidade, organização e boas práticas de SEO.

**Principais entregas**:

- Marcação semântica completa (header, main, section, article, footer);

- Uso de atributos **ARIA** e **textos alternativos** em imagens;

- Organização lógica do conteúdo;

- Estrutura de páginas: Home, Sobre, Projetos, Transparência, Cadastro, Contato e Login;

- Rodapé com redes sociais e créditos.

**Resultado**: um site com **estrutura sólida**, preparado para receber estilização e interatividade.

---

### 🎨 `Atividade 2 — Estilização com CSS`

**Objetivo**: aplicar a identidade visual da ONG, explorando cores, tipografia e layout responsivo.

**Destaques Técnicos**:

- Layout responsivo com Flexbox e Media Queries;

- Menu adaptativo com botão mobile (hambúrguer);

- Paleta de cores: azul (confiança), verde (natureza) e branco translúcido (leveza);

- Estilos aplicados a formulários, tabelas, carrosséis e seções;

- Scroll suave e transições animadas para melhor UX;

- Implementação de carrossel com Slick Slider.

**Resultado**: uma interface moderna, acessível e coerente com a identidade da ONG.

---

### ⚙️ `Atividade 3 — Funcionalidades com JavaScript`

**Objetivo**: adicionar interatividade, lógica de navegação e validações dinâmicas.

**Principais funcionalidades**:

- 🧭 **Sistema SPA (Single Page Application)** — navegação dinâmica via router.js sem recarregar a página;

- 📄 **Templates modulares** — carregamento de páginas através da pasta /pages;

- 🧠 **Manipulação do DOM** com fetch() e classes CSS para transições suaves;

- ✅ **Validação de formulários** (formValidator.js);

- 📬 **Formulário de contato e cadastro** com mensagens de sucesso temporárias;

- 🔐 Simulação de login administrativo;

- 🧩 Estrutura modular JavaScript (ES6+), facilitando manutenção e escalabilidade.

**Resultado**: o site passou a ter comportamento dinâmico, funcional e com transições suaves entre páginas.

---

### 🚀 `Atividade 4 — Versionamento, Acessibilidade e Deploy`

**Objetivo**: consolidar o projeto com boas práticas de GitFlow, acessibilidade WCAG 2.1 AA e publicação no GitHub Pages.

**Principais melhorias**:

- Controle de versão com **branches**: main, develop, CSS, JS, modo-escuro, deploy;

- Commits semânticos (feat, fix, style, refactor);

- **Acessibilidade aprimorada:**

   - Navegação por teclado;

   - Textos alternativos e aria-labels;

   - Contraste mínimo 4.5:1;

   - Estrutura semântica revisada;

- **Modo escuro** acessível (modo-escuro.js);

- **Minificação** de arquivos HTML, CSS e JS;

- **Compressão de imagens** (TinyPNG);

- **Deploy final via GitHub Pages.**

### 🔗 Versão Online:

https://leticiageovu.github.io/Desenvolvimento-Front-end-para-Web/

---

**🔹 Compressão de Imagens**

Todas as imagens foram comprimidas utilizando o TinyPNG.

- Formatos PNG e JPG otimizados sem perda significativa de qualidade.

- Algumas imagens foram convertidas para JPG para melhor desempenho, mantendo as originais por compatibilidade futura.

---



## 🧰 Tecnologias e Ferramentas Utilizadas

| Categoria          | Ferramentas / Tecnologias                                   |
| ------------------ | ----------------------------------------------------------- |
| Linguagens         | **HTML5**, **CSS3**, **JavaScript (ES6+)**                  |
| Controle de versão | **Git / GitHub** (Fluxo GitFlow)                            |
| Bibliotecas        | **Slick Slider**, **Chart.js**                              |
| Acessibilidade     | **WCAG 2.1 AA**, uso de `aria-label` e `alt`                |
| Otimização         | **TinyPNG** (compressão de imagens), **minificação CSS/JS** |
| Deploy             | **GitHub Pages**                                            |
| IDE                | **Visual Studio Code**                                      |

---
## 🌐 Público-Alvo

- Pais, educadores e responsáveis preocupados com o uso de telas por crianças;
- Voluntários e doadores interessados em participar das ações da ONG;
- Público geral que busca conhecer o impacto das iniciativas sociais.

---

## 🧑‍💻 Autoria e Créditos

**Desenvolvido por:** *Letícia Gabrielly dos Santos Geovú*

**RGM:** 46294554

**Turma:** 005 — *Desenvolvimento Front-End para Web*

💻 **Instituição:** Cruzeiro do Sul

---

## 🏁 Status do Projeto

✅ **Versão Final Concluída (v1.1.0)**

📅 **Data:** Novembro de 2025

📦 **Branch principal:** `main` — contém o projeto completo, integrado e otimizado.

---

## 📎 Links Importantes

* 🌍 **Site (deploy):** [Acessar o site](https://leticiageovu.github.io/Desenvolvimento-Front-end-para-Web/)
* 📂 **Repositório GitHub:** [Ver repositório](https://github.com/Leticiageovu/Desenvolvimento-Front-end-para-Web)

---

✨ *"Menos tela, mais conexão real — porque brincar, aprender e viver fora da tela é mais divertido."*
