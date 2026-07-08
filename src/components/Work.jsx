import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Work.css';

const PROJECTS = [
  {
    title: 'The Seasider 海鲜餐厅',
    category: '网站UI设计 · Blackpool',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80',
    color: '#1a2a3a',
  },
  {
    title: 'Blackpool Grill 牛排馆',
    category: '网站UI设计 · Blackpool',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
    color: '#2a1a1a',
  },
  {
    title: '智能办公管理系统',
    category: 'UI设计 · B端系统',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e30f2e?w=1200&q=80',
    color: '#1a1a2e',
  },
  {
    title: 'Pleasure Beach Café',
    category: '网站UI设计 · Blackpool',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80',
    color: '#2a2a1a',
  },
  {
    title: '电商平台网站改版',
    category: 'UI设计 · 电商平台',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    color: '#1b2a1a',
  },
  {
    title: 'Italiano 意大利餐厅',
    category: '网站UI设计 · Blackpool',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    color: '#2a1a2a',
  },
];

export default function Work() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      const heading = sectionRef.current?.querySelector('.work__heading');
      if (heading) {
        const words = heading.innerHTML.split(/(\s+)/);
        heading.innerHTML = words.map((w) => 
          `<span class="word"><span class="word-inner">${w}</span></span>`
        ).join('');
        
        gsap.to(heading.querySelectorAll('.word-inner'), {
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Cards with 3D tilt on scroll
      const cards = sectionRef.current?.querySelectorAll('.work__card');
      if (cards) {
        gsap.fromTo(cards, {
          opacity: 0,
          y: 80,
          rotateX: 8,
        }, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.12,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.work__grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Image parallax inside cards
      gsap.utils.toArray('.work__card-image').forEach((img) => {
        gsap.to(img, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.work__card-image-wrap'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="work" id="work">
      <div className="container">
        <div className="work__header section-reveal">
          <div className="work__section-label">
            <span className="work__section-line" />
            Selected Work
          </div>
          <h2 className="work__heading">
            Projects that define<br />my design philosophy
          </h2>
        </div>

        <div className="work__grid">
          {PROJECTS.map((p, i) => (
            <div className="work__card" key={i}>
              <div className="work__card-image-wrap" style={{ background: p.color }}>
                <img src={p.image} alt={p.title} className="work__card-image" />
                <div className="work__card-overlay">
                  <span className="work__card-view">View Project →</span>
                </div>
              </div>
              <div className="work__card-info">
                <div className="work__card-meta">
                  <span className="work__card-category">{p.category}</span>
                  <span className="work__card-year">{p.year}</span>
                </div>
                <h3 className="work__card-title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
