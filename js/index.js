$(document).ready(function(){ 
    $('.carrossel-imagens').slick({
        infinite: true,
        slidesToShow: 1,   
        slidesToScroll: 1, 
        arrows: true,         
        dots: true,           
        autoplay: true,       
        autoplaySpeed: 3000,  
        adaptiveHeight: true  
    }); 
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-email");
  const cadastrado = document.getElementById("email-cadastrado");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.querySelector("#email-news").value.trim();

      // Verificação de consistência (campo vazio ou inválido)
      if (!email || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      // Mostra a mensagem de sucesso
      cadastrado.classList.add("ativo");

      // Limpa o campo
      form.reset();

      // Oculta a mensagem após 4 segundos
      setTimeout(() => {
        cadastrado.classList.remove("ativo");
      }, 4000);
    });
  }
});