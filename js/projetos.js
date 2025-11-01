$(document).ready(function () {
  $('.galeria-projetos').slick({
    infinite: true,         // Loop infinito
    slidesToShow: 3,        // Mostra 3 imagens por vez
    slidesToScroll: 1,      // Rola uma imagem por vez
    arrows: true,           // Mostra setas
    dots: true,             // Mostra bolinhas de navegação
    autoplay: true,         // Passa automaticamente
    autoplaySpeed: 2500,    // Velocidade (2.5s)
    adaptiveHeight: true,   // Ajusta altura automaticamente
    responsive: [
      {
        breakpoint: 721, // até 720px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 561, // até 560px
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
 
