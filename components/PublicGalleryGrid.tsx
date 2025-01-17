import Image from "next/image";

const galleryImages = [
  "/empty.png",
  "/sketch.jpg",
  "/1.jpg",
  "/empty-gen.png",
  "/sketch-gen.jpg",
  "/1-new.jpg",
  "/empty.png",
  "/sketch.jpg",
  "/1.jpg",
  "/empty-gen.png",
  "/sketch-gen.jpg",
  "/1-new.jpg",
  "/empty.png",
  "/sketch.jpg",
  "/1.jpg"
];

export default function PublicGalleryGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition duration-300">
            <Image
              src={image}
              alt="Interior design"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12 space-x-2">
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">1</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">2</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">3</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">4</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">5</button>
      </div>
    </div>
  );
}