import Image from 'next/image';
import Link from 'next/link';

export default function ProfileForm() {
  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <div className="flex flex-col items-center mb-12">
        <div className="relative mb-8">
          <Image
            src="/ade.jpeg"
            alt="Profile picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
            <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Ade Dada"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="adedada@gmail.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Plan & Billing</label>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none">
                  <path d="M20 12V8H4V12M20 12V16H4V12M20 12H4M4 6L12 3L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-700">Free Trial</span>
              </div>
              <Link
                href="/buy-credits"
                className="bg-purple-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-purple-700 transition flex items-center space-x-1"
              >
                <span>Explore Plans</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Credits: 0</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium">
          Confirm
        </button>
      </div>
    </div>
  );
}