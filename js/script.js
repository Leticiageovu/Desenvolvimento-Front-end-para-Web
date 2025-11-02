
document.addEventListener("DOMContentLoaded", () => {
 
  // ======== MENU MOBILE ========
  const menuBtn = document.getElementById("menuBtn");
  const menuNav = document.getElementById("menuNav");

  if (menuBtn && menuNav) {
    menuBtn.addEventListener("click", () => {
      menuNav.classList.toggle("ativo");
    });
  }

  // ======== ATUALIZA O ANO AUTOMATICAMENTE ========
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


