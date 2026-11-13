# PelisPop — Plugin para Kino

Plugin oficial para el reproductor **[Kino](https://kinotvapp.github.io)** que integra el catálogo de **PelisPop** (`https://pelispop.mov/`), con películas, series, anime y doramas en español latino.

Cuenta con una interfaz de pantalla completa personalizada (**Screen UI estilo Xuper**, apiVersion 14+) con carrusel hero, navegación por pestañas, rieles interactivos de contenido y buscador visual.

---

## Características

- **Screen UI integrada (como Xuper)**:
  - Barra superior (*AppBar*) unificada con el logo oficial de PelisPop y accesos directos a buscador y ajustes.
  - Pestañas dinámicas: *Películas*, *Series*, *Anime* y *Doramas*.
  - Carrusel *Hero* automático con fondos de alta resolución, sinopsis y botón de reproducción directa.
  - Rieles temáticos (*Tendencias populares*, *Estrenos*, *Novedades*).
  - Búsqueda integrada dentro de la pantalla y vista de detalles con metadatos completos.
  - Diseño responsivo adaptado tanto para **pantallas móviles** como para **Android TV / Fire Stick**.

- **Catálogo y Metadatos**:
  - Títulos, sinopsis, pósters y fondos en español latino.
  - Integración transparente con metadatos de TMDB e IMDB.
  - Base curada de alta disponibilidad para carga instantánea.

- **Reproducción multiseridor**:
  - Servidores compatibles (*Embed69*, servidores web directos).
  - Inyección de cabeceras seguras (`Referer`, `Origin`, `User-Agent` de navegador) y `streamHosts: "any"` para evitar errores 403 en ExoPlayer.

---

## Instalación en Kino

1. Abre la aplicación **Kino** en tu dispositivo (Android, Android TV o Fire TV).
2. Ve a **Ajustes** > **Plugins** > **Añadir plugin**.
3. Selecciona **Instalar desde GitHub** e ingresa:
   ```text
   JuanDEVYT/kino-plugin-pelispop
   ```
4. Pulsa **Instalar**.
5. ¡Listo! Puedes acceder al catálogo desde la pantalla principal de Kino o abrir la pantalla completa de PelisPop desde el menú lateral de la app o en **Ajustes** > **PelisPop** > **Abrir PelisPop**.

---

## Archivos del Plugin

- `kino-plugin.json`: Manifiesto compatible con Kino apiVersion 8 y apiVersion 14 (`enhancements.14` y `enhancements.19`).
- `plugin.js`: Lógica del plugin (Screen UI, home, search, browse, episodes y resolve).
- `icon.png`: Icono cuadrado oficial en alta resolución (512x512).
- `logo.png`: Logotipo horizontal transparente para la barra superior (AppBar).

---

## Licencia

Código bajo licencia MIT. PelisPop y sus contenidos son propiedad de sus respectivos autores.
