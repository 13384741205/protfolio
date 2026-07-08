import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-particles-in-dark-space-9847/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          UI Designer &nbsp;·&nbsp; Visual Designer &nbsp;·&nbsp; Web Designer &nbsp;·&nbsp; Brand Designer
        </div>
        <h1 className="hero__title">
          Crafting <em>Digital</em><br />
          Experiences That<br />
          <span className="hero__title-accent">Resonate</span>
        </h1>
        <p className="hero__subtitle">
          5年以上UI设计经验，专注于网站界面设计与用户体验优化。曾为英国Blackpool多家餐厅及国内企业打造兼具美感与实用性的数字产品，追求像素级完美。
        </p>
        <div className="hero__actions">
          <a href="#work" className="hero__btn hero__btn--primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">Contact Me</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
