import Image from "next/image";

const PROJECTS = [
  {
    id: "project-triton-sonic",
    title: "Triton Sonic feeder firmware",
    description:
      "Firmware y panel web para controlar alimentadores inteligentes con monitoreo remoto en tiempo real.",
    image: "/img/portfolio/triton_sonic_dashboard.jpg",
    alt: "Panel principal del Triton Sonic feeder con métricas en tiempo real.",
  },
  {
    id: "project-kraken-farm",
    title: "Kraken Farm",
    description:
      "Plataforma integral para gestionar cada etapa de una granja camaronera, desde la alimentación hasta la cosecha.",
    image: "/img/portfolio/kraken_farm.jpg",
    alt: "Dashboard de Kraken Farm mostrando indicadores clave de la producción acuícola.",
  },
  {
    id: "project-larvae-tagger",
    title: "Larvae Tagger Mobile App",
    description:
      "App móvil que detecta, cuenta y etiqueta larvas de camarón con TensorFlow y modelos de visión computarizada.",
    image: "/img/portfolio/larvea_tagger.jpg",
    alt: "Pantalla de la app Larvae Tagger con resultados de clasificación de larvas.",
  },
  {
    id: "project-504-assist",
    title: "504 Assist Website and Mobile App",
    description:
      "Ecosistema digital para contratar seguros de viaje y conversar con agentes en vivo desde la app móvil.",
    image: "/img/portfolio/504assist_website.jpg",
    alt: "Vista previa del sitio y la app 504 Assist con módulos de atención al viajero.",
  },
];

export default function MyPortfolio() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="font-header text-center text-4xl font-semibold uppercase text-slate-500 sm:text-4xl lg:text-5xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-sans text-xl font-light text-gray-700 sm:text-2xl lg:text-3xl">
        Some of the projects I have worked on
      </h3>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {PROJECTS.map(({ id, title, description, image, alt }) => (
          <article
            key={id}
            id={id}
            className="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105"
          >
            <figure className="mx-auto text-center">
              <Image
                className="w-full shadow"
                alt={alt}
                src={image}
                width={600}
                height={400}
              />
              <figcaption className="sr-only">{title}</figcaption>
            </figure>
            <div className="text-center">
              <h4 className="pt-4 text-2xl font-semibold text-gray-900">{title}</h4>
              <p className="pt-2 text-base font-light text-gray-700">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
