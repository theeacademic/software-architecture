import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | JCGM Heights",
  description: "JCGM Heights' privacy policy and data protection practices for staffing and recruitment services",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: April 18, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <p className="text-lg leading-relaxed text-gray-700">
              At JCGM Heights, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services. Please read this privacy
              policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us when you register for an account, create or modify
              your profile, set preferences, sign-up for or make purchases through the Services. This information may
              include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Personal information such as your name, email address, and phone number</li>
              <li>Profile information such as your username, password, and preferences</li>
              <li>Payment information when you make purchases</li>
              <li>Information you provide when you contact us for support</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information We Collect Automatically</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you access our Services, we may automatically collect certain information about your device and usage
              of the Services. This might include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Device information such as your IP address, browser type, and operating system</li>
              <li>Usage information such as pages viewed, time spent on pages, and links clicked</li>
              <li>Location information based on your IP address</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience and provide content and features relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Sharing of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may share the information we collect in various ways, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                With vendors, consultants, and other service providers who need access to such information to carry out
                work on our behalf
              </li>
              <li>
                In response to a request for information if we believe disclosure is in accordance with, or required by,
                any applicable law, regulation, or legal process
              </li>
              <li>
                If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                rights, property, and safety of JCGM Heights or others
              </li>
              <li>
                In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business by another company
              </li>
              <li>With your consent or at your direction</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We store the information we collect about you for as long as is necessary for the purpose(s) for which we
              originally collected it. We may retain certain information for legitimate business purposes or as required
              by law.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
              access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully
              secure or error-free.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request that we update, correct, or delete your personal information</li>
              <li>The right to object to our processing of your personal information</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">To exercise these rights, please contact us at privacy@jcgmheights.com.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Services are not directed to children under 16, and we do not knowingly collect personal information
              from children under 16. If we learn we have collected or received personal information from a child under 16
              without verification of parental consent, we will delete that information.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. If we make material changes, we will notify you by
              email or through the Services prior to the change becoming effective.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have any questions about this privacy policy, please contact us at:</p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                JCGM Heights
                <br />
                Nairobi, Kenya
                <br />
                East Africa
                <br />
                Email: <span className="text-blue-600">privacy@jcgmheights.com</span>
                <br />
                Phone: <span className="text-blue-600">+971 4 123 4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
