/**
 * Hobito Web - Scripts Principales
 * Web estática informativa y legal
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuración global editable
  const CONFIG = {
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hobito.app', // Placeholder editable
    supportEmail: 'soporte@hobito.app',
  };

  // 1. Asignar enlaces configurables si se solicita
  document.querySelectorAll('[data-play-store-link]').forEach(el => {
    if (!el.getAttribute('href') || el.getAttribute('href') === '#') {
      el.setAttribute('href', CONFIG.playStoreUrl);
    }
  });

  // 2. Menú de navegación móvil
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Cerrar al pulsar un enlace
    navMenu.querySelectorAll('.nav-link, .btn').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        navToggle.focus();
      }
    });
  }

  // 3. Componente Acordeón para FAQs
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Opcional: Cerrar los demás si se desea comportamiento exclusivo
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherHeader = otherItem.querySelector('.accordion-header');
          const otherBody = otherItem.querySelector('.accordion-body');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Alternar el actual
      if (isOpen) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 30 + 'px';
      }
    });
  });

  // Abrir acordeón si hay hash en la URL
  if (window.location.hash) {
    const targetItem = document.querySelector(window.location.hash);
    if (targetItem && targetItem.classList.contains('accordion-item')) {
      const header = targetItem.querySelector('.accordion-header');
      const body = targetItem.querySelector('.accordion-body');
      if (header && body) {
        targetItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
          body.style.maxHeight = body.scrollHeight + 30 + 'px';
          targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }

  // 4. Actualizar año de copyright automáticamente
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

