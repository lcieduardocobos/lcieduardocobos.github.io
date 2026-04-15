let currentLang = 'es';

function applyLanguage(lang) {
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyLanguage(currentLang);
}

function sendEmail() {
  window.location.href = "mailto:tuemail@email.com";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* 👇 ESTO ES LO QUE TE FALTA */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage('es');
});
