import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is DecorAI?",
    answer: "DecorAI is an innovative interior design service that utilizes cutting-edge artificial intelligence (AI) technology to create stunning and personalized designs for your home or business. By harnessing the power of AI, DecorAI offers efficient and cost-effective solutions for all your interior design needs."
  },
  {
    question: "How does DecorAI work?",
    answer: "DecorAI employs advanced AI algorithms to analyze your preferences, space measurements, and design requirements. Based on this information, the AI generates multiple design options tailored to your unique style and specifications. These designs can include room layouts, color schemes, furniture placement, and more, helping you visualize your dream interior."
  },
  {
    question: "What makes DecorAI different from traditional interior design services?",
    answer: "DecorAI stands out by leveraging AI to streamline the design process. Unlike traditional services that may involve multiple consultations, site visits, and lengthy iterations, DecorAI provides quick, automatic, and cost-effective solutions for anyone seeking professional interior design assistance."
  },
  {
    question: "Can DecorAI help with both residential and commercial projects?",
    answer: "Absolutely! DecorAI is designed to cater to both residential and commercial interior design projects. Whether you're looking to revamp your living room, redesign your office space, or plan an entire hotel interior, DecorAI can generate design solutions that match your specific requirements."
  },
  {
    question: "How do I get started with DecorAI?",
    answer: "To get started with DecorAI, simply visit our official website at www.decorai.xyz. You can explore our services, view sample projects, and learn more about the process. When you're ready to begin, you can easily sign up for an account and use the AI to kickstart your interior design project."
  },
  {
    question: "Can I customize the AI-generated designs?",
    answer: "Absolutely! While DecorAI's AI-generated designs provide an excellent starting point, you have complete flexibility in customizing and modify them according to your preferences. You can adjust colors, swap furniture, and experiment with different layouts until you achieve the desired outcome. DecorAI empowers you to be actively involved in the design process."
  },
  {
    question: "What if I need additional assistance or have specific design questions?",
    answer: "DecorAI understands that you may have specific questions or require additional assistance during your interior design journey. We offer customer support services to address any concerns or queries you may have. You can reach out to our support team through the contact information provided on our website, and we'll be more than happy to assist you."
  },
  {
    question: "Can I collaborate with professional interior designers through DecorAI?",
    answer: "Currently, DecorAI focuses on AI-generated interior design concepts. However, we understand the value of human expertise in the design process. We are actively exploring partnerships with professional interior designers to offer a combined experience of AI-generated designs and expert consultations. Stay tuned for updates on this exciting feature!"
  }
];

export default function FAQ() {
  const { data: session } = useSession();

  return (
    <div className="flex mx-auto max-w-7xl overflow-visible flex-col items-center justify-center py-2 min-h-screen bg-white">
      <Head>
        <title>FAQ - DecorAI</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-12 sm:mb-0 mb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You have questions? We have the answers!
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl rounded-2xl space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border-2 border-purple-500 rounded-lg hover:border-purple-600 transition-colors">
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-base font-medium text-gray-900 hover:bg-purple-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-2 text-base text-gray-600">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}