function initCadastro() {
  console.log("✅ initCadastro iniciado!");

  const form = document.getElementById("form-cadastro");
  const successMsg = document.getElementById("sucessMensage");

  if (!form) {
    console.warn("⚠️ Formulário de cadastro não encontrado.");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;

    const nome = form.ncompleto.value.trim();
    if (nome.length < 3) {
      alert("O nome deve ter ao menos 3 caracteres.");
      valido = false;
    }

    const email = form.email.value.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Digite um email válido.");
      valido = false;
    }

    const mensagem = form.Mensagem.value.trim();
    if (mensagem.length < 10) {
      alert("A mensagem deve ter ao menos 10 caracteres.");
      valido = false;
    }

    if (!valido) return;

    if (successMsg) {
      successMsg.classList.add("ativo");

      setTimeout(() => {
        successMsg.classList.remove("ativo");
      }, 4000);
    }

    form.reset();
  });
}
