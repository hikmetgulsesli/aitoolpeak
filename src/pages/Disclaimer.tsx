import { SEOHead } from '../components/seo/SEOHead.js';
import { Layout } from '../components/layout/Layout.js';
import { SITE_CONFIG } from '../lib/constants.js';

export function Disclaimer() {
  const lastUpdated = 'March 1, 2026';

  return (
    <Layout>
      <SEOHead
        title="Disclaimer"
        description="AIToolPeak's Disclaimer and Affiliate Disclosure. Important information about our content and relationships."
        canonical="/disclaimer"
        noindex={true}
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h1 
              className="text-4xl font-bold mb-4 text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Disclaimer
            </h1>
            <p className="text-[--text-muted] mb-8">
              Last Updated: {lastUpdated}
            </p>

            <div className="space-y-8 text-[--text-muted]">
              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Content Accuracy</h2>
                <p className="mb-4">
                  The information provided on {SITE_CONFIG.name} (the "Site") is for general informational purposes only. 
                  While we strive to keep the information up to date and accurate, we make no representations or warranties 
                  of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
                  with respect to the Site or the information, products, services, or related graphics contained on the Site 
                  for any purpose.
                </p>
                
                <p className="mb-4">
                  Any reliance you place on such information is therefore strictly at your own risk. In no event will we be 
                  liable for any loss or damage including without limitation, indirect or consequential loss or damage, 
                  or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, 
                  the use of this Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">AI Tool Reviews and Opinions</h2>
                <p className="mb-4">
                  The reviews, opinions, and recommendations expressed on this Site are based on our own testing, research, 
                  and experience. However, AI tools and technologies evolve rapidly, and features, pricing, and performance 
                  characteristics may change over time.
                </p>
                
                <p className="mb-4"><strong>Important considerations:</strong></p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Our reviews reflect our experience at the time of testing and may not represent the current state of a product</li>
                  <li>Individual experiences with AI tools may vary based on use case, technical setup, and personal preferences</li>
                  <li>We recommend conducting your own evaluation before making significant investments in any tool</li>
                  <li>Pricing and feature information should be verified on the official vendor websites</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Affiliate Disclosure</h2>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                  <p className="text-amber-800 font-medium mb-2">FTC Disclosure Statement</p>
                  <p className="text-amber-700 text-sm">
                    {SITE_CONFIG.name} is a participant in various affiliate advertising programs designed to provide 
                    a means for sites to earn advertising fees by advertising and linking to partner websites. 
                    This means that when you click on certain links on our Site and make a purchase, 
                    we may receive a commission at no additional cost to you.
                  </p>
                </div>

                <p className="mb-4"><strong>Our affiliate relationships include but are not limited to:</strong></p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>AI tool and software vendors</li>
                  <li>Cloud service providers</li>
                  <li>Developer tool companies</li>
                  <li>Educational platforms</li>
                </ul>

                <p className="mb-4"><strong>Our commitment to transparency:</strong></p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>We only recommend products and services we genuinely believe will provide value to our readers</li>
                  <li>Affiliate relationships never influence our editorial opinions or ratings</li>
                  <li>We clearly disclose affiliate links where required</li>
                  <li>Our reviews and recommendations are based on hands-on testing, not commission rates</li>
                  <li>We regularly review and update our content to ensure accuracy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">External Links</h2>
                
                <p className="mb-4">
                  Through this Site, you may be able to link to other websites which are not under our control. 
                  We have no control over the nature, content, and availability of those sites. The inclusion of 
                  any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
                
                <p className="mb-4">
                  We make every effort to keep external links up to date and working. However, {SITE_CONFIG.name} 
                  takes no responsibility for, and will not be liable for, the website being temporarily unavailable 
                  due to technical issues beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Professional Advice</h2>
                
                <p className="mb-4">
                  The content on this Site is not intended to be a substitute for professional advice. 
                  Always seek the advice of qualified professionals regarding:
                </p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Technical implementation decisions</li>
                  <li>Security and compliance matters</li>
                  <li>Legal or financial considerations</li>
                  <li>Business-critical technology choices</li>
                </ul>
                
                <p className="mb-4">
                  Never disregard professional advice or delay in seeking it because of something you have read on this Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Testimonials and Results</h2>
                
                <p className="mb-4">
                  Any testimonials or examples of results presented on this Site are not typical and your results will vary 
                  based on a variety of factors. We make no guarantees that you will achieve any specific results through 
                  the use of the tools, techniques, or strategies discussed on this Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Changes to This Disclaimer</h2>
                
                <p className="mb-4">
                  We may update this disclaimer from time to time. We will notify you of any changes by posting the new 
                  disclaimer on this page and updating the "Last Updated" date. You are advised to review this disclaimer 
                  periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[--text] mb-4">Contact Us</h2>
                
                <p className="mb-4">If you have any questions about this disclaimer, please contact us:</p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>By email: hello@aitoolpeak.com</li>
                  <li>By visiting our <a href="/contact" className="text-[--primary] hover:underline">contact page</a></li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
