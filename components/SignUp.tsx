import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

export default function SignUp() {
  const [email, setEmail] = useState("");

  const handleEmailSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void signIn("email", { email: email });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Welcome to DecorAI</h2>
        <p className="text-gray-500 text-center text-sm mb-8">
          Create a free account and redesign your room today. You will get 3 generations for free.
        </p>

        <form onSubmit={handleEmailSignIn} className="w-full space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-purple-800 text-white rounded-lg px-4 py-2 hover:bg-purple-900 transition duration-200"
          >
            <Image
              src="https://i.postimg.cc/vT85jBch/logos-telegram.png"
              alt="Telegram icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span>Send Magic Link</span>
          </button>
        </form>

        <div className="w-full flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-gray-400 text-sm">Or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition duration-200"
        >
          <Image
            src="/google.png"
            alt="Google logo"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-gray-700">Continue with Google</span>
        </button>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Power by DecorAI.xyz</p>
        </div>
      </div>
    </div>
  );
}