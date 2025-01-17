import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SuitableFor } from "../components/SuitableFor";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import UseCases from "../components/UseCases";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
      <Head>
        <title>DecorAI</title>
      </Head>

      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Stats />
      <SuitableFor />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;