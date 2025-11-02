# Documentação Técnica - Atividade 1:HTML

## informações do Projeto
**Atividade:** Desenvolvimento Front-End para Web
**Turma:** 005
**Aluna:** Letícia Gabrielly Dos Santos Geovú  
**RGM:** 46294554
**Atividade 1**: Estrutura HTML

## 🧩 Descrição do Projeto
Este projeto faz parte da **1ª atividade prática** de desenvolvimento de um site completo em **HTML5 semântico**.  
A proposta é criar o site da **ONG Menos Tela e Mais Diversão**, que tem como missão **afastar crianças do uso excessivo das telas** e **resgatar o prazer das brincadeiras e da convivência real**.

---

## 🎯 Objetivo da Atividade 1
Desenvolver a **estrutura semântica HTML5 completa** do site da ONG, aplicando boas práticas de marcação, acessibilidade e SEO.

### Requisitos Atendidos:
- ✅ **Marcação semântica adequada** (uso de tags como `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` e outras);
- ✅ **Acessibilidade** (uso de atributos alternativos, textos descritivos e hierarquia correta de títulos);
- ✅ **SEO básico** (metadados, títulos descritivos e estrutura de conteúdo clara);
- ✅ **Organização lógica e hierárquica** do conteúdo em todas as páginas.

---

## 📄 Estrutura do Site

O site é composto pelas seguintes páginas:

### 🏠 `index.html`
Página inicial da ONG, contém também um destaque para o propósito principal do projeto: **promover atividades lúdicas e saudáveis fora do ambiente digital**.

---

### 🎨 `projetos.html`
Apresenta os **projetos e ações desenvolvidos pela ONG**, como oficinas, eventos e campanhas.  
Cada projeto é descrito com **texto e imagem ilustrativa**, organizados em seções semânticas.

---

### 👩‍🏫 `sobre.html`
Apresentando a **missão, visão e valores** da instituição  e traz informações **sobre a história da ONG**, sua **fundadora e equipe**, além da **motivação** que deu origem ao projeto *Menos Tela e Mais Diversão*.  
Inclui também uma breve explicação sobre os **valores e objetivos sociais** da organização.

---

### 📝 `cadastro.html`
Página voltada para o **cadastro de voluntários e apoiadores**, com um **formulário acessível** e estruturado semanticamente.  
Contém campos de contato e informações pessoais, respeitando a hierarquia e clareza visual.

---

### 💰 `transparencia.html`
Espaço dedicado à **prestação de contas e relatórios financeiros da ONG**, reforçando a **transparência e confiança** com o público.  
Os dados são apresentados em formato organizado e legível, simulando relatórios ou tabelas.

---

### 💌 `contato.html`
Página com **formulário de contato** para dúvidas, sugestões ou parcerias.  
Os campos incluem nome, e-mail e mensagem, com foco em **usabilidade e clareza** para o usuário.

---

### 🔐 `login.html`
Página de **acesso restrito** para administradores **(admin)** ou voluntários **(dashboard)** cadastrados.  
Inclui opção de **“Esqueceu a senha?”** e direcionamento para recuperação de acesso.

---

## 🌐 Rodapé (Footer)
O **footer** está presente em todas as páginas e contém:
- Links para as **redes sociais oficiais** da ONG (Facebook, Instagram e YouTube);  
- Direitos autorais e menção à autora:  
  **Desenvolvido por Letícia Geovú** 💻  

---

## 🛠️ Tecnologias Utilizadas
- **HTML5 Semântico**  
- **Boas práticas de acessibilidade e SEO**  
- Estrutura organizada para futura integração com **CSS e JavaScript**

---
## ✨ Autoria

**Desenvolvido por Letícia Geovú**  

📅 *Atividade 1 — Estrutura Semântica HTML5*

💻 ONG Menos Tela e Mais Diversão

=======

# 🎨 Documentação Técnica - Atividade 2: CSS

## 📘 Informações do Projeto

**Atividade:** Desenvolvimento Front-End para Web  

**Turma:** 005  

**Aluna:** *Letícia Gabrielly dos Santos Geovú*  

**RGM:** 46294554  

**Atividade 2:** Estilização com CSS  

---

## 🧩 Descrição do Projeto
Esta atividade faz parte da **2ª etapa prática** do desenvolvimento do site da **ONG Menos Tela e Mais Diversão**.  
O objetivo foi aplicar **estilos visuais com CSS3**, aprimorando a identidade visual, a responsividade e a experiência do usuário, mantendo a coerência com a estrutura HTML desenvolvida na Atividade 1.

O design busca transmitir **leveza, acessibilidade e modernidade**, refletindo o propósito da ONG de promover **diversão saudável fora do mundo digital**.

---

## 🎯 Objetivo da Atividade 2
Implementar e documentar a **camada de apresentação (CSS)** do projeto, explorando propriedades visuais, layout responsivo e boas práticas de design.

### Requisitos Atendidos:
- ✅ Criação de **layout responsivo** utilizando *Flexbox* e *Media Queries*;  
- ✅ Definição de **paleta de cores suaves e acessíveis**;  
- ✅ Aplicação de **transparências, sombras e bordas arredondadas** para um visual moderno;  
- ✅ Estilização de **menus, formulários, tabelas, carrosséis e rodapés**;  
- ✅ Utilização de **feedbacks visuais** (mensagens de sucesso, hover, transições).  

---

## 🖌️ Estrutura e Organização do CSS

### 1. **Estilos Básicos**
O corpo do site utiliza:
- Fonte padrão *Arial, sans-serif* para melhor legibilidade;  
- Imagem de fundo (`fundooo.png`) com `background-size: cover` e `background-position: center`;  
- Margens e espaçamentos zerados para permitir controle total do layout.  

Essas definições garantem uma base limpa e consistente em todas as páginas.

---

### 2. `Cabeçalho e Navegação`
O **`header`** possui fundo claro e espaçamento interno.  
O **menu de navegação (`nav`)** utiliza *Flexbox* para centralizar os links e manter espaçamento entre os itens.  

Os links recebem:
```css
nav a {
  text-decoration: none;
  color: #000;
} 
```

---

### 3. `Menu Mobile Responsivo`
Foi implementado um menu adaptável através de media queries:

- Quando a largura é inferior a 760px, o menu principal é ocultado;

- O botão (.container-mob) é exibido no canto superior direito;

- Ao clicar, o menu é reexibido com a classe .ativo.

Essa lógica garante usabilidade fluida em dispositivos móveis.

---

### 4. `Formulários`

Os formulários seguem um estilo limpo e organizado, com:

- Campos 100% responsivos (width: 100%);

- Bordas suaves e espaçamento interno confortável;

- Botões destacados com cursor: pointer e margens regulares.

Além disso, mensagens de sucesso (.sucess-message) foram adicionadas com cores acessíveis (verde claro e borda verde-escura), exibidas apenas quando ativas.

---

### 5. `Seções e Cards`

As principais seções utilizam:

```
section {
  background: #ffffffd9; /* Fundo branco com transparência */
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
 ```

Esses elementos trazem profundidade e elegância, sem comprometer a legibilidade do conteúdo.
---



### 6. `Tabelas e Listas`

O estilo das tabelas e listas foi pensado para clareza de dados:

- Cabeçalhos com fundo azul (#00bcd4);

- Alternância de cores nas linhas (nth-child(even));

- Efeito hover em linhas e listas, destacando interatividade.

Esses recursos tornam a área de transparência e relatórios mais organizada e profissional.

---

### 7. `Carrossel e Galeria de Projetos`

Foram aplicadas personalizações ao Slick Slider **para aplicação na terceira atividade**:

Arredondamento das imagens (border-radius: 15px);

Sombreamento e fundo semi-transparente no container do carrossel;

Setas de navegação circulares e animadas no hover;

Bolinhas de navegação (slick-dots) com tons de verde (em referência à natureza e vitalidade).

Essas escolhas visuais mantêm a harmonia com a identidade da ONG.


---

### 8. `Rodapé (Footer)`
O rodapé foi centralizado com flexbox, mantendo espaçamento entre os ícones de redes sociais e o texto de direitos autorais.
O layout é limpo, reforçando a consistência entre todas as páginas.

---

### 9. `Responsividade`

Diversas media queries foram utilizadas para ajustar:

Navegação;

- Estrutura de tabelas (convertidas em blocos no mobile);

- Imagens do carrossel;

- Espaçamentos em seções e formulários.

Essas adaptações garantem boa experiência tanto em desktop quanto em smartphones.

---

### Identidade Visual
 
 Elemento	Cor	Função

Azul (#004aad / #00bcd4)	Destaques e títulos	Representa confiança e clareza
Verde (#4CAF50 / #1e6b34)	Ícones e botões	Transmite natureza e equilíbrio
Branco translúcido (#ffffffd9)	Fundo das seções	Proporciona leveza e contraste
Cinza claro (#f5f5f5 / #ccc)	Bordas e áreas neutras	Mantém harmonia visual



⚙️ Técnicas e Boas Práticas Utilizadas

- Uso de Flexbox em praticamente todo o layout;

- Aplicação de transições suaves (transition) em links e botões;

- Uso de variáveis CSS simuladas com cores padronizadas para coerência visual;

- Criação de classes reutilizáveis, facilitando manutenção e escalabilidade;

- Implementação de scroll suave (scroll-behavior: smooth) para melhor navegação

💡 Conclusão

A Atividade 2 consolidou os fundamentos de design responsivo e usabilidade visual, traduzindo a estrutura HTML da Atividade 1 em uma interface agradável, moderna e funcional.
O resultado é um site coerente, acessível e pronto para integração com JavaScript (Atividade 3).

✨ Autoria

Desenvolvido por: Letícia  Geovú

📅 Atividade 2 — Estilização com CSS3

💻 ONG Menos Tela e Mais Diversão

=======


# Documentação Técnica - Atividade 3:HTML

## informações do Projeto

**Atividade:** Desenvolvimento Front-End para Web

**Turma:** 005

**Aluna:** Letícia Gabrielly Dos Santos Geovú  

**RGM:** 46294554

**Atividade 3**: Sistema SPA (Single Page Application) e Sistema de Templates com JavaScript

---


## 🎯 Descrição do Projeto

O projeto **Menos Tela e Mais Diversão** é uma aplicação web desenvolvida com o objetivo de incentivar atividades offline e promover a interação social.
O site foi implementado como uma **Single Page Application (SPA)** utilizando **JavaScript puro** (Vanilla JS), manipulando o DOM e carregando conteúdo dinamicamente sem recarregar a página.

---

## ⚙️ Funcionalidades Principais

### 🧭 1. `Sistema SPA (Single Page Application)`

Implementado no arquivo js/router.js.

As rotas são controladas via hash (#/).

O conteúdo das páginas é carregado dinamicamente dentro da <main id="conteudo"> do index.html, sem recarregar a página.

Inclui animação de transição (fade-in) e uma mensagem de “Carregando conteúdo…” durante a troca de rotas.

Cada página pode ter um script JS próprio, carregado automaticamente se existir (js/nomeDaPagina.js).

---

### 📄 2. `Sistema de Templates com JavaScript`

As páginas dentro da pasta /pages funcionam como templates HTML.

O conteúdo de cada página é carregado no elemento principal (<main id="conteudo">).

Essa estrutura modular facilita a manutenção e expansão do site.

---

### 🧠 3. `Manipulação do DOM`

O JavaScript interage diretamente com o DOM:

- Atualiza o conteúdo principal conforme a rota.

- Exibe e remove classes CSS para transições visuais.

- Cria e adiciona dinamicamente scripts JS específicos de cada página.

- Gera mensagens de erro e sucesso nos formulários.

---

### ✅ 4. `Validação de Formulários`

Implementada via módulo formValidator.js.

Verifica consistência dos campos:

- Nome mínimo de 3 caracteres.

- E-mail válido.

- Mensagem com pelo menos 10 caracteres.

- Exibe mensagens de erro ao lado dos campos incorretos (<small class="erro-msg">).

- Mostra um aviso de sucesso após envio válido.

---

### 📬 5. `Formulário de Contato`

- Página pages/contato.html

- Controlado pelo módulo js/contato.js

- Utiliza o formValidator.js para validação e exibe uma mensagem de sucesso temporária após envio.

---

### 🧍 6.` Formulário de Cadastro`

Página pages/cadastro.html

Script: js/cadastro.js

- Valida campos obrigatórios e mostra confirmação visual de envio.

- Demonstra manipulação do DOM (reset de formulário, exibição/remoção de mensagens).


### 🔐 7. `Página de Login`

Página pages/login.html

Script: js/login.js

Simula autenticação com validação simples:

- Campos obrigatórios.

- Exibição de mensagem caso o login esteja incorreto.
--- 

### 🧱 Documentação Técnica — JavaScript

📍 **router.js**

**Gerencia toda a navegação SPA.**

```
// Mapeamento de rotas
const rotas = {
  "/": "pages/home.html",
  "/sobre": "pages/sobre.html",
  ...
};
// Função de navegação
async function navegar() {
  const caminho = window.location.hash.replace("#", "") || "/";
  const arquivo = rotas[caminho] || rotas["/"];

  const resposta = await fetch(arquivo);
  const html = await resposta.text();
  conteudo.innerHTML = html;

  // Transição suave
  conteudo.classList.remove("mostrar");
  setTimeout(() => conteudo.classList.add("mostrar"), 50);

  // Carrega JS da rota, se existir
  carregarScriptDaPagina(caminho);
}
```
---

### ⚙️ carregarScriptDaPagina()

Responsável por verificar e injetar o script JS correspondente à página carregada:
```
function carregarScriptDaPagina(caminho) {
  const nome = caminho.replace("/", "") || "index";
  const src = `js/${nome}.js`;

  fetch(src, { method: "HEAD" }).then(res => {
    if (res.ok) {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      document.body.appendChild(script);
    }
  });
}
```

---

### 📩 `formValidator.js`

Módulo reutilizável para validação de formulários:

Exporta a função **setupFormValidation()**

Utiliza funções auxiliares como showError(), clearErrors() e validateEmail().
```
export function setupFormValidation() {
  const form = document.getElementById('formContato');
  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors(form);
    const isValid = validateForm(form);
    if (isValid) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
  });
}
```
---

### 🧩 `Scripts Específicos das Páginas`

📄 *contato.js*
```
import { setupFormValidation } from './formValidator.js';
document.addEventListener("DOMContentLoaded", setupFormValidation);
```
---
📄 *cadastro.js*
```
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  const successMsg = document.getElementById("sucessMensage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.classList.add("ativo");
    form.reset();
    setTimeout(() => successMsg.classList.remove("ativo"), 4000);
  });
});
```
---

📄 *login.js*
```
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const senha = form.senha.value.trim();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
    } else {
      alert("Login realizado com sucesso (simulação).");
      form.reset();
    }
  });
});
```
---
### 🧰 Tecnologias Utilizadas

**HTML5** — estrutura semântica das páginas.

**CSS3** — responsividade e estilo visual.

**JavaScript (ES6+)** — manipulação do DOM, SPA e validação de formulários.

**Arquitetura modular**— cada funcionalidade separada em seu próprio arquivo JS.

✨ Autoria

Desenvolvido por: Letícia  Geovú

📅 Atividade 3 — Sistema SPA (Single Page Application) e Sistema de Templates com JavaScript

💻 ONG Menos Tela e Mais Diversão
💻 ONG Menos Tela e Mais Diversão
>>>>>>> JS
