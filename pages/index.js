import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Porfolio | Daniel Ortiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <div className="absolute top-0 z-50 w-full py-3 sm:py-5">
          <div className="container flex items-center justify-between">
            <div>
              <Link href="/">
                <h2 className="font-header ml-4 cursor-pointer text-2xl text-white">
                  jortiz.dev
                </h2>
              </Link>
            </div>
            <div className="lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <Link href="#about" scroll={false}>
                    <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
                      About
                    </span>
                    <span className="block h-0.5 w-full bg-transparent transition-all duration-300 group-hover:bg-yellow-500"></span>
                  </Link>
                </li>
                <li className="group pl-6">
                  <Link href="#portfolio" scroll={false}>
                    <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
                      Portfolio
                    </span>
                    <span className="block h-0.5 w-full bg-transparent transition-all duration-300 group-hover:bg-yellow-500"></span>
                  </Link>
                </li>
                <li className="group pl-6">
                  <Link href="#contact" scroll={false}>
                    <span className="font-header cursor-pointer pt-0.5 font-semibold uppercase text-white">
                      Contact
                    </span>
                    <span className="block h-0.5 w-full bg-transparent transition-all duration-300 group-hover:bg-yellow-500"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div
            className="relative bg-cover bg-center bg-no-repeat py-8"
            style={{ backgroundImage: "url(/img/bg-hero.jpg)" }}
          >
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-400 to-slate-800 bg-cover bg-center bg-no-repeat opacity-80"></div>
            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 p-2 shadow-xl">
                  <Image
                    src="/img/jortiz_profile.jpg"
                    alt="Profile"
                    width={200}
                    height={200}
                    className="sm:h-46 h-48 rounded-full"
                  />
                </div>
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 className="font-header text-center text-4xl text-white sm:text-5xl md:text-6xl">
                    Daniel Ortiz!
                  </h1>
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p className="font-body text-lg uppercase text-white">
                        Let&apos;s connect
                      </p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-yellow text-3xl text-white"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                      <Link
                        href="https://www.facebook.com/danielortiz21"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook-square hover:text-yellow text-2xl text-white"></i>
                      </Link>
                      <Link
                        href="https://twitter.com/danielortiz_d"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter hover:text-yellow ml-4 text-2xl text-white"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/jdoavila/"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram hover:text-yellow ml-4 text-2xl text-white"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/jdoavila/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin hover:text-yellow ml-4 text-2xl text-white"></i>
                      </Link>
                      <Link href="https://github.com/jdoavila" target="_blank">
                        <i className="bx bxl-github hover:text-yellow ml-4 text-2xl text-white"></i>
                      </Link>
                      <Link href="mailto:jdoavila@gmail.com" target="_blank">
                        <i className="bx bx-mail-send hover:text-yellow ml-4 text-2xl text-white"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="z-1000 bg-gray-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="font-header text-3xl text-slate-800 sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <h4 className="font-header pt-4 text-lg font-medium text-slate-500 sm:text-xl lg:text-2xl">
                  JavaScript | ReactJS | NextJS | Python | Django | TensorFlow |
                  Computer Vision
                </h4>
                <p className="font-body pt-4 text-lg leading-relaxed text-slate-500">
                  I am a Full Stack Developer with 8+ year experience in Python,
                  as well 3+ years experience in ReactJS, Actually I am
                  developing Artificial Intelligence Applications through
                  Computer Vision and IoT for Shrimp Industry.
                </p>
                <p className="font-body pt-4 text-lg leading-relaxed text-slate-500">
                  In search of new challenges in my professional carrer that
                  allow me to develop solutions with global impact through
                  software and artificial intelligence; Actually I am writing a
                  lot of code in Python and Django, JavaScript with ReactJS and
                  NextJS, also designing and training artificial intelligence
                  models to detect, count and classify shrimp larvae.
                </p>
                <p className="font-body pt-4 text-lg leading-relaxed text-slate-500">
                  I like to accept new challenges, actively I am learning new
                  technologies in order to further my work to a next level.
                </p>
                <p className="font-body pt-4 text-lg leading-relaxed text-slate-500">
                  You can contact me by an email to: jdoavila@gmail.com
                </p>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-lg font-semibold uppercase text-slate-500">
                      Download CV
                    </p>
                    <div className="block">
                      <i className="bx bx-chevron-right text-yellow text-3xl text-slate-500"></i>
                    </div>
                    <div className="block">
                      {/* <Link href="https://drive.google.com/file/d/1ytNjUrWJCPv525mfKPkh4ZYRJ_errN__/view?usp=share_link"> */}
                      <Link
                        target="_blank"
                        href="https://drive.google.com/file/d/1jCemI7kCeOVnInGleSCECWo3bh6jEfgh/view?usp=share_link"
                      >
                        <i className="bx bxs-file-pdf text-3xl text-slate-500"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full pt-10 pl-0 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                <div className="mb-4">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      HTML & CSS
                    </h4>
                    <h3 className="font-body text-2xl font-bold text-slate-500">
                      90%
                    </h3>
                  </div>
                  <div className="bg-lila mt-2 h-3 w-full rounded-full">
                    <div
                      className="h-3 rounded-full bg-slate-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      JavaScript | ReactJS | NextJS | NodeJS
                    </h4>
                    <h3 className="font-body text-2xl font-bold text-slate-500">
                      70%
                    </h3>
                  </div>
                  <div className="bg-lila mt-2 h-3 w-full rounded-full">
                    <div
                      className="h-3 rounded-full bg-slate-500"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      Python | Django | Flask | Django Rest Framework
                    </h4>
                    <h3 className="font-body text-2xl font-bold text-slate-500">
                      80%
                    </h3>
                  </div>
                  <div className="bg-lila mt-2 h-3 w-full rounded-full">
                    <div
                      className="h-3 rounded-full bg-slate-500"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      TensorFlow | IA | Data Science
                    </h4>
                    <h3 className="font-body text-2xl font-bold text-slate-500">
                      50%
                    </h3>
                  </div>
                  <div className="bg-lila mt-2 h-3 w-full rounded-full">
                    <div
                      className="h-3 rounded-full bg-slate-500"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="font-header text-center text-4xl font-semibold uppercase text-indigo-500 sm:text-5xl lg:text-6xl">
              Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-sans text-xl font-light text-gray-700 sm:text-2xl lg:text-3xl">
              Some of the projects I have worked on
            </h3>
            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
              <div class="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
                <div className="mx-auto text-center">
                  <Link
                    href="#"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                  >
                    <Image
                      className="w-full shadow"
                      alt="Portfolio image: Triton Sonic feeder firmware"
                      src="/img/portfolio/triton_sonic_dashboard.jpg"
                      width={600}
                      height={400}
                    ></Image>
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="pt-4 text-2xl font-semibold text-gray-900">
                    Triton Sonic feeder firmware
                  </h4>
                  <p className="pt-2 text-base font-light text-gray-700">
                    Firmware for a smart feeder for shrimp and fish. It has a
                    web interface to control the feeder and a mobile app to
                    control it remotely.
                  </p>
                </div>
              </div>

              <div class="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
                <div className="mx-auto text-center">
                  <Link
                    href="#"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                  >
                    <Image
                      className="w-full shadow"
                      alt="Portfolio image: Kraken Farm"
                      src="/img/portfolio/kraken_farm.jpg"
                      width={600}
                      height={400}
                    ></Image>
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="pt-4 text-2xl font-semibold text-gray-900">
                    Kraken Farm
                  </h4>
                  <p className="pt-2 text-base font-light text-gray-700">
                    A web application to manage a shrimp farm. It has a
                    dashboard to control the farm and a mobile app to control it
                    remotely. Controls all the process of the farm, from the
                    feeding to the harvest.
                  </p>
                </div>
              </div>

              <div class="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
                <div className="mx-auto text-center">
                  <Link
                    href="#"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                  >
                    <Image
                      className="w-full shadow"
                      alt="Portfolio image: Kraken Farm"
                      src="/img/portfolio/larvea_tagger.jpg"
                      width={600}
                      height={400}
                    ></Image>
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="pt-4 text-2xl font-semibold text-gray-900">
                    Larvae Tagger Mobile App
                  </h4>
                  <p className="pt-2 text-base font-light text-gray-700">
                    A mobile app to detect, count, classify and tag shrimp
                    larvaes, using your phone&apos;s camera. It uses TensorFlow
                    to detect the larvaes and a custom CNN to classify them.
                  </p>
                </div>
              </div>

              <div class="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
                <div className="mx-auto text-center">
                  <Link
                    href="#"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                  >
                    <Image
                      className="w-full shadow"
                      alt="Portfolio image: Kraken Farm"
                      src="/img/portfolio/504assist_website.jpg"
                      width={600}
                      height={400}
                    ></Image>
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="pt-4 text-2xl font-semibold text-gray-900">
                    504 Assist Website and Mobile App
                  </h4>
                  <p className="pt-2 text-base font-light text-gray-700">
                    A website and mobile app to help travelers to get an
                    insurance for their trip. It has a live communication
                    between user and the operators.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-header pb-2 pt-6 text-center text-3xl font-semibold uppercase text-slate-500 sm:text-4xl lg:text-5xl">
            Contact me
          </h2>
          <div
            className="container mb-6 w-full py-16  px-6 md:py-10"
            id="contact"
          >
            <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
              <div className="mx-auto text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Send me a message
                </h3>
                <p className="pt-2 text-base font-light text-gray-700">
                  I&apos;m always open to new opportunities and challenges. If
                  you have a project you want to get started, think you need my
                  help with something or just fancy saying hello, then email me
                  to jdoavila@gmail.com. I&apos;ll try my best to get back to
                  you!
                </p>

                <div className="pt-8">
                  <a
                    href="mailto:jdoavila@gmail.com"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-500 px-5 py-3 text-base font-medium text-white hover:bg-slate-600"
                  >
                    Send me a message
                  </a>
                </div>
              </div>
              <div className="mx-auto text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Or find me on social media
                </h3>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <Link
                    href="https://www.facebook.com/danielortiz21"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook-square hover:text-yellow text-2xl text-slate-600"></i>
                  </Link>
                  <Link
                    href="https://twitter.com/danielortiz_d"
                    target="_blank"
                  >
                    <i className="bx bxl-twitter hover:text-yellow ml-4 text-2xl text-slate-600"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/jdoavila/"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram hover:text-yellow ml-4 text-2xl text-slate-600"></i>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/jdoavila/"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin hover:text-yellow ml-4 text-2xl text-slate-600"></i>
                  </Link>
                  <Link href="https://github.com/jdoavila" target="_blank">
                    <i className="bx bxl-github hover:text-yellow ml-4 text-2xl text-slate-600"></i>
                  </Link>
                  <Link href="mailto:jdoavila@gmail.com" target="_blank">
                    <i className="bx bx-mail-send hover:text-yellow ml-4 text-2xl text-slate-600"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
