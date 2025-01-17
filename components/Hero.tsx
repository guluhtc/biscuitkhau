import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[600px]">
        <Image
          src="https://i.postimg.cc/3wNXMDyW/Screenshot-2025-01-17-205630.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white sm:text-7xl">
          Generating dream rooms{" "}
          <span className="relative whitespace-nowrap text-purple-400">
            using AI
          </span>{" "}
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg text-gray-100 leading-7">
          Take a picture of your room and see how your room looks in different
          themes. DecorAI.xyz remodel your room today.
        </h2>
        <Link
          className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-purple-500 transition"
          href="/signup"
        >
          Generate your dream room
        </Link>
      </div>
    </div>
  );
}