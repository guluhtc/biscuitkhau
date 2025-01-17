import Image from "next/image";

export default function UseCases() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Use Cases</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sketch Use Case */}
          <div className="border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-center mb-6 text-purple-600">Sketch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-center text-gray-600 mb-2">Before</p>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/sketch.jpg"
                    alt="Original sketch"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-center text-gray-600 mb-2">After</p>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/sketch-gen.jpg"
                    alt="Generated from sketch"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Empty Room Use Case */}
          <div className="border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-center mb-6 text-purple-600">Empty Room</h3>
            <div className="space-y-4">
              <div>
                <p className="text-center text-gray-600 mb-2">Before</p>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/empty.png"
                    alt="Original empty room"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-center text-gray-600 mb-2">After</p>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/empty-gen.png"
                    alt="Generated from empty room"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Photo Use Case */}
          <div className="border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-center mb-6 text-purple-600">Photo</h3>
            <div className="space-y-4">
              <div>
                <p className="text-center text-gray-600 mb-2">Before</p>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/1.jpg"
                    alt="Original photo"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-center text-gray-600 mb-2">After</p>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/1-new.jpg"
                    alt="Generated from photo"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}