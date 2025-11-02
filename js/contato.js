// js/contato.js


function initContato() {
  console.log("✅ initContato iniciado!");

  const form = document.getElementById("formContato");
  if (!form) {
    console.warn("⚠️ Formulário de contato não encontrado.");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (nome.length < 3 || !/\S+@\S+\.\S+/.test(email) || mensagem.length < 10) {
      alert("Preencha os campos corretamente antes de enviar.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}

