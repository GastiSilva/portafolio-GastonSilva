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
    },
    about: {
      title: 'Sobre mí',
      intro:
        'Soy Full Stack Developer y Analista de Sistemas, con el backend como fuerte. Hoy soy Tech Lead de un equipo de 3 en el sector público, liderando el desarrollo de una plataforma geoespacial (GIS) para la Municipalidad de Córdoba. Lo que más me gusta de mi trabajo no es solo entregar features: es encontrar el problema antes de que explote — una vulnerabilidad que nadie reportó, un cuello de botella que iba a tirar abajo un sistema en producción, un bug fantasma que nadie más encontraba. Fuera del horario laboral hago lo mismo por gusto: diseño y despliego mis propios proyectos de punta a punta, como un ERP completo para un negocio de la industria alimenticia. También migré sistemas legacy enteros a arquitecturas modernas sin cortar el servicio ni un día. Fuera del código, el fútbol, Star Wars y Marvel ocupan el resto de mi cabeza.',
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
              'Antes de que se conviertan en incidentes: eliminé un patrón N+1 en datasets geográficos pesados (con teselas vectoriales y caché en memoria) y detecté por iniciativa propia vulnerabilidades de seguridad que nadie había reportado.',
              'Sumé un modo de accesibilidad pensado para adultos mayores, autenticación con SSO federado, y exportación a Excel/CSV/KML/GeoJSON.',
            ],
          },
          {
            name: 'Sistema de Gestión de Trabajadores Municipales (MBTA) y Portal de Comunicaciones',
            tag: 'En paralelo',
            bullets: [
              'Reconstruí backend y frontend de los dos sistemas en simultáneo, migrando de PHP/Laravel a FastAPI + Vue.js sin cortar el servicio ni un solo día.',
            ],
          },
          {
            name: 'Sistema de Compras Electrónicas',
            tag: null,
            bullets: [
              'Sumé estabilidad y performance a un sistema crítico de compras electrónicas que corre a escala de toda la ciudad.',
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
    },
    about: {
      title: 'About me',
      intro:
        "I'm a Full Stack Developer and Systems Analyst, backend at heart. Right now I'm Tech Lead of a team of 3 in the public sector, leading the development of a geospatial (GIS) platform for the Municipality of Córdoba. What I enjoy most about the job isn't just shipping features — it's catching the problem before it blows up: an unreported vulnerability, a bottleneck that would've taken down a production system, a ghost bug nobody else could find. Outside working hours I do the same thing for fun: I design and deploy my own projects end to end, like a complete ERP for a food industry business. I've also migrated entire legacy systems to modern architectures without ever cutting the service. Outside of code, football, Star Wars and Marvel take up the rest of my head.",
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
              'Before they turn into incidents: I eliminated an N+1 pattern on heavy geographic datasets (with vector tiles and in-memory caching) and proactively found security vulnerabilities nobody had reported.',
              'Added an accessibility mode designed for senior citizens, federated SSO authentication, and export to Excel/CSV/KML/GeoJSON.',
            ],
          },
          {
            name: 'Municipal Workers Management System (MBTA) & Communications Portal',
            tag: 'In parallel',
            bullets: [
              'Rebuilt the backend and frontend of both systems at the same time, migrating from PHP/Laravel to FastAPI + Vue.js without cutting the service for a single day.',
            ],
          },
          {
            name: 'Electronic Procurement System',
            tag: null,
            bullets: [
              "Added stability and performance to a critical electronic procurement system running at city-wide scale.",
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
