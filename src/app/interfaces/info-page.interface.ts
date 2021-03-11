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

export {InfoPage, AboutPage};

