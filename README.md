# Documentação Técnica - Atividade 1:HTML

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
