import { SEOHead } from '../components/seo/SEOHead.js';
import { Layout } from '../components/layout/Layout.js';
import { SITE_CONFIG } from '../lib/constants.js';

export function Terms() {
  const lastUpdated = 'March 1, 2026';

  return (
    <Layout>
      <SEOHead
        title="Terms of Service"
        description="AIToolPeak's Terms of Service. Please read these terms carefully before using our website."
        canonical="/terms"
        noindex={true}
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h1 
              className="text-4xl font-bold mb-4 text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Terms of Service
            </h1>
            <p className="text-[--text-muted] mb-8">
              Last Updated: {lastUpdated}
            </p>

            <div className="space-y-8 text-[--text-muted]">
              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing or using {SITE_CONFIG.name} (the "Site"), you agree to be bound by these Terms of Service 
                  ("Terms"). If you disagree with any part of the terms, you may not access the Site.
                </p>
                
                <p className="mb-4">
                  These Terms apply to all visitors, users, and others who access or use the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Intellectual Property Rights</h2>
                <p className="mb-4">
                  The Site and its original content, features, and functionality are and will remain the exclusive property 
                  of {SITE_CONFIG.name} and its licensors. The Site is protected by copyright, trademark, and other laws 
                  of both the United States and foreign countries. Our trademarks and trade dress may not be used in 
                  connection with any product or service without the prior written consent of {SITE_CONFIG.name}.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">User Representations</h2>
                <p className="mb-4">By using the Site, you represent and warrant that:</p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>All registration information you submit will be true, accurate, current, and complete</li>
                  <li>You will maintain the accuracy of such information and promptly update it as necessary</li>
                  <li>You have the legal capacity and agree to comply with these Terms</li>
                  <li>You are not a minor in the jurisdiction in which you reside</li>
                  <li>You will not access the Site through automated or non-human means</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Prohibited Activities</h2>
                <p className="mb-4">You may not access or use the Site for any purpose other than that for which we make the Site available. 
                The Site may not be used in connection with any commercial endeavors except those that are specifically 
                endorsed or approved by us.</p>
                
                <p className="mb-4">As a user of the Site, you agree not to:</p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Systematically retrieve data or other content from the Site to create or compile a collection, compilation, database, or directory</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
                  <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site</li>
                  <li>Use any information obtained from the Site in order to harass, abuse, or harm another person</li>
                  <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
                  <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
                  <li>Engage in unauthorized framing of or linking to the Site</li>
                  <li>Upload or transmit (or attempt to upload or transmit) viruses, Trojan horses, or other material that interferes with any party's uninterrupted use of the Site</li>
                  <li>Engage in any automated use of the system, such as using scripts to send comments or messages</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">User Generated Contributions</h2>
                <p className="mb-4">
                  The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, 
                  and other functionality, and may provide you with the opportunity to create, submit, post, display, 
                  transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site.
                </p>
                
                <p className="mb-4">By posting your Contributions to any part of the Site, you automatically grant, and you represent and warrant 
                that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, 
                transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, 
                sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, 
                translate, transmit, excerpt (in whole or in part), and distribute such Contributions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Submissions</h2>
                <p className="mb-4">
                  You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information 
                  regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. 
                  We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the 
                  unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, 
                  without acknowledgment or compensation to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Third-Party Websites and Content</h2>
                <p className="mb-4">
                  The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") 
                  as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, 
                  applications, software, and other content or items belonging to or originating from third parties 
                  ("Third-Party Content").
                </p>
                
                <p className="mb-4">
                  Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, 
                  appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed 
                  through the Site or any Third-Party Content posted on, available through, or installed from the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Site Management</h2>
                <p className="mb-4">We reserve the right, but not the obligation, to:</p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Monitor the Site for violations of these Terms</li>
                  <li>Take appropriate legal action against anyone who violates the law or these Terms</li>
                  <li>Refuse, restrict access to, limit the availability of, or disable any of your Contributions</li>
                  <li>Remove from the Site or otherwise disable all files and content that are excessive in size</li>
                  <li>Manage the Site in a manner designed to protect our rights and property</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Privacy Policy</h2>
                <p className="mb-4">
                  We care about data privacy and security. Please review our <a href="/privacy" className="text-[--primary] hover:underline">Privacy Policy</a>. 
                  By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Term and Termination</h2>
                <p className="mb-4">
                  These Terms shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION 
                  OF THESE TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS 
                  TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, 
                  INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS 
                  OR OF ANY APPLICABLE LAW OR REGULATION.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Modifications and Interruptions</h2>
                <p className="mb-4">
                  We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason 
                  at our sole discretion without notice. However, we have no obligation to update any information on our Site. 
                  We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
                </p>
                
                <p className="mb-4">
                  We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other 
                  problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. 
                  We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and defined following the laws of the United States. 
                  {SITE_CONFIG.name} and yourself irrevocably consent that the courts of the United States shall have 
                  exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Disclaimer</h2>
                <p className="mb-4">
                  THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES 
                  WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, 
                  IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Limitations of Liability</h2>
                <p className="mb-4">
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, 
                  INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, 
                  LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Contact Us</h2>
                <p className="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                
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
