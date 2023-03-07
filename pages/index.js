import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import AboutMe from "@/components/about_me";
import MyPortfolio from "@/components/my_portfolio";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Porfolio | Daniel Ortiz</title>
      </Head>

      <Navbar />
      <div>
        <Banner />

        <AboutMe />

        <MyPortfolio />

        <Contact />
      </div>
    </>
  );
}
