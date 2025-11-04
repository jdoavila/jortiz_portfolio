import Head from "next/head";

const CANONICAL_URL = "https://jdoavila.com/locapp/privacy-policy";

export default function LocAppPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Location App (LocApp) Privacy Policy | Daniel Ortiz</title>
        <meta
          key="description"
          name="description"
          content="Privacy practices for Location App (LocApp), the anonymous geo-based messaging experience."
        />
        <link key="canonical" rel="canonical" href={CANONICAL_URL} />
      </Head>
      <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
        <div className="mx-auto w-full max-w-3xl space-y-6">
          <header>
            <h1 className="text-4xl font-bold text-gray-900">
              Location App (LocApp) Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-600">Effective date: May 16, 2024</p>
          </header>

          <section>
            <p>
              Location App (LocApp) is an anonymous messaging experience anchored to
              geographic coordinates. This policy explains what information we process, why
              we do so, and what choices you have while using LocApp. By posting or
              interacting with messages you agree to the practices described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="mt-2">
              LocApp processes a minimal set of data in order to operate the service:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Latitude and longitude coordinates you choose or confirm through your device
                when you create or respond to a message.
              </li>
              <li>
                Message content, reactions, and the timestamp associated with each
                interaction.
              </li>
              <li>
                Limited technical data (such as device type, operating system version, and IP
                address) that is generated automatically to prevent abuse, troubleshoot
                issues, and protect the platform.
              </li>
            </ul>
            <p className="mt-4">
              LocApp does not require you to register, create an account, or provide login
              credentials. We do not request names, email addresses, or other direct
              identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">How We Use Information</h2>
            <p className="mt-2">
              We use the data we collect to show relevant messages based on the selected
              location, moderate content that violates our guidelines, diagnose technical
              incidents, and improve the performance of the app. We never sell your personal
              information or use it to build marketing profiles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Location and Anonymity</h2>
            <p className="mt-2">
              Coordinates are stored alongside each message so other users can discover it on
              the map. We do not link these coordinates to a name, phone number, or account.
              Still, sharing sensitive details tied to a specific location can reveal who you
              are. Please keep your contributions anonymous and respectful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Third-Party Services</h2>
            <p className="mt-2">
              We may rely on external hosting, database, or mapping providers to deliver
              LocApp. These providers receive only the data required to run the service and
              are bound by confidentiality and security obligations. LocApp does not
              currently integrate advertising networks or analytics tools that track your
              activity beyond the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Retention and Deletion</h2>
            <p className="mt-2">
              We retain messages and their coordinates for as long as necessary to keep the
              conversation active and maintain the integrity of the service. When a message
              is reported or removed, the associated information is securely purged from our
              systems within reasonable timeframes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Security</h2>
            <p className="mt-2">
              We implement reasonable technical and organizational safeguards to protect data
              from unauthorized access, loss, or improper disclosure. No system is perfectly
              secure, so we will notify you of incidents that materially impact your privacy
              in accordance with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Your Rights and Choices</h2>
            <p className="mt-2">
              You can request deletion of messages or ask questions about our data practices
              by emailing{" "}
              <a
                href="mailto:jdoavila@gmail.com"
                className="text-slate-600 underline decoration-slate-600 decoration-2 underline-offset-2 hover:text-slate-800"
              >
                jdoavila@gmail.com
              </a>
              . Because we do not maintain user accounts, we verify requests using the
              information available in the reported message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
            <p className="mt-2">
              We may update this policy to reflect adjustments to LocApp or evolving legal
              obligations. We will publish the revised version at this same link and update
              the effective date. Continued use of the app after changes take effect implies
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
            <p className="mt-2">
              If you have questions or want to exercise your privacy rights, contact{" "}
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

LocAppPrivacyPolicy.pageMeta = {
  title: "Location App (LocApp) Privacy Policy | Daniel Ortiz",
  description:
    "Privacy practices for Location App (LocApp), the anonymous geo-based messaging experience.",
  canonical: CANONICAL_URL,
  ogType: "article",
};
