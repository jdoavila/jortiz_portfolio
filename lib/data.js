export const SITE_URL = "https://jdoavila.com";

export const PERSONAL_DATA = {
  name: "Daniel Ortiz",
  jobTitle: "Full Stack Developer",
  email: "jdoavila@gmail.com",
  description:
    "Desarrollador full stack especializado en Next.js, Python y soluciones de visión por computadora para la industria camaronera.",
  image: "/img/jortiz_profile.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/jdoavila/",
    github: "https://github.com/jdoavila",
    twitter: "https://twitter.com/danielortiz_d",
    facebook: "https://www.facebook.com/danielortiz21",
  },
};

export const DEFAULT_TITLE = "Daniel Ortiz | Full Stack Developer";
export const DEFAULT_DESCRIPTION =
  "Portafolio de Daniel Ortiz, desarrollador full stack que crea soluciones en Next.js, Python y visión por computadora para la industria camaronera.";

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/danielortiz21",
    label: "Facebook de Daniel Ortiz",
    icon: "bxl-facebook-square",
  },
  {
    href: "https://twitter.com/danielortiz_d",
    label: "Twitter de Daniel Ortiz",
    icon: "bxl-twitter",
  },
  {
    href: "https://www.instagram.com/jdoavila/",
    label: "Instagram de Daniel Ortiz",
    icon: "bxl-instagram",
  },
  {
    href: "https://www.linkedin.com/in/jdoavila/",
    label: "LinkedIn de Daniel Ortiz",
    icon: "bxl-linkedin",
  },
  {
    href: "https://github.com/jdoavila",
    label: "GitHub de Daniel Ortiz",
    icon: "bxl-github",
  },
  {
    href: "mailto:jdoavila@gmail.com",
    label: "Enviar correo a jdoavila@gmail.com",
    icon: "bx-mail-send",
  },
];

export const PROJECTS = [
  {
    id: "project-triton-sonic",
    title: "Triton Sonic feeder firmware",
    description:
      "Firmware y panel de control para alimentar granjas acuícolas con monitoreo remoto en tiempo real.",
    image: "/img/portfolio/triton_sonic_dashboard.jpg",
    alt: "Panel principal del Triton Sonic feeder con métricas en tiempo real.",
    url: `${SITE_URL}/#project-triton-sonic`,
  },
  {
    id: "project-kraken-farm",
    title: "Kraken Farm",
    description:
      "Plataforma integral para gestionar cada etapa de una granja camaronera, desde la alimentación hasta la cosecha.",
    image: "/img/portfolio/kraken_farm.jpg",
    alt: "Dashboard de Kraken Farm mostrando indicadores clave de la producción acuícola.",
    url: `${SITE_URL}/#project-kraken-farm`,
  },
  {
    id: "project-larvae-tagger",
    title: "Larvae Tagger Mobile App",
    description:
      "Aplicación móvil que detecta, cuenta y clasifica larvas de camarón con TensorFlow y modelos CNN.",
    image: "/img/portfolio/larvea_tagger.jpg",
    alt: "Pantalla de la app Larvae Tagger con resultados de clasificación de larvas.",
    url: `${SITE_URL}/#project-larvae-tagger`,
  },
  {
    id: "project-504-assist",
    title: "504 Assist Website and Mobile App",
    description:
      "Suite digital para contratar seguros de viaje con soporte en tiempo real y aplicaciones móviles.",
    image: "/img/portfolio/504assist_website.jpg",
    alt: "Vista previa del sitio y la app 504 Assist con módulos de atención al viajero.",
    url: `${SITE_URL}/#project-504-assist`,
  },
];
