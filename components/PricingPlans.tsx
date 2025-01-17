import Image from "next/image";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    type: "Trial",
    description: "Try DecorAI for Free",
    features: {
      included: ["3 trial tokens"],
      keyFeatures: [
        "Access to all premium and new features",
        "Normal generation speed",
        "Public mode",
        "Standard image quality",
        "Live Watermark"
      ]
    },
    buttonText: "Choose Free Trial",
    popular: false,
    footnote: "Repurchase plan"
  },
  {
    name: "Pay as you go",
    price: "$20",
    type: "Personal",
    perCredit: "$0.67/credit",
    description: "for 30 credits",
    features: {
      included: [
        "AI Design Tools",
        "GPT (1 token)",
        "Research (1 token)"
      ],
      keyFeatures: [
        "Access to all premium and new features",
        "Unlimited use of new features",
        "Fast generation speed",
        "Private mode",
        "Enhanced image quality",
        "Email support",
        "Non-commercial use",
        "Pro member in community"
      ],
      creditExtension: [
        "Every non-used credit by 12 months",
        "Credit without pop-up expires by 12 months from last payment"
      ]
    },
    buttonText: "Purchase as you go",
    popular: false,
    footnote: "Repurchase plan"
  },
  {
    name: "Unlimited Monthly",
    price: "$25",
    originalPrice: "$40",
    type: "Commercial",
    period: "/month",
    features: {
      included: ["NEW Portfolio+"],
      keyFeatures: [
        "One free 30-minutes on-boarding call",
        "Monthly 30 minutes update call (optional)",
        "2 custom style prompts",
        "Premium member in community",
        "Priority support",
        "Commercial use"
      ]
    },
    buttonText: "Choose Unlimited Monthly",
    popular: true,
    footnote: "Recurring plan with cancel anytime option",
    subFootnote: "Billed monthly until subscription ends"
  },
  {
    name: "Unlimited Yearly",
    price: "$200",
    originalPrice: "$400",
    type: "Commercial",
    period: "/year",
    perMonth: "$16.67 per month",
    features: {
      included: ["NEW Portfolio+"],
      keyFeatures: [
        "One free 30-minutes on-boarding call",
        "Monthly 30 minutes update call (optional)",
        "2 custom style prompts",
        "Premium member in community",
        "Priority support",
        "Commercial use"
      ]
    },
    buttonText: "Choose Unlimited Yearly",
    popular: false,
    footnote: "Recurring plan with cancel anytime option",
    subFootnote: "Billed monthly until subscription ends"
  }
];

export default function PricingPlans() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl bg-white ${
                plan.popular 
                  ? 'border-2 border-[#40C057] relative' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-8">
                  <span className="bg-[#40C057] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="bg-gray-100 rounded-full px-4 py-2 text-center mb-4 w-fit">
                  <span className="text-gray-700">{plan.type}</span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through ml-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    {plan.period && (
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    )}
                  </div>
                  {plan.perMonth && (
                    <p className="text-sm text-gray-500">({plan.perMonth})</p>
                  )}
                  {plan.perCredit && (
                    <p className="text-sm text-gray-500">{plan.perCredit}</p>
                  )}
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>

                <button className={`w-full py-3 rounded-full font-medium mb-4 ${
                  plan.popular 
                    ? 'bg-[#40C057] text-white hover:bg-[#37A84B]' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                } transition`}>
                  {plan.buttonText}
                </button>

                <p className="text-xs text-gray-500 text-center mb-6">{plan.footnote}</p>
                {plan.subFootnote && (
                  <p className="text-xs text-gray-500 text-center mb-6">{plan.subFootnote}</p>
                )}

                <div className="space-y-6">
                  {plan.features.included && (
                    <div>
                      <p className="font-medium text-gray-900 mb-2">What is included:</p>
                      <ul className="space-y-2">
                        {plan.features.included.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-[#40C057] mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {plan.features.keyFeatures && (
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Key Features:</p>
                      <ul className="space-y-2">
                        {plan.features.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-[#40C057] mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {plan.features.creditExtension && (
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Credit expiration and extension:</p>
                      <ul className="space-y-2">
                        {plan.features.creditExtension.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-[#40C057] mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}