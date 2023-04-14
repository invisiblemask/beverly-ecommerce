import HeroPage from "@/components/Hero";
import Layout from "@/components/layout";
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
    <Layout title="Offical E-commerce Fashion Store by Beverly Naya ">
      <main>
        <HeroPage />
        <ProductPage />
        <ProductDisplay />
        <SLCollection />
        <Offer />
        <Newsletter />
      </main>
    </Layout>
  );
}
