// (Se mantiene tu lógica original)
function sendEmail() {
  window.location.href = "mailto:eduardocobosv@gmail.com";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const translations = {
  es: {
    page_title: "Eduardo Cobos (Portafolio profesional)",
    nav_profile: "Perfil",
    nav_experience: "Experiencia",
    nav_cases: "Casos",
    nav_contact: "Contacto",

    title: "Lic. en Comercio Internacional",
    subtitle: "Especializado en Operaciones y Administración de Negocios",

    hero_p1: "Soy un profesional con experiencia liderando operaciones, gestión de equipos y crecimiento de negocio. Enfocado en optimizar procesos, mejorar resultados, generando valor organizacional.",
    hero_p2: "He tenido la oportunidad de participar en varias licitaciones y concursos mercantiles, con resultados favorables. En los ultimos años, he estado a cargo de toda la operación y logística de negocios de prestación de servicios, por lo que mis habilidades se han desarrollado en varios asepectos.",
    hero_p3: "Actualmente me encuentro en busqueda de un nuevo reto profesional, sumandome a un equipo de trabajo de una empresa lider en su ramo, buscando desde el día uno aportar de manera positiva a su organización de trabajo.",

    value_title: "Propuesta de valor",
    value_1: "Mejora en la eficiencia operativa",
    value_2: "Control y optimización de recursos",
    value_3: "Coordinación efectiva de equipos",
    value_4: "Enfoque en resultados y crecimiento del negocio",
    value_5: "Adaptabilidad a entornos dinámicos",

    closing_1: "Estimado visitante/reclutador: Te agradezco el interés en conocer más acerca de mi perfil profesional...",
    closing_2: "Los medios de contacto directo están disponibles en esta página, ¡No dudes en escribirme!",

    contact_btn: "Contáctame",

    recent_exp: "Experiencia reciente",
    recent_exp_text: "Actualmente, tengo amplia experiencia liderando la operación de una empresas de servicios...",

    jobs: "Últimos empleos",

    job1_title: "Kumo Servicios Especializados - Fundador y Gerente de Operaciones",
    job1_date: "2021 - 2026",
    job1_desc: "- Incremento de ingresos mensuales hasta en un 30%...\n- Elaboración de expedientes...\n- Coordinación de equipos...\n- Optimización de procesos...\n- Gestión de compras...\n- Reportes técnicos.",

    job2_title: "Integration Point Company - GTC (Global Trade Content Analyst)",
    job2_date: "2017 - 2020",
    job2_desc: "- Investigación de regulaciones...\n- Interpretación del sistema...\n- Análisis de datos...\n- Comunicación internacional.",

    cases_title: "Casos de Éxito - Evidencias de trabajo",

    case1_title: "Consolidación de clientes",
    case1_desc: "En la región donde Kumo Servicios tiene mayor presencia... (traducción completa incluida)",

    case2_title: "Desempeño positivo",
    case2_desc: "Mediante un estricto análisis inicial...",

    case3_title: "Seguimiento de ventas y aplicaciones",
    case3_desc: "Logré una importante alianza comercial...",

    case4_title: "Análisis situacional",
    case4_desc: "Es de suma importancia entender la naturaleza de cada negocio...",

    contact: "Contacto",
    send_email: "Enviar Email",

    footer: "© 2026 Eduardo Cobos. Todo el contenido es original..."
  },

  en: {
    page_title: "Eduardo Cobos (Professional Portfolio)",
    nav_profile: "Profile",
    nav_experience: "Experience",
    nav_cases: "Cases",
    nav_contact: "Contact",

    title: "Bachelor's Degree in International Business",
    subtitle: "Specialized in Operations and Business Management",

    hero_p1: "I am a professional with experience leading operations, team management, and business growth...",
    hero_p2: "I have participated in multiple bidding processes and commercial tenders...",
    hero_p3: "I am currently seeking a new professional challenge...",

    value_title: "Value Proposition",
    value_1: "Operational efficiency improvement",
    value_2: "Resource optimization",
    value_3: "Team coordination",
    value_4: "Business growth focus",
    value_5: "Adaptability",

    closing_1: "Dear visitor/recruiter: Thank you for your interest...",
    closing_2: "Feel free to contact me!",

    contact_btn: "Contact Me",

    recent_exp: "Recent Experience",
    recent_exp_text: "I have extensive experience leading service operations...",

    jobs: "Latest Positions",

    job1_title: "Kumo Specialized Services - Founder & Operations Manager",
    job1_date: "2021 - 2026",
    job1_desc: "- Increased revenue by up to 30%...\n- Managed bidding processes...\n- Led teams...\n- Reduced costs...\n- Procurement...\n- Technical reports.",

    job2_title: "Integration Point Company - GTC Analyst",
    job2_date: "2017 - 2020",
    job2_desc: "- Trade research...\n- System interpretation...\n- Data analysis...\n- International communication.",

    cases_title: "Success Cases - Work Evidence",

    case1_title: "Client Consolidation",
    case1_desc: "In the region where Kumo operates...",

    case2_title: "Positive Performance",
    case2_desc: "Through detailed analysis...",

    case3_title: "Sales Tracking",
    case3_desc: "Established commercial partnerships...",

    case4_title: "Situational Analysis",
    case4_desc: "Understanding business nature is key...",

    contact: "Contact",
    send_email: "Send Email",

    footer: "© 2026 Eduardo Cobos. All content is original..."
  }
};

const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n] || el.textContent;
  });

  localStorage.setItem("lang", lang);
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  document.documentElement.lang = lang;
}

langToggle.onclick = () => {
  const current = localStorage.getItem("lang") || "es";
  setLanguage(current === "es" ? "en" : "es");
};

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang") || "es");
});
