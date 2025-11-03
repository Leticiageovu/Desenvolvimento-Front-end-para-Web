const conteudo = document.getElementById("conteudo");

// 🔹 Mapeamento das rotas e páginas
const rotas = {
  "/": "pages/home.html",
  "/sobre": "pages/sobre.html",
  "/projetos": "pages/projetos.html",
  "/transparencia": "pages/transparencia.html",
  "/contato": "pages/contato.html",
  "/cadastro": "pages/cadastro.html",
  "/recuperar-senha": "pages/recuperar-senha.html",
  "/recuperar-confirmacao": "pages/recuperar-confirmacao.html",
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
    const tituloPagina =
      document.querySelector("main h1")?.textContent || "Menos Tela e Mais Diversão";
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

  // Remove qualquer script anterior de página
  const scriptAntigo = document.querySelector(`script[data-pagina]`);
  if (scriptAntigo) scriptAntigo.remove();

  // Faz uma checagem se o script da página existe
  fetch(src, { method: "HEAD" })
    .then((res) => {
      if (res.ok) {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        script.dataset.pagina = nome;
        script.onload = () => {
          // 🔹 Após carregar o script, tenta executar a função initXxx()
          const nomeFuncao = `init${nome.charAt(0).toUpperCase() + nome.slice(1)}`;
          const funcao = window[nomeFuncao];

          if (typeof funcao === "function") {
            console.log(`🚀 Executando ${nomeFuncao}()`);

            // Aguarda o DOM estar pronto dentro do SPA
            setTimeout(() => {
              try {
                funcao();
              } catch (erro) {
                console.error(`❌ Erro ao executar ${nomeFuncao}:`, erro);
              }
            }, 150);

          } else {
            console.warn(`⚠️ Nenhuma função ${nomeFuncao} encontrada`);
          }
        };
        document.body.appendChild(script);
      } else {
        console.warn(`⚠️ Script não encontrado: ${src}`);
      }
    })
    .catch((erro) => console.error("Erro ao carregar script:", erro));
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
