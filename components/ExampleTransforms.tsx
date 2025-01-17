import Image from "next/image";

export default function ExampleTransforms() {
  return (
    <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
      <div className="flex flex-col space-y-10 mt-4 mb-16">
        <div className="flex sm:space-x-8 sm:flex-row flex-col">
          <div>
            <h3 className="mb-1 font-medium text-lg text-gray-900">Sketch Room</h3>
            <Image
              alt="Original photo of a room with DecorAI.xyz"
              src="/sketch.jpg"
              className="w-full object-cover h-96 rounded-2xl"
              width={400}
              height={400}
            />
          </div>
          <div className="sm:mt-0 mt-8">
            <h3 className="mb-1 font-medium text-lg text-gray-900">Generated Room</h3>
            <Image
              alt="Generated photo of a room with DecorAI.xyz"
              width={400}
              height={400}
              src="/sketch-gen.jpg"
              className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-10 mt-4 mb-16">
        <div className="flex sm:space-x-8 sm:flex-row flex-col">
          <div>
            <h3 className="mb-1 font-medium text-lg text-gray-900">Original Empty Room</h3>
            <Image
              alt="Original photo of a room with DecorAI.xyz"
              src="/empty.png"
              className="w-full object-cover h-96 rounded-2xl"
              width={400}
              height={400}
            />
          </div>
          <div className="sm:mt-0 mt-8">
            <h3 className="mb-1 font-medium text-lg text-gray-900">Generated Room</h3>
            <Image
              alt="Generated photo of a room with DecorAI.xyz"
              width={400}
              height={400}
              src="/empty-gen.png"
              className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-10 mt-4 mb-16">
        <div className="flex sm:space-x-8 sm:flex-row flex-col">
          <div>
            <h3 className="mb-1 font-medium text-lg text-gray-900">Original Room</h3>
            <Image
              alt="Original photo of a room with DecorAI.xyz"
              src="/1.jpg"
              className="w-full object-cover h-96 rounded-2xl"
              width={400}
              height={400}
            />
          </div>
          <div className="sm:mt-0 mt-8">
            <h3 className="mb-1 font-medium text-lg text-gray-900">Generated Room</h3>
            <Image
              alt="Generated photo of a room with DecorAI.xyz"
              width={400}
              height={400}
              src="/1-new.jpg"
              className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}