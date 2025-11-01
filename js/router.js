// js/router.js

const conteudo = document.getElementById("conteudo");

// 🔹 Mapeamento das rotas e páginas
const rotas = {
  "/": "pages/home.html",
  "/sobre": "pages/sobre.html",
  "/projetos": "pages/projetos.html",
  "/transparencia": "pages/transparencia.html",
  "/contato": "pages/contato.html",
  "/cadastro": "pages/cadastro.html",
  "/login": "pages/login.html"
};

// 🔹 Função principal de navegação SPA
async function navegar() {
  const caminho = window.location.hash.replace("#", "") || "/";
  const arquivo = rotas[caminho] || rotas["/"];

  // Mostra loading temporário
  conteudo.innerHTML = `
    <div class="loading">
      <p>Carregando conteúdo...</p>
    </div>
  `;
  conteudo.classList.remove("mostrar");

  try {
    const resposta = await fetch(arquivo);
    if (!resposta.ok) throw new Error("Página não encontrada");

    const html = await resposta.text();
    conteudo.innerHTML = html;

    // 🔹 Transição suave (fade-in)
    setTimeout(() => conteudo.classList.add("mostrar"), 50);

    // 🔹 Atualiza título da aba conforme o conteúdo
    const tituloPagina = document.querySelector("main h1")?.textContent || "Menos Tela e Mais Diversão";
    document.title = tituloPagina;

    // 🔹 Volta o scroll para o topo da página
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 🔹 Carregar JS específico da rota (se existir)
    carregarScriptDaPagina(caminho);

  } catch (erro) {
    conteudo.innerHTML = `
      <section class="erro">
        <h2>Ops! Página não encontrada 😢</h2>
        <p>${erro.message}</p>
        <a href="#/">Voltar para a página inicial</a>
      </section>
    `;
    conteudo.classList.add("mostrar");
  }
}

// 🔹 Função para carregar JS específico da página
function carregarScriptDaPagina(caminho) {
  const nome = caminho.replace("/", "") || "index";
  const src = `js/${nome}.js`;

  // Evita carregar o mesmo script várias vezes
  if (document.querySelector(`script[src="${src}"]`)) return;

  fetch(src, { method: "HEAD" })
    .then(res => {
      if (res.ok) {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(() => {
      // ignora caso o script não exista
    });
}

// 🔹 Eventos do navegador
window.addEventListener("hashchange", navegar);
window.addEventListener("load", () => {
  if (!window.location.hash) {
    window.location.hash = "#/"; // Página inicial
  } else {
    navegar();
  }
});
