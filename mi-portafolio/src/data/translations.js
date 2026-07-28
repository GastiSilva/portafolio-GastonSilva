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
        'Soy Analista de Sistemas y Full Stack Developer, enfocado en construir sistemas completos: desde el diseño de la base de datos hasta la experiencia final de quien usa el producto. Mi proyecto de tesis fue un sistema de gestión real para un negocio, liderando un equipo de 3 desarrolladores. Fuera del código sigo de cerca el fútbol, Star Wars y Marvel — probablemente por eso mis proyectos personales terminan siendo, sin planearlo, sobre fútbol.',
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
      },
      english: 'Inglés — B1',
      timelineTitle: 'Formación',
      timeline: [
        {
          period: '2022 — 2025',
          title: 'Analista de Sistemas',
          place: 'Colegio Universitario IES',
          description:
            'Formación técnica en desarrollo de software, bases de datos y arquitectura de sistemas. Proyecto de tesis: sistema de gestión full-stack para un negocio real ("La Porteña"), como Tech Lead de un equipo de 3 desarrolladores — asignación de tareas, revisión de código y planificación técnica, desde el modelo de datos hasta el deploy.',
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
          tagline: 'Proyecto de tesis, full-stack para un negocio real',
          description:
            'Sistema de gestión completo desarrollado como proyecto de tesis para un negocio real: autenticación, generación de reportes en PDF/Excel y migración de un sistema legacy a una arquitectura moderna. Lideré un equipo de 3 desarrolladores.',
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
        "I'm a Systems Analyst and Full Stack Developer focused on building complete systems: from database design to the final user experience. My thesis project was a real management system for a business, leading a team of 3 developers. Outside of code I follow football, Star Wars and Marvel closely — probably why my side projects keep turning into football apps without me planning it.",
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
      },
      english: 'English — B1',
      timelineTitle: 'Education',
      timeline: [
        {
          period: '2022 — 2025',
          title: 'Systems Analyst',
          place: 'Colegio Universitario IES',
          description:
            'Technical degree in software development, databases and systems architecture. Thesis project: full-stack management system for a real business ("La Porteña"), as Tech Lead of a 3-developer team — task assignment, code review and technical planning, from the data model to deployment.',
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
          tagline: 'Thesis project, full-stack for a real business',
          description:
            'Complete management system built as a thesis project for a real business: authentication, PDF/Excel report generation, and migration from a legacy system to a modern architecture. Led a team of 3 developers.',
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
