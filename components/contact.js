import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";
import FadeIn from "./FadeIn";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mrbddkpj");

  if (state.succeeded) {
    return (
      <div className="container mx-auto py-20 text-center">
        <FadeIn>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <i className="bx bx-check text-4xl text-green-600 dark:text-green-400"></i>
          </div>
          <h2 className="pt-6 text-3xl font-semibold text-gray-900 dark:text-white">
            ¡Mensaje enviado!
          </h2>
          <p className="pt-4 text-lg text-gray-600 dark:text-slate-300">
            Gracias por contactarme. Te responderé lo antes posible a tu correo.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Enviar otro mensaje
          </button>
        </FadeIn>
      </div>
    );
  }

  return (
    <>
      <FadeIn>
        <h2 className="font-header pb-2 pt-6 text-center text-3xl font-semibold uppercase text-slate-500 dark:text-slate-300 sm:text-4xl lg:text-5xl">
          Contact me
        </h2>
      </FadeIn>
      <div className="container mb-6 w-full px-6 py-16 md:py-10" id="contact">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <FadeIn delay={0.2} className="mx-auto w-full">
            <h3 className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Send me a message
            </h3>
            <p className="pt-2 text-center text-base font-light text-gray-700 dark:text-slate-300">
              I&apos;m always open to new opportunities. Fill out the form below and I&apos;ll get back to you!
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500" />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </FadeIn>
          
          <FadeIn delay={0.4} className="mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Or find me on social media
            </h3>
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
                    className={`bx ${icon} text-2xl text-slate-600 transition-colors duration-200 hover:text-yellow-500 dark:text-slate-400 dark:hover:text-yellow-400`}
                    aria-hidden="true"
                  ></i>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
