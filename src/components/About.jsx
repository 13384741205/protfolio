import './About.css';

const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '10+', label: 'Enterprise Clients' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left — Image */}
          <div className="about__image-col reveal">
            <div className="about__image-frame">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Portrait"
                className="about__image"
              />
              <div className="about__image-border" />
            </div>
            <div className="about__contact-card">
              <div className="about__contact-row">
                <span className="about__contact-label">Email</span>
                <span className="about__contact-value">1031381876@qq.com</span>
              </div>
              <div className="about__contact-row">
                <span className="about__contact-label">Location</span>
                <span className="about__contact-value">Blackpool, UK / China</span>
              </div>
              <div className="about__contact-row">
                <span className="about__contact-label">Availability</span>
                <span className="about__contact-value about__contact-value--available">Open for Projects</span>
              </div>
            </div>
          </div>

          {/* Right — Info */}
          <div className="about__info-col">
            <div className="about__section-label reveal">
              <span className="about__section-line" />
              About Me
            </div>
            <h2 className="about__heading reveal">
              Design is not just what it looks like — it's how it <em>works</em>.
            </h2>
            <p className="about__text reveal">
              拥有5年以上UI设计经验的专业设计师，精通Figma设计工具，擅长网站界面设计与用户体验优化。
              曾在国内多家中小型科技企业担任UI设计师，主导完成多个B端、C端网站项目。
            </p>
            <p className="about__text reveal">
              具备国际化项目经验，曾为英国Blackpool多家风格餐厅提供网站设计与搭建服务，
              熟悉不同文化背景下的设计审美与用户需求。注重设计细节，追求像素级完美，
              善于将品牌理念融入视觉设计，打造兼具美感与实用性的数字产品。
            </p>

            {/* Stats */}
            <div className="about__stats reveal">
              {STATS.map((s, i) => (
                <div key={i} className="about__stat">
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
