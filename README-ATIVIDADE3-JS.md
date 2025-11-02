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

Implementado no arquivo *js/router.js.*

As rotas são controladas por hash (*#/sobre, #/projetos, #/contato, etc.*).

O conteúdo das páginas é carregado dinamicamente dentro da tag <main id="conteudo"> *no index.html.*

**Inclui:**

- Animação de transição (fade-in);

- Mensagem de carregamento (“Carregando conteúdo...”);

- Atualização automática do título da aba;

- Rolagem suave até o topo após cada troca de rota.

Além disso, o sistema verifica e injeta automaticamente scripts específicos para cada página, evitando duplicações.

---

### 📄 2. `Sistema de Templates com JavaScript`

- Todas as páginas HTML estão localizadas dentro da pasta /pages.

- Cada arquivo (*home.html, contato.html, cadastro.html etc.*) funciona como um template modular.

- O *router.js* busca o arquivo correspondente à rota e o injeta dentro do <main id="conteudo">.

Essa estrutura modular facilita:

- A manutenção do código;

- A adição de novas páginas;

- A reutilização de componentes e scripts.
---

### 🧠 3. `Manipulação do DOM`

O JavaScript interage com o DOM de forma dinâmica, mesmo após trocas de página dentro do SPA.

As principais operações são:

- Atualizar o conteúdo principal conforme a rota (*fetch() + innerHTML*);

- Exibir e remover classes CSS para efeitos de transição (*mostrar, ativo*);

- Criar e injetar dinamicamente scripts JS específicos de cada página;

- Controlar elementos interativos (como formulários, mensagens e sliders).

**🆕 Atualização importante:**

Com a adoção do SPA, o evento **DOMContentLoaded** não é mais disparado ao trocar de rota.
Para resolver isso, cada página agora possui uma função de inicialização própria (ex: **initHome())**, chamada automaticamente após o *carregamento* pelo **router.js**.

---

### ✅ 4. `Validação de Formulários`

Implementada via módulo formValidator.js, garantindo consistência e feedback visual.

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

- Demonstra o uso de classes dinâmicas e temporizadores (setTimeout) para mensagens de sucesso.


### 🔐 7. `Página de Login`

Página pages/login.html

Script: js/login.js

Simula autenticação com validação simples:

- Campos obrigatórios.

- Exibição de mensagem caso o login esteja incorreto.
--- 

### 🧱 Documentação Técnica — JavaScript

📍 **router.js**

**Gerencia toda a navegação do SPA, controlando rotas, carregamento de páginas e scripts específicos.**

```
/const rotas = {
  "/": "pages/home.html",
  "/sobre": "pages/sobre.html",
  "/projetos": "pages/projetos.html",
  "/transparencia": "pages/transparencia.html",
  "/contato": "pages/contato.html",
  "/cadastro": "pages/cadastro.html",
  "/login": "pages/login.html"
};

async function navegar() {
  const caminho = window.location.hash.replace("#", "") || "/";
  const arquivo = rotas[caminho] || rotas["/"];

  conteudo.innerHTML = `<div class="loading"><p>Carregando conteúdo...</p></div>`;
  conteudo.classList.remove("mostrar");

  try {
    const resposta = await fetch(arquivo);
    const html = await resposta.text();
    conteudo.innerHTML = html;
    setTimeout(() => conteudo.classList.add("mostrar"), 50);

    const tituloPagina = document.querySelector("main h1")?.textContent || "Menos Tela e Mais Diversão";
    document.title = tituloPagina;

    window.scrollTo({ top: 0, behavior: "smooth" });
    carregarScriptDaPagina(caminho);
  } catch (erro) {
    conteudo.innerHTML = `<section class="erro"><h2>Ops! Página não encontrada 😢</h2><p>${erro.message}</p></section>`;
  }
}

```
---

### ⚙️ carregarScriptDaPagina()

Verifica se existe um arquivo JavaScript correspondente à rota atual e o executa (sem duplicar scripts já carregados).

```
function carregarScriptDaPagina(caminho) {
  const nome = caminho.replace("/", "") || "index";
  const src = `js/${nome}.js`;

  if (document.querySelector(`script[src="${src}"]`)) {
    if (nome === "index" && typeof initHome === "function") initHome();
    return;
  }

  fetch(src, { method: "HEAD" })
    .then(res => {
      if (res.ok) {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          if (nome === "index" && typeof initHome === "function") initHome();
        };
      }
    });
}

```

---

### 🏠 `index.js (Página Inicial)`

Gerencia o carrossel de imagens e o formulário de inscrição na newsletter.
Agora utiliza uma função initHome() para garantir que o script rode tanto no carregamento inicial quanto ao voltar para #/.

```
function initHome() {
  if ($(".carrossel-imagens").length) {
    $(".carrossel-imagens").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true
    });
  }

  const form = document.getElementById("form-email");
  const cadastrado = document.getElementById("email-cadastrado");

  if (form && cadastrado) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("#email-news").value.trim();

      if (!email || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      cadastrado.classList.add("ativo");
      form.reset();
      setTimeout(() => cadastrado.classList.remove("ativo"), 4000);
    });
  }
}

document.addEventListener("DOMContentLoaded", initHome);


```


----

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

**HTML5** — Estrutura semântica das páginas.

**CSS3** — Responsividade e estilo visual.

**JavaScript (ES6+)** — Manipulação do DOM, SPA e validação de formulários.

**Slick Slider** — Implementação do carrossel de imagens.

**Arquitetura modular**— Cada funcionalidade separada em seu próprio arquivo JS.

✨ Autoria

Desenvolvido por: Letícia  Geovú
📅 Atividade 3 — Sistema SPA (Single Page Application) e Sistema de Templates com JavaScript
💻 ONG Menos Tela e Mais Diversão
