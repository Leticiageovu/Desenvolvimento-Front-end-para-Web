const btnContraste = document.getElementById("toggle-contrast");

let modo = 0; // 0 = claro, 1 = escuro, 2 = alto contraste

btnContraste.addEventListener("click", () => {
  const body = document.body;

  // Remove classes antigas
  body.classList.remove("dark-mode", "high-contrast");

  // Alterna entre os modos
  if (modo === 0) {
    body.classList.add("dark-mode");
    btnContraste.setAttribute("aria-label", "Ativar modo de alto contraste");
    modo = 1;
  } else if (modo === 1) {
    body.classList.add("high-contrast");
    btnContraste.setAttribute("aria-label", "Voltar ao modo claro");
    modo = 2;
  } else {
    modo = 0;
    btnContraste.setAttribute("aria-label", "Ativar modo escuro e alto contraste");
  }
});
