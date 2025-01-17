import { HomeIcon, LockClosedIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Homeowners',
    description:
      'DecorAI can be a great solution for homeowners who want to redesign their spaces without the help of an expensive interior designer.',
    icon: HomeIcon,
  },
  {
    name: 'Renters',
    description:
      'Renters may not want to invest in permanent changes to their spaces, DecorAI could help them find temporary furniture and decor solution.',
    icon: LockClosedIcon,
  },
  {
    name: 'Small Businesses',
    description:
      'Small businesses may not have the budget to hire an interior designer but could benefit from DecorAI to design and furnish their spaces.',
    icon: BriefcaseIcon,
  },
];

export function SuitableFor() {
  return (
    <div className="py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-4xl">
            Great Solution For
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            DecorAI.xyz created this AI-driven interior design solution with the intention of assisting numerous homeowners and small businesses.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="border-2 border-purple-500 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-purple-600">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}