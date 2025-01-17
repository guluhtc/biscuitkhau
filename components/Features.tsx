import Image from "next/image";

export default function Features() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4 text-black">Features</h2>
      <p className="text-center text-gray-600 mb-12">
        Enchance your image's resolution and achieve crisp, clear quality with a single click.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-6">
              <svg className="w-full h-full text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13L12 10L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-purple-600">Transform your room</h3>
            <p className="text-gray-600 text-center">
              Upload an image of your room and our AI will restyle it with your chosen design preferences.
            </p>
          </div>
        </div>

        <div className="border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-6">
              <svg className="w-full h-full text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-purple-600">Manage Room Type</h3>
            <p className="text-gray-600 text-center">
              No matter what type of room you're designing, we've got you covered.
            </p>
          </div>
        </div>

        <div className="border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-6">
              <svg className="w-full h-full text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-purple-600">Design Interior</h3>
            <p className="text-gray-600 text-center">
              Variety of setting to generate perfect interior for your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}