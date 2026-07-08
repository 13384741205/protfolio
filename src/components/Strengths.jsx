import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Strengths.css';

const STRENGTHS = [
  {
    icon: '◎',
    title: 'Figma & Design Tools',
    desc: 'Proficient in Figma, Sketch, Adobe XD and other mainstream design tools, efficiently handling the full workflow from prototyping to final delivery.',
  },
  {
    icon: '⬡',
    title: 'Responsive Design',
    desc: 'Expert in responsive design and mobile adaptation solutions, ensuring websites display perfectly across all devices.',
  },
  {
    icon: '',
    title: 'Design System',
    desc: 'Extensive experience in building and maintaining design systems with 100+ components and guidelines, boosting team collaboration efficiency by 40%.',
  },
  {
    icon: '◆',
    title: 'UX Design',
    desc: 'Well-versed in UX design principles and interaction design methodologies, with a keen eye for detail and a pursuit of pixel-perfect design.',
  },
  {
    icon: '△',
    title: 'International Experience',
    desc: 'Provided website design and development services for multiple restaurants in Blackpool, UK, with deep understanding of design aesthetics across cultural contexts.',
  },
  {
    icon: '⎔',
    title: 'Cross-team Collaboration',
    desc: 'Works closely with product and development teams, familiar with HTML/CSS fundamentals, ensuring high-quality implementation of design solutions.',
  },
];

export default function Strengths() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading word reveal
      const heading = sectionRef.current?.querySelector('.strengths__heading');
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

      // Cards with stagger + scale
      const cards = sectionRef.current?.querySelectorAll('.strengths__card');
      if (cards) {
        gsap.fromTo(cards, {
          opacity: 0,
          y: 50,
          scale: 0.92,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.strengths__grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Icon pop animation
      gsap.utils.toArray('.strengths__card-icon').forEach((icon, i) => {
        gsap.fromTo(icon, {
          scale: 0,
          rotation: -180,
        }, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: icon,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="strengths" id="strengths">
      <div className="container">
        <div className="strengths__header section-reveal">
          <div className="strengths__section-label">
            <span className="strengths__section-line" />
            Core Strengths
          </div>
          <h2 className="strengths__heading">
            What I bring<br />to the table
          </h2>
        </div>

        <div className="strengths__grid">
          {STRENGTHS.map((s, i) => (
            <div className="strengths__card" key={i}>
              <div className="strengths__card-icon">{s.icon}</div>
              <h3 className="strengths__card-title">{s.title}</h3>
              <p className="strengths__card-desc">{s.desc}</p>
              <div className="strengths__card-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
