import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header({
  photo,
  email,
}: {
  photo?: string;
  email?: string;
}) {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? "text-purple-600" : "text-gray-600";
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://i.postimg.cc/d0wfG6Sp/Frame-44.png"
              alt="DecorAI Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-6">
            {email ? (
              <>
                <Link 
                  href="/generate" 
                  className={`${isActive('/generate')} hover:text-purple-600 transition text-sm font-medium hidden md:block`}
                >
                  Generate
                </Link>
                <Link 
                  href="/portfolio" 
                  className={`${isActive('/portfolio')} hover:text-purple-600 transition text-sm font-medium hidden md:block`}
                >
                  Portfolio
                </Link>
                <Link 
                  href="/public-gallery" 
                  className={`${isActive('/public-gallery')} hover:text-purple-600 transition text-sm font-medium hidden md:block`}
                >
                  Gallery
                </Link>
                <Link 
                  href="/buy-credits" 
                  className={`${isActive('/buy-credits')} hover:text-purple-600 transition text-sm font-medium hidden md:block`}
                >
                  Credits
                </Link>
                <div className="relative group">
                  {photo ? (
                    <div className="relative">
                      <Image
                        alt="Profile picture"
                        src={photo}
                        width={32}
                        height={32}
                        className="rounded-full cursor-pointer"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  ) : (
                    <button 
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                  
                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 invisible group-hover:visible">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href="/signup"
                className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-purple-600 text-white px-5 py-2 text-sm shadow-md hover:bg-purple-500 bg-purple-600 font-medium transition"
              >
                <p>Sign Up</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}