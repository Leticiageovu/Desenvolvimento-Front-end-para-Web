function initIndex() {
  console.log("✅ initIndex iniciado!");

  // Slick carrossel
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

  // Newsletter
  const form = document.getElementById("form-email");
  const cadastrado = document.getElementById("email-cadastrado");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.querySelector("#email-news").value.trim();

      if (!email || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      cadastrado.classList.add("ativo");
      form.reset();

      setTimeout(() => {
        cadastrado.classList.remove("ativo");
      }, 4000);
    });
  }
}
