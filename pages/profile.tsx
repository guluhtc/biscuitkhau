import Head from "next/head";
import ProfileHeader from "../components/ProfileHeader";
import ProfileForm from "../components/ProfileForm";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Profile - DecorAI</title>
      </Head>
      <ProfileHeader />
      <main className="flex-1 w-full max-w-6xl mx-auto">
        <ProfileForm />
      </main>
      <Footer />
    </div>
  );
}