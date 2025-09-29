import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth hover:scroll-auto"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta name="theme-color" content="#5540af" />
        <meta property="og:site_name" content="Daniel Ortiz Portfolio" />
        <meta name="twitter:site" content="@danielortiz_d" />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
