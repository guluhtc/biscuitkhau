import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

const reviews = [
  {
    name: "Eve Porcello",
    role: "Interior Design Enthusiast",
    image: "/eve.jpg",
    rating: 4,
    content: "So good! I need this right now. Congrats on the launch!"
  },
  {
    name: "Ade Dada",
    role: "Home Renovation Expert",
    image: "/ade.jpeg",
    rating: 5,
    content: "This is incredible, you don't need an interior designer anymore."
  },
  {
    name: "Andrew Schulz",
    role: "Property Developer",
    image: "/music.jpg",
    rating: 4,
    content: "This is fantastic. I've already decided on a new wall color from a generated image and repainting it is now my weekend project."
  },
  {
    name: "John James",
    role: "Architectural Designer",
    image: "/johnny.jpg",
    rating: 5,
    content: "DecorAI streamlined my design process with smart tools, precise tips, and impactful room visualization."
  },
  {
    name: "Michelle Palmer",
    role: "Interior Decorator",
    image: "/michellep.jpg",
    rating: 5,
    content: "DecorAI helped me confidently bring my design vision to life with fantastic recommendations and amazing results."
  },
  {
    name: "Smith Taylor",
    role: "Real Estate Agent",
    image: "/smit.jpg",
    rating: 4,
    content: "Thanks to DecorAI, my living room has been completely transformed into a stylish and inviting space."
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-purple-600 mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < rating ? <FaStar /> : <FaStar className="text-gray-300" />}
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-4 text-black">Reviews</h2>
      <p className="text-center text-gray-600 mb-12">
        See what our users are saying about the product.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="border-2 border-purple-500 rounded-2xl p-6 bg-white hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Image
                src={review.image}
                alt={review.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
                <StarRating rating={review.rating} />
              </div>
            </div>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}