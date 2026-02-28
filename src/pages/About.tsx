import { Helmet } from 'react-helmet-async';

export function About() {
  return (
    <>
      <Helmet>
        <title>About - AIToolPeak</title>
        <meta name="description" content="Learn about AIToolPeak - your trusted source for AI tools reviews and comparisons. Our expert team tests and reviews the latest AI coding assistants and tools." />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 py-16 lg:py-24">
        <h1 className="text-4xl font-bold mb-8">About AIToolPeak</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[--text-muted] mb-8">
            Your trusted source for unbiased AI tools reviews and comparisons for developers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-4">
            At AIToolPeak, we believe that finding the right AI tools for your development workflow 
            shouldn't be a guessing game. Our mission is to provide comprehensive, hands-on reviews 
            and comparisons of AI tools to help developers make informed decisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Experience</h2>
          <p className="mb-4">
            Our team has years of hands-on experience using AI tools in real-world development 
            environments. We don't just read documentation—we test each tool extensively in 
            production scenarios:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Building full-stack applications with AI-assisted coding</li>
            <li>Running AI code review in CI/CD pipelines</li>
            <li>Deploying and managing local AI models</li>
            <li>Integrating AI APIs into existing codebases</li>
            <li>Comparing AI tools across multiple programming languages</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Expertise</h2>
          <p className="mb-4">
            Our reviewers come from diverse backgrounds in software engineering, machine learning, 
            and DevOps. We have experience with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>JavaScript/TypeScript, Python, Rust, Go, and more</li>
            <li>Cloud platforms (AWS, GCP, Azure)</li>
            <li>Containerization and orchestration (Docker, Kubernetes)</li>
            <li>LLM fine-tuning and deployment</li>
            <li>Terminal-based AI tools and IDE integrations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Authoritativeness</h2>
          <p className="mb-4">
            AIToolPeak is recognized in the developer community for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Detailed, technical reviews based on actual usage</li>
            <li>Fair comparisons with consistent testing methodologies</li>
            <li>Regular updates as tools evolve</li>
            <li>Transparent methodology and testing criteria</li>
            <li>No paid reviews—we test and report honestly</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Trustworthiness</h2>
          <p className="mb-4">
            We maintain trust through:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Honest pros and cons for every tool we review</li>
            <li>No affiliate links that could bias our recommendations</li>
            <li>Clear disclosure of our testing methodology</li>
            <li>Prompt responses to reader questions and feedback</li>
            <li>Regular updates when tools release major versions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Review Process</h2>
          <p className="mb-4">
            Each tool undergoes rigorous hands-on testing:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Installation & Setup</strong> - We test the installation process on multiple platforms</li>
            <li><strong>Core Functionality</strong> - We use the tool in real development scenarios</li>
            <li><strong>Performance</strong> - We measure response times, resource usage, and accuracy</li>
            <li><strong>Integration</strong> - We test integration with popular IDEs, editors, and workflows</li>
            <li><strong>Pricing</strong> - We analyze cost structures and value for money</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions about our reviews or want to suggest a tool for review? 
            We'd love to hear from you. Visit our <a href="/contact" className="text-[--primary] hover:underline">Contact page</a> to reach out.
          </p>
        </div>
      </div>
    </>
  );
}
