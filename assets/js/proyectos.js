/*
  LETRAS VIVAS · REPOSITORIO WEB
  Licenciatura en Literatura y Lengua Castellana

  Archivo editable:
  - Modifique autores, títulos, temas, descripciones, imágenes o enlaces.
  - Los enlaces repetidos fueron consolidados en una sola tarjeta.
*/
const PROYECTOS = [
  {
    titulo: 'Aventuras Literarias',
    autor: 'Samir Guillermo Alarcón de Alba, Ariannys Andrea Gamarra Delgado y Carmen Cecilia Gómez Guette',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Aventura literaria',
    descripcion: 'Aplicación interactiva para explorar actividades de lengua y literatura mediante retos educativos.',
    imagen: 'assets/img/aventuras-literarias.svg',
    enlace: 'https://samiralarkon-boop.github.io/aventurasss/',
    etiquetas: ['literatura', 'aventura', 'lengua castellana'],
    icono: '📚'
  },
  {
    titulo: 'Liter Aventuras',
    autor: 'José Javier Bustamante Osorio',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Laboratorio de Lengua Castellana y Literatura',
    descripcion: 'Explora mundos lingüísticos y literarios: ortografía, tipos de texto, comunicación, semántica, morfología y literatura universal.',
    imagen: 'assets/img/liter-aventuras.svg',
    enlace: 'https://josejavierbustamante1-gif.github.io/LiterAventuras/',
    etiquetas: ['ortografía', 'semántica', 'morfología', 'literatura universal'],
    icono: '🧭'
  },
  {
    titulo: 'Textópolis',
    autor: 'Exilda Carolina Cáceres Montero',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Tipos de texto',
    descripcion: 'La ciudad de los textos: aventura para trabajar niveles, mundos, progreso y comprensión de tipologías textuales.',
    imagen: 'assets/img/textopolis.svg',
    enlace: 'https://exildacace177-montero.github.io/TEXTOPOLI/',
    etiquetas: ['tipos de texto', 'comprensión', 'progreso'],
    icono: '🏙️'
  },
  {
    titulo: 'Tipos de Narrador · Vol. 3',
    autor: 'Dana Alejandra Flórez Cárdenas',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Tipos de narrador',
    descripcion: 'Actividad basada en mundos narrativos para reconocer narradores y formas de contar una historia.',
    imagen: 'assets/img/tipos-de-narrador-vol-3.svg',
    enlace: 'https://florezdana954-cyber.github.io/narradorbot/',
    etiquetas: ['narrador', 'narrativa', 'comprensión'],
    icono: '🧛'
  },
  {
    titulo: 'LEXOS',
    autor: 'Karlyn Elena Hurtado Buelvas',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Laboratorio literario',
    descripcion: 'Laboratorio literario interactivo para trabajar géneros, estructura narrativa, secuencias, comprensión, personajes y figuras del lenguaje.',
    imagen: 'assets/img/lexos.svg',
    enlace: 'https://kehb2810-del.github.io/lexosbot/',
    etiquetas: ['géneros literarios', 'estructura narrativa', 'figuras del lenguaje'],
    icono: '✨'
  },
  {
    titulo: 'El Espacio de los Textos',
    autor: 'Leydis Paola Jiménez Gómez',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Tipos de texto',
    descripcion: 'Aventura de lectura y comprensión para explorar texto informativo, narrativo, argumentativo, instructivo, descriptivo y expositivo.',
    imagen: 'assets/img/el-espacio-de-los-textos.svg',
    enlace: 'https://jimenezleydis267-pixel.github.io/tiposdetextos/',
    etiquetas: ['tipos de texto', 'lectura', 'comprensión'],
    icono: '🚀'
  },
  {
    titulo: 'Figuras Retóricas',
    autor: 'Santiago Daniel López Vargas',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Figuras retóricas',
    descripcion: 'Aventura por mundos del lenguaje para trabajar metáfora, hipérbole, antítesis y anáfora.',
    imagen: 'assets/img/figuras-retoricas.svg',
    enlace: 'https://elbellito11.github.io/figuretoricasbot/',
    etiquetas: ['metáfora', 'hipérbole', 'antítesis', 'anáfora'],
    icono: '⚔️'
  },
  {
    titulo: 'Super LiteraWorld',
    autor: 'Sofía Carolina Navarro Visbal',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Aventura literaria gamificada',
    descripcion: 'Aventura literaria inspirada en mundos de juego para rescatar la literatura mediante retos y niveles.',
    imagen: 'assets/img/super-literaworld.svg',
    enlace: 'https://navarrsofiacarolina-gif.github.io/Aulaliteraria/',
    etiquetas: ['gamificación', 'mundo literario', 'niveles'],
    icono: '⭐'
  },
  {
    titulo: 'Tipos de Narrador',
    autor: 'Keiner David Pacheco Carrillo',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Narradores',
    descripcion: 'Aventura por mundos para aprender narrador omnisciente, protagonista, testigo y segunda persona.',
    imagen: 'assets/img/tipos-de-narrador.svg',
    enlace: 'https://keiner211.github.io/narrabotitica/',
    etiquetas: ['narrador omnisciente', 'narrador protagonista', 'narrador testigo'],
    icono: '🗺️'
  },
  {
    titulo: 'LiterOlimpo',
    autor: 'Dulce María Pana Cabana',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Comprensión lectora y mitología griega',
    descripcion: 'Aventura de comprensión lectora sobre dioses, héroes y relatos de la mitología griega.',
    imagen: 'assets/img/literolimpo.svg',
    enlace: 'https://1110-dp.github.io/literolimpobots/',
    etiquetas: ['mitología griega', 'comprensión lectora', 'literatura clásica'],
    icono: '⚡'
  },
  {
    titulo: 'OdiseoQuest',
    autor: 'Juan José Ramos Moscote',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Literatura clásica',
    descripcion: 'Viaje épico por el saber literario: épica, tragedia, comedia, mito y retórica en mundos interactivos.',
    imagen: 'assets/img/odiseoquest.svg',
    enlace: 'https://juanchomosco6-blip.github.io/narrabotica/',
    etiquetas: ['literatura clásica', 'épica', 'mito', 'retórica'],
    icono: '🏛️'
  },
  {
    titulo: 'Mitos y Leyendas',
    autor: 'Valeria Daniela Salazar Hincapie',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Mitos y leyendas',
    descripcion: 'Recurso interactivo para trabajar relatos tradicionales, mitos, leyendas y comprensión narrativa.',
    imagen: 'assets/img/mitos-y-leyendas.svg',
    enlace: 'https://val18-pixel.github.io/mitosyleyendaslibro/mitosyleyendas%20(6).html',
    etiquetas: ['mitos', 'leyendas', 'tradición oral'],
    icono: '📜'
  },
  {
    titulo: 'LenguaBot Pro',
    autor: 'Oscar Miguel Sánchez Mejía',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Lengua Castellana para Primaria',
    descripcion: 'Juego educativo con mundos para vocales, consonantes, sílabas, gramática, comprensión, ortografía y puntuación.',
    imagen: 'assets/img/lenguabot-pro.svg',
    enlace: 'https://dewordking-sys.github.io/lenguabotpro/',
    etiquetas: ['vocales', 'sílabas', 'gramática', 'ortografía'],
    icono: '🤖'
  },
  {
    titulo: 'LiterAventuras',
    autor: 'Juleidis Marcela Torres Cañizales',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Mundos interactivos de literatura',
    descripcion: 'Aplicación con perfiles, mundos de primaria y bachillerato, progreso, ranking, acceso docente y asistente literario.',
    imagen: 'assets/img/literaventuras.svg',
    enlace: 'https://tjuleidis47.github.io/literaventura/',
    etiquetas: ['progreso', 'ranking', 'asistente literario', 'literatura'],
    icono: '✍️'
  },
  {
    titulo: 'Narratópolis',
    autor: 'Syney Torres Villafaña',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Texto narrativo',
    descripcion: 'Universo del texto narrativo con mundos para narrador, géneros, estructura, personajes, tiempo y espacio.',
    imagen: 'assets/img/narratopolis.svg',
    enlace: 'https://siney871.github.io/natropolis/index.html',
    etiquetas: ['texto narrativo', 'personajes', 'estructura', 'tiempo y espacio'],
    icono: '🌌'
  },
  {
    titulo: 'Orabot',
    autor: 'Diego Armando Valenzuela Sarmiento',
    programa: 'Licenciatura en Literatura y Lengua Castellana',
    tema: 'Lengua Castellana',
    descripcion: 'Aplicación educativa interactiva para fortalecer competencias de Lengua Castellana mediante actividades web.',
    imagen: 'assets/img/orabot.svg',
    enlace: 'https://diegovalenzuela12.github.io/Orabot/',
    etiquetas: ['lengua castellana', 'actividad interactiva', 'bot educativo'],
    icono: '🗣️'
  }
];
