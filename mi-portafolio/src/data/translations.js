export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      themeToLight: 'Cambiar al lado luminoso',
      themeToDark: 'Cambiar al lado oscuro',
    },
    home: {
      greeting: 'Hola, soy',
      name: 'Gastón Silva',
      role: 'Full Stack Developer · Analista de Sistemas',
      location: 'Córdoba, Argentina',
      tagline:
        'Construyo productos de punta a punta: del modelo de datos a la interfaz que usa la gente. Me obsesiona tanto aprender tecnología nueva como seguir una buena remontada en la última fecha.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos',
      downloadCv: 'Descargar CV',
    },
    about: {
      title: 'Sobre mí',
      downloadCv: 'Descargar CV',
      intro: [
        'Soy Full Stack Developer y Analista de Sistemas, con el backend como mi principal fortaleza. Actualmente soy Tech Lead de un equipo de 3 personas en el sector público, liderando el desarrollo de una plataforma geoespacial (GIS) para la Municipalidad de Córdoba.',
        'Lo que más disfruto de mi trabajo no es solo entregar features, sino encontrar el problema antes de que explote: esa vulnerabilidad que nadie reportó, el cuello de botella que iba a tirar abajo un sistema en producción, o ese bug fantasma que nadie más encontraba.',
        'Fuera del horario laboral sigo en la misma sintonía por puro gusto. Diseño y despliego proyectos de punta a punta, como un ERP completo para la industria alimenticia, o me dedico a migrar sistemas legacy enteros a arquitecturas modernas sin cortar el servicio un solo día.',
        'Y cuando apago la pantalla, el fútbol, Star Wars y Marvel ocupan el resto de mi cabeza.',
      ],
      skillsTitle: 'Stack técnico',
      skills: {
        backend: { title: 'Backend', items: ['Python (FastAPI)', 'Node.js (Express)', 'PHP (Laravel)'] },
        frontend: { title: 'Frontend', items: ['React', 'Vue.js (Quasar)', 'TypeScript'] },
        gis: { title: 'GIS', items: ['GeoServer', 'PostGIS', 'QGIS', 'Leaflet / Mapbox / OpenLayers'] },
        databases: { title: 'Bases de datos', items: ['PostgreSQL', 'SQL Server', 'Firebase / Firestore'] },
        infra: { title: 'Infraestructura', items: ['Docker', 'Linux (Ubuntu)', 'Git', 'GitHub'] },
        architecture: {
          title: 'Arquitectura y prácticas',
          items: ['Migración de sistemas legacy', 'APIs RESTful', 'Principios SOLID', 'Patrones de diseño'],
        },
        languages: { title: 'Idiomas', items: ['Español (nativo)', 'Inglés (B1)'] },
      },
      experienceTitle: 'Experiencia',
      experience: {
        role: 'Programador Fullstack → Tech Lead',
        company: 'Municipalidad de Córdoba — Secretaría de Ciudad Inteligente y Transformación Digital',
        period: '2024 — Actualidad',
        projects: [
          {
            name: 'Geoportal Municipal',
            tag: 'Proyecto actual · Tech Lead de un equipo de 3 desarrolladores',
            bullets: [
              'Lo diseñé y lideré desde cero (Python/FastAPI + Vue 3/Quasar): hoy son 190+ capas publicadas y 103 endpoints REST en 14 módulos, usados por distintas áreas del gobierno.',
              'Diseñé el DER de la base de datos en solitario e implementé el sistema de migraciones con Alembic sobre el entorno productivo.',
              'Construí todo el esquema de seguridad: gestión de usuarios, roles y grupos de trabajo, permisos para aplicaciones externas, y control fino para compartir capas y grupos de capas.',
              'Antes de que se conviertan en incidentes: eliminé un patrón N+1 en datasets geográficos pesados y detecté por iniciativa propia vulnerabilidades de seguridad que nadie había reportado.',
              'Sumé un modo de accesibilidad pensado para adultos mayores y exportación a Excel/CSV/KML/GeoJSON.',
            ],
          },
          {
            name: 'Sistema de Gestión de Trabajadores Municipales (MBTA) y Portal de Comunicaciones',
            tag: 'En paralelo',
            bullets: [
              'Migré backend y frontend de PHP/Laravel a FastAPI + Vue.js sin cortar el servicio, sumando funcionalidades nuevas que ideamos durante el proceso, no solo un traspaso 1 a 1.',
              'Participé en la restructuración del modelo de datos de MBTA: pasó de una base no relacional de 40 tablas sin mucho sentido a un esquema ordenado y pensado para las necesidades reales del sistema.',
            ],
          },
          {
            name: 'Sistema de Compras Electrónicas',
            tag: null,
            bullets: [
              'Formé parte del equipo inicial que construyó el sistema de compras electrónicas de la ciudad, con APIs en FastAPI e interfaces reactivas en Vue.js (Quasar), hoy corriendo a escala de gobierno.',
            ],
          },
        ],
      },
      timelineTitle: 'Formación',
      timeline: [
        {
          period: '2022 — 2025',
          title: 'Analista de Sistemas',
          place: 'Colegio Universitario IES',
          description:
            'Formación técnica en desarrollo de software, bases de datos y arquitectura de sistemas. Proyecto de tesis: ERP / sistema de gestión full-stack para un negocio real de la industria alimenticia ("La Porteña"), desde el modelo de datos hasta el deploy.',
        },
        {
          period: '2019 — 2022',
          title: 'Licenciatura en Ciencias de la Computación (2° año)',
          place: 'Universidad Nacional de Córdoba',
          description: '',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Tres proyectos reales, de un sistema de gestión para un negocio a un par de apps que nacieron para resolver algo con amigos.',
      brandLabel: 'Desarrollados bajo mi marca freelance',
      viewRepo: 'Ver repo',
      viewFrontRepo: 'Repo frontend',
      viewBackRepo: 'Repo backend',
      viewDemo: 'Ver demo',
      statusLive: 'Demo pública',
      statusPrivate: 'Cliente real · sin demo pública',
      stats: {
        backend: 'Backend',
        frontend: 'Frontend',
        scale: 'Escala',
        realtime: 'Tiempo real',
        pwa: 'PWA / Offline',
        ux: 'UX',
      },
      items: {
        portenia: {
          name: 'La Porteña — Sistema de gestión',
          tagline: 'Proyecto de tesis, ERP full-stack para un negocio real',
          description:
            'ERP completo desarrollado como proyecto de tesis para un negocio real de la industria alimenticia: autenticación, generación de reportes en PDF/Excel y migración de un sistema legacy a una arquitectura moderna.',
        },
        yasta: {
          name: 'YASTA',
          tagline: 'PWA para organizar partidos de fútbol amateur',
          description:
            'Progressive Web App para armar y organizar partidos de fútbol amateur con amigos: grupos, convocatorias y disponibilidad, con sincronización en Firebase y soporte offline.',
        },
        album: {
          name: 'Álbum Mundial 2026',
          tagline: 'PWA del álbum de figuritas del Mundial, con sync en tiempo real',
          description:
            'PWA para llevar el álbum de figuritas del Mundial 2026 con 980 figuritas, sincronización en tiempo real vía Firestore, modo oscuro, soporte offline y una vista de intercambios con amigos.',
        },
      },
    },
    contact: {
      title: 'Hablemos',
      subtitle: '¿Tenés un proyecto en mente o una posición donde encaje? Escribime directamente, sin formularios de por medio.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con React + Tailwind.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      themeToLight: 'Switch to the light side',
      themeToDark: 'Switch to the dark side',
    },
    home: {
      greeting: "Hi, I'm",
      name: 'Gastón Silva',
      role: 'Full Stack Developer · Systems Analyst',
      location: 'Córdoba, Argentina',
      tagline:
        "I build products end to end: from the data model to the interface people actually use. I'm as obsessed with learning new tech as I am with a good last-minute comeback.",
      ctaProjects: 'View projects',
      ctaContact: "Let's talk",
      downloadCv: 'Download CV',
    },
    about: {
      title: 'About me',
      downloadCv: 'Download CV',
      intro: [
        "I'm a Full Stack Developer and Systems Analyst, with backend as my main strength. I'm currently Tech Lead of a team of 3 in the public sector, leading the development of a geospatial (GIS) platform for the Municipality of Córdoba.",
        "What I enjoy most about my job isn't just shipping features — it's finding the problem before it blows up: the vulnerability nobody reported, the bottleneck that would've taken down a production system, or the ghost bug nobody else could find.",
        'Outside working hours I stay in the same groove, just for fun. I design and deploy projects end to end, like a complete ERP for the food industry, or dive into migrating entire legacy systems to modern architectures without cutting the service for a single day.',
        'And when I turn off the screen, football, Star Wars and Marvel take up the rest of my head.',
      ],
      skillsTitle: 'Tech stack',
      skills: {
        backend: { title: 'Backend', items: ['Python (FastAPI)', 'Node.js (Express)', 'PHP (Laravel)'] },
        frontend: { title: 'Frontend', items: ['React', 'Vue.js (Quasar)', 'TypeScript'] },
        gis: { title: 'GIS', items: ['GeoServer', 'PostGIS', 'QGIS', 'Leaflet / Mapbox / OpenLayers'] },
        databases: { title: 'Databases', items: ['PostgreSQL', 'SQL Server', 'Firebase / Firestore'] },
        infra: { title: 'Infrastructure', items: ['Docker', 'Linux (Ubuntu)', 'Git', 'GitHub'] },
        architecture: {
          title: 'Architecture & practices',
          items: ['Legacy system migration', 'RESTful APIs', 'SOLID principles', 'Design patterns'],
        },
        languages: { title: 'Languages', items: ['Spanish (native)', 'English (B1)'] },
      },
      experienceTitle: 'Experience',
      experience: {
        role: 'Fullstack Developer → Tech Lead',
        company: 'Municipality of Córdoba — Secretariat of Smart City & Digital Transformation',
        period: '2024 — Present',
        projects: [
          {
            name: 'Municipal Geoportal',
            tag: 'Current project · Tech Lead of a 3-developer team',
            bullets: [
              "I designed and led it from scratch (Python/FastAPI + Vue 3/Quasar): today it's 190+ published layers and 103 REST endpoints across 14 modules, used by multiple government areas.",
              'Designed the database ERD on my own and implemented the migrations system with Alembic on the production environment.',
              'Built the entire security layer: user, role and work-group management, permissions for external applications, and fine-grained control for sharing layers and layer groups.',
              'Before they turn into incidents: I eliminated an N+1 pattern on heavy geographic datasets and proactively found security vulnerabilities nobody had reported.',
              'Added an accessibility mode designed for senior citizens and export to Excel/CSV/KML/GeoJSON.',
            ],
          },
          {
            name: 'Municipal Workers Management System (MBTA) & Communications Portal',
            tag: 'In parallel',
            bullets: [
              "Migrated the backend and frontend from PHP/Laravel to FastAPI + Vue.js without cutting the service, adding new features we designed along the way — not just a 1-to-1 port.",
              'Contributed to restructuring the MBTA data model: it went from a non-relational, 40-table mess with little logic to an organized schema built around what the system actually needed.',
            ],
          },
          {
            name: 'Electronic Procurement System',
            tag: null,
            bullets: [
              'Part of the founding team that built the city\'s electronic procurement system, with FastAPI APIs and reactive Vue.js (Quasar) interfaces, now running at government scale.',
            ],
          },
        ],
      },
      timelineTitle: 'Education',
      timeline: [
        {
          period: '2022 — 2025',
          title: 'Systems Analyst',
          place: 'Colegio Universitario IES',
          description:
            'Technical degree in software development, databases and systems architecture. Thesis project: full-stack ERP / management system for a real food industry business ("La Porteña"), from the data model to deployment.',
        },
        {
          period: '2019 — 2022',
          title: 'B.Sc. in Computer Science (2nd year)',
          place: 'Universidad Nacional de Córdoba',
          description: '',
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Three real projects, from a management system for a business to a couple of apps born to solve something with friends.',
      brandLabel: 'Built under my freelance brand',
      viewRepo: 'View repo',
      viewFrontRepo: 'Frontend repo',
      viewBackRepo: 'Backend repo',
      viewDemo: 'View demo',
      statusLive: 'Public demo',
      statusPrivate: 'Real client · no public demo',
      stats: {
        backend: 'Backend',
        frontend: 'Frontend',
        scale: 'Scale',
        realtime: 'Real-time',
        pwa: 'PWA / Offline',
        ux: 'UX',
      },
      items: {
        portenia: {
          name: 'La Porteña — Management System',
          tagline: 'Thesis project, full-stack ERP for a real business',
          description:
            'Complete ERP built as a thesis project for a real food industry business: authentication, PDF/Excel report generation, and migration from a legacy system to a modern architecture.',
        },
        yasta: {
          name: 'YASTA',
          tagline: 'PWA to organize amateur football matches',
          description:
            'Progressive Web App to set up and organize amateur football matches with friends: groups, call-ups and availability, with Firebase sync and offline support.',
        },
        album: {
          name: 'World Cup 2026 Album',
          tagline: 'World Cup sticker album PWA with real-time sync',
          description:
            'PWA to track the World Cup 2026 sticker album — 980 stickers, real-time sync via Firestore, dark mode, offline support, and a trading view to swap stickers with friends.',
        },
      },
    },
    contact: {
      title: "Let's talk",
      subtitle: 'Got a project in mind or a role where I could fit in? Reach out directly, no forms in between.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Built with React + Tailwind.',
    },
  },
}
