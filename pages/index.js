import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import AboutMe from "@/components/about_me";
import MyPortfolio from "@/components/my_portfolio";
import Contact from "@/components/contact";

import { PERSONAL_DATA, PROJECTS, SITE_URL } from "@/lib/data";

const OG_IMAGE = `${SITE_URL}/img/social.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_DATA.name,
  url: SITE_URL,
  jobTitle: PERSONAL_DATA.jobTitle,
  description: PERSONAL_DATA.description,
  image: `${SITE_URL}${PERSONAL_DATA.image}`,
  sameAs: [
    PERSONAL_DATA.social.linkedin,
    PERSONAL_DATA.social.github,
    PERSONAL_DATA.social.twitter,
    PERSONAL_DATA.social.facebook,
  ],
  hasPart: PROJECTS.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    url: project.url,
    image: `${SITE_URL}${project.image}`,
    description: project.description,
  })),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${PERSONAL_DATA.name} | ${PERSONAL_DATA.jobTitle}`}</title>
        <meta
          key="description"
          name="description"
          content={`Portafolio y proyectos de ${PERSONAL_DATA.name}, ${PERSONAL_DATA.jobTitle.toLowerCase()} que impulsa soluciones con Next.js, Python y visión por computadora.`}
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
