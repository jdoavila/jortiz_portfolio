import Link from "next/link";
import Image from "next/image";

export default function MyPortfolio() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="font-header text-center text-4xl font-semibold uppercase text-slate-500 sm:text-4xl lg:text-5xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-sans text-xl font-light text-gray-700 sm:text-2xl lg:text-3xl">
        Some of the projects I have worked on
      </h3>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <div className="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
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
              Firmware for a smart feeder for shrimp and fish. It has a web
              interface to control the feeder and a mobile app to control it
              remotely.
            </p>
          </div>
        </div>

        <div className="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
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
              A web application to manage a shrimp farm. It has a dashboard to
              control the farm and a mobile app to control it remotely. Controls
              all the process of the farm, from the feeding to the harvest.
            </p>
          </div>
        </div>

        <div className="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
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
              A mobile app to detect, count, classify and tag shrimp larvaes,
              using your phone&apos;s camera. It uses TensorFlow to detect the
              larvaes and a custom CNN to classify them.
            </p>
          </div>
        </div>

        <div className="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105">
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
              A website and mobile app to help travelers to get an insurance for
              their trip. It has a live communication between user and the
              operators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
