import Image from "next/image";
import Link from "next/link";
import { PERSONAL_DATA, SOCIAL_LINKS } from "@/lib/data";

export default function Banner() {
  return (
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
              alt="Retrato profesional de Daniel Ortiz"
              width={200}
              height={200}
              className="sm:h-46 h-48 rounded-full"
              priority
            />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="font-header text-center text-4xl text-white sm:text-5xl md:text-6xl">
              {PERSONAL_DATA.name}!
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">
                  Let&apos;s connect
                </p>
                <div className="hidden sm:block" aria-hidden="true">
                  <i className="bx bx-chevron-right text-yellow text-3xl text-white"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                {SOCIAL_LINKS.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="mx-2 first:ml-0"
                  >
                    <span className="sr-only">{label}</span>
                    <i
                      className={`bx ${icon} text-2xl text-white transition-colors duration-200 hover:text-yellow-400`}
                      aria-hidden="true"
                    ></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
