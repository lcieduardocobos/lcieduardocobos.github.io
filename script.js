function sendEmail() {
  window.location.href = "mailto:eduardocobosv@gmail.com";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
/* 🔥 CLAVE: ejecutar cuando TODO esté cargado */
window.onload = () => {
  applyLanguage('es');
};
