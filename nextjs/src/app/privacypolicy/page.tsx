import React from 'react';


const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container max-w-4xl mx-auto p-6">
      <h1>
        <title>Privacy Policy | Trading Learning Platform</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information on our trading education platform." />
      </h1>

      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Privacy Policy</h1>
      
      <p className="mb-6 text-gray-600">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          ForexForNepal  operates the forexfornepal trading education platform (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
        </p>
        <p>
          By using the Service, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <h3 className="text-xl font-medium mb-2">a. Personal Information</h3>
        <p className="mb-4">
          When you register, we may collect:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Name and contact information (email, phone number)</li>
          <li>Demographic information (age, country)</li>
          
          <li>Account credentials</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">b. Usage Data</h3>
        <p className="mb-4">
          We automatically collect:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>IP address and device information</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent</li>
          <li>Course progress and quiz results</li>
          <li>Cookies and tracking data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use the collected data for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Providing and maintaining our Service</li>
          <li>Personalizing your learning experience</li>
          <li>Processing payments</li>
          <li>Communicating with you</li>
          <li>Improving our educational content</li>
          <li>Detecting and preventing fraud</li>
        </ul>
        <p>
          We will never sell your personal information to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>SSL encryption for data transmission</li>
          <li>Secure storage with access controls</li>
          <li>Regular security assessments</li>
        </ul>
        <p>
          However, no internet transmission is 100% secure. We cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar technologies to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Remember user preferences</li>
          <li>Analyze service usage</li>
          <li>Deliver targeted educational content</li>
        </ul>
        <p>
          You can control cookies through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          
          <li>Analytics providers (e.g., Google Analytics)</li>
          <li>Cloud hosting services</li>
        </ul>
        <p>
          These third parties have access only to information needed to perform their functions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
        <p>
          We retain personal data only as long as necessary to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Provide services to you</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce our agreements</li>
        </ul>
        <p>
          Inactive accounts may be deleted after 10 months of inactivity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
        <p className="mb-4">
          Depending on your jurisdiction, you may have rights to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Object to processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent</li>
        </ul>
        <p>
          To exercise these rights, contact us at forexfornepal@gmail.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
        <p>
          Our Service is not intended for users under 16. We do not knowingly collect personal information from children. If we discover such data, we will delete it immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of significant changes through email or a notice on our Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p>
          For privacy-related inquiries, please contact our Data Protection Officer at:<br />
          <a href="mailto:forexfornepal@gmail.com" className="text-blue-600 hover:underline">forexfornepal@gmail.com</a><br />
         
        </p>
       
      </section>
    </div>
  );
};

export default PrivacyPolicy;