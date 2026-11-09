/**
 * Hobito Web - Diccionario de Traducciones (i18n)
 * Español (es) / Inglés (en)
 */

const TRANSLATIONS = {
  es: {
    // Metadatos comunes y páginas
    meta: {
      index_title: "Hobito - Tu diario de hobbies, rachas y logros",
      index_desc: "Hobito es la aplicación móvil para el registro y seguimiento de tus hobbies y aficiones. Controla tus rachas, desbloquea logros y comparte tu inspiración.",
      faq_title: "Preguntas Frecuentes (FAQ) - Hobito",
      faq_desc: "Encuentra respuestas a las dudas más comunes sobre la aplicación móvil Hobito: registro de aficiones, privacidad, niveles, logros, comunidad y soporte.",
      privacy_title: "Política de Privacidad - Hobito",
      privacy_desc: "Política de Privacidad de Hobito. Conoce cómo la aplicación móvil Hobito trata, almacena y protege tus datos personales conforme al RGPD y la LOPDGDD.",
      terms_title: "Términos y Condiciones - Hobito",
      terms_desc: "Términos y Condiciones de uso de la aplicación móvil Hobito. Conoce las normas de uso, responsabilidades, propiedad intelectual y condiciones del servicio."
    },

    // Barra de aviso informativa
    banner: {
      disclaimer: "🌱 <strong>Web informativa y legal de Hobito:</strong> Esta web no recopila datos personales, no utiliza cookies de seguimiento ni gestiona cuentas. Todas las funciones de datos corresponden exclusivamente a la app móvil.",
      faq_disclaimer: "🌱 <strong>Centro de ayuda informativa:</strong> Las respuestas a continuación explican el funcionamiento exclusivo de la <strong>aplicación móvil Hobito</strong>.",
      legal_disclaimer: "🌱 <strong>Aviso sobre este documento:</strong> Esta web tiene fines meramente informativos y legales. La web no recopila ni almacena datos personales. El presente texto documenta exclusivamente los tratamientos realizados por la <strong>aplicación móvil Hobito</strong>.",
      terms_disclaimer: "🌱 <strong>Aviso legal:</strong> El presente documento regula el uso de la <strong>aplicación móvil Hobito</strong>. Este sitio web es de acceso libre, estático e informativo."
    },

    // Navegación
    nav: {
      home: "Inicio",
      faq: "FAQ",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      download: "Descargar App"
    },

    // Página de Inicio (Index)
    index: {
      hero_tag: "Tu espacio para registrar lo que amas",
      hero_title: 'Celebra tus aficiones, cultiva tus <span class="highlight-gradient">mejores momentos</span>',
      hero_desc: "<strong>Hobito</strong> es una aplicación móvil acogedora e intuitiva diseñada para acompañarte en tu tiempo libre: guarda tus actividades, construye rachas constantes, desbloquea logros y comparte tu progreso con una comunidad afín.",
      play_store: "Disponible en Google Play",
      explore_features: "Explorar funciones",
      note_ads: "100% libre de anuncios invasivos",
      note_privacy: "Control total de privacidad",
      badge_streak: "¡Racha activa esta semana!",
      badge_level: "Nivel 1: Curious (117 logros)",
      
      features_badge: "Funcionalidades",
      features_title: "Diseñado con mimo para tus aficiones",
      features_subtitle: "Cada rincón de Hobito está pensado para que registrar tu tiempo libre sea un momento de desconexión gratificante y motivador.",
      
      f1_title: "Registro de Hobbies",
      f1_text: "Lleva la cuenta de tus lecturas, sesiones de pintura, cocina, videojuegos, jardinería o deporte. Añade notas, fechas y conserva la memoria de lo que disfrutas hacer.",
      f2_title: "Rachas y Constancia",
      f2_text: "Mantén el ritmo viendo tus días activos en la semana. Hobito te ayuda a cuidar la constancia en tus aficiones sin presiones ni métricas estresantes.",
      f3_title: "Niveles y 117 Logros",
      f3_text: "Comienza en <em>Level 1: Curious</em> y acumula puntos de experiencia (XP). Desbloquea más de 117 logros secretos a medida que exploras nuevas pasiones.",
      f4_title: "Comunidad e Inspiración",
      f4_text: "Conecta con personas que comparten tus intereses. Sigue a amigos y creadores, encuentra nuevas ideas y celebra los logros alcanzados.",
      f5_title: "Privacidad a tu Medida",
      f5_text: "Tú tienes el control absoluto: elige si cada registro de actividad es público para inspirar a otros o permanece estrictamente en tu diario personal privado.",
      f6_title: "Preferencias y Modos",
      f6_text: "Adaptado a tu dispositivo con selector de idioma del sistema y soporte para temas claro y oscuro, para que disfrutes de una lectura descansada a cualquier hora.",

      screens_badge: "Vistazo a la App",
      screens_title: "Una interfaz limpia, cálida y acogedora",
      screens_subtitle: "Descubre el aspecto real de la aplicación Hobito en tu smartphone.",
      screen1_title: "Acceso sencillo y seguro",
      screen1_desc: "Inicia sesión con tu correo electrónico o cuenta de Google de forma rápida y confiable.",
      screen2_title: "Tu progreso en un vistazo",
      screen2_desc: "Monitorea hobbies totales, días de racha, comunidad, XP y logros desbloqueados.",

      cta_badge: "Empieza hoy",
      cta_title: "¿Listo para cuidar tu tiempo libre?",
      cta_desc: "Descarga Hobito en tu móvil Android y comienza a recopilar los recuerdos de tus pasiones favoritas."
    },

    // Página de FAQ
    faq: {
      badge: "Centro de Ayuda",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre el funcionamiento, privacidad y características de la aplicación móvil Hobito.",
      
      cat1_title: "🌿 Sobre Hobito y Primeros Pasos",
      q1: "¿Qué es Hobito y cuál es su objetivo?",
      a1: "<p><strong>Hobito</strong> es una aplicación móvil diseñada como diario y compañero para tus actividades de ocio y aficiones («hobbies»). Te permite llevar un registro visual y ordenado de lo que te gusta hacer en tu tiempo libre (lectura, deporte, arte, música, jardinería, etc.), mantener la constancia mediante rachas semanales, ganar experiencia y desbloquear logros lúdicos.</p><p>A diferencia de las redes sociales tradicionales saturadas de ruido, Hobito está pensada para ser un espacio tranquilo, acogedor y motivador centrado en tu disfrute personal.</p>",
      
      q2: "¿En qué plataformas está disponible y cuánto cuesta?",
      a2: "<p>Hobito está disponible principalmente para dispositivos móviles Android a través de <strong>Google Play Store</strong>. La descarga y el uso de las funciones básicas de registro, niveles y rachas son accesibles de forma libre y gratuita.</p>",

      q3: "¿Puedo iniciar sesión o registrar hobbies desde esta página web?",
      a3: "<p><strong>No.</strong> Este sitio web es exclusivamente informativo y legal. No dispone de backend, base de datos ni formularios de acceso.</p><p>Toda la autenticación (por correo o con cuenta de Google), el registro de actividades y la gestión de tu perfil se realizan exclusivamente dentro de la <strong>aplicación móvil Hobito</strong> instalada en tu smartphone.</p>",

      cat2_title: "📖 Registro y Gestión de Hobbies",
      q4: "¿Cómo se registra una actividad o sesión en la app?",
      a4: "<p>Registrar una actividad es muy sencillo:</p><ol><li>Abre la aplicación móvil Hobito en tu dispositivo.</li><li>Pulsa el botón de añadir (icono <strong>+</strong>).</li><li>Selecciona el hobby o actividad que has realizado.</li><li>Añade la fecha, una breve nota o reflexión y, si lo deseas, una foto de tu avance.</li><li>Elige si deseas que la publicación sea pública para la comunidad o privada solo para ti.</li><li>Guarda el registro para sumar puntos de experiencia (XP) y actualizar tu contador de hobbies y rachas.</li></ol>",

      q5: "¿Qué categorías de hobbies están disponibles?",
      a5: "<p>Hobito contempla una amplia variedad de categorías para abarcar todo tipo de intereses creativos, físicos, culturales y relajantes:</p><ul><li><strong>Artes y Manualidades:</strong> Pintura, dibujo, ilustración digital, cerámica, costura, ganchillo, origami.</li><li><strong>Lectura y Escritura:</strong> Libros leídos, novelas gráficas, escritura creativa, diarios.</li><li><strong>Deporte y Bienestar:</strong> Ciclismo, senderismo, yoga, escalada, natación, running.</li><li><strong>Gastronomía:</strong> Cocina creativa, repostería, barista de café, cata de té.</li><li><strong>Naturaleza:</strong> Jardinería, botánica, cuidado de plantas de interior, ornitología.</li><li><strong>Música y Escena:</strong> Guitarra, piano, ukelele, canto, teatro.</li><li><strong>Ocio y Tecnología:</strong> Videojuegos, programación creativa, juegos de mesa, fotografía, maquetismo.</li></ul><p>Además, puedes crear o personalizar aficiones a tu gusto si tu pasión es muy específica.</p>",

      q6: "¿Puedo editar o eliminar un registro guardado previamente?",
      a6: "<p><strong>Sí, por supuesto.</strong> Puedes acceder al historial de registros de cualquier hobby, seleccionar la entrada que deseas modificar y pulsar en «Editar» para corregir notas, fotos o fechas.</p><p>Si prefieres suprimirla, selecciona la opción «Eliminar registro». La entrada desaparecerá de tus estadísticas de forma inmediata.</p>",

      cat3_title: "🔒 Privacidad y Control",
      q7: "¿Mis hobbies son públicos o privados? ¿Quién puede verlos?",
      a7: "<p><strong>Tú tienes el control total de cada registro:</strong></p><ul><li><strong>Registros Privados:</strong> Por defecto o según tu elección, nadie más puede ver tus anotaciones personales, fechas íntimas ni fotos privadas. Se mantienen en tu diario seguro.</li><li><strong>Registros Públicos:</strong> Si decides compartir una actividad como pública, aparecerá en el feed de inspiración de Hobito para que tus seguidores y otros miembros puedan descubrirla y animarte.</li></ul><p>Puedes cambiar el estado de cualquier registro de público a privado (y viceversa) en cualquier momento.</p>",

      cat4_title: "⭐ Niveles, Logros y Comunidad",
      q8: "¿Qué es el «Level 1: Curious», los XP y los 117 logros?",
      a8: "<p>Hobito integra una mecánica de gamificación diseñada para hacer tu tiempo libre más divertido:</p><ul><li><strong>Nivel y Puntos de Experiencia (XP):</strong> Al registrar tus aficiones y mantener hábitos sumas puntos XP. Todos los usuarios comienzan en <em>Level 1: Curious</em> (con 50 XP necesarios para alcanzar el Nivel 2) y van desbloqueando nuevos rangos conforme exploran el mundo de las aficiones.</li><li><strong>117 Logros Desbloqueables:</strong> Hobito contiene 117 medallas e insignias secretas (por ejemplo: registrar tu primer hobby, mantener una racha de 7 días, explorar 3 categorías diferentes o documentar una sesión nocturna).</li></ul><p><em>Nota legal:</em> Los puntos de experiencia, niveles y logros no tienen valor comercial ni canjeable por dinero real.</p>",

      q9: "¿Cómo funcionan las rachas («Streak») y los días activos?",
      a9: "<p>La tarjeta de «STREAK» en tu perfil muestra el número de días que has dedicado tiempo a tus aficiones durante la semana activa. Dedicar unos minutos al día a lo que te apasiona ayuda a prevenir el estrés y fomenta el autocuidado constante.</p>",

      q10: "¿Qué significan «Community» (Seguidores) e «Inspirations» (Seguidos)?",
      a10: "<p>En tu pantalla de perfil encontrarás dos métricas sociales:</p><ul><li><strong>Community (Followers):</strong> Usuarios que te siguen y aprecian las actividades y progresos que marcas como públicos.</li><li><strong>Inspirations (Following):</strong> Personas cuyas aficiones o proyectos sigues para encontrar ideas, técnicas o inspiración para tus propios momentos de ocio.</li></ul><p>La sección de recomendaciones te muestra sugerencias afines a tus intereses sin algoritmos intrusivos ni venta de datos a anunciantes.</p>",

      cat5_title: "⚙️ Cuenta, Datos y Asistencia",
      q11: "¿Puedo cambiar el idioma o el tema (modo oscuro)?",
      a11: "<p>Sí. Desde la sección de <strong>Preferences</strong> en la pantalla de perfil puedes ajustar:</p><ul><li><strong>Language:</strong> Selección de idioma preferido o detección automática del sistema.</li><li><strong>Theme:</strong> Modo claro, modo oscuro o adaptación automática según la configuración de tu teléfono móvil.</li></ul>",

      q12: "¿Cómo puedo eliminar mi cuenta y todos mis datos de la app?",
      a12: "<p>Puedes eliminar tu cuenta en cualquier momento siguiendo estos pasos:</p><ol><li>En la app móvil Hobito, ve a la pestaña <strong>Account / Perfil</strong>.</li><li>Selecciona la opción <strong>Eliminar cuenta</strong>.</li><li>Confirma tu decisión. Todos tus hobbies, fotos, rachas, logros y credenciales se borrarán permanentemente de los servidores de la aplicación móvil.</li></ol><p>Si no tienes acceso a tu teléfono o prefieres solicitarlo manualmente, puedes enviar un correo desde la dirección con la que te registraste a <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a>. Consulta los detalles en nuestra <a href=\"privacy-policy.html#eliminacion-cuenta\">Política de Privacidad</a>.</p>",

      q13: "¿Cómo puedo contactar con el equipo de Hobito?",
      a13: "<p>Para cualquier consulta técnica, reporte de errores en la aplicación móvil, sugerencias o dudas legales, puedes escribir a nuestro canal oficial de soporte:</p><p>📧 <strong>Correo de soporte:</strong> <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a></p><p>Respondemos a todas las consultas de la comunidad en un plazo habitual de 24 a 48 horas hábiles.</p>",

      bottom_title: "¿No encontraste lo que buscabas?",
      bottom_desc: "Estamos a tu disposición para ayudarte con cualquier detalle sobre Hobito.",
      bottom_btn: "Contactar con Soporte"
    },

    // Política de Privacidad
    privacy: {
      badge: "Privacidad y Protección de Datos",
      title: "Política de Privacidad",
      meta_updated: "<strong>Última actualización:</strong> 9 de noviembre de 2026",
      meta_scope: "<strong>Ámbito:</strong> Aplicación Móvil Hobito",
      meta_reg: "<strong>Normativa:</strong> RGPD (UE 2016/679) &amp; LOPDGDD 3/2018",
      notice_box: "<strong>IMPORTANTE — INDEPENDENCIA DE ESTA WEB:</strong> Este sitio web es estático y de carácter exclusivamente informativo y legal. Esta página web no utiliza cookies analíticas ni publicitarias, no incluye formularios de contacto que almacenen datos en bases de datos y no recopila información del usuario. La presente Política de Privacidad describe el tratamiento de datos llevado a cabo exclusivamente por la <strong>aplicación móvil Hobito</strong> instalada en su dispositivo.",
      
      sec1_title: "1. Responsable del Tratamiento",
      sec1_text: "El responsable del tratamiento de los datos personales recabados a través de la aplicación móvil Hobito es:",
      sec1_item1: "<strong>Denominación / Titular:</strong>",
      sec1_item2: "<strong>NIF/CIF/Identificador:</strong>",
      sec1_item3: "<strong>Domicilio social:</strong>",
      sec1_item4: "<strong>Correo electrónico de contacto y privacidad:</strong>",

      sec2_title: "2. Datos que trata la Aplicación Móvil Hobito",
      sec2_intro: "La aplicación móvil Hobito únicamente recopila y trata los datos estrictamente necesarios para ofrecer el servicio de registro de aficiones, estadísticas de uso, gamificación e interacciones comunitarias:",
      sec2_subA: "A. Registro y Autenticación",
      sec2_subA_1: "<strong>Registro por correo electrónico:</strong> Dirección de correo electrónico y contraseña (esta última debidamente cifrada mediante algoritmos de hash criptográfico unidireccional antes de su almacenamiento).",
      sec2_subA_2: "<strong>Acceso con cuenta de Google (Google Sign-In):</strong> Si optas por este método, recibimos de Google tu identificador único de usuario, tu dirección de correo electrónico y el nombre público asociado a tu perfil. Hobito nunca tiene acceso a tu contraseña de Google.",
      sec2_subB: "B. Perfil de Usuario",
      sec2_subB_1: "Nombre visible o de pila.",
      sec2_subB_2: "Nombre de usuario único (<em>username</em> o alias).",
      sec2_subB_3: "Fotografía o avatar de perfil (opcional).",
      sec2_subB_4: "Preferencias de configuración (idioma de la interfaz y tema claro/oscuro seleccionado).",
      sec2_subC: "C. Registros de Hobbies y Actividades",
      sec2_subC_1: "Nombre de la actividad o hobby (por ejemplo: lectura, pintura, ciclismo, jardinería).",
      sec2_subC_2: "Categoría del hobby seleccionada.",
      sec2_subC_3: "Notas, descripciones personales o reflexiones añadidas a la actividad.",
      sec2_subC_4: "Fecha y hora de realización del registro.",
      sec2_subC_5: "Métricas de progreso (puntos de experiencia XP, nivel alcanzado —como <em>Level 1: Curious</em>—, rachas de días activos y logros desbloqueados).",
      sec2_subC_6: "Imágenes o fotos adjuntas opcionalmente a un registro de hobby como evidencia o recuerdo personal.",

      sec3_title: "3. Información Pública y Privada: Control del Usuario",
      sec3_intro: "En Hobito creemos firmemente en la soberanía de tus datos. La aplicación distingue claramente entre contenidos públicos y privados:",
      sec3_1: "<strong>Información Pública:</strong> Tu nombre de usuario, avatar, nivel general de experiencia (XP), número de hobbies registrados y aquellos hobbies específicos que tú decidas expresamente marcar como públicos serán visibles para otros usuarios de la comunidad de Hobito para fomentar la inspiración mutua.",
      sec3_2: "<strong>Información Privada:</strong> Cualquier registro marcado como privado, tus contraseñas, tu dirección de correo electrónico y tus notas personales marcadas como privadas nunca se compartirán ni se mostrarán a terceros usuarios.",
      sec3_3: "<strong>Cambio de estado:</strong> Puedes modificar en cualquier momento la visibilidad (pública o privada) de tus registros desde la propia aplicación móvil.",

      sec4_title: "4. Recomendaciones e Interacciones Sociales",
      sec4_intro: "La aplicación Hobito incluye funcionalidades sociales orientadas a compartir aficiones:",
      sec4_1: "<strong>Seguidores y Seguidos (Following / Followers):</strong> Permite seguir la actividad pública de otros entusiastas e inspirarte con sus progresos.",
      sec4_2: "<strong>Recomendaciones:</strong> La aplicación puede sugerir categorías o aficiones en función de las actividades registradas o las tendencias populares dentro de la comunidad, sin elaborar perfiles automatizados con efectos jurídicos negativos para ti.",

      sec5_title: "5. Finalidad y Base Jurídica del Tratamiento",
      th_purpose: "Finalidad",
      th_data: "Datos Tratados",
      th_basis: "Base Legal (RGPD)",
      tr1_purpose: "Prestación del servicio (gestión de cuenta, registro de hobbies, rachas, cálculo de niveles XP y logros).",
      tr1_data: "Email, contraseña cifrada, perfil, actividades registradas.",
      tr1_basis: "<strong>Ejecución del contrato</strong> (Art. 6.1.b RGPD) derivado de los Términos y Condiciones.",
      tr2_purpose: "Funciones sociales (seguimiento entre usuarios, hobbies públicos y descubrimientos).",
      tr2_data: "Perfil público y hobbies configurados expresamente como públicos.",
      tr2_basis: "<strong>Consentimiento explícito</strong> del usuario (Art. 6.1.a RGPD) al marcar el contenido como público.",
      tr3_purpose: "Atención de consultas, soporte técnico y resolución de incidencias.",
      tr3_data: "Email del remitente y datos aportados voluntariamente en el mensaje.",
      tr3_basis: "<strong>Interés legítimo</strong> (Art. 6.1.f RGPD) en atender solicitudes de soporte y usuarios.",
      tr4_purpose: "Cumplimiento de obligaciones legales aplicables al responsable.",
      tr4_data: "Datos identificativos y registros de seguridad exigidos por ley.",
      tr4_basis: "<strong>Cumplimiento de obligación legal</strong> (Art. 6.1.c RGPD).",

      sec6_title: "6. Proveedores Tecnológicos y Transferencias de Datos",
      sec6_intro: "Para el funcionamiento seguro y eficiente de la aplicación móvil, Hobito se apoya en proveedores de servicios tecnológicos de primer nivel bajo contratos de encargo de tratamiento conformes al RGPD:",
      sec6_1: "<strong>Alojamiento de bases de datos y backend de la app:</strong>",
      sec6_1_sub: "Almacena de forma cifrada los registros de la aplicación.",
      sec6_2: "<strong>Servicio de autenticación federada:</strong> Google LLC (para el inicio de sesión opcional con Google Sign-In).",
      sec6_3: "<strong>Distribución de la aplicación:</strong> Google Play Store (Google LLC), que gestiona las descargas y actualizaciones de la app en dispositivos Android.",
      sec6_4: "<strong>Servicio de correo de soporte:</strong>",
      sec6_footer: "No vendemos, alquilamos ni comercializamos tus datos personales con terceros para fines publicitarios.",

      sec7_title: "7. Plazos de Conservación de los Datos",
      sec7_p1: "Tus datos personales se conservarán mientras mantengas activa tu cuenta en la aplicación móvil Hobito.",
      sec7_p2: "En el momento en que solicites la eliminación de tu cuenta, todos tus datos personales, registros de hobbies, imágenes asociadas, rachas y logros serán eliminados de manera irreversible de nuestros sistemas operativos en un plazo máximo de 30 días, salvo aquellos datos que deban conservarse debidamente bloqueados durante los plazos legalmente exigibles para la atención de responsabilidades legales.",

      sec8_title: "8. Procedimiento de Eliminación de Cuenta",
      sec8_intro: "Los usuarios pueden solicitar y ejecutar la eliminación completa de su cuenta y de todos los datos asociados en cualquier momento a través de dos vías:",
      sec8_1: "<strong>Directamente desde la app móvil Hobito:</strong> Accede a la pestaña <em>Perfil</em> &gt; <em>Ajustes de Cuenta (Account)</em> &gt; Selecciona <em>Eliminar cuenta</em> y confirma la acción. La cuenta y sus datos asociados serán eliminados de forma inmediata.",
      sec8_2: "<strong>Mediante solicitud por correo electrónico:</strong> Escribe un correo a <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a> desde la misma dirección de email con la que te diste de alta en la aplicación móvil, indicando en el asunto «Solicitud de eliminación de cuenta Hobito». Nuestro equipo tramitará la baja definitiva y te confirmará la eliminación.",

      sec9_title: "9. Ejercicio de Derechos (RGPD y LOPDGDD)",
      sec9_intro: "Conforme a la normativa europea y española de protección de datos, te asisten los siguientes derechos:",
      sec9_1: "<strong>Derecho de Acceso:</strong> Conocer qué datos personales tuyos estamos tratando.",
      sec9_2: "<strong>Derecho de Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos (también puedes editarlos directamente desde la pantalla de perfil de la app).",
      sec9_3: "<strong>Derecho de Supresión («al olvido»):</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios para los fines que fueron recabados.",
      sec9_4: "<strong>Derecho de Limitación del Tratamiento:</strong> Solicitar que se restrinja el tratamiento de tus datos bajo las condiciones fijadas por la ley.",
      sec9_5: "<strong>Derecho a la Portabilidad:</strong> Recibir tus datos en un formato estructurado, de uso común y lectura mecánica.",
      sec9_6: "<strong>Derecho de Oposición:</strong> Oponerte en cualquier momento al tratamiento de tus datos por motivos relacionados con tu situación particular.",
      sec9_7: "<strong>Derecho a retirar el consentimiento:</strong> En cualquier momento, sin que ello afecte a la licitud del tratamiento previo.",
      sec9_p1: "Para ejercer cualquiera de estos derechos, basta con enviar un correo electrónico a <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a> acompañando tu solicitud de un documento o dato que acredite fehacientemente tu identidad (por ejemplo, el correo vinculado a tu cuenta).",
      sec9_p2: "Asimismo, si consideras que tus derechos no han sido debidamente atendidos, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede web (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener noreferrer\">www.aepd.es</a>).",

      sec10_title: "10. Medidas de Seguridad",
      sec10_p: "Aplicamos medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad apropiado al riesgo, incluyendo el cifrado de las comunicaciones entre la aplicación móvil y los servidores mediante protocolos seguros HTTPS / TLS, hashing de contraseñas y controles de acceso restringido a la base de datos de la app.",

      sec11_title: "11. Modificaciones de esta Política",
      sec11_p: "Podemos actualizar periódicamente esta Política de Privacidad para reflejar cambios en las funcionalidades de la aplicación móvil Hobito o en la normativa aplicable. Cuando se realicen modificaciones sustanciales, se notificará a los usuarios a través de un aviso destacado en la aplicación móvil o por correo electrónico antes de que los cambios surtan efecto."
    },

    // Términos y Condiciones
    terms: {
      badge: "Condiciones Legales de Servicio",
      title: "Términos y Condiciones",
      meta_updated: "<strong>Última actualización:</strong> 9 de noviembre de 2026",
      meta_scope: "<strong>Ámbito:</strong> Aplicación Móvil Hobito",
      meta_jur: "<strong>Jurisdicción:</strong> España / Unión Europea",
      notice_box: "<strong>AVISO GENERAL:</strong> Los presentes Términos y Condiciones regulan la descarga, instalación y utilización de la <strong>aplicación móvil Hobito</strong>. Este sitio web en el que se encuentra es un espacio puramente informativo y documental, sin registro de usuarios, pasarelas de pago ni contratación electrónica directa.",

      sec1_title: "1. Objeto y Ámbito de Aplicación",
      sec1_p1: "El presente acuerdo establece los términos jurídicos que rigen el acceso y uso de la aplicación móvil <strong>Hobito</strong> (en adelante, la «Aplicación» o el «Servicio»), desarrollada y operada por <span class=\"legal-placeholder\">[Nombre del Desarrollador / Razón Social]</span> (en adelante, «Hobito» o «nosotros»).",
      sec1_p2: "Al descargar, instalar, registrarse o utilizar la Aplicación, usted (en adelante, el «Usuario») declara haber leído, comprendido y aceptado en su totalidad las presentes Condiciones, así como nuestra <a href=\"privacy-policy.html\">Política de Privacidad</a>. Si no está de acuerdo con cualquiera de estas cláusulas, deberá abstenerse de instalar y utilizar la Aplicación.",

      sec2_title: "2. Requisitos de Edad, Registro y Cuenta de Usuario",
      sec2_1: "<strong>Edad mínima:</strong> Para utilizar Hobito debe tener al menos 14 años (o la edad mínima legal exigida en su país de residencia para consentir el tratamiento de datos personales).",
      sec2_2: "<strong>Exactitud de la información:</strong> El Usuario se compromete a proporcionar información veraz, actualizada y completa durante el proceso de registro (sea mediante email y contraseña o a través de Google Sign-In).",
      sec2_3: "<strong>Custodia de credenciales:</strong> El Usuario es el único responsable de preservar la confidencialidad de su contraseña y de todas las actividades que se realicen bajo su cuenta. En caso de detectar cualquier uso no autorizado, deberá notificarlo de inmediato a <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a>.",

      sec3_title: "3. Descripción y Finalidad de Hobito",
      sec3_intro: "Hobito es una aplicación móvil diseñada como diario personal para el seguimiento, organización y celebración de actividades de ocio y aficiones («hobbies»). Sus funciones principales comprenden:",
      sec3_1: "Registro cronológico de actividades con categorización, fechas y anotaciones personales.",
      sec3_2: "Contabilización de rachas y días activos durante la semana.",
      sec3_3: "Sistema de progreso y gamificación (acumulación de puntos de experiencia XP, avance de nivel como <em>Level 1: Curious</em> y catálogo de 117 logros).",
      sec3_4: "Interacciones comunitarias opcionales (posibilidad de seguir a otros usuarios, descubrir inspiración y compartir registros marcados como públicos).",

      sec4_title: "4. Normas de Conducta y Uso Aceptable",
      sec4_intro: "El Usuario se compromete a utilizar la Aplicación conforme a la ley, la moral, el orden público y los presentes Términos. Queda terminantemente prohibido:",
      sec4_1: "Publicar, cargar o transmitir contenidos ilícitos, difamatorios, violentos, discriminatorios, pornográficos, de odio o que vulneren derechos de terceros o menores.",
      sec4_2: "Hacerse pasar por otra persona, entidad o usurpar nombres de usuario ajenos con intención de engaño o difamación.",
      sec4_3: "Utilizar la Aplicación para el envío masivo de spam, publicidad no solicitada o actividades comerciales no autorizadas.",
      sec4_4: "Intentar eludir, descompilar, aplicar ingeniería inversa o vulnerar los mecanismos de seguridad, cifrado o control de acceso de la Aplicación o sus servidores.",
      sec4_5: "Utilizar bots, scrapers o herramientas automatizadas para extraer datos de la plataforma sin autorización previa y por escrito.",

      sec5_title: "5. Contenido del Usuario y Derechos de Visibilidad",
      sec5_p1: "El Usuario conserva en todo momento la titularidad y todos los derechos de propiedad intelectual sobre los textos, imágenes y contenidos que registre o publique en la Aplicación («Contenido del Usuario»).",
      sec5_p2: "Al marcar voluntariamente un registro o hobby como <strong>Público</strong>, el Usuario concede a Hobito una licencia no exclusiva, gratuita, mundial y revocable para almacenar, reproducir, mostrar y distribuir dicho contenido dentro de la Aplicación con la única finalidad de permitir la interacción comunitaria con otros usuarios. Si el Usuario modifica la visibilidad a <strong>Privado</strong> o elimina el registro, dicha licencia cesará en lo sucesivo.",
      sec5_p3: "El Usuario garantiza que es titular o cuenta con las autorizaciones debidas sobre cualquier fotografía o contenido que incorpore a la Aplicación, eximiendo a Hobito de cualquier reclamación de terceros.",

      sec6_title: "6. Propiedad Intelectual e Industrial de Hobito",
      sec6_p1: "Todos los elementos que componen la Aplicación y esta web informativa —incluyendo, a título enunciativo y no limitativo: el nombre comercial «Hobito», el logotipo multicolor, iconos, diseño gráfico, interfaz de usuario (UI), código fuente, animaciones, textos y el sistema de logros— son propiedad exclusiva de Hobito o de sus legítimos licenciantes y están protegidos por las leyes de propiedad intelectual e industrial nacionales e internacionales.",
      sec6_p2: "No se concede al Usuario ningún derecho de reproducción, explotación, distribución o transformación sobre dichos elementos salvo la licencia de uso personal, no transferible y limitada a la utilización de la app en su smartphone conforme a estos Términos.",

      sec7_title: "7. Elementos de Gamificación (XP, Logros y Niveles)",
      sec7_p1: "Los puntos de experiencia (XP), los niveles (como <em>Level 1: Curious</em> y sucesivos), los 117 logros y los contadores de rachas son elementos puramente recreativos diseñados para enriquecer la experiencia de usuario dentro de la app móvil.",
      sec7_p2: "Dichos elementos <strong>no tienen ningún valor monetario, económico ni de canje por dinero real</strong>. No constituyen bienes transferibles, no pueden ser objeto de compraventa entre usuarios ni confieren derechos adquiridos exigibles frente a Hobito.",

      sec8_title: "8. Suspensión y Cancelación de Cuentas",
      sec8_1: "<strong>Por el Usuario:</strong> Puede cancelar y eliminar su cuenta en cualquier momento desde los ajustes de la propia app (<em>Account &gt; Delete account</em>) o enviando un correo a <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a>.",
      sec8_2: "<strong>Por Hobito:</strong> Nos reservamos el derecho de suspender o rescindir temporal o definitivamente el acceso de un Usuario a la Aplicación en caso de incumplimiento grave o reiterado de estos Términos, de la legislación vigente o ante conductas que pongan en riesgo la seguridad de la comunidad.",

      sec9_title: "9. Exclusión de Garantías y Limitación de Responsabilidad",
      sec9_p1: "La Aplicación y sus contenidos se proporcionan «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas.",
      sec9_p2: "Hobito realizará todos los esfuerzos razonables para garantizar la disponibilidad continua y la seguridad del Servicio; sin embargo, no garantiza que la Aplicación funcione de manera ininterrumpida o libre de errores derivados de fallos de conectividad, caídas del sistema operativo móvil o intervenciones de terceros ajenos a nuestro control.",
      sec9_p3: "En la máxima medida permitida por la legislación aplicable, Hobito no será responsable de pérdidas de datos fortuitas resultantes de fallos del dispositivo móvil, desinstalaciones accidentales o accesos no autorizados imputables a negligencia del usuario en la custodia de su contraseña.",

      sec10_title: "10. Modificación de los Términos",
      sec10_p: "Podemos actualizar los presentes Términos en cualquier momento para adaptarlos a nuevas funcionalidades, mejoras técnicas o exigencias normativas. Notificaremos a los usuarios sobre modificaciones relevantes a través de la Aplicación o mediante la actualización de la fecha en la cabecera de este documento. El uso continuado de la app tras la entrada en vigor de los cambios constituirá su aceptación.",

      sec11_title: "11. Legislación Aplicable y Jurisdicción",
      sec11_p1: "Las presentes Condiciones se regirán e interpretarán de acuerdo con la legislación de <strong>España</strong> y el marco normativo de la <strong>Unión Europea</strong>.",
      sec11_p2: "En caso de controversia, las partes se someterán a los juzgados y tribunales del domicilio del usuario consumidor, o en su defecto a los tribunales competentes de <span class=\"legal-placeholder\">[Ciudad / Provincia del Titular]</span>, sin perjuicio de la plataforma de resolución de litigios en línea de la Unión Europea accesible en <a href=\"https://ec.europa.eu/consumers/odr\" target=\"_blank\" rel=\"noopener noreferrer\">https://ec.europa.eu/consumers/odr</a>.",

      sec12_title: "12. Contacto",
      sec12_p: "Para resolver dudas o plantear cualquier consulta relativa a estos Términos y Condiciones, puede dirigirse por escrito a:"
    },

    // Pie de página
    footer: {
      brand_desc: "Tu diario visual de aficiones, rachas y logros. Un lugar acogedor donde valorar tu tiempo libre y celebrar cada pequeño avance.",
      legal_tag: "Web Informativa y Legal Estática",
      nav_title: "Navegación",
      features: "Funcionalidades",
      screenshots: "Capturas",
      faq: "Preguntas Frecuentes (FAQ)",
      legal_title: "Legalidad y Datos",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      delete_account: "Eliminación de Cuenta",
      gdpr_rights: "Tus Derechos RGPD",
      contact_title: "Contacto",
      contact_desc: "¿Tienes dudas, sugerencias o necesitas asistencia sobre la app?",
      support_label: "Soporte oficial Hobito",
      rights_reserved: "Todos los derechos reservados.",
      disclaimer_bottom: "Esta web es independiente y no almacena información de usuario ni credenciales."
    }
  },

  en: {
    // Common metadata and pages
    meta: {
      index_title: "Hobito - Your journal for hobbies, streaks & achievements",
      index_desc: "Hobito is the mobile app for tracking and logging your hobbies and passions. Build streaks, unlock achievements, and share your inspiration.",
      faq_title: "Frequently Asked Questions (FAQ) - Hobito",
      faq_desc: "Find answers to common questions about the Hobito mobile app: hobby tracking, privacy, levels, achievements, community, and support.",
      privacy_title: "Privacy Policy - Hobito",
      privacy_desc: "Hobito Privacy Policy. Learn how the Hobito mobile app processes, stores, and protects your personal data under GDPR and Spanish LOPDGDD.",
      terms_title: "Terms and Conditions - Hobito",
      terms_desc: "Terms and Conditions of use for the Hobito mobile app. Discover terms of use, responsibilities, intellectual property, and service conditions."
    },

    // Informative top banner
    banner: {
      disclaimer: "🌱 <strong>Hobito Informative & Legal Website:</strong> This website does not collect personal data, does not use tracking cookies, and does not manage accounts. All data functions belong exclusively to the mobile app.",
      faq_disclaimer: "🌱 <strong>Help & Information Center:</strong> The answers below describe the exclusive features and operations of the <strong>Hobito mobile application</strong>.",
      legal_disclaimer: "🌱 <strong>Notice regarding this document:</strong> This website serves purely informative and legal purposes and does not collect personal data. This document outlines data processing conducted exclusively by the <strong>Hobito mobile app</strong>.",
      terms_disclaimer: "🌱 <strong>Legal Notice:</strong> This document governs the use of the <strong>Hobito mobile app</strong>. This website is open, static, and purely informative."
    },

    // Navigation
    nav: {
      home: "Home",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      download: "Download App"
    },

    // Index page
    index: {
      hero_tag: "Your space to cherish what you love",
      hero_title: 'Celebrate your passions, cultivate your <span class="highlight-gradient">best moments</span>',
      hero_desc: "<strong>Hobito</strong> is a cozy and intuitive mobile app designed to accompany your leisure time: log your activities, build steady streaks, unlock achievements, and share your progress with a like-minded community.",
      play_store: "Available on Google Play",
      explore_features: "Explore features",
      note_ads: "100% free of intrusive ads",
      note_privacy: "Full privacy control",
      badge_streak: "Active streak this week!",
      badge_level: "Level 1: Curious (117 achievements)",
      
      features_badge: "Features",
      features_title: "Thoughtfully crafted for your hobbies",
      features_subtitle: "Every corner of Hobito is designed so that recording your free time is a calming, rewarding, and inspiring experience.",
      
      f1_title: "Hobby Logging",
      f1_text: "Keep track of your reading, painting sessions, cooking, video games, gardening, or sports. Add personal notes, dates, and preserve memories of what you enjoy.",
      f2_title: "Streaks & Consistency",
      f2_text: "Stay motivated by seeing your active days throughout the week. Hobito encourages mindful consistency in your hobbies without pressure or stress.",
      f3_title: "Levels & 117 Achievements",
      f3_text: "Begin at <em>Level 1: Curious</em> and accumulate experience points (XP). Unlock over 117 secret achievements as you explore new passions.",
      f4_title: "Community & Inspiration",
      f4_text: "Connect with enthusiasts who share your interests. Follow friends and creators, discover fresh ideas, and celebrate milestones together.",
      f5_title: "Tailored Privacy",
      f5_text: "You have complete control: choose whether each activity log is public to inspire others or stays strictly in your private personal journal.",
      f6_title: "Preferences & Themes",
      f6_text: "Tailored to your device with system language support and light/dark theme options for comfortable reading at any time of day.",

      screens_badge: "App Preview",
      screens_title: "A clean, warm, and cozy interface",
      screens_subtitle: "Discover the real look and feel of the Hobito mobile application on your smartphone.",
      screen1_title: "Simple & secure sign in",
      screen1_desc: "Log in quickly and reliably with your email address or Google account to sync your hobbies.",
      screen2_title: "Your progress at a glance",
      screen2_desc: "Monitor total hobbies, streak days, community, XP points, and unlocked achievements in one view.",

      cta_badge: "Start today",
      cta_title: "Ready to nurture your free time?",
      cta_desc: "Download Hobito on your Android smartphone and start collecting memories of your favorite passions."
    },

    // FAQ page
    faq: {
      badge: "Help Center",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about the features, privacy, and mechanics of the Hobito mobile application.",

      cat1_title: "🌿 About Hobito & Getting Started",
      q1: "What is Hobito and what is its purpose?",
      a1: "<p><strong>Hobito</strong> is a mobile application created as a personal companion and visual journal for your hobbies and leisure activities. It allows you to keep an orderly record of what you enjoy doing in your free time (reading, sports, art, music, gardening, etc.), maintain consistency with weekly streaks, earn experience, and unlock fun achievements.</p><p>Unlike noisy social networks, Hobito is crafted as a quiet, cozy, and motivating space centered entirely around your personal enjoyment.</p>",

      q2: "On which platforms is it available and what does it cost?",
      a2: "<p>Hobito is primarily available for Android mobile devices on the <strong>Google Play Store</strong>. Downloading and using the core features of activity logging, levels, and streaks is completely free of charge.</p>",

      q3: "Can I log in or track hobbies directly from this website?",
      a3: "<p><strong>No.</strong> This website is purely informative and legal. It has no backend, no database, and no login forms.</p><p>All authentication (via email or Google account), activity logging, and profile management take place exclusively inside the <strong>Hobito mobile app</strong> installed on your smartphone.</p>",

      cat2_title: "📖 Logging & Managing Hobbies",
      q4: "How do I log an activity or session in the app?",
      a4: "<p>Logging an activity is very simple:</p><ol><li>Open the Hobito mobile app on your smartphone.</li><li>Tap the add button (the <strong>+</strong> icon).</li><li>Select the hobby or activity you performed.</li><li>Add the date, a short note or reflection, and optionally a photo of your progress.</li><li>Choose whether to make it public for the community or keep it private just for you.</li><li>Save the entry to earn experience points (XP) and update your hobby and streak counters.</li></ol>",

      q5: "Which hobby categories are available?",
      a5: "<p>Hobito supports a wide spectrum of categories covering creative, physical, cultural, and relaxing pursuits:</p><ul><li><strong>Arts & Crafts:</strong> Painting, sketching, digital illustration, pottery, sewing, crochet, origami.</li><li><strong>Reading & Writing:</strong> Books read, graphic novels, creative writing, journaling.</li><li><strong>Sports & Wellness:</strong> Cycling, hiking, yoga, climbing, swimming, running.</li><li><strong>Gastronomy:</strong> Creative cooking, baking, coffee brewing, tea tasting.</li><li><strong>Nature:</strong> Gardening, botany, houseplant care, bird watching.</li><li><strong>Music & Performing Arts:</strong> Guitar, piano, ukulele, singing, theatre.</li><li><strong>Gaming & Tech:</strong> Video games, creative coding, board games, photography, scale modeling.</li></ul><p>You can also create or customize unique hobbies to match your exact interests.</p>",

      q6: "Can I edit or delete a previously saved entry?",
      a6: "<p><strong>Yes, absolutely.</strong> You can browse the activity history of any hobby, select the entry you wish to modify, and tap «Edit» to update notes, photos, or dates.</p><p>If you prefer to remove it, simply select «Delete entry». The entry will be removed from your records immediately.</p>",

      cat3_title: "🔒 Privacy & Control",
      q7: "Are my hobbies public or private? Who can see them?",
      a7: "<p><strong>You have complete control over each entry:</strong></p><ul><li><strong>Private Entries:</strong> By default or upon your choice, nobody else can view your personal notes, dates, or private photos. They remain safe in your personal diary.</li><li><strong>Public Entries:</strong> If you choose to share an activity publicly, it appears on the Hobito inspiration feed so followers and community members can discover it and cheer you on.</li></ul><p>You can toggle the privacy of any entry between public and private at any time.</p>",

      cat4_title: "⭐ Levels, Achievements & Community",
      q8: "What are «Level 1: Curious», XP points, and the 117 achievements?",
      a8: "<p>Hobito features gamification mechanics designed to make your free time even more engaging:</p><ul><li><strong>Levels & Experience Points (XP):</strong> By recording your hobbies and maintaining habits, you earn XP. All users start at <em>Level 1: Curious</em> (requiring 50 XP to reach Level 2) and advance to new titles as they explore their hobbies.</li><li><strong>117 Unlockable Achievements:</strong> Hobito includes 117 secret badges and medals (such as logging your very first hobby, maintaining a 7-day streak, exploring 3 different categories, or documenting a night session).</li></ul><p><em>Legal note:</em> Experience points, levels, and badges have no monetary, commercial, or real-cash value.</p>",

      q9: "How do streaks and active days work?",
      a9: "<p>The «STREAK» card on your profile displays the number of days you engaged with your hobbies during the current active week. Dedicating even a few minutes a day to what you love relieves stress and fosters sustainable self-care.</p>",

      q10: "What do «Community» (Followers) and «Inspirations» (Following) mean?",
      a10: "<p>On your profile screen, you will find two social counters:</p><ul><li><strong>Community (Followers):</strong> Users who follow you and appreciate the hobbies and milestones you choose to share publicly.</li><li><strong>Inspirations (Following):</strong> Enthusiasts whose public hobbies or projects you follow to discover fresh ideas, techniques, or inspiration for your own free time.</li></ul><p>Recommendations suggest kindred categories without invasive tracking or advertising profiling.</p>",

      cat5_title: "⚙️ Account, Data & Support",
      q11: "Can I switch language or toggle dark mode?",
      a11: "<p>Yes. Under the <strong>Preferences</strong> section in your profile screen, you can adjust:</p><ul><li><strong>Language:</strong> Choose your preferred language or sync with system defaults.</li><li><strong>Theme:</strong> Light mode, dark mode, or automatic adaptation according to your smartphone's system setting.</li></ul>",

      q12: "How can I delete my account and all associated data?",
      a12: "<p>You can delete your account at any time through these simple steps:</p><ol><li>In the Hobito mobile app, navigate to the <strong>Account / Profile</strong> tab.</li><li>Select the <strong>Delete account</strong> option.</li><li>Confirm your choice. All your hobbies, photos, streaks, achievements, and credentials will be permanently erased from app servers.</li></ol><p>If you don't have access to your device, you can email us from your registered address at <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a>. See our <a href=\"privacy-policy.html#eliminacion-cuenta\">Privacy Policy</a> for full details.</p>",

      q13: "How do I contact the Hobito team?",
      a13: "<p>For technical inquiries, bug reports on the mobile app, suggestions, or legal questions, reach out to our official support channel:</p><p>📧 <strong>Support email:</strong> <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a></p><p>We typically answer all community messages within 24 to 48 business hours.</p>",

      bottom_title: "Didn't find what you were looking for?",
      bottom_desc: "We are at your service to assist with any questions about Hobito.",
      bottom_btn: "Contact Support"
    },

    // Privacy Policy page
    privacy: {
      badge: "Privacy & Data Protection",
      title: "Privacy Policy",
      meta_updated: "<strong>Last updated:</strong> November 9, 2026",
      meta_scope: "<strong>Scope:</strong> Hobito Mobile Application",
      meta_reg: "<strong>Regulations:</strong> GDPR (EU 2016/679) &amp; Spanish LOPDGDD 3/2018",
      notice_box: "<strong>IMPORTANT — WEBSITE INDEPENDENCE:</strong> This website is static and strictly informational and legal. It does not use analytical or advertising cookies, does not feature contact forms that store data in databases, and does not collect personal user data. This Privacy Policy describes data processing conducted exclusively by the <strong>Hobito mobile application</strong> installed on your mobile device.",

      sec1_title: "1. Data Controller",
      sec1_text: "The data controller responsible for personal data processed through the Hobito mobile app is:",
      sec1_item1: "<strong>Company / Entity:</strong>",
      sec1_item2: "<strong>Tax ID / VAT:</strong>",
      sec1_item3: "<strong>Registered Office:</strong>",
      sec1_item4: "<strong>Contact & Privacy Email:</strong>",

      sec2_title: "2. Data Processed by the Hobito Mobile App",
      sec2_intro: "The Hobito mobile application processes strictly the data necessary to provide hobby logging, progress statistics, gamification, and community features:",
      sec2_subA: "A. Registration and Authentication",
      sec2_subA_1: "<strong>Email registration:</strong> Email address and password (the latter securely hashed with one-way cryptographic algorithms prior to storage).",
      sec2_subA_2: "<strong>Google Sign-In:</strong> If you choose this method, we receive from Google your unique user ID, your email address, and your public profile name. Hobito never has access to your Google account password.",
      sec2_subB: "B. User Profile",
      sec2_subB_1: "Display name or first name.",
      sec2_subB_2: "Unique username (handle or alias).",
      sec2_subB_3: "Profile picture or avatar (optional).",
      sec2_subB_4: "Configuration preferences (interface language and selected light/dark theme).",
      sec2_subC: "C. Hobby and Activity Logs",
      sec2_subC_1: "Name of the activity or hobby (e.g., reading, painting, cycling, gardening).",
      sec2_subC_2: "Selected hobby category.",
      sec2_subC_3: "Personal notes, reflections, or descriptions attached to the activity.",
      sec2_subC_4: "Date and timestamp of the log.",
      sec2_subC_5: "Progress metrics (XP experience points, reached level such as <em>Level 1: Curious</em>, streak active days, and unlocked achievements).",
      sec2_subC_6: "Images or photos optionally attached to a hobby log as personal memory or evidence.",

      sec3_title: "3. Public vs. Private Information: User Sovereignty",
      sec3_intro: "At Hobito we firmly believe in the sovereignty of your personal data. The app clearly distinguishes between public and private content:",
      sec3_1: "<strong>Public Information:</strong> Your username, avatar, general experience level (XP), total hobbies recorded, and specific hobbies that you explicitly decide to mark as public will be visible to other community members for mutual inspiration.",
      sec3_2: "<strong>Private Information:</strong> Any log marked as private, your passwords, your email address, and personal private notes will never be shared or displayed to other users.",
      sec3_3: "<strong>Visibility changes:</strong> You can modify the visibility (public or private) of your entries at any time directly from the mobile app.",

      sec4_title: "4. Recommendations & Social Interactions",
      sec4_intro: "The Hobito mobile app offers social features designed around sharing hobbies:",
      sec4_1: "<strong>Followers & Following:</strong> Allows you to follow public activity from other hobbyists and draw inspiration from their progress.",
      sec4_2: "<strong>Recommendations:</strong> The app may suggest related categories or hobbies based on registered activities or popular community trends, without producing automated profiling that produces legal effects.",

      sec5_title: "5. Purposes and Legal Basis for Processing",
      th_purpose: "Purpose",
      th_data: "Processed Data",
      th_basis: "Legal Basis (GDPR)",
      tr1_purpose: "Service provision (account management, hobby logging, streaks, XP calculation, and achievements).",
      tr1_data: "Email, hashed password, profile, activity records.",
      tr1_basis: "<strong>Performance of contract</strong> (Art. 6.1.b GDPR) arising from the Terms and Conditions.",
      tr2_purpose: "Social features (following users, public hobbies, and inspiration discovery).",
      tr2_data: "Public profile and entries explicitly configured as public.",
      tr2_basis: "<strong>Explicit consent</strong> (Art. 6.1.a GDPR) granted by making the entry public.",
      tr3_purpose: "Handling inquiries, customer support, and issue resolution.",
      tr3_data: "Sender email address and details voluntarily supplied in the message.",
      tr3_basis: "<strong>Legitimate interest</strong> (Art. 6.1.f GDPR) in addressing user support requests.",
      tr4_purpose: "Compliance with legal obligations applicable to the controller.",
      tr4_data: "Identity records and security logs required by law.",
      tr4_basis: "<strong>Compliance with legal obligation</strong> (Art. 6.1.c GDPR).",

      sec6_title: "6. Technology Providers & Data Transfers",
      sec6_intro: "To provide a secure and reliable mobile app, Hobito relies on top-tier cloud service providers operating under GDPR-compliant data processing agreements:",
      sec6_1: "<strong>Database hosting and backend cloud infrastructure:</strong>",
      sec6_1_sub: "Encrypted storage for application records and media.",
      sec6_2: "<strong>Federated authentication service:</strong> Google LLC (for optional Google Sign-In).",
      sec6_3: "<strong>App distribution:</strong> Google Play Store (Google LLC), handling downloads and updates on Android devices.",
      sec6_4: "<strong>Customer support mail service:</strong>",
      sec6_footer: "We do not sell, rent, or trade your personal data with third parties for marketing or advertising purposes.",

      sec7_title: "7. Data Retention Periods",
      sec7_p1: "Your personal data is retained for as long as your account remains active in the Hobito mobile app.",
      sec7_p2: "Once you request account deletion, all personal data, hobby logs, attached images, streaks, and achievements will be irreversibly erased from operational systems within a maximum period of 30 days, except for data required to be kept blocked to fulfill statutory legal obligations.",

      sec8_title: "8. Account Deletion Procedure",
      sec8_intro: "Users can request and execute the complete deletion of their account and all associated data at any time via two channels:",
      sec8_1: "<strong>Directly from the Hobito mobile app:</strong> Navigate to the <em>Profile</em> tab &gt; <em>Account Settings</em> &gt; Tap <em>Delete account</em> and confirm. Your account and associated data will be removed immediately.",
      sec8_2: "<strong>By email request:</strong> Send an email to <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a> from the same email address registered in the app, stating «Account Deletion Request - Hobito» in the subject. Our team will process the final deletion and confirm back.",

      sec9_title: "9. Your Rights (GDPR & LOPDGDD)",
      sec9_intro: "Under European and Spanish data protection laws, you hold the following statutory rights:",
      sec9_1: "<strong>Right of Access:</strong> Discover what personal data we hold about you.",
      sec9_2: "<strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information (also editable directly in the app profile).",
      sec9_3: "<strong>Right to Erasure («to be forgotten»):</strong> Request deletion of your data when no longer needed for original purposes.",
      sec9_4: "<strong>Right to Restriction of Processing:</strong> Request suspension of processing under conditions established by law.",
      sec9_5: "<strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used, machine-readable format.",
      sec9_6: "<strong>Right to Object:</strong> Object at any time to the processing of your data based on your specific situation.",
      sec9_7: "<strong>Right to Withdraw Consent:</strong> At any time, without affecting lawful processing carried out prior to withdrawal.",
      sec9_p1: "To exercise any of these rights, simply email us at <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a> accompanied by verification of your identity (such as the email linked to your account).",
      sec9_p2: "If you consider your rights have not been adequately satisfied, you have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) via their official site (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener noreferrer\">www.aepd.es</a>) or your local EU supervisory authority.",

      sec10_title: "10. Security Safeguards",
      sec10_p: "We implement suitable technical and organizational measures to ensure an appropriate level of security, including TLS/HTTPS encryption for data in transit between mobile devices and servers, password hashing, and restricted access controls to backend databases.",

      sec11_title: "11. Policy Modifications",
      sec11_p: "We may update this Privacy Policy periodically to reflect new features in the Hobito mobile app or statutory updates. When significant modifications occur, users will be notified via a prominent notice in the app or by email before changes take effect."
    },

    // Terms and Conditions page
    terms: {
      badge: "Terms of Service",
      title: "Terms and Conditions",
      meta_updated: "<strong>Last updated:</strong> November 9, 2026",
      meta_scope: "<strong>Scope:</strong> Hobito Mobile Application",
      meta_jur: "<strong>Jurisdiction:</strong> Spain / European Union",
      notice_box: "<strong>GENERAL NOTICE:</strong> These Terms and Conditions govern the download, installation, and use of the <strong>Hobito mobile application</strong>. This website is purely informative and documentary, containing no user registrations, billing gateways, or direct electronic contracts.",

      sec1_title: "1. Purpose and Scope of Application",
      sec1_p1: "This agreement establishes the legal terms governing access and use of the <strong>Hobito</strong> mobile application (hereinafter, the «Application» or «Service»), developed and operated by <span class=\"legal-placeholder\">[Developer Name / Legal Entity]</span> (hereinafter, «Hobito» or «we»).",
      sec1_p2: "By downloading, installing, registering, or using the Application, you (hereinafter, the «User») declare that you have read, understood, and agreed to all of these Terms, as well as our <a href=\"privacy-policy.html\">Privacy Policy</a>. If you do not agree with any of these provisions, you must refrain from installing and using the Application.",

      sec2_title: "2. Age Requirements, Registration, and User Account",
      sec2_1: "<strong>Minimum Age:</strong> To use Hobito, you must be at least 14 years old (or the legal minimum age in your country of residence to consent to personal data processing).",
      sec2_2: "<strong>Accuracy of Information:</strong> The User agrees to provide truthful, accurate, and complete information during registration (whether by email/password or Google Sign-In).",
      sec2_3: "<strong>Credential Custody:</strong> The User is solely responsible for maintaining the confidentiality of their password and all activities conducted under their account. If unauthorized use is detected, you must immediately report it to <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a>.",

      sec3_title: "3. Description and Purpose of Hobito",
      sec3_intro: "Hobito is a mobile application designed as a personal journal for tracking, organizing, and celebrating leisure activities and hobbies. Its primary functions include:",
      sec3_1: "Chronological logging of activities with categories, dates, and personal annotations.",
      sec3_2: "Calculation of streaks and active days throughout the week.",
      sec3_3: "Progression and gamification mechanics (accumulating XP experience points, leveling up starting from <em>Level 1: Curious</em>, and unlocking 117 badges).",
      sec3_4: "Optional community interactions (following other hobbyists, finding inspiration, and sharing public hobby logs).",

      sec4_title: "4. Code of Conduct and Acceptable Use",
      sec4_intro: "The User agrees to utilize the Application in compliance with the law, public morals, and these Terms. The following actions are strictly prohibited:",
      sec4_1: "Publishing, uploading, or transmitting unlawful, defamatory, violent, discriminatory, pornographic, hateful, or abusive content that infringes upon third-party rights or minors.",
      sec4_2: "Impersonating any person or entity or appropriating usernames with deceptive or defamatory intent.",
      sec4_3: "Using the Application for spamming, unsolicited advertising, or unauthorized commercial activities.",
      sec4_4: "Attempting to bypass, reverse engineer, decompile, or tamper with security mechanisms or databases of the Application.",
      sec4_5: "Employing automated bots, scrapers, or scripts to harvest data from the platform without prior written authorization.",

      sec5_title: "5. User Content and Visibility Rights",
      sec5_p1: "The User retains at all times full ownership and intellectual property rights over any texts, images, and content recorded or posted in the Application («User Content»).",
      sec5_p2: "By voluntarily marking a log or hobby as <strong>Public</strong>, the User grants Hobito a non-exclusive, royalty-free, worldwide, revocable license to store, reproduce, display, and distribute said content within the Application solely to enable community interaction. If the User switches visibility to <strong>Private</strong> or deletes the entry, this license ceases immediately.",
      sec5_p3: "The User warrants that they own or hold all required authorizations over any photos or content uploaded to the Application, holding Hobito harmless from any third-party claims.",

      sec6_title: "6. Hobito Intellectual Property",
      sec6_p1: "All elements comprising the Application and this informative website — including the trade name «Hobito», the multi-colored logo, icons, graphic design, user interface (UI), source code, animations, texts, and achievement systems — are the exclusive property of Hobito or its licensors and are protected by domestic and international copyright laws.",
      sec6_p2: "No license of reproduction, distribution, exploitation, or transformation is granted to the User, except for a personal, non-transferable, and limited right to use the app on their smartphone in accordance with these Terms.",

      sec7_title: "7. Gamification Elements (XP, Achievements, and Levels)",
      sec7_p1: "Experience points (XP), levels (such as <em>Level 1: Curious</em> and subsequent tiers), the 117 badges, and streak counters are purely recreational features designed to enrich user engagement inside the mobile app.",
      sec7_p2: "These elements <strong>hold no monetary, financial, or cash-redeemable value</strong>. They cannot be sold, traded, or exchanged between users, nor do they confer acquired financial rights against Hobito.",

      sec8_title: "8. Account Suspension and Termination",
      sec8_1: "<strong>By the User:</strong> You may cancel and delete your account at any time in app settings (<em>Account &gt; Delete account</em>) or by sending an email to <a href=\"mailto:soporte@hobito.app\">soporte@hobito.app</a>.",
      sec8_2: "<strong>By Hobito:</strong> We reserve the right to temporarily suspend or permanently terminate access to the Application in cases of material breach of these Terms, applicable regulations, or conduct endangering the safety of the community.",

      sec9_title: "9. Disclaimer of Warranties and Limitation of Liability",
      sec9_p1: "The Application and its contents are provided on an «as is» and «as available» basis, without warranties of any kind, express or implied.",
      sec9_p2: "Hobito makes every reasonable effort to maintain continuous availability and safety; however, we do not warrant uninterrupted operation or freedom from technical faults caused by mobile operating system updates, network dropouts, or external third-party outages.",
      sec9_p3: "To the maximum extent permitted by applicable law, Hobito shall not be held liable for accidental loss of data stemming from mobile hardware malfunction or unauthorized access caused by user negligence in safeguarding account credentials.",

      sec10_title: "10. Modifications to Terms",
      sec10_p: "We may update these Terms at any time to adapt to new features or regulatory requirements. We will inform users of material changes through the Application or by updating the revision date atop this page. Continued use of the app constitutes acceptance of amended Terms.",

      sec11_title: "11. Applicable Law and Jurisdiction",
      sec11_p1: "These Terms and Conditions shall be governed by and construed in accordance with the laws of <strong>Spain</strong> and the regulatory framework of the <strong>European Union</strong>.",
      sec11_p2: "In the event of dispute, the parties submit to the courts of the consumer's domicile, or alternatively the courts of <span class=\"legal-placeholder\">[City / Province of Controller]</span>, without prejudice to the European Online Dispute Resolution platform available at <a href=\"https://ec.europa.eu/consumers/odr\" target=\"_blank\" rel=\"noopener noreferrer\">https://ec.europa.eu/consumers/odr</a>.",

      sec12_title: "12. Contact",
      sec12_p: "For any questions or inquiries concerning these Terms and Conditions, you may contact us by email at:"
    },

    // Footer
    footer: {
      brand_desc: "Your visual journal of hobbies, streaks, and achievements. A cozy space to cherish your free time and celebrate every small milestone.",
      legal_tag: "Static Informative & Legal Website",
      nav_title: "Navigation",
      features: "Features",
      screenshots: "Screenshots",
      faq: "Frequently Asked Questions (FAQ)",
      legal_title: "Legal & Data",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      delete_account: "Account Deletion",
      gdpr_rights: "Your GDPR Rights",
      contact_title: "Contact",
      contact_desc: "Have questions, suggestions, or need assistance with the app?",
      support_label: "Official Hobito Support",
      rights_reserved: "All rights reserved.",
      disclaimer_bottom: "This website is independent and does not store user information or credentials."
    }
  }
};

