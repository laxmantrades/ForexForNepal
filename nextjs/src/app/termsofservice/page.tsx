import React from "react";

const Page: React.FC = () => {
  return (
    <div className="terms-of-use-container max-w-4xl mx-auto p-6">
      <h1>
        <title>Terms of Use | Trading Learning Platform</title>
        <meta
          name="description"
          content="Read our Terms of Use to understand the rules and guidelines for using our trading education platform."
        />
      </h1>

      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        Terms of Use
      </h1>

      <p className="mb-6 text-gray-600">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to our Trading Learning Platform ("Platform"). These Terms of
          Use ("Terms") govern your access to and use of our website, services,
          and content related to trading education.
        </p>
        <p>
          By accessing or using the Platform, you agree to be bound by these
          Terms. If you do not agree, you may not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Educational Purpose Only
        </h2>
        <p className="mb-4">
          The content provided on this Platform is for educational purposes only
          and does not constitute financial advice, investment recommendations,
          or an offer to buy or sell securities.
        </p>
        <p>
          Trading involves substantial risk, and you should consult with a
          qualified financial professional before making any trading decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You must be at least 16 years old to use this Platform</li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials
          </li>
          <li>
            You agree to provide accurate and complete information when
            registering
          </li>
          <li>
            You are solely responsible for your use of the educational content
          </li>
          <li>You will not share paid content with non-subscribers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on this Platform, including videos, articles, charts, and
          course materials, is the property of the Platform or its content
          providers and is protected by copyright laws.
        </p>
        <p>
          You may not reproduce, distribute, modify, or create derivative works
          from our content without express written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Subscription and Payments
        </h2>
        <p className="mb-4">
          Some content may require a paid subscription. By subscribing, you
          agree to pay all applicable fees and authorize us to charge your
          payment method.
        </p>
        <p>
          We reserve the right to modify subscription fees and will provide
          notice of such changes. All fees are non-refundable except as required
          by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Disclaimer of Warranties
        </h2>
        <p className="mb-4">
          The Platform is provided "as is" without warranties of any kind. We do
          not guarantee that:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The content will lead to profitable trading</li>
          <li>The Platform will be error-free or uninterrupted</li>
          <li>The content will meet your specific needs</li>
        </ul>
        <p>Past performance is not indicative of future results in trading.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, or consequential damages resulting from
          your use of the Platform or reliance on its educational content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          8. Modifications to Terms
        </h2>
        <p>
          We may update these Terms periodically. Continued use of the Platform
          after changes constitutes acceptance of the modified Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of Nepal, without regard to its conflict of law provisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
        <p>
          For questions about these Terms, please contact us at:{" "}
          <a
            href="mailto:forexfornepal@gmail.com"
            className="text-blue-600 hover:underline"
          >
            forexfornepal@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Page;
