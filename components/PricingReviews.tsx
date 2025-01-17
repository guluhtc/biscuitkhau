import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Eve Porcello",
    image: "/eve.jpg",
    rating: 4,
    content: "So good! I need this right now. Congrats on the launch!"
  },
  {
    name: "Ade Dada",
    image: "/ade.jpeg",
    rating: 5,
    content: "This is incredible, you don't need an interior designer anymore."
  },
  {
    name: "Andrew Schulz",
    image: "/music.jpg",
    rating: 4,
    content: "This is fantastic. I've already decided on a new wall color from a generated image and repainting it is now my weekend project."
  },
  {
    name: "John James",
    image: "/johnny.jpg",
    rating: 5,
    content: "DecorAI streamlined my design process with smart tools, precise tips, and impactful room visualization."
  },
  {
    name: "Michelle Palmer",
    image: "/michellep.jpg",
    rating: 5,
    content: "DecorAI helped me confidently bring my design vision to life with fantastic recommendations and amazing results."
  },
  {
    name: "Smith Taylor",
    image: "/smit.jpg",
    rating: 4,
    content: "Thanks to DecorAI, my living room has been completely transformed into a stylish and inviting space."
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-purple-600" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function PricingReviews() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Reviews</h2>
        <p className="text-center text-gray-600 mb-12">
          See what our users are saying about the product.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{review.name}</h3>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}