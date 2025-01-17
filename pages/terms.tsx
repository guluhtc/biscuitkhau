import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const termsAndPrivacy = [
  {
    title: "Terms of Use",
    sections: [
      {
        subtitle: "1. User Eligibility",
        content: "By using the Website or Services, you represent that you are at least 18 years old and have the legal authority to enter into this agreement."
      },
      {
        subtitle: "2. Intellectual Property",
        content: "All intellectual property rights, including copyrights, trademarks, and patents, related to the Website and Services are owned by DecorAI. You agree not to use, reproduce, distribute, or modify any part of the Website or Services without prior written consent from DecorAI."
      },
      {
        subtitle: "3. Use of Services",
        content: [
          "The Services provided by DecorAI include AI-driven interior design recommendations, consultations, and related services.",
          "You acknowledge that the AI-generated designs and recommendations provided by DecorAI are based on algorithms and data analysis and may not always meet your specific preferences or requirements.",
          "DecorAI does not guarantee the accuracy, completeness, or reliability of the designs or recommendations provided through its Services."
        ]
      },
      {
        subtitle: "4. Privacy Policy",
        content: [
          "DecorAI respects your privacy and is committed to protecting your personal information. Please review our Privacy Policy (found below) to understand how we collect, use, and disclose your information.",
          "By using the Website or Services, you consent to the collection, use, and disclosure of your personal information in accordance with our Privacy Policy."
        ]
      },
      {
        subtitle: "5. Limitation of Liability",
        content: [
          "DecorAI shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, data, or other intangible losses, resulting from your use of the Website or Services.",
          "DecorAI shall not be responsible for any errors, inaccuracies, or omissions in the designs or recommendations provided through its Services."
        ]
      },
      {
        subtitle: "6. Indemnification",
        content: "You agree to indemnify and hold DecorAI, its officers, directors, employees, and agents, harmless from and against any claims, liabilities, damages, losses, and expenses, including attorney's fees, arising out of your use of the Website or Services or violation of these Terms."
      },
      {
        subtitle: "7. Modifications",
        content: "DecorAI reserves the right to modify, suspend, or discontinue any part of the Website or Services at any time without prior notice. DecorAI may also update these Terms at any time, and such updates will be effective upon posting on the Website."
      }
    ]
  }
];

export default function Terms() {
  const { data: session } = useSession();

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
      <Head>
        <title>Terms and Privacy - DecorAI</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-8 mb-8">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Terms and Privacy</h1>
            <p className="mt-4 text-gray-600">Effective Date: 25 Dec 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600">
                Welcome to DecorAI! These Terms and Privacy Policy govern your use of the website{" "}
                <a href="http://www.decorai.xyz" className="text-purple-600 hover:text-purple-800">
                  www.decorai.xyz
                </a>{" "}
                (the "Website") and any services provided by DecorAI (the "Services"). By accessing or using the Website or Services, you agree to be bound by these Terms and Privacy Policy. If you do not agree with any part of these terms, please do not use the Website or Services.
              </p>
            </div>

            {termsAndPrivacy.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <div className="space-y-8">
                  {section.sections.map((subsection, subIndex) => (
                    <div key={subIndex} className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {subsection.subtitle}
                      </h3>
                      {Array.isArray(subsection.content) ? (
                        <ul className="list-disc list-inside space-y-2">
                          {subsection.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">{subsection.content}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}