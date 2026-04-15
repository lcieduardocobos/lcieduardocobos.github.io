let currentLang = 'es';

function applyLanguage(lang) {
  document.querySelectorAll('[data-es]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyLanguage(currentLang);

  // Cambia botón
  const btn = document.querySelector('.lang-btn');
  btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
}

function sendEmail() {
  window.location.href = "mailto:tuemail@email.com";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* 🔥 CLAVE: ejecutar cuando TODO esté cargado */
window.onload = () => {
  applyLanguage('es');
};
