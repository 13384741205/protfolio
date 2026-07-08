import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Strengths.css';

const STRENGTHS = [
  {
    icon: '◎',
    title: 'Figma & Design Tools',
    desc: '精通Figma、Sketch、Adobe XD等主流设计工具，高效完成从原型到交付的全流程设计工作。',
  },
  {
    icon: '⬡',
    title: '响应式设计',
    desc: '精通响应式设计与移动端适配方案，确保网站在各种设备上都能完美展示。',
  },
  {
    icon: '',
    title: '设计系统构建',
    desc: '具备完整的设计系统构建与维护经验，包含100+组件与规范，提升团队协作效率40%。',
  },
  {
    icon: '◆',
    title: '用户体验设计',
    desc: '熟悉用户体验设计原则与交互设计方法论，注重设计细节，追求像素级完美。',
  },
  {
    icon: '△',
    title: '国际化项目经验',
    desc: '曾为英国Blackpool多家餐厅提供网站设计与搭建服务，熟悉不同文化背景下的设计审美。',
  },
  {
    icon: '⎔',
    title: '跨团队协作',
    desc: '与产品、开发团队紧密配合，熟悉HTML/CSS基础，确保设计方案的高质量落地。',
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
