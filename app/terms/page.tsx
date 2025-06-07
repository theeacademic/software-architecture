import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | JCGM Heights",
  description: "JCGM Heights' terms of service and user agreement for staffing and recruitment services",
}

export default function TermsPage() {
  return (
    <div className="container py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: April 18, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to JCGM Heights. Please read these Terms of Service ("Terms") carefully as they contain important
              information about your legal rights, remedies, and obligations. By accessing or using the JCGM Heights
            platform, you agree to comply with and be bound by these Terms.
          </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
            By accessing or using our platform, you agree to these Terms and our Privacy Policy. If you do not agree to
              these Terms, you may not access or use the JCGM Heights platform.
          </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
            We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such as
            by sending an email notification, providing notice through the Services, or updating the "Last Updated" date
            at the beginning of these Terms. Your continued use of the platform following the posting of updated Terms
            will mean you accept those changes.
          </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Platform Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              JCGM Heights is a recruitment and staffing platform that connects job seekers with employers across the Middle East.
              We provide recruitment services, job listings, career resources, and tools to help users find employment
              opportunities and employers find qualified candidates.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed">
            To access certain features of the platform, you must register for an account. When you register, you agree
            to provide accurate, current, and complete information and to update such information to keep it accurate,
            current, and complete. You are responsible for safeguarding your password and for all activities that occur
            under your account.
          </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. User Conduct</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use the platform for any illegal purpose or in violation of any laws</li>
            <li>
              Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory,
              vulgar, obscene, or otherwise objectionable
            </li>
            <li>
                Impersonate any person or entity or falsely state or misrepresent your qualifications, experience, or
                employment history
            </li>
            <li>Interfere with or disrupt the platform or servers or networks connected to the platform</li>
            <li>
              Attempt to gain unauthorized access to any portion of the platform or any other accounts, computer
              systems, or networks connected to the platform
            </li>
            <li>Use any robot, spider, scraper, or other automated means to access the platform for any purpose</li>
            <li>Harvest or collect email addresses or other contact information of other users from the platform</li>
              <li>Submit false or misleading information in job applications or employer listings</li>
          </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The platform and its original content, features, and functionality are owned by JCGM Heights and are protected
            by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary
            rights laws.
          </p>
            <p className="text-gray-700 leading-relaxed">
            You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, or
            transmit any of the material on our platform, or distribute or otherwise use the platform in any way for any
            public or commercial purpose without our express written consent.
          </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">7. User Content</h2>
            <p className="text-gray-700 leading-relaxed">
              You retain all rights in, and are solely responsible for, the content you post to the platform, including
              resumes, job listings, and profile information. By posting content, you grant us a worldwide, non-exclusive,
              royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such
              content in connection with providing the platform and recruitment services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
            The platform may contain links to third-party websites or services that are not owned or controlled by
              JCGM Heights. We have no control over, and assume no responsibility for, the content, privacy policies, or
              practices of any third-party websites or services. You acknowledge and agree that JCGM Heights shall not be
            responsible or liable for any damage or loss caused by or in connection with use of or reliance on any such
            content, goods, or services available on or through any such websites or services.
          </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
            We may terminate or suspend your account and bar access to the platform immediately, without prior notice or
            liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
              limited to a breach of the Terms or violation of our recruitment policies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall JCGM Heights, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential, or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to
              or use of or inability to access or use the platform or any recruitment services provided.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without
              regard to its conflict of law provisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">12. Changes to Platform</h2>
            <p className="text-gray-700 leading-relaxed">
              JCGM Heights reserves the right to modify or discontinue, temporarily or permanently, the platform or any
            features or portions thereof without prior notice.
          </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have any questions about these Terms, please contact us at:</p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                JCGM Heights
                <br />
                Dubai Business Center
            <br />
                Sheikh Zayed Road
            <br />
                Dubai, UAE
            <br />
                Email: <span className="text-blue-600">legal@jcgmheights.com</span>
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
