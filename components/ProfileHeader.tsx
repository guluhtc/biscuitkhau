import Image from 'next/image';
import Link from 'next/link';

export default function ProfileHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-purple-800" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-bold text-purple-800">DecorAI.xyz</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/generate" className="text-gray-600 hover:text-purple-800 transition">
              Generate
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-purple-800 transition">
              Portfolio
            </Link>
            <Link href="/public-gallery" className="text-gray-600 hover:text-purple-800 transition">
              Public Gallery
            </Link>
            <Link href="/buy-credits" className="text-gray-600 hover:text-purple-800 transition">
              Buy Credits
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/ade.jpeg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-purple-200"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}