import Link from "next/link";
import { AboutNavigation } from "@/components/sections/AboutNavigation";

export const metadata = {
  title: "Privacy Policy - New Cohorts | Cookie Policy & Data Protection",
  description: "Learn how New Cohorts protects your privacy, handles cookies, and processes your data in compliance with GDPR and EU privacy regulations.",
  keywords: [
    "privacy policy",
    "cookie policy",
    "GDPR compliance",
    "data protection",
    "New Cohorts privacy",
  ],
  openGraph: {
    title: "Privacy Policy - New Cohorts",
    description: "Learn how New Cohorts protects your privacy and handles your data.",
    url: "https://newcohorts.com/privacy",
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AboutNavigation />
      <main className="pt-16">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', lineHeight: '1.6', color: '#fff' }}>
          <h1 style={{ color: '#fff', marginBottom: '20px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}><em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Introduction</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
            New Cohorts ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website newcohorts.com.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              We are based in Amsterdam, Netherlands, and comply with the General Data Protection Regulation (GDPR) and the ePrivacy Directive.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Information We Collect</h2>
            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2em' }}>Information You Provide</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>When you interact with our website, you may provide us with:</p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
              <li>Contact information (name, email address)</li>
              <li>Registration information for cohort programs</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 style={{ color: '#fff', marginBottom: '10px', marginTop: '20px', fontSize: '1.2em' }}>Automatically Collected Information</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages you visit and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Cookies and Tracking Technologies</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device.
            </p>

            <h3 style={{ color: '#fff', marginBottom: '10px', marginTop: '20px', fontSize: '1.2em' }}>Types of Cookies We Use</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: '#fff', marginBottom: '8px' }}>Strictly Necessary Cookies</h4>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. These cookies cannot be disabled.
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: '#fff', marginBottom: '8px' }}>Analytics Cookies</h4>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>We use Google Analytics to understand how visitors interact with our website. These cookies help us:</p>
              <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
                <li>Understand how many visitors we receive</li>
                <li>Analyze which pages are most popular</li>
                <li>Improve our website's performance and user experience</li>
              </ul>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}><strong>Google Analytics ID:</strong> G-56C4LSSHES</p>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                These cookies are only set if you consent to their use. You can accept or reject analytics cookies when you first visit our website.
              </p>
            </div>

            <h3 style={{ color: '#fff', marginBottom: '10px', marginTop: '20px', fontSize: '1.2em' }}>Managing Cookies</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>You can control and manage cookies in several ways:</p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
              <li>Use the cookie consent banner when you first visit our website</li>
              <li>Clear your browser's cookies and revisit our site to change your preferences</li>
              <li>Configure your browser settings to refuse cookies (note: this may affect website functionality)</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>How We Use Your Information</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>We use the information we collect to:</p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
              <li>Provide, operate, and maintain our website</li>
              <li>Process your registrations and manage cohort programs</li>
              <li>Send you updates about your cohort program</li>
              <li>Improve our website and user experience</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Data Sharing and Disclosure</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
              <li>With service providers who assist us in operating our website (e.g., Google Analytics, payment processors)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Your Rights Under GDPR</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              If you are located in the European Economic Area (EEA), you have certain data protection rights:
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
              <li><strong>Right to access:</strong> You can request copies of your personal data</li>
              <li><strong>Right to rectification:</strong> You can request correction of inaccurate data</li>
              <li><strong>Right to erasure:</strong> You can request deletion of your personal data</li>
              <li><strong>Right to restrict processing:</strong> You can request limitation of data processing</li>
              <li><strong>Right to data portability:</strong> You can request transfer of your data</li>
              <li><strong>Right to object:</strong> You can object to processing of your personal data</li>
              <li><strong>Right to withdraw consent:</strong> You can withdraw consent at any time</li>
            </ul>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              To exercise these rights, please contact us at: <a href="mailto:privacy@newcohorts.com" style={{ color: '#fff', textDecoration: 'underline' }}>privacy@newcohorts.com</a>
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Data Security</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Data Retention</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Children's Privacy</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Changes to This Privacy Policy</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', marginBottom: '15px' }}>Contact Us</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              <strong>Email:</strong> <a href="mailto:privacy@newcohorts.com" style={{ color: '#fff', textDecoration: 'underline' }}>privacy@newcohorts.com</a>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              <strong>Address:</strong> Amsterdam, Netherlands
            </p>
          </section>

          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <Link href="/" style={{ color: '#fff' }}>← Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
