import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '10+', label: 'Enterprise Clients' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Heading word-by-word reveal
      const heading = sectionRef.current?.querySelector('.about__heading');
      if (heading) {
        const words = heading.innerHTML.split(/(\s+)/);
        heading.innerHTML = words.map((w, i) => 
          `<span class="word"><span class="word-inner">${w}</span></span>`
        ).join('');
        
        gsap.to(heading.querySelectorAll('.word-inner'), {
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Text paragraphs fade up
      gsap.utils.toArray('.about__text').forEach((el, i) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Stats stagger
      gsap.fromTo('.about__stat', {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__stats',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left — Image */}
          <div className="about__image-col section-reveal">
            <div ref={imageRef} className="about__image-frame parallax-img">
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
            <div className="about__section-label section-reveal">
              <span className="about__section-line" />
              About Me
            </div>
            <h2 className="about__heading">
              Design is not just what it looks like — it's how it <em>works</em>.
            </h2>
            <p className="about__text">
              拥有5年以上UI设计经验的专业设计师，精通Figma设计工具，擅长网站界面设计与用户体验优化。
              曾在国内多家中小型科技企业担任UI设计师，主导完成多个B端、C端网站项目。
            </p>
            <p className="about__text">
              具备国际化项目经验，曾为英国Blackpool多家风格餐厅提供网站设计与搭建服务，
              熟悉不同文化背景下的设计审美与用户需求。注重设计细节，追求像素级完美，
              善于将品牌理念融入视觉设计，打造兼具美感与实用性的数字产品。
            </p>

            {/* Stats */}
            <div className="about__stats">
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
