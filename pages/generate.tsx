import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GenerateForm from "../components/GenerateForm";
import PreviewArea from "../components/PreviewArea";
import { useSession } from "next-auth/react";

export default function GeneratePage() {
  const { data: session } = useSession();

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
      <Head>
        <title>Generate Room - DecorAI</title>
      </Head>
      <Header 
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Generate your <span className="text-purple-600">dream</span> room
          </h1>
          <p className="text-gray-600">
            Transform your space with AI-powered interior design
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">
          <GenerateForm />
          <PreviewArea />
        </div>
      </main>
      <Footer />
    </div>
  );
}