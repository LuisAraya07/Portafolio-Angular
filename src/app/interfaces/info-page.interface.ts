interface InfoPage {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  equipo_trabajo?: any[];
}


interface AboutPage {
  frase?: string;
  nombre?: string;
  subtitulo?: string;
  twitter?: string;
  url?: string;
}

interface Productos {
  cod?: string;
  url?: string;
  titulo?: string;
  categoria?: string;
}


interface Producto {
  producto?: string;
  categoria?: string;
  subtitulo1?: string;
  desc1?: string;
  subtitulo2?: string;
  desc2?: string;
  resumen?: string;
}

export {InfoPage, AboutPage, Productos, Producto};

