import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | ArtBunifu",
  description: "ArtBunifu's terms of service and user agreement",
}

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 18, 2023</p>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to ArtBunifu. Please read these Terms of Service ("Terms") carefully as they contain important
            information about your legal rights, remedies, and obligations. By accessing or using the ArtBunifu
            platform, you agree to comply with and be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our platform, you agree to these Terms and our Privacy Policy. If you do not agree to
            these Terms, you may not access or use the ArtBunifu platform.
          </p>

          <h2>2. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such as
            by sending an email notification, providing notice through the Services, or updating the "Last Updated" date
            at the beginning of these Terms. Your continued use of the platform following the posting of updated Terms
            will mean you accept those changes.
          </p>

          <h2>3. Platform Overview</h2>
          <p>
            ArtBunifu is a platform that connects art lovers with galleries and artists worldwide. We provide
            information about art galleries, exhibitions, artworks, and artists, as well as tools to help users discover
            and engage with art.
          </p>

          <h2>4. Account Registration</h2>
          <p>
            To access certain features of the platform, you must register for an account. When you register, you agree
            to provide accurate, current, and complete information and to update such information to keep it accurate,
            current, and complete. You are responsible for safeguarding your password and for all activities that occur
            under your account.
          </p>

          <h2>5. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the platform for any illegal purpose or in violation of any laws</li>
            <li>
              Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory,
              vulgar, obscene, or otherwise objectionable
            </li>
            <li>
              Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity
            </li>
            <li>Interfere with or disrupt the platform or servers or networks connected to the platform</li>
            <li>
              Attempt to gain unauthorized access to any portion of the platform or any other accounts, computer
              systems, or networks connected to the platform
            </li>
            <li>Use any robot, spider, scraper, or other automated means to access the platform for any purpose</li>
            <li>Harvest or collect email addresses or other contact information of other users from the platform</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            The platform and its original content, features, and functionality are owned by ArtBunifu and are protected
            by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary
            rights laws.
          </p>
          <p>
            You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, or
            transmit any of the material on our platform, or distribute or otherwise use the platform in any way for any
            public or commercial purpose without our express written consent.
          </p>

          <h2>7. User Content</h2>
          <p>
            You retain all rights in, and are solely responsible for, the content you post to the platform. By posting
            content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt,
            publish, translate, distribute, and display such content in connection with providing the platform.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            The platform may contain links to third-party websites or services that are not owned or controlled by
            ArtBunifu. We have no control over, and assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services. You acknowledge and agree that ArtBunifu shall not be
            responsible or liable for any damage or loss caused by or in connection with use of or reliance on any such
            content, goods, or services available on or through any such websites or services.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the platform immediately, without prior notice or
            liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
            limited to a breach of the Terms.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            In no event shall ArtBunifu, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential, or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to
            or use of or inability to access or use the platform.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of California, United
            States, without regard to its conflict of law provisions.
          </p>

          <h2>12. Changes to Platform</h2>
          <p>
            ArtBunifu reserves the right to modify or discontinue, temporarily or permanently, the platform or any
            features or portions thereof without prior notice.
          </p>

          <h2>13. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            ArtBunifu
            <br />
            123 Art Street
            <br />
            San Francisco, CA 94103
            <br />
            Email: legal@artbunifu.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  )
}
