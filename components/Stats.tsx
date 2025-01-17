export default function Stats() {
  return (
    <div className="py-24 sm:py-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-4 text-black">Benefits</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        DecorAI stands out by leveraging AI to streamline the interior design process.
      </p>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
            <dt className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-black">Up to 99.97%</span>
              <span className="text-base text-purple-600">Time Efficiency</span>
            </dt>
            <dd className="text-sm leading-7 text-gray-500">
              A simple room designed by an interior designer typically takes 2-4 hours, whereas AI interior design can accomplish the same task in just 5-10 seconds. This means that using AI interior design can save an impressive amount of time compared to the manual efforts of a designer.
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
            <dt className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-black">Up to 99.95%</span>
              <span className="text-base text-purple-600">Cost Saving</span>
            </dt>
            <dd className="text-sm leading-7 text-gray-500">
              DecorAI.xyz is a cost-effective alternative, with prices as low as $0.2 per design, compared to the typical cost of $500-$1000 for a room when working with a traditional interior designer.
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
            <dt className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-black">160 million</span>
              <span className="text-base text-purple-600">AI Dataset Trained</span>
            </dt>
            <dd className="text-sm leading-7 text-gray-500">
              With its exceptional training on a massive dataset of 160 million design samples, DecorAI brings a new level of sophistication to the world of home decor. This cutting-edge AI system harnesses the power of machine learning and deep neural networks to generate stunning design concepts.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}