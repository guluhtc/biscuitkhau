import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  const { data: session } = useSession();

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
      <Head>
        <title>Refund Policy - DecorAI</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-8 mb-8">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
            <p className="mt-4 text-gray-600">Effective Date: 25 Dec 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600">
                Thank you for choosing DecorAI for your AI-generated interior design needs. We strive to provide you with high-quality designs and exceptional customer service. However, we understand that there may be situations where a refund is necessary. This refund policy outlines the terms and conditions for requesting a refund from DecorAI.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Eligibility for Refund</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Our refund policy applies to all paid services provided by DecorAI through our official website, www.decorai.xyz.</li>
                  <li>Refunds can only be requested by the individual or entity that made the original payment.</li>
                </ul>
              </div>

              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Refund Requests</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>To initiate a refund request, you must contact our customer support team within 14 days from the date of purchase.</li>
                  <li>Refund requests must be submitted in writing, either by email or through our customer support ticketing system.</li>
                  <li>Please provide detailed information regarding the reason for your refund request, including any relevant supporting documentation, screenshots, or examples.</li>
                </ul>
              </div>

              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Non-Refundable Services</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Once the AI-generated interior design has been delivered to you, it is considered a completed service, and refunds will generally not be issued.</li>
                  <li>Any additional services provided by DecorAI beyond the AI-generated design, such as design consultations or customization requests, may be subject to separate refund policies or fees.</li>
                </ul>
              </div>

              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Refund Approval and Processing</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>All refund requests will be carefully reviewed by our customer support team.</li>
                  <li>DecorAI reserves the right to refuse a refund if we determine that the request does not meet the eligibility criteria or if there is evidence of misuse, abuse, or fraudulent activity.</li>
                  <li>If your refund request is approved, we will process the refund within 14 days of the approval notification.</li>
                  <li>Refunds will be issued using the same payment method used for the original purchase unless otherwise specified.</li>
                </ul>
              </div>

              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Third-Party Fees</h2>
                <p className="text-gray-600">
                  Please note that any third-party fees associated with your purchase, such as transaction fees or currency conversion fees, are non-refundable and will not be included in the refund amount.
                </p>
              </div>

              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Modifications to the Refund Policy</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>DecorAI reserves the right to modify this refund policy at any time without prior notice.</li>
                  <li>Any changes to the refund policy will be effective immediately upon posting the updated version on our official website.</li>
                </ul>
              </div>

              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions or require further assistance regarding our refund policy, please contact our customer support team at{" "}
                  <a href="mailto:decorai.xyz@gmail.com" className="text-purple-600 hover:text-purple-800">
                    decorai.xyz@gmail.com
                  </a>
                  . We are here to help and ensure your satisfaction with our services.
                </p>
              </div>

              <div className="border-2 border-purple-100 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Note</h2>
                <p className="text-gray-600">
                  This refund policy is for informational purposes only and does not create any contractual obligations between DecorAI and its customers. The terms and conditions of the refund policy are subject to change at the discretion of DecorAI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}