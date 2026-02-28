export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover the Best
            <span className="hero-gradient"> AI Tools</span>
            <br />
            for Developers
          </h1>
          <p className="hero-description">
            In-depth reviews, hands-on comparisons, and expert insights on AI coding assistants,
            models, and DevOps tools. Make informed decisions with our comprehensive guides.
          </p>
          <div className="hero-cta">
            <a href="/blog" className="hero-button">
              Explore AI Tools
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
