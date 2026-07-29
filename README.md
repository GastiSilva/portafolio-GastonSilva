# Portafolio — Gastón Silva

Portafolio personal construido con React + Vite + Tailwind CSS.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (viene con Node)

## Cómo levantarlo

El proyecto vive en la carpeta `mi-portafolio/`.

```bash
cd mi-portafolio
npm install
npm run dev
```

Esto levanta el servidor de desarrollo de Vite (por defecto en `http://localhost:5173`) con hot reload.

## Otros comandos

Ejecutar siempre dentro de `mi-portafolio/`:

| Comando           | Qué hace                                      |
| ------------------ | ---------------------------------------------- |
| `npm run dev`      | Servidor de desarrollo con hot reload           |
| `npm run build`    | Genera el build de producción en `dist/`        |
| `npm run preview`  | Sirve el build de producción localmente         |
| `npm run lint`     | Corre ESLint sobre el proyecto                  |

## Stack

- **React 19** + **React Router 7**
- **Vite 7** como bundler
- **Tailwind CSS 3** para estilos (con soporte de dark mode por clase)
- Contextos propios para tema (claro/oscuro) e idioma

## Estructura

```
mi-portafolio/
├── src/
│   ├── components/   # Navbar, Footer, ProjectCard, fondo animado, etc.
│   ├── context/       # ThemeContext, LanguageContext
│   ├── data/          # Proyectos y traducciones
│   ├── layouts/       # MainLayout
│   ├── routes/        # Definición de rutas
│   └── views/         # Home, Proyectos, SobreMi, Contacto
└── public/
```

## Despliegue

El `index.html` incluye el script de redirección de [SPA GitHub Pages](https://github.com/rafgraph/spa-github-pages), pensado para publicarse en GitHub Pages junto con `public/404.html`.
