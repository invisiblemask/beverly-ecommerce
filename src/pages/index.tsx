import HeroPage from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Offer from "@/components/Offer";
import ProductDisplay from "@/components/ProductDisplay";
import ProductPage from "@/components/ProductPage";
import SLCollection from "@/components/SLCollection";
import { Inter } from "@next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Offical E-commerce Fashion Store by Beverly Naya </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroPage />
        <ProductPage />
        <ProductDisplay />
        <SLCollection />
        <Offer />
        <Newsletter />
      </main>
    </>
  );
}
