import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingPlans from "../components/PricingPlans";
import PricingReviews from "../components/PricingReviews";

export default function BuyCredits() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Buy Credits - DecorAI</title>
      </Head>
      <Header 
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Buy DecorAI Credits
            </h1>
            <p className="text-gray-600">
              Choose the plan that works best for you
            </p>
          </div>
          <PricingPlans />
        </div>
        <PricingReviews />
      </main>
      <Footer />
    </div>
  );
}