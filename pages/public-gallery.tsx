import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import PublicGalleryGrid from "../components/PublicGalleryGrid";

export default function PublicGalleryPage() {
  const { data: session } = useSession();

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
      <Head>
        <title>Public Gallery - DecorAI</title>
      </Head>
      <Header 
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Public Gallery
          </h1>
          <p className="text-gray-600">
            Explore amazing room transformations from our community
          </p>
        </div>
        <PublicGalleryGrid />
      </main>
      <Footer />
    </div>
  );
}