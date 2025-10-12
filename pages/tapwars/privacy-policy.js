import Head from "next/head";

const CANONICAL_URL = "https://jdoavila.com/tapwars/privacy-policy";

export default function TapWarsPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>TapWars Privacy Policy | Daniel Ortiz</title>
        <meta
          key="description"
          name="description"
          content="Privacy practices for the TapWars mobile game, including data usage and advertising partners."
        />
        <link key="canonical" rel="canonical" href={CANONICAL_URL} />
      </Head>
      <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
        <div className="mx-auto w-full max-w-3xl space-y-6">
          <header>
            <h1 className="text-4xl font-bold text-gray-900">
              TapWars Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-600">Effective date: April 21, 2024</p>
          </header>

          <section>
            <p>
              TapWars is committed to protecting your privacy. This Privacy Policy explains
              what information is collected and how it is used when you play TapWars. By
              using the app you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="mt-2">
              TapWars does not collect, store, or process any personal information or usage
              analytics from players. The app runs entirely on your device and no gameplay
              data is transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Advertising and Third-Party Services
            </h2>
            <p className="mt-2">
              TapWars displays advertisements provided by Google AdMob. While we do not
              collect any data ourselves, Google may collect certain information (such as
              device identifiers) to serve personalized or non-personalized ads in accordance
              with Google&apos;s own privacy policies. You can learn more about how Google
              uses data from partner apps at{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 underline decoration-slate-600 decoration-2 underline-offset-2 hover:text-slate-800"
              >
                Google Advertising Policies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Children&apos;s Privacy</h2>
            <p className="mt-2">
              TapWars is intended for general audiences. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided
              personal information through the app, please contact us so we can delete the
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy to reflect changes to TapWars or applicable
              regulations. Any updates will be posted on this page with an updated effective
              date. Continued use of the app after a change signifies acceptance of the new
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy, please email
              {" "}
              <a
                href="mailto:jdoavila@gmail.com"
                className="text-slate-600 underline decoration-slate-600 decoration-2 underline-offset-2 hover:text-slate-800"
              >
                jdoavila@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

TapWarsPrivacyPolicy.pageMeta = {
  title: "TapWars Privacy Policy | Daniel Ortiz",
  description:
    "Privacy practices for the TapWars mobile game, including data usage and advertising partners.",
  canonical: CANONICAL_URL,
  ogType: "article",
};
