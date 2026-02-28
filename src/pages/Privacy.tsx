import { SEOHead } from '../components/seo/SEOHead.js';
import { Layout } from '../components/layout/Layout.js';
import { SITE_CONFIG } from '../lib/constants.js';

export function Privacy() {
  const lastUpdated = 'March 1, 2026';

  return (
    <Layout>
      <SEOHead
        title="Privacy Policy"
        description="AIToolPeak's Privacy Policy. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
        noindex={true}
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h1 
              className="text-4xl font-bold mb-4 text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-[--text-muted] mb-8">
              Last Updated: {lastUpdated}
            </p>

            <div className="space-y-8 text-[--text-muted]">
              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Introduction</h2>
                <p className="mb-4">
                  {SITE_CONFIG.name} ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website {SITE_CONFIG.url} (the "Site"). Please read this privacy policy carefully. 
                  If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Information We Collect</h2>
                <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                
                <h3 className="text-xl font-semibold text-[--text] mb-3">Personal Data</h3>
                <p className="mb-4">
                  When you contact us through our contact form, we collect personally identifiable information, such as your:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Any information you choose to provide in your message</li>
                </ul>

                <h3 className="text-xl font-semibold text-[--text] mb-3">Usage Data</h3>
                <p className="mb-4">
                  We may also collect information about how the Site is accessed and used ("Usage Data"). 
                  This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), 
                  browser type, browser version, the pages of our Site that you visit, the time and date of your visit, 
                  the time spent on those pages, unique device identifiers, and other diagnostic data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Google AdSense and Advertising</h2>
                <p className="mb-4">
                  We use Google AdSense to display advertisements on our Site. Google, as a third-party vendor, 
                  uses cookies to serve ads on our Site. Google's use of the DART cookie enables it to serve ads 
                  to our users based on previous visits to our Site and other sites on the Internet.
                </p>

                <h3 className="text-xl font-semibold text-[--text] mb-3">Types of Cookies Used</h3>
                <p className="mb-4">Google uses various types of cookies for advertising purposes:</p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>DoubleClick Cookie:</strong> Google uses the DoubleClick cookie to enable it and its partners 
                    to serve ads to our users based on their visit to our Site and/or other sites on the Internet.
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. 
                    They perform functions like preventing the same ad from continuously reappearing.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website 
                    by collecting and reporting information anonymously.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[--text] mb-3">Data Collection by Google</h3>
                <p className="mb-4">
                  Google may collect information about your visits to this and other websites in order to provide 
                  advertisements about goods and services of interest to you. This information may include:
                </p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Your IP address</li>
                  <li>Browser type and settings</li>
                  <li>Device type and settings</li>
                  <li>Operating system</li>
                  <li>Mobile network information</li>
                  <li>Application version number</li>
                </ul>

                <h3 className="text-xl font-semibold text-[--text] mb-3">Opting Out of Personalized Advertising</h3>
                <p className="mb-4">
                  You can opt out of personalized advertising by visiting <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[--primary] hover:underline"
                  >Google Ads Settings</a>. 
                  You can also opt out of a third-party vendor's use of cookies for personalized advertising by visiting 
                  <a 
                    href="https://www.aboutads.info/choices/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[--primary] hover:underline"
                  >www.aboutads.info</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect in the following ways:</p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website and user experience</li>
                  <li>To display relevant advertisements through Google AdSense</li>
                  <li>To analyze usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Data Security</h2>
                <p className="mb-4">
                  We use administrative, technical, and physical security measures to help protect your personal information. 
                  While we have taken reasonable steps to secure the personal information you provide to us, 
                  please be aware that despite our efforts, no security measures are perfect or impenetrable, 
                  and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Third-Party Websites</h2>
                <p className="mb-4">
                  The Site may contain links to third-party websites and applications of interest, including advertisements 
                  and external services, that are not affiliated with us. Once you have used these links to leave the Site, 
                  any information you provide to these third parties is not covered by this Privacy Policy, 
                  and we cannot guarantee the safety and privacy of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to rectification of inaccurate personal data</li>
                  <li>The right to erasure of your personal data</li>
                  <li>The right to restrict processing of your personal data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your personal data</li>
                </ul>
                
                <p className="mb-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Children's Privacy</h2>
                <p className="mb-4">
                  Our Site is not intended for children under the age of 13. We do not knowingly collect personal 
                  information from children under 13. If you are a parent or guardian and you are aware that your child 
                  has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy. 
                  You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>By email: hello@aitoolpeak.com</li>
                  <li>By visiting the contact page on our website</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
