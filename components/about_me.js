import Link from "next/link";
import { PERSONAL_DATA } from "@/lib/data";

export default function AboutMe() {
  return (
    <div className="z-1000 bg-gray-50 transition-colors duration-300 dark:bg-slate-900" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-3xl text-slate-800 dark:text-white sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <h4 className="font-header pt-4 text-lg font-medium text-slate-500 dark:text-slate-300 sm:text-xl lg:text-2xl">
            JavaScript | ReactJS | NextJS | Python | Django | TensorFlow |
            Computer Vision
          </h4>
          <p className="font-body pt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            I am a Full Stack Developer with 8+ year experience in Python, as
            well 3+ years experience in ReactJS, Actually I am developing
            Artificial Intelligence Applications through Computer Vision and IoT
            for Shrimp Industry.
          </p>
          <p className="font-body pt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            In search of new challenges in my professional carrer that allow me
            to develop solutions with global impact through software and
            artificial intelligence; Actually I am writing a lot of code in
            Python and Django, JavaScript with ReactJS and NextJS, also
            designing and training artificial intelligence models to detect,
            count and classify shrimp larvae.
          </p>
          <p className="font-body pt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            I like to accept new challenges, actively I am learning new
            technologies in order to further my work to a next level.
          </p>
          <p className="font-body pt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            You can contact me by an email to: {PERSONAL_DATA.email}
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-slate-500 dark:text-slate-300">
                Download CV
              </p>
              <div className="block">
                <i className="bx bx-chevron-right text-yellow text-3xl text-slate-500 dark:text-slate-400"></i>
              </div>
              <div className="block">
                {/* <Link href="https://drive.google.com/file/d/1ytNjUrWJCPv525mfKPkh4ZYRJ_errN__/view?usp=share_link"> */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1jCemI7kCeOVnInGleSCECWo3bh6jEfgh/view?usp=share_link"
                  aria-label="Descargar currículum en PDF"
                  title="Descargar currículum en PDF"
                >
                  <span className="sr-only">Descargar currículum</span>
                  <i className="bx bxs-file-pdf text-3xl text-slate-500 dark:text-slate-400" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-10 pl-0 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div className="mb-4">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black dark:text-white">
                HTML & CSS
              </h4>
              <h3 className="font-body text-2xl font-bold text-slate-500 dark:text-slate-300">
                90%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila dark:bg-slate-700">
              <div
                className="h-3 rounded-full bg-slate-500 dark:bg-slate-400"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black dark:text-white">
                JavaScript | ReactJS | NextJS | NodeJS
              </h4>
              <h3 className="font-body text-2xl font-bold text-slate-500 dark:text-slate-300">
                70%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila dark:bg-slate-700">
              <div
                className="h-3 rounded-full bg-slate-500 dark:bg-slate-400"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black dark:text-white">
                Python | Django | Flask | Django Rest Framework
              </h4>
              <h3 className="font-body text-2xl font-bold text-slate-500 dark:text-slate-300">
                80%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila dark:bg-slate-700">
              <div
                className="h-3 rounded-full bg-slate-500 dark:bg-slate-400"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black dark:text-white">
                TensorFlow | IA | Data Science
              </h4>
              <h3 className="font-body text-2xl font-bold text-slate-500 dark:text-slate-300">
                50%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila dark:bg-slate-700">
              <div
                className="h-3 rounded-full bg-slate-500 dark:bg-slate-400"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
