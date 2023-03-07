import Link from "next/link";

export default function Contact() {
  return (
    <>
      <h2 className="font-header pb-2 pt-6 text-center text-3xl font-semibold uppercase text-slate-500 sm:text-4xl lg:text-5xl">
        Contact me
      </h2>
      <div className="container mb-6 w-full py-16  px-6 md:py-10" id="contact">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <div className="mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900">
              Send me a message
            </h3>
            <p className="pt-2 text-base font-light text-gray-700">
              I&apos;m always open to new opportunities and challenges. If you
              have a project you want to get started, think you need my help
              with something or just fancy saying hello, then email me to
              jdoavila@gmail.com. I&apos;ll try my best to get back to you!
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
              <Link href="https://twitter.com/danielortiz_d" target="_blank">
                <i className="bx bxl-twitter hover:text-yellow ml-4 text-2xl text-slate-600"></i>
              </Link>
              <Link href="https://www.instagram.com/jdoavila/" target="_blank">
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
    </>
  );
}
