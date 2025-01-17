import Head from "next/head";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

export default function SignUpPage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
      <Head>
        <title>Sign Up - DecorAI</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4">
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}