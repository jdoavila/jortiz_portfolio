import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Layout from "@/components/layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/router";
import { Open_Sans, Raleway } from "next/font/google";

const SITE_URL = "https://jdoavila.com";
const DEFAULT_TITLE = "Daniel Ortiz | Full Stack Developer";
const DEFAULT_DESCRIPTION =
  "Portafolio de Daniel Ortiz, desarrollador full stack que crea soluciones en Next.js, Python y visión por computadora para la industria camaronera.";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-header",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalPath = router.asPath?.split("?")[0]?.split("#")[0] ?? "";
  const canonicalUrl = `${SITE_URL}${
    !canonicalPath || canonicalPath === "/" ? "" : canonicalPath
  }`;

  const pageMeta = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    image: "/img/social.jpg",
    ogType: "website",
    ...Component.pageMeta,
    ...pageProps?.meta,
  };

  const metaImagePath = pageMeta.image || "/img/social.jpg";
  const metaImage = metaImagePath.startsWith("http")
    ? metaImagePath
    : `${SITE_URL}${metaImagePath}`;

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta key="description" name="description" content={pageMeta.description} />
        <link rel="icon" href="/favicon.png" />
        <link key="canonical" rel="canonical" href={pageMeta.canonical ?? canonicalUrl} />
        <meta key="og:title" property="og:title" content={pageMeta.title} />
        <meta
          key="og:description"
          property="og:description"
          content={pageMeta.description}
        />
        <meta key="og:url" property="og:url" content={pageMeta.canonical ?? canonicalUrl} />
        <meta key="og:image" property="og:image" content={metaImage} />
        <meta key="og:site_name" property="og:site_name" content="Daniel Ortiz Portfolio" />
        <meta key="og:type" property="og:type" content={pageMeta.ogType ?? "website"} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={pageMeta.title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={pageMeta.description}
        />
        <meta key="twitter:image" name="twitter:image" content={metaImage} />
        <meta key="twitter:site" name="twitter:site" content="@danielortiz_d" />
      </Head>
      <div className={`${openSans.variable} ${raleway.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}
