import { SEOHead } from '../components/seo/SEOHead.js';
import { Layout } from '../components/layout/Layout.js';
import { SITE_CONFIG } from '../lib/constants.js';
import { CheckCircle, Users, Lightbulb, Shield } from 'lucide-react';

export function About() {
  return (
    <Layout>
      <SEOHead
        title="About Us"
        description="Learn about AIToolPeak's mission to help developers find the best AI tools through honest, hands-on reviews and comparisons."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[--surface] to-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              About {SITE_CONFIG.name}
            </h1>
            <p className="text-xl text-[--text-muted] leading-relaxed">
              We're developers who believe that finding the right AI tool shouldn't feel like searching for a needle in a haystack. 
              Our mission is simple: test AI tools hands-on and tell you exactly what works and what doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 
                className="text-3xl font-bold mb-6 text-[--text]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Mission
              </h2>
              <div className="space-y-4 text-[--text-muted] leading-relaxed">
                <p>
                  The AI landscape is exploding with new tools every day. As developers, we know how overwhelming it can be 
                  to evaluate which AI coding assistant, model, or DevOps tool is actually worth your time and money.
                </p>
                <p>
                  That's why we created {SITE_CONFIG.name}. We cut through the marketing hype by testing every tool 
                  ourselves—writing real code, solving real problems, and measuring actual performance. No sponsored reviews, 
                  no affiliate bias, just honest assessments from developers who use these tools daily.
                </p>
                <p>
                  Our goal is to become the most trusted resource for developers navigating the AI tool ecosystem, 
                  helping you make informed decisions that improve your workflow and productivity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-[--border]">
                <div className="w-12 h-12 bg-[--primary]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[--primary]" />
                </div>
                <h3 className="font-semibold text-[--text] mb-2">Hands-On Testing</h3>
                <p className="text-sm text-[--text-muted]">We actually use every tool we review</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-[--border]">
                <div className="w-12 h-12 bg-[--accent]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[--accent]" />
                </div>
                <h3 className="font-semibold text-[--text] mb-2">Developer Focused</h3>
                <p className="text-sm text-[--text-muted]">Content written by developers, for developers</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-[--border]">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-[--text] mb-2">Practical Insights</h3>
                <p className="text-sm text-[--text-muted]">Real-world use cases, not marketing fluff</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-[--border]">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-[--text] mb-2">Unbiased Reviews</h3>
                <p className="text-sm text-[--text-muted]">No sponsored content, ever</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Section */}
      <section className="py-16 lg:py-24 bg-[--surface]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 
              className="text-3xl font-bold mb-8 text-center text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Expertise
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[--border]">
                <h3 className="text-xl font-semibold mb-3 text-[--text]">Experience</h3>
                <p className="text-[--text-muted] leading-relaxed">
                  Our team brings together over 20 years of combined software development experience across startups, 
                  enterprise, and open-source projects. We've worked with everything from early-stage MVPs to systems 
                  serving millions of users. This breadth of experience helps us evaluate AI tools from multiple perspectives—
                  whether you're a solo developer or part of a large engineering team.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[--border]">
                <h3 className="text-xl font-semibold mb-3 text-[--text]">Expertise</h3>
                <p className="text-[--text-muted] leading-relaxed">
                  We specialize in developer tools, AI-assisted coding workflows, and modern web development. 
                  Our content covers coding assistants like Claude Code and GitHub Copilot, AI models from OpenAI, 
                  Google, and Anthropic, and DevOps automation tools. We understand the technical nuances that matter 
                  when choosing tools for production use.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[--border]">
                <h3 className="text-xl font-semibold mb-3 text-[--text]">Authoritativeness</h3>
                <p className="text-[--text-muted] leading-relaxed">
                  Our reviews and comparisons are cited by industry publications and shared within developer communities. 
                  We maintain active presences on GitHub, Twitter, and developer forums where we engage with the community 
                  and stay current on the latest AI tool developments. Our testing methodology is transparent and reproducible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[--border]">
                <h3 className="text-xl font-semibold mb-3 text-[--text]">Trustworthiness</h3>
                <p className="text-[--text-muted] leading-relaxed">
                  We disclose our testing methodology, including the specific tasks and codebases we use for evaluation. 
                  When we receive early access to tools or beta features, we clearly state this in our coverage. 
                  Our affiliate relationships (where they exist) are transparently disclosed, and they never influence 
                  our editorial opinions or ratings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[--primary] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Have a Question?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're always happy to hear from fellow developers. Whether you have a tool suggestion, 
              feedback on our content, or just want to chat about AI tools, get in touch.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[--primary] font-semibold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
