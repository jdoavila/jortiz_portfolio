import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function MyPortfolio() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <FadeIn>
        <h2 className="font-header text-center text-4xl font-semibold uppercase text-slate-500 dark:text-slate-300 sm:text-4xl lg:text-5xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-sans text-xl font-light text-gray-700 dark:text-slate-400 sm:text-2xl lg:text-3xl">
          Some of the projects I have worked on
        </h3>
      </FadeIn>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {PROJECTS.map(({ id, title, description, image, alt }, index) => (
          <FadeIn key={id} delay={index * 0.1}>
            <article
              id={id}
              className="group transform rounded bg-gray-50 px-8 py-8 shadow transition-all hover:scale-105 dark:bg-slate-800 dark:shadow-slate-700/50"
            >
              <figure className="mx-auto text-center">
                <Image
                  className="w-full shadow"
                  alt={alt}
                  src={image}
                  width={600}
                  height={400}
                />
                <figcaption className="sr-only">{title}</figcaption>
              </figure>
              <div className="text-center">
                <h4 className="pt-4 text-2xl font-semibold text-gray-900 dark:text-white">{title}</h4>
                <p className="pt-2 text-base font-light text-gray-700 dark:text-slate-300">{description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
