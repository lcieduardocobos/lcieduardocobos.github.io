function sendEmail() {
  window.location.href = "mailto:eduardocobosv@gmail.com";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const translations = {
  es: {
    nav_profile: "Perfil",
    nav_experience: "Experiencia",
    nav_cases: "Casos",
    nav_contact: "Contacto",

    title: "Lic. en Comercio Internacional",
    subtitle: "Especializado en Operaciones y Administración de Negocios",

    hero_p1: "Soy un profesional con experiencia liderando operaciones, gestión de equipos y crecimiento de negocio. Enfocado en optimizar procesos, mejorar resultados, generando valor organizacional.",
    hero_p2: "He tenido la oportunidad de participar en varias licitaciones y concursos mercantiles, con resultados favorables. En los ultimos años, he estado a cargo de toda la operación y logística de negocios de prestación de servicios.",
    hero_p3: "Actualmente me encuentro en busqueda de un nuevo reto profesional, sumandome a una empresa líder donde pueda aportar desde el primer día.",

    value_title: "Propuesta de valor",
    value_1: "Mejora en la eficiencia operativa",
    value_2: "Control y optimización de recursos",
    value_3: "Coordinación efectiva de equipos",
    value_4: "Enfoque en resultados",
    value_5: "Adaptabilidad",

    closing_1: "Gracias por visitar mi perfil profesional.",
    closing_2: "No dudes en contactarme.",

    contact_btn: "Contáctame",

    recent_exp: "Experiencia reciente",
    recent_exp_text: "Amplia experiencia en operaciones, administración y liderazgo de equipos.",

    jobs: "Últimos empleos",

    job1_title: "Kumo Servicios Especializados",
    job1_date: "2021 - 2026",
    job1_desc: "Gestión completa de operaciones, equipos y crecimiento del negocio.",

    job2_title: "Integration Point Company",
    job2_date: "2017 - 2020",
    job2_desc: "Análisis de comercio internacional y datos.",

    cases_title: "Casos de éxito",

    case1_title: "Clientes",
    case1_desc: "Consolidación de relaciones comerciales.",

    case2_title: "Desempeño",
    case2_desc: "Resultados positivos con clientes.",

    case3_title: "Ventas",
    case3_desc: "Seguimiento y crecimiento comercial.",

    case4_title: "Análisis",
    case4_desc: "Estrategia basada en datos.",

    contact: "Contacto",
    send_email: "Enviar Email",

    footer: "© 2026 Eduardo Cobos"
  },

  en: {
    nav_profile: "Profile",
    nav_experience: "Experience",
    nav_cases: "Cases",
    nav_contact: "Contact",

    title: "Bachelor's Degree in International Business",
    subtitle: "Specialized in Operations and Business Management",

    hero_p1: "I am a professional experienced in operations and business growth.",
    hero_p2: "I have participated in bidding processes and business operations.",
    hero_p3: "Currently seeking a new challenge.",

    value_title: "Value Proposition",
    value_1: "Operational efficiency",
    value_2: "Resource optimization",
    value_3: "Team coordination",
    value_4: "Results-driven",
    value_5: "Adaptability",

    closing_1: "Thank you for visiting my profile.",
    closing_2: "Feel free to contact me.",

    contact_btn: "Contact Me",

    recent_exp: "Recent Experience",
    recent_exp_text: "Experience in operations and management.",

    jobs: "Latest Positions",

    job1_title: "Kumo Services",
    job1_date: "2021 - 2026",
    job1_desc: "Operations and business management.",

    job2_title: "Integration Point",
    job2_date: "2017 - 2020",
    job2_desc: "Trade analysis.",

    cases_title: "Success Cases",

    case1_title: "Clients",
    case1_desc: "Business relationships.",

    case2_title: "Performance",
    case2_desc: "Positive results.",

    case3_title: "Sales",
    case3_desc: "Growth and tracking.",

    case4_title: "Analysis",
    case4_desc: "Data-driven strategy.",

    contact: "Contact",
    send_email: "Send Email",

    footer: "© 2026 Eduardo Cobos"
  }
};

const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n] || el.textContent;
  });

  localStorage.setItem("lang", lang);
  langToggle.textContent = lang === "es" ? "EN" : "ES";
}

langToggle.onclick = () => {
  const current = localStorage.getItem("lang") || "es";
  setLanguage(current === "es" ? "en" : "es");
};

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang") || "es");
});
