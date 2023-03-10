import Image from "next/image";
import Link from "next/link";

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
                <Link href="https://twitter.com/danielortiz_d" target="_blank">
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
  );
}
