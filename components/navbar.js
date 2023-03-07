import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 z-50 w-full py-3 sm:py-5">
      <div className="container flex items-center justify-between">
        <div className="hidden sm:block">
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
  );
}
