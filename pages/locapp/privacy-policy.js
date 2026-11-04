import Head from "next/head";

const CANONICAL_URL = "https://jdoavila.com/locapp/privacy-policy";
const PAGE_TITLE = "Location Capsule Privacy Policy | DanoDev90";
const PAGE_DESCRIPTION = "Privacy policy for Location Capsule, developed by DanoDev90.";
const ACCOUNT_DELETION_URL = "https://locapp.app/account/delete";
const LINK_CLASS =
  "text-slate-600 underline decoration-slate-600 decoration-2 underline-offset-2 hover:text-slate-800";

export default function LocationCapsulePrivacyPolicy() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta key="description" name="description" content={PAGE_DESCRIPTION} />
        <link key="canonical" rel="canonical" href={CANONICAL_URL} />
      </Head>
      <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
        <div className="mx-auto w-full max-w-3xl space-y-6">
          <header>
            <h1 className="text-4xl font-bold text-gray-900">
              Location Capsule Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-600">Last updated: November 4, 2026</p>
          </header>

          <section>
            <p>
              Location Capsule lets you leave and discover notes tied to places. It is
              developed by DanoDev90, the developer name shown on Google Play. This policy
              explains how we handle information in the mobile app and its related public
              web pages, including this policy website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Information We Process</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Content you provide: notes, comments, photos, hashtags, reactions, favorites,
                reports and their reasons, blocks, and related dates and times.
              </li>
              <li>
                Location information: coordinates used to find nearby notes and coordinates
                attached to notes you publish, together with available place names, city,
                country, and the visibility period you select.
              </li>
              <li>
                Optional account information: your email address for sign-in, username,
                display name, biography, avatar, sign-in records, account sessions, linked
                devices, and the authors you follow.
              </li>
              <li>
                Device and service information: a persistent app-generated device
                identifier, platform, app version, usage events, referral information,
                notification registration tokens and preferences, language, and time zone.
                Our servers and service providers also process connection information such
                as IP addresses when handling requests.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Optional Accounts</h2>
            <p className="mt-2">
              You can use Location Capsule without creating an account. A persistent
              app-generated identifier still links notes and interactions from your device.
              If you choose to create an account, we use your email to send a sign-in code or
              link; a password is not required. Your profile lets you follow authors and
              access your account-linked notes on other devices. Signing in links the device
              to the account and can associate previously published notes from linked devices
              with that account. Your email is not included in your public profile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">How We Use Information</h2>
            <p className="mt-2">
              We use information to show nearby notes in the feed, map, and augmented
              reality view; publish content and photos; provide profiles, comments,
              favorites, following, and note history; sign you in; deliver notifications;
              translate notes when requested; moderate reports and enforce blocks; prevent
              abuse; diagnose problems; measure feature use and referrals; and display and
              measure advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Location and Public Content
            </h2>
            <p className="mt-2">
              With device permission, the app uses your location while you use location-based
              features. Coordinates are sent to our service to request nearby content and
              when you publish a note. The app does not request background location access.
              Device map and geocoding services may also process the area you view or the
              coordinates used to look up a place name.
            </p>
            <p className="mt-2">
              Published notes include their coordinates and place information. Note data
              makes these coordinates available to other users, and maps show where notes
              were left. When a note belongs to an account, its location can be associated
              with the public author profile. Notes, photos, comments, public profile fields,
              and follower and following lists can be viewed by others. Shared public web
              pages can display notes, photos, profiles, and comment previews. Avoid posting
              sensitive locations or personal details you do not want others to see.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Camera, Photos, and Augmented Reality
            </h2>
            <p className="mt-2">
              Camera and photo access let you take or choose an image for a note or avatar.
              Images you submit are uploaded and processed into stored versions and
              thumbnails that do not retain the original EXIF metadata. Visible image content
              can still reveal personal details or a location. The augmented reality view
              uses the camera preview, compass, and motion sensors on your device to position
              nearby notes. It does not upload a recording of that camera view.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Notifications</h2>
            <p className="mt-2">
              For remote notifications, we register a delivery token with Firebase Cloud
              Messaging and process the app-generated device identifier, platform, app
              version, language, time zone, notification preferences, and delivery records.
              On iOS, the app may request provisional authorization for quiet notifications.
              Notifications can relate to social activity, followed authors, activity near
              places where you previously posted, reminders, or memories. Nearby alerts use
              the locations of past notes rather than background tracking of your current
              location. Some reminders are scheduled locally on your device. You can manage
              notification categories in the app and notification permission in system
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Usage Analytics and Referrals
            </h2>
            <p className="mt-2">
              We send product usage events to our own service, associated with the persistent
              app-generated device identifier. These events help us understand feature use,
              diagnose problems, and measure referrals. They can include app openings,
              permission choices, publishing and sharing actions, profile and following
              actions, notification interactions, timestamps, platform, app version, session
              information, note identifiers, search radii, distances, and referral or campaign
              codes. Our product analytics pipeline filters out precise latitude and
              longitude fields. On Android, we also use Google Play Install Referrer to
              identify installation sources. Shared links may carry referral codes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Advertising</h2>
            <p className="mt-2">
              Location Capsule uses Google AdMob to display ads and requests non-personalized
              advertisements. The Google Mobile Ads SDK may process IP addresses, device or
              advertising identifiers, ad interactions, and diagnostic information to deliver
              and measure ads and prevent fraud. IP addresses can be used to estimate a
              general location. Non-personalized ads still involve data processing; device
              privacy settings affect which identifiers are available. Google explains its
              practices in its{" "}
              <a href="https://policies.google.com/privacy" className={LINK_CLASS}>
                Privacy Policy
              </a>{" "}
              and its disclosures for the advertising SDK on{" "}
              <a
                href="https://developers.google.com/admob/android/privacy/play-data-disclosure"
                className={LINK_CLASS}
              >
                Android
              </a>{" "}
              and{" "}
              <a
                href="https://developers.google.com/admob/ios/privacy/data-disclosure"
                className={LINK_CLASS}
              >
                iOS
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Service Providers</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Hosting, storage, and email services process information needed to operate
                the app, store content, and deliver sign-in and account deletion emails.
              </li>
              <li>
                Google Firebase Cloud Messaging and Apple notification services deliver
                remote notifications and process delivery tokens and notification data.
                See the{" "}
                <a href="https://firebase.google.com/support/privacy" className={LINK_CLASS}>
                  Firebase privacy information
                </a>
                .
              </li>
              <li>
                Maps use Apple Maps on iOS and OpenStreetMap tiles on Android, with
                supporting map resources loaded from unpkg. Map and device geocoding
                providers receive requests related to the displayed area and connection
                information. See the privacy information from{" "}
                <a href="https://www.apple.com/legal/privacy/" className={LINK_CLASS}>
                  Apple
                </a>{" "}
                and the{" "}
                <a href="https://osmfoundation.org/wiki/Privacy_Policy" className={LINK_CLASS}>
                  OpenStreetMap Foundation
                </a>
                .
              </li>
              <li>
                When translation is available and a reader requests it, the configured
                translation service, using LibreTranslate, processes the note text and
                requested language. Translations are stored for reuse. Text you publish may
                itself contain personal information, so avoid including sensitive details.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Local Storage and Websites</h2>
            <p className="mt-2">
              The app stores identifiers, session credentials, settings, notification
              preferences, referral information, usage events waiting to be sent, and cached
              notes and favorites on your device. Device secure storage is used for
              credentials and the device secret where available. Other local storage supports
              preferences and offline content. Uninstalling the app does not itself send a
              request to delete information held by our service.
            </p>
            <p className="mt-2">
              Related public landing pages record page views, store clicks, language, and
              referral or campaign information. The website hosting this policy integrates
              Vercel hosting, Web Analytics, and Speed Insights, and loads supporting resources
              from unpkg. Visiting it sends requests and connection information to these
              providers. Vercel describes its{" "}
              <a href="https://vercel.com/docs/analytics/privacy-policy" className={LINK_CLASS}>
                website analytics
              </a>{" "}
              and{" "}
              <a
                href="https://vercel.com/docs/speed-insights/privacy-policy"
                className={LINK_CLASS}
              >
                performance measurement
              </a>
              .
            </p>
          </section>

          <section id="retention-and-deletion">
            <h2 className="text-2xl font-semibold text-gray-900">Retention and Deletion</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Notes, comments, and associated media remain stored until removed. A
                temporary note reaching its visibility deadline stops appearing in public
                views; expiration does not itself delete the stored note. Reports can hide
                content for moderation without deleting it.
              </li>
              <li>
                You can delete your notes and comments using the app. Deleting a note also
                removes its associated comments, stored image, thumbnail, and cached
                translations from the service. Copies already saved or shared by other
                people may remain outside our control.
              </li>
              <li>
                You can delete your account from your profile in the app, or use the{" "}
                <a href={ACCOUNT_DELETION_URL} className={LINK_CLASS}>
                  account deletion page
                </a>{" "}
                without the app. The web process sends a confirmation link to your account
                email and requires confirmation before deletion. Account deletion removes
                the account, profile and avatar, account sessions, device links, and follow
                relationships. It does not automatically delete notes or comments; these
                remain with their device identifiers and are detached from the account.
                Delete publications before deleting the account, or contact us to request
                their removal.
              </li>
              <li>
                Account deletion does not automatically erase device-linked likes,
                favorites, reports, blocks, notification registrations or delivery logs,
                usage events, or email-based sign-in and deletion request records. These
                records can remain after account deletion. Contact us to request deletion
                of remaining information. We may need information about the account,
                originating device, or specific content to verify your request.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Your Choices and Requests</h2>
            <p className="mt-2">
              You can manage location, camera, photo, and notification permissions in device
              settings, edit your profile, remove favorites, unfollow authors, and delete
              your content or account. Restricting permissions can limit related features.
              To ask about information we hold, request access, correction, or deletion, or
              raise a privacy concern, email DanoDev90 at{" "}
              <a href="mailto:jdoavila@gmail.com" className={LINK_CLASS}>
                jdoavila@gmail.com
              </a>
              . Please identify the relevant account or content without sending sign-in
              codes, passwords, or other secrets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Security</h2>
            <p className="mt-2">
              The app connects to our service using HTTPS. We use access controls and store
              server-side hashes of account sign-in codes and authentication tokens. These
              measures reduce risk, but no storage or transmission method is completely
              secure. Public content should not contain information you need to keep private.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Changes and Contact</h2>
            <p className="mt-2">
              We may revise this policy as features or data practices change. We will publish
              revisions at this same URL and update the date above. For questions or privacy
              requests about Location Capsule, contact its developer, DanoDev90, at{" "}
              <a href="mailto:jdoavila@gmail.com" className={LINK_CLASS}>
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

LocationCapsulePrivacyPolicy.pageMeta = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  canonical: CANONICAL_URL,
  ogType: "article",
};
