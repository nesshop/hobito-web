# Hobito Web - Web Informativa y Legal

Sitio web estático, oficial e independiente de **Hobito**, la aplicación móvil de seguimiento y registro de hobbies, rachas y logros.

---

## 1. Objetivo y Alcance

Esta web tiene una finalidad exclusivamente **informativa y legal**.

### Principios Fundamentales
- **Sin backend ni base de datos:** No utiliza servidores dinámicos ni bases de datos.
- **Sin Firebase ni Firestore:** No contiene dependencias ni conexiones con servicios de datos.
- **Sin autenticación ni gestión de usuarios:** La web no permite registrarse, identificarse ni gestionar perfiles; dichas acciones se realizan únicamente en la app móvil.
- **Sin formularios con almacenamiento:** No se recopila información personal a través de este sitio web.
- **100% independiente:** La lógica de negocio, almacenamiento y tratamientos de datos corresponden exclusivamente a la app móvil Hobito para Android.

---

## 2. Estructura de Páginas

El proyecto contiene 4 páginas principales optimizadas para SEO, accesibilidad y móviles:

1. **Inicio (`index.html`)**:
   - Presentación de Hobito y su filosofía acogedora.
   - Descripción detallada de funcionalidades: registro de aficiones, rachas semanales, más de 117 logros, comunidad y privacidad.
   - Showcase interactivo con capturas reales de la aplicación móvil.
   - Botón de descarga con enlace configurable a Google Play Store.
   - Accesos directos a FAQ y documentación legal.

2. **Política de Privacidad (`privacy-policy.html` y `/privacy-policy/index.html`)**:
   - Documenta los tratamientos de datos realizados por la **aplicación móvil** (registro/auth, perfil, hobbies, publicaciones públicas/privadas, proveedores cloud, derechos RGPD/LOPDGDD y eliminación de cuenta).
   - Aclara de forma explícita que la web estática **no recopila datos**.
   - Incluye placeholders delimitados para los datos del responsable legal y proveedores.

3. **Términos y Condiciones (`terms-and-conditions.html` y `/terms-and-conditions/index.html`)**:
   - Condiciones de uso de la aplicación móvil Hobito.
   - Normas de uso adecuado, propiedad intelectual, contenido de usuarios, valor lúdico no comercial de logros/XP, responsabilidades y legislación aplicable (España / UE).

4. **Preguntas Frecuentes - FAQ (`faq.html` y `/faq/`index.html)**:
   - Componentes interactivos tipo acordeón (*accordion*) accesibles.
   - Respuestas a dudas habituales sobre hobbies, privacidad, rachas, niveles, logros, eliminación de cuenta y soporte.

---

## 3. Identidad Visual

El diseño web se basa en la identidad de la aplicación móvil Hobito:
- **Tipografía de títulos:** *Baloo 2* (pesos 600, 700 y 800) para un tono cálido, lúdico y amigable.
- **Tipografía de lectura:** *Poppins* para máxima legibilidad y nitidez en pantallas.
- **Paleta de color:** Fondos crema suaves (`#FAF8F5`), destellos ambientales difuminados (azul pastel, melocotón y amarillo solar) y acentos cromáticos inspirados en el logotipo (coral `#FF6B6B`, naranja `#FFA94D`, menta `#20C997`, cielo `#38B6FF`, ámbar `#FFC038` y violeta `#5C7CFA`).
- **Componentes:** Bordes redondeados generosos (`24px` a `32px`), sombras sutiles y tarjetas limpias.

---

## 4. Estructura de Archivos

```text
hobito-web/
├── index.html                  # Página principal de inicio
├── privacy-policy.html         # Política de privacidad (raíz)
├── terms-and-conditions.html   # Términos y condiciones (raíz)
├── faq.html                    # Preguntas frecuentes (raíz)
├── privacy-policy/
│   └── index.html              # Ruta limpia /privacy-policy/
├── terms-and-conditions/
│   └── index.html              # Ruta limpia /terms-and-conditions/
├── faq/
│   └── index.html              # Ruta limpia /faq/
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos globales y compartidos
│   ├── js/
│   │   └── main.js             # Scripts: menú móvil, acordeón y configuración
│   └── images/
│       ├── logo.svg            # Logotipo vectorial de Hobito
│       ├── icon-google-play.svg# Icono de Google Play Store
│       ├── google-play-badge.svg# Badge de Google Play
│       ├── og-image.svg        # Tarjeta Open Graph para redes sociales
│       ├── app-login.jpg       # Captura de pantalla: Login de Hobito
│       └── app-profile.jpg     # Captura de pantalla: Perfil y Niveles
├── favicon.svg                 # Favicon vectorial
├── robots.txt                  # Directivas para motores de búsqueda
├── sitemap.xml                 # Mapa del sitio para indexación SEO
├── .nojekyll                   # Evita procesamiento Jekyll en GitHub Pages
└── README.md                   # Documentación del proyecto
```

---

## 5. Personalización y Configuración

Antes de publicar en producción, puedes personalizar los siguientes puntos fácilmente:

### A. Enlace a Google Play Store
En `assets/js/main.js`:
```javascript
const CONFIG = {
  playStoreUrl: 'https://play.google.com/store/apps/details?id=TU_ID_DE_PAQUETE',
  supportEmail: 'soporte@hobito.app',
};
```
También puedes modificar directamente los atributos `href` en las etiquetas `<a class="btn btn-play-store" ...>` en `index.html`.

### B. Correo de Soporte
Por defecto configurado como `soporte@hobito.app`. Si utilizas otro buzón, sustitúyelo en los archivos HTML o mediante búsqueda y reemplazo.

### C. Datos del Responsable Legal (Placeholders)
En `privacy-policy.html` y `terms-and-conditions.html`, busca las etiquetas con clase `.legal-placeholder` para completar:
- `[Nombre del Desarrollador / Razón Social]`
- `[NIF o Identificador Fiscal]`
- `[Dirección postal completa o Ciudad/País]`
- `[Proveedor de nube de la app móvil — Ej.: Google Cloud / Firebase / Supabase / AWS / Servidor propio UE]`

---

## 6. Despliegue en GitHub Pages

Al tratarse de una web 100% estática sin compiladores ni dependencias de servidor, publicarla en **GitHub Pages** toma menos de 2 minutos:

### Paso 1: Subir los cambios a tu repositorio en GitHub
```bash
git add .
git commit -m "feat: web informativa y legal de Hobito"
git push origin main
```

### Paso 2: Activar GitHub Pages en el repositorio
1. Entra a tu repositorio en **GitHub**.
2. Ve a la pestaña **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment** > **Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
5. Haz clic en **Save** (Guardar).
6. En unos instantes, GitHub generará tu URL pública (por ejemplo: `https://tu-usuario.github.io/hobito-web/`).

### Paso 3: Configurar Dominio Personalizado (Opcional)
Si deseas asociar un dominio propio como `hobito.app`:
1. En **Settings** > **Pages** > **Custom domain**, introduce `hobito.app` y pulsa **Save**.
2. En tu registrador de dominio (DNS), añade los registros A recomendados por GitHub:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Marca la casilla **Enforce HTTPS** para activar el certificado SSL gratuito.

---

## 7. Pruebas Locales

Para visualizar la web en tu navegador localmente:
```bash
# Con Python 3
python3 -m http.server 8000

# O abriendo index.html directamente en el navegador
open index.html
```
Abre en tu navegador `http://localhost:8000/` para comprobar la navegación, el acordeón y la responsividad.

