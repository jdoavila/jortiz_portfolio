import Link from "next/link";
import { PERSONAL_DATA, SKILLS } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function AboutMe() {
  return (
    <div className="z-1000 bg-gray-50 transition-colors duration-300 dark:bg-slate-900" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <FadeIn>
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
          </FadeIn>
        </div>

        <div className="w-full pt-10 pl-0 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-transform hover:scale-105 dark:bg-slate-800"
                >
                  <i className={`bx ${skill.icon} text-4xl text-blue-600 dark:text-blue-400`}></i>
                  <span className="mt-2 text-center font-body font-semibold text-slate-700 dark:text-slate-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
