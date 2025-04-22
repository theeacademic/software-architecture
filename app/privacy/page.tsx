import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | ArtBunifu",
  description: "ArtBunifu's privacy policy and data protection practices",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 18, 2023</p>

        <div className="prose prose-lg max-w-none">
          <p>
            At ArtBunifu, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our services. Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you register for an account, create or modify
            your profile, set preferences, sign-up for or make purchases through the Services. This information may
            include:
          </p>
          <ul>
            <li>Personal information such as your name, email address, and phone number</li>
            <li>Profile information such as your username, password, and preferences</li>
            <li>Payment information when you make purchases</li>
            <li>Information you provide when you contact us for support</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h2>Information We Collect Automatically</h2>
          <p>
            When you access our Services, we may automatically collect certain information about your device and usage
            of the Services. This might include:
          </p>
          <ul>
            <li>Device information such as your IP address, browser type, and operating system</li>
            <li>Usage information such as pages viewed, time spent on pages, and links clicked</li>
            <li>Location information based on your IP address</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our Services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Personalize your experience and provide content and features relevant to your interests</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>We may share the information we collect in various ways, including:</p>
          <ul>
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
              rights, property, and safety of ArtBunifu or others
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company
            </li>
            <li>With your consent or at your direction</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We store the information we collect about you for as long as is necessary for the purpose(s) for which we
            originally collected it. We may retain certain information for legitimate business purposes or as required
            by law.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
            access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully
            secure or error-free.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
          <ul>
            <li>The right to access personal information we hold about you</li>
            <li>The right to request that we update, correct, or delete your personal information</li>
            <li>The right to object to our processing of your personal information</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>To exercise these rights, please contact us at privacy@artbunifu.com.</p>

          <h2>Children's Privacy</h2>
          <p>
            Our Services are not directed to children under 16, and we do not knowingly collect personal information
            from children under 16. If we learn we have collected or received personal information from a child under 16
            without verification of parental consent, we will delete that information.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. If we make material changes, we will notify you by
            email or through the Services prior to the change becoming effective.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us at:</p>
          <p>
            ArtBunifu
            <br />
            123 Art Street
            <br />
            San Francisco, CA 94103
            <br />
            Email: privacy@artbunifu.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  )
}
