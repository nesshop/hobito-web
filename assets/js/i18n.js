/**
 * Hobito Web - Motor de Internacionalización y Dinamismo de Idioma (i18n)
 * Soporta cambio dinámico entre Español e Inglés sin recargar la página.
 */

(function () {
  const STORAGE_KEY = 'hobito_lang';

  // Obtener idioma inicial (guardado o según navegador)
  function getInitialLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (saved === 'es' || saved === 'en')) {
      return saved;
    }
    const navLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    return navLang.startsWith('en') ? 'en' : 'es';
  }

  // Resolver clave tipo "index.hero_title" dentro del diccionario
  function resolveKey(obj, path) {
    if (!obj || !path) return null;
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  }

  let currentLanguage = getInitialLanguage();

  function applyLanguage(lang) {
    if (!TRANSLATIONS || !TRANSLATIONS[lang]) {
      console.warn(`Idioma "${lang}" no disponible en el diccionario.`);
      return;
    }

    currentLanguage = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    const dict = TRANSLATIONS[lang];

    // 1. Textos simples (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = resolveKey(dict, key);
      if (val !== null && val !== undefined) {
        el.textContent = val;
      }
    });

    // 2. Textos con marcado HTML (data-i18n-html)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = resolveKey(dict, key);
      if (val !== null && val !== undefined) {
        el.innerHTML = val;
      }
    });

    // 3. Título de página (data-i18n-title en body o meta)
    const titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey) {
      const titleVal = resolveKey(dict, titleKey);
      if (titleVal) document.title = titleVal;
    }

    // 4. Meta descripción (data-i18n-desc en meta[name="description"])
    const metaDesc = document.querySelector('meta[name="description"][data-i18n-desc]');
    if (metaDesc) {
      const descKey = metaDesc.getAttribute('data-i18n-desc');
      const descVal = resolveKey(dict, descKey);
      if (descVal) metaDesc.setAttribute('content', descVal);
    }

    // 5. Botones selectores de idioma
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // 6. Si hay algún acordeón abierto, recalcular maxHeight para que no se corte el texto
    document.querySelectorAll('.accordion-item.active .accordion-body').forEach((body) => {
      body.style.maxHeight = body.scrollHeight + 40 + 'px';
    });

    // Disparar evento personalizado
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
  }

  // Inicialización al cargar el DOM
  document.addEventListener('DOMContentLoaded', () => {
    // Escuchar clics en los botones de cambio de idioma
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn[data-lang]');
      if (btn) {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang && selectedLang !== currentLanguage) {
          applyLanguage(selectedLang);
        }
      }
    });

    // Aplicar idioma inicial
    applyLanguage(currentLanguage);
  });

  // Exponer API global
  window.HobitoI18n = {
    setLanguage: applyLanguage,
    getLanguage: () => currentLanguage
  };
})();

