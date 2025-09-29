import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import AboutMe from "@/components/about_me";
import MyPortfolio from "@/components/my_portfolio";
import Contact from "@/components/contact";

const SITE_URL = "https://jdoavila.com";
const OG_IMAGE = `${SITE_URL}/img/social.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Ortiz",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
  description:
    "Desarrollador full stack especializado en Next.js, Python y soluciones de visión por computadora para la industria camaronera.",
  image: `${SITE_URL}/img/jortiz_profile.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/jdoavila/",
    "https://github.com/jdoavila",
    "https://twitter.com/danielortiz_d",
    "https://www.facebook.com/danielortiz21",
  ],
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "Triton Sonic feeder firmware",
      url: `${SITE_URL}/#project-triton-sonic`,
      image: `${SITE_URL}/img/portfolio/triton_sonic_dashboard.jpg`,
      description:
        "Firmware y panel de control para alimentar granjas acuícolas con monitoreo remoto en tiempo real.",
    },
    {
      "@type": "CreativeWork",
      name: "Kraken Farm",
      url: `${SITE_URL}/#project-kraken-farm`,
      image: `${SITE_URL}/img/portfolio/kraken_farm.jpg`,
      description:
        "Plataforma integral para administrar granjas camaroneras desde la alimentación hasta la cosecha.",
    },
    {
      "@type": "CreativeWork",
      name: "Larvae Tagger Mobile App",
      url: `${SITE_URL}/#project-larvae-tagger`,
      image: `${SITE_URL}/img/portfolio/larvea_tagger.jpg`,
      description:
        "Aplicación móvil que detecta, cuenta y clasifica larvas de camarón con TensorFlow y modelos CNN.",
    },
    {
      "@type": "CreativeWork",
      name: "504 Assist Website and Mobile App",
      url: `${SITE_URL}/#project-504-assist`,
      image: `${SITE_URL}/img/portfolio/504assist_website.jpg`,
      description:
        "Suite digital para contratar seguros de viaje con soporte en tiempo real y aplicaciones móviles.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Ortiz | Full Stack Developer</title>
        <meta
          key="description"
          name="description"
          content="Portafolio y proyectos de Daniel Ortiz, desarrollador full stack que impulsa soluciones con Next.js, Python y visión por computadora."
        />
        <link key="canonical" rel="canonical" href={SITE_URL} />
        <meta
          key="og:image:alt"
          property="og:image:alt"
          content="Imagen de portada del portafolio de Daniel Ortiz mostrando proyectos destacados."
        />
      </Head>

      <Script
        id="website-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      <div>
        <Banner />
        <AboutMe />
        <MyPortfolio />
        <Contact />
      </div>
    </>
  );
}

Home.pageMeta = {
  title: "Daniel Ortiz | Full Stack Developer",
  description:
    "Portafolio y proyectos de Daniel Ortiz, desarrollador full stack que impulsa soluciones con Next.js, Python y visión por computadora.",
  image: OG_IMAGE,
  canonical: SITE_URL,
  ogType: "profile",
};
