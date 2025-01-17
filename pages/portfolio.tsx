import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import PortfolioGrid from "../components/PortfolioGrid";

export default function PortfolioPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Portfolio - DecorAI</title>
      </Head>
      <Header 
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            View your Room Generations
          </h1>
          <p className="text-gray-600">
            Browse through your previous room transformations and designs.
          </p>
        </div>
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  );
}