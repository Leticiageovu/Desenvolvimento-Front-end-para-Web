function initLogin() {
  console.log("✅ initLogin iniciado!");

  const form = document.querySelector("#loginForm");
  const emailInput = document.querySelector("#email");
  const senhaInput = document.querySelector("#senha");
  const msg = document.querySelector("#loginMessage");

  if (!form) {
    console.warn("⚠️ Formulário de login não encontrado.");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o POST 405

    msg.textContent = "";
    msg.classList.remove("ativo");

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Digite um e-mail válido.");
      emailInput.focus();
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter ao menos 6 caracteres.");
      senhaInput.focus();
      return;
    }

    msg.textContent = "✅ Login realizado com sucesso!";
    msg.classList.add("ativo");

    form.reset();

    setTimeout(() => msg.classList.remove("ativo"), 3000);
  });
}
