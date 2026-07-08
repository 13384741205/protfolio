import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading clip reveal
      const heading = sectionRef.current?.querySelector('.contact__heading');
      if (heading) {
        gsap.fromTo(heading, {
          opacity: 0,
          y: 80,
          clipPath: 'inset(0 0 100% 0)',
        }, {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Stagger links
      gsap.fromTo('.contact__link', {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact__links',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });

      // Button magnetic hover
      const btn = sectionRef.current?.querySelector('.contact__btn');
      if (btn) {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="contact" id="contact">
      <div className="contact__bg-glow" />
      <div className="container contact__inner">
        <div className="contact__section-label section-reveal">
          <span className="contact__section-line" />
          Get in Touch
        </div>
        <h2 className="contact__heading">
          Let's create<br />something <em>remarkable</em>
        </h2>
        <p className="contact__text section-reveal">
          Have a project in mind or want to join the team? Feel free to reach out — let's create something remarkable together.
        </p>
        <div className="contact__actions section-reveal">
          <a href="mailto:1031381876@qq.com" className="contact__btn">
            <span>Say Hello</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="contact__links">
          <a href="mailto:1031381876@qq.com" className="contact__link magnetic">Email</a>
          <a href="#" className="contact__link magnetic">Dribbble</a>
          <a href="#" className="contact__link magnetic">Behance</a>
          <a href="#" className="contact__link magnetic">LinkedIn</a>
        </div>
        <div className="contact__footer section-reveal">
          <span>© 2025 UI Designer. All rights reserved.</span>
          <span>Built with precision & care.</span>
        </div>
      </div>
    </section>
  );
}
