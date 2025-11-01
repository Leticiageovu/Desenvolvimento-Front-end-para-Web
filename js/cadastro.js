// js/cadastro.js

// Seleciona o formulário e a mensagem de sucesso
const form = document.getElementById("form-cadastro");
const successMsg = document.getElementById("sucessMensage");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validação simples dos campos
    let valido = true;

    // Exemplo de validação: nome completo deve ter ao menos 3 caracteres
    const nome = form.ncompleto.value.trim();
    if (nome.length < 3) {
      alert("O nome deve ter ao menos 3 caracteres.");
      valido = false;
    }

    // Validação básica de email
    const email = form.email.value.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Digite um email válido.");
      valido = false;
    }

    // Mensagem opcional
    const mensagem = form.Mensagem.value.trim();
    if (mensagem.length < 10) {
      alert("A mensagem deve ter ao menos 10 caracteres.");
      valido = false;
    }

    if (!valido) return;

    // Se tudo estiver certo, mostra mensagem de sucesso
    successMsg.classList.add("ativo");

    // Limpa o formulário
    form.reset();

    // Oculta a mensagem após 4 segundos
    setTimeout(() => {
      successMsg.classList.remove("ativo");
    }, 4000);
  });
}
